// const pool = require("../config/db.config");
// const bodyparser = require("body-parser");
// module.exports.editUser = (request, response) => {
//     try {
//       const id = parseInt(request.params.id);
//       pool.query("Edit FROM tittles WHERE title_id = $1", [id], (error) => {
//         if (error) {
//           response.status(400).json(`error`);
//         }
//         response.status(200).json(`tittles edit with ID: ${id}`);
//       });
//     } catch (error) {
//       response.status(400).json(`error`);
//     }
//   };
  