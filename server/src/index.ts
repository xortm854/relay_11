import Koa from "koa";
import "reflect-metadata";
import { createConnection } from "typeorm";

const main = async function () {
    const app = new Koa();
    // const router = new Router();
    const connection = createConnection().then(() => {
        console.log("connected");
    });

    app.listen(8080, () => {});
};

main();

