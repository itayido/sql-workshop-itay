const connection = require("../../db/connection");
function getAllStudents() {
  const query = "SELECT name FROM student";
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function getStudentsBySchool(school_code, class_id) {
  const query = `SELECT
    name AS student,
    classroom,
    school_code
FROM
    classroom_school cs
    JOIN classroom c ON cs.classroom = c.id
    JOIN school s ON cs.school = s.school_code
    JOIN student ON student.classroom_id = c.id
WHERE
    cs.school = ${school_code}
    AND cs.classroom = ${class_id};`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = { getAllStudents, getStudentsBySchool };
