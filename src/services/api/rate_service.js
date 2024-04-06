import axios from "axios";

export const addRate = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/rates", data);
    return response;
  } catch (error) {
    console.log("Error: while creating rate", error);
    return error;
  }
};

export const getAllOrganizations = async () => {
  try {
    const response = await axios.get("http://localhost:8080/organizations");
    return response;
  } catch (error) {
    console.log("Error: while getting all organizations", error);
    return error;
  }
};

export const getAllVolunteers = async () => {
  try {
    const response = await axios.get("http://localhost:8080/users");
    return response;
  } catch (error) {
    console.log("Error: while getting all volunteers", error);
    return error;
  }
};

export const getAllOpportunities = async () => {
  try {
    const response = await axios.get("http://localhost:8080/opportunities");
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const getRatesByVol = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${id}/rates`);
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const getRatesByOppo = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/opportunities/${id}/rates`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const getRatesByOrg = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/organizations/${id}/rates`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const getRatesById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/rates/${id}`);
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const deleteRate = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/rates/${id}`);
    return response;
  } catch (error) {
    console.log("Error: while deleting rate", error);
    return error;
  }
};
