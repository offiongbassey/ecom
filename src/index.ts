import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import morgan from "morgan";
import { responseHandler } from "./helpers/responseHandler";

dotenv.config();

const app = express();

app.use(cors());
if(process.env.NODE_ENV !==  "production"){
    app.use(morgan("dev"));
}
app.use(express.json())
app.use(helmet());
app.use(compression());

//invalid route
app.use("*", (req, res) => {
    responseHandler({res, statusCode:404, success:false, msg:"Invalid Route"})
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
