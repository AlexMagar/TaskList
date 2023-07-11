//model does the query

import taskSchema from "./TaskSchema.js";

//create data in db
export const createTask = (obj) =>{
    return taskSchema(obj).save();
}