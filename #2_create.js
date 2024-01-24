//create Collection
db.createCollection("videos");

db.inventory.insertOne({
  item: "Variety",
  qyt: 50,
  tags: ["red", "green"],
  size: { h: 10, w: 15 },
});

db.inventory.insertMany([
  {
    item: "canvas 4",
    qty: 100,
    tags: ["cotton 2"],
    size: { h: 28, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas 5",
    qty: 100,
    tags: ["cotton 2"],
    size: { h: 28, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas 6",
    qty: 100,
    tags: ["cotton 2"],
    size: { h: 28, w: 35.5, uom: "cm" },
  },
]);
