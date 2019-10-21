/*const Note = require("../models/note");

function updateNote(noteId, newContent) {
  return new Promise(resolve => {
    Note.findById(noteId, (err, foundedNote) => {
      if (err) {
        resolve({
          statusCode: 500,
          msg: "An internal error occurred while processing the request"
        });
      } else if (!foundedNote) {
        resolve({
          statusCode: 200,
          msg: "No note is associated to the indicated id"
        });
      } else {
        Note.findOneAndUpdate({ _id: noteId }, { content: newContent }, err => {
          if (err) {
            resolve({
              statusCode: 500,
              msg: "An internal error occurred while processing the request"
            });
          } else {
            resolve({
              statusCode: 200,
              msg: "The note is updated successfully"
            });
          }
        });
      }
    });
  });
}

module.exports = updateNote;
*/