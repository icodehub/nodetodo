const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8081;
const mongoose = require('mongoose');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Import routes
let apiRoutes = require("./routes/routes") // Use Api routes in the App
app.use('/', apiRoutes)


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});