import InterventieCard from "./InterventieCard.jsx";

export default function InterventieList({ interventii }) {
  // 1. Daca lista este goala:
  if (!interventii || interventii.length === 0) {
    return <p className="empty">Nu există nicio intervenție înregistrată.</p>;
  }

  // 2. Altfel: randam lista cu map
  return (
    <ul className="item-list">
      {interventii.map((interventie) => (
        <InterventieCard key={interventie.id} interventie={interventie} />
      ))}
    </ul>
  );
}