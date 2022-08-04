const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

// Handling Asynchronous Processes
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Establishing the Server
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware
app.use(express.static("./public"));

app.listen(Port, () => {
  console.log(`API server now on port ${PORT}`);
});

// GET request
app.get("/api/notes", (req, res) => {
  readFileAsync("./db/db.json", "utf8").then(function (data) {
    notes = [].concat(JSON.parse(data));
    res.json(notes);
  });
});

// POST Request
app.post("/api/notes", (req, res) => {
  readFileAsync("./db/db.json", "utf8")
    .then(function (data) {
      const notes = [].concat(JSON.parse(data));
      notes.id = notes.length + 1;
      notes.push(note);
    })
    .then(function (notes) {
      writeFileAsync("./db/db.json", JSON.stringify(notes));
      res.json(notes);
    });
});

// DELETE Request
app.delete("/api/notes/:id", (req, res) => {
  const idDeleting = parseInt(req.params.id);
  readFileAsync("./db/db.json", "utf8")
    .then(function (data) {
      const notes = [].concat(JSON.parse(data));
      const newNotesData = [];
      for (let i = 0; i < notes.length; i++) {
        if (idDeleting !== notes[i].id) {
          newNotesData.push(notes[i]);
        }
      }
      return newNotesData;
    })
    .then(function (notes) {
      writeFileAsync("./db/db.json", JSON.stringify(notes));
      res.send("Yup we just did that..");
    });
});
