const dbConnect = require("./mongodb");

const update = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "Queen" },
    { $set: { name: "Queen Elizebeth", age: 50 } }
  );
  console.log(result);
};

update();
