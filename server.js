const express = require('express');
const path = require("path");
const api = require("./routes/index"); // will need to change this from heathers video

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing the JSON and form urlencoded data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// GET route for the homepage

app.get("/", (req, res) =>
  res.sendFile(path.join(dirname, "/public/index.html"))
);

// GET "/notes" returns the notes.html file.
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET "*" should return the index.html file for any other file paths.
app.get("*", (req, res) => 
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
