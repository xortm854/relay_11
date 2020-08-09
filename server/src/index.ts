import Koa from "koa";
import bodyParser from "koa-bodyparser";
import "reflect-metadata";
import { createConnection } from "typeorm";
import router from './router';

const main = async function () {
    const app = new Koa();

    app.use(bodyParser());
    app.use(router.routes());

    await createConnection();
    console.log("Database connection successfully.");

    app.listen(8080, () => {});
};

main();
