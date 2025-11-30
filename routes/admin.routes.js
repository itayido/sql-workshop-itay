const express = require("express");
const router = express.Router();

// TODO: Import database connection
const connection = require("../db/connection");
const adminServices = require("./services/admin.service");

//add new school
router.post("/addSchool", async (req, res) => {
  const info = req.body;

  try {
    await adminServices.addSchool(info.name, info.school_code);
    res.json("added successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//add new teacher
router.post("/addTeacher", async (req, res) => {
  const info = req.body;
  try {
    await adminServices.addTeacher(info.name, info.password, info.email);
    res.json("added successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//add new classroom
router.post("/addClass", async (req, res) => {
  const info = req.body;
  try {
    await adminServices.addClass(info.grade, info.class_num, info.teacher_id);
    res.json("added successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/updateTeacher", async (req, res) => {
  const info = req.body;
  try {
    await adminServices.updateTeacher(
      info.currentName,
      info.name,
      info.password,
      info.email
    );
    res.json("updated successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
