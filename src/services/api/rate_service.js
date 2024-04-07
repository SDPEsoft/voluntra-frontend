import axios from "axios";

export const addRate = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/rates`, data);
    return response;
  } catch (error) {
    console.log("Error: while creating rate", error);
    return error;
  }
};

export const getAllOrganizations = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/organizations`);
    return response;
  } catch (error) {
    console.log("Error: while getting all organizations", error);
    return error;
  }
};

export const getAllVolunteers = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/users`);
    return response;
  } catch (error) {
    console.log("Error: while getting all volunteers", error);
    return error;
  }
};

export const getAllOpportunities = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/opportunities`);
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const getRatesByVol = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}/rates`);
    return response;
  } catch (error) {
    console.log("Error: while getting rates by volunteer", error);
    return error;
  }
};

export const getRatesByOppo = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/opportunities/${id}/rates`
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
      `${process.env.REACT_APP_BACKEND_BASE_URL}/organizations/${id}/rates`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const getRatesById = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/rates/${id}`);
    return response;
  } catch (error) {
    console.log("Error: while getting rate by  opportunities", error);
    return error;
  }
};

export const deleteRate = async (id) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/rates/${id}`);
    return response;
  } catch (error) {
    console.log("Error: while deleting rate", error);
    return error;
  }
};
