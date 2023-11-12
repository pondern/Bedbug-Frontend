import { Link } from "react-router-dom";

function Building({ building }) {
  return (
    <div>
      <Link to={`/buildings/${building._id}`}>
        <img
          className="building-images"
          src={building.image}
          alt={building.name}
        />
      </Link>
    </div>
  );
}

export default Building;
