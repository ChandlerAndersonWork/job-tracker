const {
    getAllApplications,
    createApplication,
} = require("../models/applicationModel");


// GET /api/applications
function getApplications(req, res) {
    try {
        const apps = getAllApplications();
        res.json(apps);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch applications" });
    }
}


// POST /api/applications
function createNewApplication(req, res) {
    const { company, role, status, appliedDate, notes } = req.body;

    if (!company || !role || !status) {
        return res.status(400).json({ error: "company, role, and status are required" });
    }

    try {
        const app = createApplication({
            company,
            role,
            status,
            appliedDate,
            notes,
        });

        res.status(201).json(app);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create application" });
    }
}


module.exports = {
    getApplications,
    createNewApplication,
};