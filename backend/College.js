const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  city: { type: String, required: true },
  colleges: [
    {
      name: { type: String, required: true },
      link: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
