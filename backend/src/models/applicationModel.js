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

// update application
function updateApplicationModel(id, { status, notes }) {
    const now = new Date().toISOString();

    const stmt = db.prepare(`
        UPDATE applications
        SET
            status = COALESCE(?, status),
            notes = COALESCE(?, notes),
            updatedAt = ?
        WHERE id = ?
        `);

    const result = stmt.run(status ?? null, notes ?? null, now, id);

    if (result.changes === 0) return null;

    return db.prepare("SELECT * FROM applications WHERE id = ?").get(id);
}

// delete application
function deleteApplicationModel(id) {
    const stmt = db.prepare("DELETE FROM applications WHERE id = ?");
    const result = stmt.run(id);
    return result.changes > 0;
}

module.exports = {
    getAllApplications,
    createApplication,
    updateApplicationModel,
    deleteApplicationModel,
};