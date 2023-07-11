import mongoose, { Mongoose } from "mongoose";

export const mongoConnect = async () =>{

    try {
        //connection with db
        const con  = await mongoose.connect("mongodb://localhost:27017/TaskList");
        con && console.log("mogo is connected")
    } catch (error) {
        console.log(error.message)
    }
}