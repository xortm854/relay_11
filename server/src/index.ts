import Koa from "koa";
import bodyParser from "koa-bodyparser";
import "reflect-metadata";
import { createConnection } from "typeorm";

const main = async function () {
    const app = new Koa();

    app.use(bodyParser());

    await createConnection();
    console.log("Database connection successfully.");

    app.listen(8080, () => {});
};

main();
