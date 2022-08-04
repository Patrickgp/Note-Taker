// Dependencies
const router = require("express").Router();
const { notes } = require("../../db/db");

// This will allow us to use our create and delete functions created
// in the lib/noteHandler.js file in our POST and DELETE calls.
const { createNewNote, deleteNote } = require("../../lib/noteHandler.js");

// GET /api/notes should read the db.json file and return all saved notes as JSON.
// GET request
router.get("/notes", (req, res) => {
  let saved = notes;
  res.json(saved);
});
// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file, and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved
// (look into npm packages that could do this for you).
// POST Request
router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  let note = createNewNote(req.body, notes);
  res.json(notes);
});

// DELETE /api/notes/:id should receive a query parameter containing the
// id of a note to delete. In order to delete a note, you'll need to read
// all notes from the db.json file, remove the note with the given id
// property, and then rewrite the notes to the db.json file.
// DELETE Request
router.delete("/notes/:id", (req, res) => {
  deleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;
