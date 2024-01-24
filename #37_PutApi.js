const express=require("express")
const dbConnect=require("mongodb")
const app=express()

app.use(express.json());

app.get("/",async (req,res)=>{
  let data=await dbConnect()
  data=await data.find().toArray()
  res.send(data)
})

app.post("/", async (req, res)=>{
let data=await dbConnect()
let result=await data.insertOne(req.body)
res.send(result)
})

app.put("/:name",async (req, res)=>{
  // console.log(req.body)
  let data=await dbConnect()
  let result=await data.updateOne(
    // {name:"CP"},
    // {name:req.body.name},
    {name:req.params.name},
    {$set:req.body})
  res.send({result:"update"})
})

app.listen(5005)
//add local host @Postman @5005/:name 