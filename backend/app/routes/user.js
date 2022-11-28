const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const login = require("../controllers/login");
const register = require("../controllers/register");
const {createUser}= require("../controllers/createUser");
const { getAllUser } = require("../controllers/getAllUser");
const deleteUser =require("../controllers/deleteUser");
const updateUser =require("../controllers/updateUser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post("/login", login.login);
app.post("/register", register.register);
app.post("/createTitle",createUser)
app.get("/getAll",getAllUser)
app.delete("/delete/:id",deleteUser.deleteUser)
app.put("/update/:id",updateUser.updateUser)



module.exports = app;


