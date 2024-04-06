import axios from "axios";

export const createOpportunity = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/opportunities",
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while creating opportunity", error);
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

export const updateOpportunity = async (id, data) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/opportunities/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while updating opportunity", error);
    return error;
  }
};

export const deleteOpportunity = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/opportunities/${id}`
    );
    return response;
  } catch (error) {
    console.log("Error: while deleting opportunity", error);
    return error;
  }
};

export const getOpportunitiesById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/opportunities/${id}`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting opportunity by id", error);
    return error;
  }
};

export const getOpportunitiesByOrganization = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/organizations/${id}/opportunities`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting opportunity by id", error);
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
