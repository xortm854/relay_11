import { Post } from '../model/post';
import PostRequest from '../dto/post-request';
import { checkSlang } from '../../../external-api/chk';

const savePost = (postRequest: PostRequest) => {
    const post = new Post();
    post.title = postRequest.title;
    post.content = postRequest.content;
    post.writer = postRequest.writer;
    post.password = postRequest.password;
    post.save();
}

export const register = async (postRequest: PostRequest) => {
    const resultSlangFilter = await checkSlang(postRequest.content);
    if (resultSlangFilter === "욕") throw new Error('비속어가 포함되어 있습니다.');
    //이후 주요 단어 추출하는 api가 연동된다면 savePost를 호출하기 전에 실행될 수 있도록 추가해주세요.
    savePost(postRequest);
}
