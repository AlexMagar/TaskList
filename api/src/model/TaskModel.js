//model does the query

import taskSchema from "./TaskSchema.js";

//get the data from db
export const getTask = () =>{
    return taskSchema.find();
}

//create data in db
export const createTask = (obj) =>{
    return taskSchema(obj).save();
}

//update the data in db
//id as an string
export const updateTask = (_id, type) =>{
    return taskSchema.findByIdAndUpdate(_id, {type});
}

//delete the data from db
export const deleteTask = (_id ) =>{
    return taskSchema.findByIdAndDelete(_id);
}
