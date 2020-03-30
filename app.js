const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require("./db");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var nodeMailer = require('nodemailer');

app.use("/", express.static(path.join("public")));

// Routes for /animals
app.use("/animals", require("./modules/animals/animals.routes"));

// Test pagination
// app.use("/next", require("./modules/pagination/pagination.router"));
// app.use("/prev", require("./modules/pagination/pagination.router"));

sequelize.sync({ alter: true });

// Start local server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is started on portn ${PORT}...`);

})