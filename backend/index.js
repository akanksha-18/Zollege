require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

connectDB();


app.get("/", (req, res) => {
    res.json({ data: "hello" });
});

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;