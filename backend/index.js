const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
// username and password
// aestheticnahid
// i4Fp6bm97WKty5vz

const uri =
  "mongodb+srv://aestheticnahid:i4Fp6bm97WKty5vz@users.lcs1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("secret").collection("user");

  // Post API
  app.post("/users", (req, res) => {
    collection.insertOne(req.body, (err, result) => res.json(result));
  });
  // Get API
  app.get("/users", (req, res) => {
    collection.find().toArray((err, result) => res.json(result));
  });
  // Delete API
  app.delete("/users/:id", (req, res) => {
    collection.deleteOne({ _id: req.params.id }, (err, result) => res.json(result));
  })
  // perform actions on the collection object
  console.log("connected the database");

  // const user = { name: "Munna", age: 21, phone: "01827312314" };
  // collection.insertOne(user).then((res) => console.log(res));
  //   client.close();
});

app.get("/", (req, res) =>
  res.send({ status: `"Server is running successfully on port ${port}"` })
);
app.listen(port, () => console.log(`server is running on port ${port}`));
