# AutoHistory

A web application for car owners and mechanics to track vehicle service history and maintenance logs.
It allows users to log completed and scheduled repairs, monitor oil or brake services, and keep vehicles in top condition.

## Data model

| Field | Type | Notes |
| --- | --- | --- |
| title | text | required, max 100 chars (e.g., "Oil & Filter Change") |
| completed | boolean | toggled from the list, default false |
| priority | fixed values | Low, Medium, High |
| category | relation | Maintenance, Repairs, Inspection |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Annual Brake Inspection, active, High
2. Oil & Filter Change, done, Medium
3. Wheel Alignment & Balancing, active, Low

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev

Then open the address printed in the terminal (http://localhost:5173).

## AI usage
Tool | Used for
--- | ---
Gemini | Project setup, HTML/CSS structure, JavaScript data logic, React + Vite migration, README & AI logs setup

Details per stage: see the `ai-log/` folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project

### Checklist Etapa 3
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | frontend/package.json | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | frontend/src/App.jsx | edit data, save |
| S3-R3 | data from README, not from the example | frontend/src/App.jsx | compare with README |
| S3-R4 | stage 1 styles reused | frontend/src/App.css | look at the page |
| S3-R5 | node_modules ignored, build passes | frontend/.gitignore | npm run build |
| S3-R6 | README Stage 3 section + AI log | README.md, ai-log/etapa-03.md | read |
| S3-R7 | commit "Stage 3" pushed | link to commit | commit history |