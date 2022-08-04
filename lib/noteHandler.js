const fs = require("fs");
const path = require("path");

// This function takes the body and pushes noteTakerArray to the end
// of the db.json file. the null and 2 handle indentation in the json file
// for neat code appearance.
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

// deleteNote() takes the string and returns a specified id integer
// it then splices the selected id integer and replaces it with 1
// the for loop then correctly labels the notes saved after with the next
// correct id in numerical order (i.e. 1, 2, 3) after making the change to id
// it writes over the original json file with the new information.
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

// This will allow using these functions in the notes.js file.
module.exports = {
  createNewNote,
  deleteNote,
};