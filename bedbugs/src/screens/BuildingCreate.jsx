import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBuilding } from "../services/buildings";

function BuildingCreate() {
  const [building, setBuilding] = useState({
    bldgadd: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createBuilding(building);
    navigate("/buildings");
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
          placeholder="Please add your building's address"
          bldgadd="address"
          value={building.bldgadd}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default BuildingCreate;
