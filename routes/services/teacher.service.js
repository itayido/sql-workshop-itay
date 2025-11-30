const connection = require("../../db/connection");

function addStudent(name, password, classroom_id) {
  const query = `INSERT INTO student(name , password, classroom_id) VALUES('${name}', ${password}, '${classroom_id}');`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
function deleteStudent(name) {
  const query = `DELETE FROM student WHERE name='${name}';`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = { addStudent, deleteStudent };
