import Router from 'koa-router';
import * as postService from '../application';

const router = new Router();

router.post('/', async (ctx, next) => {
    const body = ctx.request.body;
    try {
        await postService.register(body);
        ctx.status = 201;
        ctx.body = '등록되었습니다.';
    } catch (err) {
        ctx.throw(400, err.message);
    }
});

export default router;