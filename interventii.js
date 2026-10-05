
const interventii = [
  { id: 1, titlu: "Annual Brake Inspection", gata: false, prioritate: "high" },
  { id: 2, titlu: "Oil & Filter Change", gata: true, prioritate: "medium" },
  { id: 3, titlu: "Wheel Alignment & Balancing", gata: false, prioritate: "low" }
];

const PRIORITATI = ["low", "medium", "high"];

function listeazaTitluri(lista) {
  return lista.map((t) => t.titlu);
}

function numaraActive(lista) {
  return lista.filter((t) => !t.gata).length;
}

function cautaDupaTitlu(lista, text) {
  const textCautat = text.toLowerCase();
  return lista.filter((t) => t.titlu.toLowerCase().includes(textCautat));
}

function nextId(lista) {
  return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function adaugaInterventie(lista, titlu, prioritate = "medium") {
  const titluCurat = titlu.trim();

  // Validare 1: Titlul gol
  if (titluCurat === "") {
    console.log("Eroare: Titlul nu poate fi gol!");
    return lista;
  }

  // Validare 2: Prioritatea nu există în lista de valori permise
  if (!PRIORITATI.includes(prioritate)) {
    console.log(`Eroare: Prioritate invalidă: ${prioritate}`);
    return lista;
  }

  // Construirea obiectului nou
  const nou = {
    id: nextId(lista),
    titlu: titluCurat,
    gata: false,
    prioritate: prioritate
  };

  // Returnează un array nou (imutabilitate)
  return [...lista, nou];
}

function comutaGata(lista, id) {
  return lista.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t));
}

function stergeInterventie(lista, id) {
  return lista.filter((t) => t.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(interventii).join(", "));
console.log("Active:", numaraActive(interventii));
console.log("Căutare 'brake':", listeazaTitluri(cautaDupaTitlu(interventii, "brake")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaInterventie(interventii, "New Timing Belt Kit", "high");
console.log("Lista nouă:", listaNoua.length, "intervenții");
console.log("Originalul a rămas cu:", interventii.length, "intervenții");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaGata(listaNoua, 1);
console.log("După bifarea id 1, active:", numaraActive(listaNoua));

listaNoua = stergeInterventie(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaInterventie(listaNoua, "   ");
adaugaInterventie(listaNoua, "Test service", "urgent");