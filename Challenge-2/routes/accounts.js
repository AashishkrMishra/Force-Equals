const express = require("express");
const router = express.Router();
const Company = require("../models/Company");
const auth = require("../middleware/auth");

// GET /accounts — Get all companies
router.get("/", auth, async (req, res) => {
  try {
    const companies = await Company.find({}); // Fetch all fields for debug
    console.log("Fetched companies:", companies);
    res.status(200).json(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ message: "Server error while fetching companies" });
  }
});

// POST /accounts/:id/status — Update company status
router.post("/:id/status", auth, async (req, res) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required in the request body" });
  }

  try {
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json({
      message: "Status updated successfully",
      company
    });

  } catch (error) {
    console.error("Error updating company status:", error);
    res.status(500).json({ message: "Server error while updating status" });
  }
});

// POST /accounts/seed — Insert dummy company data (for testing)
router.post("/seed", async (req, res) => {
  try {
    const companies = [
      { name: "Google", matchScore: 92 },
      { name: "Amazon", matchScore: 88 },
      { name: "Netflix", matchScore: 83 },
      { name: "Meta", matchScore: 86 }
    ];
    await Company.insertMany(companies);
    res.status(201).json({ message: "Seed data inserted successfully" });
  } catch (err) {
    console.error("Error seeding companies:", err);
    res.status(500).json({ message: "Seeding failed" });
  }
});

module.exports = router;