// models/Company.js
const mongoose = require("mongoose");
const CompanySchema = new mongoose.Schema({
  name: String,
  matchScore: Number,
  status: { type: String, default: "Not Target" },
});
module.exports = mongoose.model("Company", CompanySchema);
