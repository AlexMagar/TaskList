import express from "express"
import taskRouter from "./src/routers/taskRouter.js";

const PORT = 8000;

const app = express();

//middleware
app.use(express.json()) //to prase the json

//handle the request
app.use("/", taskRouter)

//open port for http request to access the server
app.listen(PORT, (err) =>{
    err
    ? console.log(err.message)
    : console.log(`Server runing at http://localhost:${PORT}`)
});