import api from "./apiConfig.js";

export const getBuildings = async () => {
  try {
    const response = await api.get("/buildings");
    return response.data;
  } catch (error) {
    console.error("Error: Getting all Buildings: ", error);
  }
};

export const getBuilding = async (id) => {
  try {
    const response = await api.get(`/buildings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting one Building: ", error);
  }
};

export const createBuilding = async (buildingData) => {
  try {
    const response = await api.post("/buildings", buildingData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editBuilding = async (id, buildingData) => {
  try {
    const response = await api.put(`/buildings/${id}`, buildingData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteBuilding = async (id) => {
  try {
    const response = await api.delete(`/buildings/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
