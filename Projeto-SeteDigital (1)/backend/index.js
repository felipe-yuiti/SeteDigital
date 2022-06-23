const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./models/user");

mongoose.connect("mongodb://localhost:27017/sete-digital");

const api = new express();

api.use(express.json());
api.use(cors());

api.post("/login", (req, res) => {
  const { nome } = req.body;

  if (nome == null) {
    return res.status(400).json({ message: "Missing parameter nome" });
  }

  User.findOne({ nome }, (err, user) => {
    if (err != null || user == null) {
      return res.status(401).json({ message: "User not found" });
    } else {
      return res.status(200).json(user);
    }
  });
});

api.post("/register", async (req, res) => {
  const { nome, idade } = req.body;

  if (nome == null && idade == null) {
    return res
      .status(400)
      .json({ message: "You need to provide the nome and idade" });
  }

  try {
    const user = new User({ nome, idade });

    await user.save();

    return res.status(201).send(user);
  } catch {
    return res.status(500);
  }
});

api.listen(8000, () => {
  console.log("API listening on port 8000");
});
