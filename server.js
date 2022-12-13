const express = require('express');
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT_ENV || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db")

const app = express();

connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));
app.use("/api/info", require("./routes/infoRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Serve started on port ${port}`);
})