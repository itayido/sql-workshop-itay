const express = require("express");
const router = express.Router();

// TODO: Import database connection
const connection = require("../db/connection");
const teacherServices = require("./services/teacher.service");

//add new student
router.post("/addStudent", async (req, res) => {
  const info = req.body;
  try {
    await teacherServices.addStudent(
      info.name,
      info.password,
      info.classroom_id
    );
    res.json("added successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete("/deleteStudent", async (req, res) => {
  const info = req.body;
  try {
    await teacherServices.deleteStudent(info.name);
    res.json("deleted successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
