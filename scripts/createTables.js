const connection = require("../db/connection");
const fs = require("fs");
const path = require("path");

/**
 * Creates database tables based on entity definitions in /entities directory
 */
async function createTables() {
  const pathd = path.join(__dirname, "..", "entities");
  const filesAr = fs.readdirSync(pathd);
  let filesArr = [
    filesAr[5],
    filesAr[3],
    filesAr[2],
    filesAr[4],
    filesAr[0],
    filesAr[1],
  ];
  filesArr = filesArr.filter((file) => file.endsWith(".json"));
  for (const file of filesArr) {
    try {
      const content = fs.readFileSync(path.join(pathd, file));
      const parsedContent = JSON.parse(content);
      const tableTitle = path.parse(file).name;
      let queryString = `CREATE TABLE ${tableTitle} (\n`;

      let first = true;

      for (const key in parsedContent) {
        if (!first) queryString += ",\n";
        if (parsedContent[key].includes("FOREIGN KEY")) {
          queryString += `  ${key} ${parsedContent[key].split(" ")[0]}`;
          queryString += ` ,FOREIGN KEY (${key}) REFERENCES ${
            key.split("_")[0]
          }(id)`;
        } else {
          queryString += `  ${key} ${parsedContent[key]}`;
        }
        first = false;
      }

      queryString += `\n);`;
      console.log(queryString);
      connection.query(queryString, function (err, result) {
        if (err) throw err;
      });
    } catch (err) {
      console.log(err);
    }
  }

  // TODO: Execute each CREATE TABLE query using the connection
  // Hint: Use connection.promise().query() for async/await or connection.query() for callbacks
  // Hint: Add error handling for each query execution

  // TODO: Close the connection after all tables are created
  // Hint: Use connection.end()
}
// Export the function
module.exports = { createTables };

// Uncomment the line below to run this script directly
// createTables();s
