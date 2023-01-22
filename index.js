const connectToMongo = require("./db");
const dotenv = require('dotenv');
const express = require("express");
const cors = require('cors');

dotenv.config({path:'.env'});
connectToMongo();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
    console.log(`iNoteBook backend listening at http://localhost:${port}`);
});
