import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editBuilding, getBuilding } from "../services/buildings";

function BuildingEdit() {
  const [cat, setBuilding] = useState({
    name: "",
  });

  let { id } = useParams();
  console.log(id);
  let navigate = useNavigate();

  useEffect(() => {
    fetchBuilding();
  }, []);

  async function fetchBuilding() {
    const oneBuilding = await getBuilding(id);
    setBuilding(oneBuilding);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editBuilding(id, building);
    navigate(`/buildings/${id}`);
  };

  const handleChange = (e) => {
    const { bldgadd, value } = e.target;

    setBuilding((prevBuilding) => ({
      ...prevBuilding,
      [bldgadd]: value,
    }));
  };

  return (
    <div>
      <h1>Add a building in our Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add your building's adress"
          bldgadd="address"
          value={building.bldgadd}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default BuildingEdit;
