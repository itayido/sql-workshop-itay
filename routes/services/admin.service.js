const connection = require("../../db/connection");

function addSchool(name, school_code) {
  const query = `INSERT INTO school(school_name , school_code) VALUES('${name}', ${school_code});`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function addTeacher(name, password, email) {
  const query = `INSERT INTO teacher(name , password, email) VALUES('${name}', ${password}, '${email}');`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function addClass(grade, class_num, teacher_id) {
  const query = `INSERT INTO classroom(grade , class_num, teacher_id) VALUES('${grade}', ${class_num}, '${teacher_id}');`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function updateTeacher(currentName, name, password, email) {
  const query = `UPDATE teacher SET name='${name}', password=${password}, email='${email}' WHERE name='${currentName}';`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
module.exports = { addSchool, addTeacher, addClass, updateTeacher };
