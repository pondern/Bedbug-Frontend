import { useState, useEffect } from "react";
import { getBuilding, deleteBuilding } from "../services/buildings";
import { Link, useParams, useNavigate } from "react-router-dom";

function BuildingDetail() {
  const [building, setBuilding] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchBuilding();
  }, []);

  async function fetchBuilding() {
    const oneBuilding = await getBuilding(id);
    setBuilding(oneBuilding);
  }

  async function handleDelete() {
    await deleteBuilding(id);
    navigate("/buildings");
  }

  return (
    <div>
      <h1>Hello, I'm Located at {building.building?.bldgadd}</h1>
      <h2>
        I have {building.bedbug?.infested_dwelling_unit_count} infested units
        out of a total of {building.bedbug?.of_dwelling_units} units
      </h2>
      <img src={building.building?.photo} alt="" />
      <div>
        <Link to={`/buildings/${id}/edit`}>
          <button>Edit Building</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default BuildingDetail;
