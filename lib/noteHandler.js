const fs = require("fs");
const path = require("path");

function createNewNote(body, noteTakerArray) {
  const note = body;
  noteTakerArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: noteTakerArray,
      },
      null,
      2
    )
  );
  return note;
}

function deleteNote(noteTakerArray, id) {
  let deleteId = parseInt(id);
  noteTakerArray.splice(deleteId, 1);

  for (let i = deleteId; i < noteTakerArray.length; i++) {
    noteTakerArray[i].id = i.toString();
  }

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: noteTakerArray,
      },
      null,
      2
    )
  );
}

module.exports = {
  createNewNote,
  deleteNote,
};
