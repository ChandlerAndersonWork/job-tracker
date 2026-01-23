const db = require("../db/database");

// get all applications
function getAllApplications() {
    return db.prepare("SELECT * FROM applications ORDER BY createdAt DESC").all();
}


// create new applications
function createApplication(data) {
    const stmt = db.prepare(`
        INSERT INTO applications
        (company, role, status, appliedDate, notes, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `);
        
    const now = new Date().toISOString();
    
    const result = stmt.run(
        data.company,
        data.role,
        data.status,
        data.appliedDate || null,
        data.notes || null,
        now,
        now
    );

    return { id: result.lastInsertRowid, ...data };
}


module.exports = {
    getAllApplications,
    createApplication,
};