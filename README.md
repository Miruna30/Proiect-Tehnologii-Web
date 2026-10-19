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

## Stage 2: data logic
Plain JavaScript, no DOM. `interventii.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
- `InterventieList` receives the whole array and renders one card per item
- `InterventieCard` receives a single item through props and displays it

## How to run
cd frontend
npm install
npm run dev

Then open the address printed in the terminal (http://localhost:5173).

## AI usage
| Tool | Used for |
| --- | --- |
| Gemini | Project setup, HTML/CSS structure, JavaScript data logic, React + Vite migration, Stage 4 components implementation, README & AI logs setup |

Details per stage: see the `ai-log/` folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events

### Checklist Etapa 1
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | README.md | read |
| S1-R2 | AI usage section | README.md | read |
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | mockup/index.html | open the page |
| S1-R5 | finished card looks different | mockup/style.css#L.. (.done) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | mockup/style.css#L.. (@media) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | mockup/style.css#L.. | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | link to the commit | commit history |

### Checklist Etapa 2
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | mockup/index.html#L.. (script) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | mockup/interventii.js#L..-L.. | read |
| S2-R3 | list, count, search, add, toggle, delete | mockup/interventii.js#L..-L.. | console output |
| S2-R4 | add rejects empty name and invalid tag | mockup/interventii.js#L..-L.. | last 2 console lines |
| S2-R5 | original array unchanged after add | mockup/interventii.js#L.. | console line |
| S2-R6 | README Stage 2 section + AI log | README.md, ai-log/etapa-02.md | read |
| S2-R7 | commit "Stage 2" pushed | link to the commit | commit history |

### Checklist Etapa 3
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | frontend/package.json | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | frontend/src/App.jsx#L..-L.. | edit data, save |
| S3-R3 | data from README, not from the example | frontend/src/App.jsx#L..-L.. | compare with README |
| S3-R4 | stage 1 styles reused | frontend/src/App.css | look at the page |
| S3-R5 | node_modules ignored, build passes | frontend/.gitignore | npm run build |
| S3-R6 | README Stage 3 section + AI log | README.md, ai-log/etapa-03.md | read |
| S3-R7 | commit "Stage 3" pushed | link to the commit | commit history |

### Checklist Etapa 4
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | 2+ components in src/components/ | frontend/src/components/ | open folder |
| S4-R2 | card receives data through props | frontend/src/components/InterventieCard.jsx#L..-L.. | read |
| S4-R3 | map + key={id}, no console warnings | frontend/src/components/InterventieList.jsx#L..-L.. | F12, Console |
| S4-R4 | message for empty list | frontend/src/components/InterventieList.jsx#L..-L.. | set array to [] |
| S4-R5 | state changes the card look | frontend/src/components/InterventieCard.jsx#L.. | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | README.md, ai-log/etapa-04.md | read |
| S4-R7 | commit "Stage 4" pushed | link to the commit | commit history |