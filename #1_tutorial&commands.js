//Install Hebrew

// Run in root terminal
// ./mongod --dbpath /Users/zainulabideen/Downloads/db   

//mongosh - to start Mongo Db 

//show dbs - Show all databases

// use employees - Use employees database

//CRUD

//Connect Mongo DB

//Create
db.inventory.insertOne() , db.inventory.insertMany([])

//Read
db.inventory.insertMany([
  { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [14, 21] },
  { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [14, 21] },
  {
    item: "paper",
    qty: 100,
    tags: ["red", "blank", "plain"],
    dim_cm: [14, 21],
  },
  { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [22.85, 30] },
  { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [10, 15.25] },
]);



