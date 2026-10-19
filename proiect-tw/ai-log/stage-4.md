# AI Log - Stage 4: Components Rendered from Data

## Tool used
Gemini

## Prompts used
1. "Am de făcut etapa 4 din proiectul de Tehnologii Web conform ghidului atașat. Vreau să îmi explici pașii și să îmi generezi componentele React necesare."
2. "Ajută-mă să rezolv următoarea eroare. La rularea comenzii npm run dev de la pasul 5, am deschis consola în browser și mi-a apărut următoarea eroare. Ce pot modifica?"

## Changes made manually
- Created the `components/` directory inside `frontend/src/`.
- Implemented `InterventieCard.jsx` and `InterventieList.jsx` using React props and conditional rendering.
- Updated `App.jsx` to replace raw JSON display with the new component hierarchy.
- Verified in browser DevTools that no console warnings exist regarding list `key` props.
- Executed `npm run build` locally to verify build compatibility.