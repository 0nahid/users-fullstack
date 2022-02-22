const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const { ObjectID } = require("bson");

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
  // Get specific user
  app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    collection.findOne({ _id: new ObjectID(id) }, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  });
  // Post API
  app.post("/users", (req, res) => {
    collection.insertOne(req.body, (err, result) => res.json(result));
  });
  // Get API
  app.get("/users", (req, res) => {
    collection.find().toArray((err, result) => res.json(result));
  });
  app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    collection.deleteOne({ _id: ObjectID(id) }, (err, result) =>
      res.send(result)
    );
  });
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
