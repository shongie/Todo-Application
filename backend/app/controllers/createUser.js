const client = require("../config/db.config");


//createPost Function

exports.createUser = async (req, res) => {
  const {title,user_id} = req.body;

  try {
        //Inserting data into the database
        const data = await client.query(
          'INSERT INTO tittles(title,user_id) VALUES ($1,$2)',
          [title,user_id],
          (err) => {
            if (err) {
           //If post is not inserted is not inserted to database
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              res
                .status(200)
                .send({ message: `Post for user ${user_id} have been added to the database`});
            }
          }
        );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while creating post!", //Database connection error
    });
  }
};