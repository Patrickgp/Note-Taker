// Dependencies
const router = require("express").Router();
const notes = require("../apiRoutes/notes");

// Middleware used by the specifed router
router.use(notes);

// This will allow us to utilize router in notes.js and
// htmlRoutes/index.js
module.exports = router;
