// Un singur element din listă (Intervenție), primit prin props
const ETICHETE_PRIORITATE = {
  low: "Low",
  medium: "Medium",
  high: "High"
};

export default function InterventieCard({ interventie }) {
  return (
    <li className={interventie.gata ? "item-card done" : "item-card"}>
      <div>
        <h3>{interventie.titlu}</h3>
        <span className={`badge badge-${interventie.prioritate}`}>
          {ETICHETE_PRIORITATE[interventie.prioritate] || interventie.prioritate}
        </span>
      </div>
      <span className="status">
        {interventie.gata ? "Gata" : "Activ"}
      </span>
    </li>
  );
}