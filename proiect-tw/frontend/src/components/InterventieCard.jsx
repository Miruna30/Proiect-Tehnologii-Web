const ETICHETE_PRIORITATE = {
  low: "Low",
  medium: "Medium",
  high: "High"
};

export default function InterventieCard({ interventie, onToggle, onDelete }) {
  return (
    <li className={interventie.gata ? "item-card done" : "item-card"}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={interventie.gata}
          onChange={() => onToggle(interventie.id)}
        />
        <div>
          <h3>{interventie.titlu}</h3>
          <span className={`badge badge-${interventie.prioritate}`}>
            {ETICHETE_PRIORITATE[interventie.prioritate] || interventie.prioritate}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(interventie.id)}
        aria-label={`Șterge ${interventie.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}