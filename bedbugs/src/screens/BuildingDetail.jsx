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
      <h1>Hello, I'm {building.name}</h1>
      <h2>{building.aka}</h2>
      <img src={building.photo} alt={building.name} />
      {/* {building.likesCuddles ? <p>I love me some cuddles!</p> : <p>Get the heck away from me!</p>} */}
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
