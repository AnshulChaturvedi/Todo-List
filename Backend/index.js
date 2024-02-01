const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 6060;

// middleware
app.use(express.json());

// routing
const todos = require("./routes/todoRoutes");
app.use("/api/v1",todos);

// linking server
app.listen(PORT, () => {
    console.log(`Server is started successfully at ${PORT}`);
})

// db connection
const dbConnect = require("./config/database");
dbConnect();

//default route 
app.get("/", (req,res) => {
    res.send(`<h1>This is HOMEPAGE baby.</h1>`);
})