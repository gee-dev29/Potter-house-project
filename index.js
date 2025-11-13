import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import consola from "consola";
import dotenv from "dotenv";
import dbConnection from "./connection/dbConnection.js";

const app = express();
dotenv.config(); 

app.use(cors());
app.use(
    bodyParser.urlencoded({
        limit: "50",
        extended: true,
        parameterLimit: 50000,
    }),
    bodyParser.json({ limit: "50" })
);
dbConnection();
app.listen(process.env.PORT || 8081, () => {
    consola.success({
        message: `Server started on port ${process.env.PORT || 8081}`,
        badge: true,
    });
});
