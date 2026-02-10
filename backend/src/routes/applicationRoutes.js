const express = require("express");
const router = express.Router();


const {
    getApplications,
    createNewApplication,
    updateApplication,
    deleteApplication,
} = require("../controllers/applicationController");

router.get("/", getApplications);
router.post("/", createNewApplication);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);


module.exports = router;