const express = require("express");
const router = express.Router();


const {
    getApplications,
    createNewApplication,
} = require("../controllers/applicationController");

router.get("/", getApplications);
router.post("/", createNewApplication);

module.exports = router;