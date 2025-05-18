# RAIE-Frontend
Recursive AI Executer (Frontend)
# Recursive AI Executor — Frontend

This is the React/Tailwind CSS frontend for the **Recursive AI Executor**, a web app that lets users enter a natural‑language coding prompt, sends it to the backend to generate and execute Python code, and displays the results (including retry attempts).

## Prerequisites

- **Node.js** ≥ 16.x  
- **npm** or **yarn**  
- Running **backend** at `http://localhost:8000` (see backend README)

---

## Installation

1. Clone this repo

   git clone <github.com/shivamkumarrai1/RAIE-Frontend/>
   cd frontend

 Install dependencies:

npm install

or

yarn install
Initialize Tailwind CSS (already pre-configured):

npx tailwindcss init -p
Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode on http://localhost:3000.

npm run build
Builds the app for production to the build/ folder.

npm test
Launches the test runner (if you add tests).

Environment Variables
Create a .env file in the frontend root if you need to override defaults:

REACT_APP_API_URL=http://localhost:8000
Your fetch calls use it like:

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

Project Structure

frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PromptBox.jsx
│   │   ├── CodeViewer.jsx
│   │   ├── OutputLog.jsx
│   │   └── StatusIndicator.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── index.css
│   └── tailwind.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md      ← (this file)
Tailwind CSS Setup
tailwind.config.js should include your paths:

Components

PromptBox.jsx
Textarea + Run button; handles user prompt input.

StatusIndicator.jsx
Shows loading spinner or status badge.

CodeViewer.jsx
Read‑only syntax-highlighted code panel.

OutputLog.jsx
Displays execution logs and retry attempts.

How It Works->

--User enters a Python-coding prompt in the PromptBox.

--On Run, App.jsx sends a POST to your backend (/generate-and-run).

--Backend returns { success, code, output, attempts }.

--App.jsx updates state and renders:

--StatusIndicator (running/success/failure)

--CodeViewer with the final code

--OutputLog with all attempts



