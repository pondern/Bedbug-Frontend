import { useState, useEffect } from "react";
import { getBuildings } from "../services/buildings.js";
import Building from "../components/Building.jsx";

function Buildings() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    fetchBuildings();
  }, []);

  async function fetchBuildings() {
    const allBuildings = await getBuildings();
    setBuildings(allBuildings);
  }

  return (
    <div>
      <h1>All the Buildings!</h1>
      <div className="Buildings-container">
        {buildings.map((building) => (
          <Building buidling={building} />
        ))}
      </div>
    </div>
  );
}

export default Buildings;
