const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    { name: "note 5", brand: "vivo", price: 320, category: "mobile" },
    { name: "note 6", brand: "vivo1", price: 320, category: "mobile1" },
    { name: "note 7", brand: "vivo2", price: 320, category: "mobile2" },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
