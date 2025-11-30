const connection = require("../../db/connection");
function getAllSchools() {
  const query =
    "SELECT admin_name AS admin, name AS school FROM school s JOIN admin a ON s.id=a.school_id";
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = { getAllSchools };
