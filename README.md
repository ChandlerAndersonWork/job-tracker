# Job Application Tracker

Full-stack job application tracking system built with React, Node.js, Express, and SQLite.

## Features

- Create, read, update, and delete job applications
- Track company, role, status, applied date, and notes
- Live UI updates without page reloads
- RESTful API with Express
- SQLite database with timestamps
- Clean layered backend architecture (routes, controllers, models)
- React frontend with controlled forms and async state management

## Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Fetch API

### Backend
- Node.js
- Express
- SQLite (better-sqlite3)

## Architecture
job-tracker/
  frontend/
    src/
      api/
      components/
      types/
  backend/
    src/
      controllers/
      db/
      models/
      routes/

Backend follows a layered pattern:
Routes -> Controllers -> Models -> Database

## API Endpoints

- GET /api/applications
- POST /api/applications
- PUT /api/applications/:id
- DELETE /api/applications/:id

## Getting Started

### Backend

- bash(I used VSCode's terminals)
- cd backend
- npm install
- npm run dev

Server runs on:
http://localhost:5000

### Frontend
- cd frontend
- npm install
- npm run dev

App runs on:
http://localhost:5173

### Future Improvements
- Status filtering
- Inline notes editing
- Authentication
- Deployment to Github Pages/Render

Built by Chandler Anderson
