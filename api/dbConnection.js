const mongoose = require("mongoose");

const uri =
"mongodb+srv://gargiporwal2481:vdtuW5qvj1j0DwQ7@cluster0.blqo8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
