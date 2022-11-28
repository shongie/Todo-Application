const express = require("express");
const app = express();
const client = require("../config/db.config");

// to encrypt
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    //query to check existing users on tables
    const data = await client.query("SELECT * FROM users where email=$1;", [
      email,
    ]);

  
    // check existing users
    if (data.rows != 0) {
      //send the response to postman/thunderclient
      res.status(300).send({ message: "User already exist" });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err)
          res.status(200).json({
            error: "Server error",
          });
        const user = {
          email,
          password: hash,
        };

        client.query(
          `
                            INSERT INTO users ( email, password) VALUES ($1,$2);`,
          [user.email, user.password],
          (err) => {
            if (err) {
              flag = 0; //If user is not inserted is not inserted to database assigning flag as 0/false.
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              flag = 1;
              res
                .status(200)
                .send({
                  message: ` User called ${email} have been added to the database `,
                });
            }
          }
        );
      });
    }
  } catch (error) {
    console.log("server error qr");
  }
};
