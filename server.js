// Dependencies
const express = require("express");

const app = express();
// assigning PORT the value of 3001, where we are locally hosting
// the server.s
const PORT = process.env.PORT || 3001;

// Modularizing the route calls for neater code.
const apiRoutes = require("./routes/apiRoutes/index");
const htmlRoutes = require("./routes/htmlRoutes/index");

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// express.static() instructs the server to make all the files inside "" static resources
app.use(express.static("public"));

// use apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// This function is used to listen to the connections of the
// above specified port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
