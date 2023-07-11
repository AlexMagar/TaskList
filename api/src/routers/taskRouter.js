import express from "express"

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

router.get("/", (req, res) =>{
    //this router takes all methods (get, post, put/patch, delete)
    res.json({
        status: "success",
        message: "From GET method",
        fakeDb,
    })
})

router.post("/", (req, res) =>{
    fakeDb.push(req.body)
    res.json({
        status: "Success",
        message: "New task has been added successfully"
    })
})

router.put("/", (req, res) =>{
    const {_id, Bike} = req.body;
    fakeDb = fakeDb.map((item) =>{
        if(item._id === _id){
            return{...item, Bike}
        }
        return item;
    })
    res.json({
        status: "success",
        message: "Item had been switched"
    })
})

router.delete("/", (req, res) =>{
    const {_id} = req.body;
    fakeDb = fakeDb.filter( (item) => item._id !== _id);
    res.json({
        status: "success",
        message: "Item has been deleted successfully"
    })
})

export default router;