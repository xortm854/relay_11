import Router from 'koa-router';
import postApi from './domain/post/api';

/**
 * 모든 도메인 api를 통합하는 Router 모듈입니다.
 * 아래 router.use('/posts', postApi.routes()); 같이 
 * 등록하고자 하는 api route 모듈을 등록해주시면 됩니다.
 */

const router = new Router();

router.use('/posts', postApi.routes());

export default router;