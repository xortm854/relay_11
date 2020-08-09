import { AWSError, Comprehend, config } from 'aws-sdk';

const awsConfig = config.loadFromPath('./aws.config.json');
const comprehend = new Comprehend(awsConfig);

class ComprehendEntityTag {
    score: number;
    text: string;
    constructor(text: string, score: number) {
        this.text = text;
        this.score = score;
    }
    static comparator = (a: ComprehendEntityTag, b: ComprehendEntityTag) => b.score - a.score;
}

export const getTags = (text: string) => {
    const params: Comprehend.DetectEntitiesRequest = {
        Text: text,
        LanguageCode: "ko"
    }

    return new Promise((resolve, reject) => {
        comprehend.detectEntities(params, (err: AWSError, data: Comprehend.DetectEntitiesResponse) => {
            if (err) {
                reject(err);
            };
            if (!data.Entities) {
                resolve([]);
                return;
            }
            const highScoreTags = data.Entities
                .reduce((tags: ComprehendEntityTag[], data) => {
                    if (!data.Score || !data.Type || !data.Text) return tags;
                    const condition =
                        data.Score > 0.5 &&
                        ["PERSON", "LOCATION", "ORGANIZATION"].includes(data.Type);
                    if (condition) tags.push(new ComprehendEntityTag(data.Text, data.Score));
                    return tags;
                }, [])
                .sort(ComprehendEntityTag.comparator)
                .map((tagScore) => tagScore.text);
            resolve(highScoreTags);
        });
    });
};