//define data types and what data is needed in table

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    spouse: {
        type: String,
        required: true
    },
    bike:{
        type: String,
        required: true
    }
})

//creating table
export default mongoose.model("Task", taskSchema) // this will create a table name "tasks"

