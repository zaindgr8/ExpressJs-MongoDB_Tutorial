db.inventory.find() 
db.inventory.find({qty:90})
db.inventory.find({ tags: "cotton 5" });

db.inventory.find({tags:{$in: ["red", "green"]}})

//AND
db.inventory.find({item:"journal", qty:{$lt:30}})
//OR
db.inventory.find({$or:[{ item:"journal"}, {qty:{$lt:50} }]})
