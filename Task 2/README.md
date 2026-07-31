# NoteFlow - Full-Stack Notes CRUD App

A responsive Notes application built with Express.js, MongoDB, Mongoose, HTML, CSS and vanilla JavaScript.

## Features

- Create notes
- View all notes
- Edit notes
- Delete notes with confirmation
- Search notes
- Pin important notes
- Sort notes
- Responsive modern interface
- REST API with validation and error handling

## Project Structure

```text
notes-app-crud/
├── models/
│   └── Note.js
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── routes/
│   └── notes.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Setup

### 1. Install packages

```bash
npm install
```

### 2. Create `.env`

PowerShell:

```powershell
Copy-Item .env.example .env
```

Command Prompt:

```cmd
copy .env.example .env
```

Use local MongoDB:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/notes_app
```

You can replace `MONGO_URI` with a MongoDB Atlas connection string.

### 3. Start MongoDB

Local MongoDB service must be running. On Windows, MongoDB Compass alone does not always start the database service.

### 4. Run the application

```bash
npm run dev
```

Open:

```text
http://localhost:5000
```

## REST API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get one note |
| POST | `/api/notes` | Create note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

Search example:

```text
GET /api/notes?search=project
```
