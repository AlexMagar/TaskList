import express from "express"
import taskRouter from "./src/routers/taskRouter.js";
import { mongoConnect } from "./src/config/mongoDB.js";

const PORT = 8000;

//connect mongodb
mongoConnect();

const app = express();

//middleware
app.use(express.json()) //to prase the json

//handle the request
app.use("/api/v1/task", taskRouter)

//open port for http request to access the server
app.listen(PORT, (err) =>{
    err
    ? console.log(err.message)
    : console.log(`Server runing at http://localhost:${PORT}`)
});