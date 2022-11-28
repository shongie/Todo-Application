const client = require("../config/db.config");


//createPost Function

exports.getAllUser = async (req, res) => {
  // const {title,user_id} = req.body;

  try {
        //Inserting data into the database
        const data = await client.query(
          'SELECT * FROM tittles',
          (err,results) => {
            if (err) {
           //If post is not inserted is not inserted to database
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              res
                .status(200)
                .send(results.rows);
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