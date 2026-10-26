import InterventieCard from "./InterventieCard.jsx";

export default function InterventieList({ interventii, onToggle, onDelete }) {
  if (!interventii || interventii.length === 0) {
    return <p className="empty">Nu există nicio intervenție înregistrată.</p>;
  }

  return (
    <ul className="item-list">
      {interventii.map((interventie) => (
        <InterventieCard
          key={interventie.id}
          interventie={interventie}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}