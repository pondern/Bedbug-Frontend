import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editBuilding, getBuilding } from "../services/buildings";

function BuildingEdit() {
  const [building, setBuilding] = useState({
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
    const { name, value } = e.target;

    setBuilding((prevBuilding) => ({
      ...prevBuilding,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Edit Building Information</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add your building's name"
          name="name"
          value={building.name}
          onChange={handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default BuildingEdit;
