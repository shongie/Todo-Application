const client = require("../config/db.config");
const jwt = require('jsonwebtoken')

SECRET_KEY="dfcgvhbjnkm"
// to encrypt
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  //query to check existing users on tables
  const { email, password } = req.body;

  console.log(email,"   " , password)
  try {
    const data = await client.query(
      "SELECT * FROM users where email=$1;",
      [email]
    );

    const user = data;
    console.log(user.rows[0].password)
    if (user.rows == 0) {
      //send the response to postman/thunderclient

      res.status(400).json({ message: "User does not exist" });
    } else {
      bcrypt.compare(password, user.rows[0].password, (err, results) => {
        // Comparing the hashed password
        if (err) {
          res.status(500).json({
            error: "Server Error",
          });

          //Checking if the credentials match
        } else if (results === true) {
          
        
          res.status(200).json({
            message: "User signed in!",
            user,
          });
        } else {
          //Declaring the errors

          if (results != true) {
            res.status(400).json({
              error: "Enter the correct password",
            });
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Database error occurred while signing in!", //Database connection error
    });
  }
};
