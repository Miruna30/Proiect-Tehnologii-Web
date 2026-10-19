// Starea aplicației
let interventii = [
  { id: 1, titlu: "Annual Brake Inspection", gata: false, prioritate: "high" },
  { id: 2, titlu: "Oil & Filter Change", gata: true, prioritate: "medium" },
  { id: 3, titlu: "Wheel Alignment & Balancing", gata: false, prioritate: "low" }
];

const PRIORITATI = ["low", "medium", "high"];

// ==========================================
// Funcții Pure / Utilitare (Logica de date)
// ==========================================

function numaraActive(lista) {
  return lista.filter((t) => !t.gata).length;
}

function nextId(lista) {
  return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function adaugaInterventie(lista, titlu, prioritate = "medium") {
  const titluCurat = titlu.trim();

  if (titluCurat === "") return lista;
  if (!PRIORITATI.includes(prioritate)) return lista;

  const nou = {
    id: nextId(lista),
    titlu: titluCurat,
    gata: false,
    prioritate: prioritate
  };

  return [...lista, nou];
}

function comutaGata(lista, id) {
  return lista.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t));
}

function stergeInterventie(lista, id) {
  return lista.filter((t) => t.id !== id);
}

// ==========================================
// Persistență în LocalStorage
// ==========================================

function salveazaInStorage() {
  localStorage.setItem("autoHistory_interventii", JSON.stringify(interventii));
}

function incarcaDinStorage() {
  const dateSalvate = localStorage.getItem("autoHistory_interventii");
  if (dateSalvate) {
    try {
      interventii = JSON.parse(dateSalvate);
    } catch (e) {
      console.error("Eroare la citirea din localStorage:", e);
    }
  }
}

// ==========================================
// Rendare în DOM
// ==========================================

function rendeaza() {
  const listaUl = document.querySelector(".item-list");
  const appCount = document.querySelector(".app-count");

  // Actualizare contor
  const total = interventii.length;
  const active = numaraActive(interventii);
  if (appCount) {
    appCount.textContent = `${total} elemente, dintre care ${active} active`;
  }

  // Curățare listă
  listaUl.innerHTML = "";

  // Tratare caz listă golită
  if (total === 0) {
    listaUl.innerHTML = '<p class="empty">Nu există nicio intervenție înregistrată.</p>';
    return;
  }

  // Generare carduri dinamic
  interventii.forEach((item) => {
    const li = document.createElement("li");
    li.className = `item-card ${item.gata ? "done" : ""}`;

    li.innerHTML = `
      <div class="card-info">
        <h3>${escapeHtml(item.titlu)}</h3>
        <span class="badge badge-${item.prioritate}">${item.prioritate.toUpperCase()}</span>
      </div>
      <div class="card-actions">
        <span class="status">${item.gata ? "Gata" : "Activ"}</span>
        <button class="btn-toggle" data-id="${item.id}" title="Comută starea">
          ${item.gata ? "↩ Reia" : "✓ Finalizează"}
        </button>
        <button class="btn-delete" data-id="${item.id}" title="Șterge">✕</button>
      </div>
    `;

    listaUl.appendChild(li);
  });
}

// Prevenire XSS la introducere text
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[m];
  });
}

// ==========================================
// Event Listeners (Evenimente)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Încărcare date din storage (dacă există)
  incarcaDinStorage();
  rendeaza();

  // 2. Trimitere Formular
  const form = document.querySelector(".item-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputTitlu = form.querySelector('[name="titlu"]');
      const selectPrioritate = form.querySelector('[name="eticheta"]');

      const titlu = inputTitlu.value;
      const prioritate = selectPrioritate.value;

      if (!titlu.trim()) return;

      interventii = adaugaInterventie(interventii, titlu, prioritate);
      salveazaInStorage();
      rendeaza();

      // Resetare formular
      inputTitlu.value = "";
      selectPrioritate.value = "medium";
      inputTitlu.focus();
    });
  }

  // 3. Delegare evenimente pentru Butoane (Comutare / Ștergere)
  const listaUl = document.querySelector(".item-list");
  if (listaUl) {
    listaUl.addEventListener("click", (e) => {
      const btnToggle = e.target.closest(".btn-toggle");
      const btnDelete = e.target.closest(".btn-delete");

      if (btnToggle) {
        const id = Number(btnToggle.dataset.id);
        interventii = comutaGata(interventii, id);
        salveazaInStorage();
        rendeaza();
      } else if (btnDelete) {
        const id = Number(btnDelete.dataset.id);
        interventii = stergeInterventie(interventii, id);
        salveazaInStorage();
        rendeaza();
      }
    });
  }
});