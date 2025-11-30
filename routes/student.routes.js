const express = require("express");
const router = express.Router();

const studentService = require("../routes/services/student.service");

router.get("/", async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/school", async (req, res) => {
  const info = req.body;
  try {
    const students = await studentService.getStudentsBySchool(
      info.school_code,
      info.class_id
    );
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
