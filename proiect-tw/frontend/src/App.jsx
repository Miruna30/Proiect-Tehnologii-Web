import InterventieList from "./components/InterventieList.jsx";

const interventii = [
  { id: 1, titlu: "Annual Brake Inspection", gata: false, prioritate: "high" },
  { id: 2, titlu: "Oil & Filter Change", gata: true, prioritate: "medium" },
  { id: 3, titlu: "Wheel Alignment & Balancing", gata: false, prioritate: "low" }
];

export default function App() {
  const active = interventii.filter((t) => !t.gata).length;

  return (
    <>
      <header className="app-header">
        <h1>AutoHistory</h1>
        <p>Gestionare istoric și reparații service auto.</p>
        <p className="app-count">
          {interventii.length} elemente, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Istoric intervenții</h2>
          <InterventieList interventii={interventii} />
        </section>
      </main>

      <footer className="app-footer">Proiect Tehnologii Web</footer>
    </>
  );
}