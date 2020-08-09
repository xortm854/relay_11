import { Post } from '../model/post';
import PostRequest from '../dto/post-request';
import { filterSlang } from '../../../external-api/chk';
import { getTags } from '../../../external-api/aws/comprehend'

const savePost = (postRequest: PostRequest) => {
    const post = new Post();
    post.title = postRequest.title;
    post.content = postRequest.content;
    post.writer = postRequest.writer;
    post.password = postRequest.password;
    post.save();
}

export const register = async (postRequest: PostRequest) => {
    const [resultSlangFilter, tags] = await Promise.all([filterSlang(postRequest.content), getTags(postRequest.content)]);
    console.log('비속어 필터링 결과: ', resultSlangFilter);
    console.log('추출된 태그: ', tags);
    if (resultSlangFilter === "욕") throw new Error('비속어가 포함되어 있습니다.');
    savePost(postRequest);
}
