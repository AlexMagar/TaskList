import express from "express"
import { createTask, deleteTask, getTask, updateTask } from "../model/TaskModel.js";

const router = express.Router();

//fake DB
let fakeDb = [
    {
      "_id": "123456",
      "name": "Laxman",
      "address": "Sydney",
      "phone": "0405003994",
      "Spouse": "Mamata",
      "Bike": "Triump"
    },
    {
      "_id": "123455",
      "name": "Laxman",
      "address": "Sydney",
      "phone": "0405003994",
      "Spouse": "Mamata",
      "Bike": "Ducati"
    },
    {
      "_id": "123454",
      "name": "Laxman",
      "address": "Sydney",
      "phone": "0405003994",
      "Spouse": "Mamata",
      "Bike": "KTM"
    },
    {
      "_id": "123453",
      "name": "Laxman",
      "address": "Sydney",
      "phone": "0405003994",
      "Spouse": "Mamata",
      "Bike": "BMW"
    }
]

//get the data from db
router.get("/", async (req, res) =>{
    //this router takes all methods (get, post, put/patch, delete)
    const result = await getTask();
    console.log("This is from get method ", result)
    res.json({
        status: "success",
        message: "From GET method",
        result,
    })
})

//put new data in db
router.post("/", async (req, res) =>{
    try {
        const result = await createTask(req.body);
        console.log("This is from post metho ",result)
        result?._id
        ? res.json({
            status: "Success",
            message: "New task has been added successfully"
        })
        : res.json({
            status: "error",
            message: "fail to push in db"
        })
        
    } catch (error) {
        res.json({
            status: "error",
            message: error.message
        })
    }
})

//update the data in db
router.patch("/", async (req, res) =>{

    try { 
        const {_id, bike="Roma"} = req.body;
        console.log(_id, bike);
        const result = await updateTask(_id, bike);
        console.log(result)

        result?._id
        ? res.json({
            status: "success",
            message: "Item had been switched",
            result,
        })
        : res.json({
            status: "error",
            message: "Task did not switched"
        })
    } catch (error) {
        res.json({
            status: error,
            message: error.message
        })
    }
})


//delete the data from db
router.delete("/:_id", async (req, res) =>{
    try {
        const {_id} = req.params;
        console.log(_id)
        const result = await deleteTask(_id)
        console.log("This task is deleted \n",result);

        result?._id
        ? res.json({
            status: "Success",
            message: "Successfully deleted"
        })
        : res.json({
            status: "Error",
            message: "Unable to find and delete item"
        })

    } catch (error) {
        res.json({
            status: error,
            message: error.message
        })
    }
})

export default router;