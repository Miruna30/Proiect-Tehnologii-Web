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

## How to run
Open index.html in a browser. No build step, no server.

## AI usage
Tool | Used for
--- | ---
Gemini | Project setup, HTML/CSS structure, README documentation, stage 1

Details per stage: see the ai-log/ folder.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript