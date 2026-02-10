const {
    getAllApplications,
    createApplication,
    updateApplicationModel,
    deleteApplicationModel,
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

function updateApplication(req, res) {
    const id = Number(req.params.id);
    const { status, notes } = req.body;

    if (!status && !notes) {
        return res.status(400).json({ error: "Nothing to update" });
    }

    try {
        const updated = updateApplicationModel(id, { status, notes });

        if (!updated) {
            return res.status(404).json({ error: "Application not found" });
        }

        res.json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to update application" });
    }
}

function deleteApplication(req, res) {
    const id = Number(req.params.id);

    try {
        const deleted = deleteApplicationModel(id);

        if (!deleted) {
            return res.status(404).json({ error: "Application not found" });
        }

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to delete application" });
    }
}

module.exports = {
    getApplications,
    createNewApplication,
    updateApplication,
    deleteApplication,
};