const dbConnect = require("./mongodb");
const express=require("express")
const app=express()
const mongodb= require("mongodb")

app.use(express.json());

app.get("/",async (req, res)=>{
  let data=await dbConnect()
  let result= await data.find().toArray()
  res.send(result)
})

app.post("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  res.send(result);
});

app.put("/:name", async (req, res)=>{
  let data=await dbConnect()
  let result=await data.updateOne(
    {name:req.params.name},
     {$set:req.body})
  console.log(result)
  res.send({result:"update"})
})

app.delete("/:id",async (req, res)=>{
  let data=await dbConnect()
  let result= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
  console.log(req.params.id)
  res.send("done")
})

app.listen(5005)