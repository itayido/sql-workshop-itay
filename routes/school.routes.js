const express = require("express");
const router = express.Router();

// TODO: Import database connection
const connection = require("../db/connection");
const schoolService = require("../routes/services/school.service");

/**
 * GET /schools
 * Retrieve all schools from the database
 */
router.get("/", async (req, res) => {
  try {
    const schools = await schoolService.getAllSchools();
    res.json(schools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
