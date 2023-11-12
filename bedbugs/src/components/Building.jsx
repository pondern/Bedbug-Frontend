import { Link } from "react-router-dom";

function Building({ building }) {
  return (
    <div>
      <Link to={`/buildings/${building._id}`}>
        <img
          className="building-photos"
          src={building.photo}
          alt={building.name}
        />
      </Link>
    </div>
  );
}

export default Building;
