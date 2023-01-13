import * as dotenv from "dotenv";
import { Request, Response } from "express";
import express from "express";
const app = express();

dotenv.config();
dotenv.config({ path: __dirname + "/.env" });

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST: string = process.env.HOST as string;

app.get("/", (req: Request, res: Response) => {
    if (Math.random() > 0.5) {
        res.status(200).send("Success!");
    } else {
        res.status(400).send("Failed!");
    }
});

app.listen(PORT, () => console.log(`Listening at http://${HOST}:${PORT}`));

export default app;
