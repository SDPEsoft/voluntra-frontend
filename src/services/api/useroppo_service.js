import axios from "axios";

export const registerForOpportunity = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/useroppos`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while registering for opportunity", error);
    return error;
  }
};

export const getAllUseroppos = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/useroppos`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting all useroppos", error);
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
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/opportunities`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const getUserOpposByVol = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}/useroppos`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const getUserOpposByOppo = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/opportunities/${id}/useroppos`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting all opportunities", error);
    return error;
  }
};

export const getUseropposById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/useroppos/${id}`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting useroppo by id", error);
    return error;
  }
};

export const deleteUseroppo = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/useroppos/${id}`
    );
    return response;
  } catch (error) {
    console.log("Error: while deleting useroppo", error);
    return error;
  }
};
