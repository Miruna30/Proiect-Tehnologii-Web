import { useState } from "react";
import InterventieList from "./components/InterventieList.jsx";

// Datele inițiale preluate din README / etapele anterioare
const INTERVENTII_INITIALE = [
  { id: 1, titlu: "Annual Brake Inspection", gata: false, prioritate: "high" },
  { id: 2, titlu: "Oil & Filter Change", gata: true, prioritate: "medium" },
  { id: 3, titlu: "Wheel Alignment & Balancing", gata: false, prioritate: "low" }
];

// Tema de pornire bazată pe preferința sistemului de operare
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [interventii, setInterventii] = useState(INTERVENTII_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  // Funcție imutabilă pentru comutarea stării (bifat / nebifat)
  function handleToggle(id) {
    setInterventii((prev) =>
      prev.map((item) => (item.id === id ? { ...item, gata: !item.gata } : item))
    );
  }

  // Funcție imutabilă pentru ștergerea unui element
  function handleDelete(id) {
    setInterventii((prev) => prev.filter((item) => item.id !== id));
  }

  // Funcție pentru comutarea temei (Light / Dark)
  function handleTema() {
    const nouaTema = tema === "dark" ? "light" : "dark";
    setTema(nouaTema);
    document.documentElement.dataset.theme = nouaTema;
  }

  // Valoare derivată pentru contorul din antet
  const active = interventii.filter((item) => !item.gata).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>AutoHistory</h1>
        <p>Gestionare istoric și reparații service auto.</p>
        <p className="app-count">
          {interventii.length} elemente, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Istoric intervenții</h2>
          <InterventieList
            interventii={interventii}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <footer className="app-footer">Proiect Tehnologii Web</footer>
    </>
  );
}