const Database = require('better-sqlite3');
const path = require('path');

// Create or open database files
const db = new Database(path.join(__dirname, "applications.db"));

// create table if it doesn't exist
db.prepare(`
    CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        company TEXT NOT NULL,
        role TEXT NOT NULL,
        status TEXT NOT NULL,
        appliedDate TEXT,
        notes TEXT,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
  )

    `).run();

module.exports = db;