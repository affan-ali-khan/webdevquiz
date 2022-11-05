const express = require("express");
const app = express();
// const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 5000
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


mongoose.connect(
    "mongodb+srv://affanalikhan:affanalikhan@cluster0.u8kayif.mongodb.net/?retryWrites=true&w=majority"
  );

const books = require("./models/books");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    books.find({ title: req.params.title })
      .exec()
      .then((result) => {
        if (!result) {
          return res.status(404).end();
        }
        return res.status(200).json(result);
      })
      .catch((err) => next(err));
  });

  app.listen(port, () => {
    console.log(`app listening on port ${port}`)
    })