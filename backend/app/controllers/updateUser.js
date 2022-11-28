const pool = require("../config/db.config");
const bodyparser = require("body-parser");

module.exports.updateUser = (request, response) => {

   try {

    const {title} = request.body;
    const id = parseInt(request.params.id);
    pool.query("UPDATE tittles SET title= $1 WHERE title_id = $2", [title,id], (error) => {
      if (error) {
        response.status(400).json(` sql error`);
      }
      response.status(200).json(`tittles updated with ID: ${id}`);
    });
  } catch (error) {
    response.status(400).json(`database error`);
  }
};






// module.exports.updateUser = (request,response)=>{

//   pool.query(
//     "UPDATE tittles SET title= $1 WHERE tittle_id = $2",

//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );

// };


// module.exports = {
//   updateUser,
// };
