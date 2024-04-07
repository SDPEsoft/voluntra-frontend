import axios from "axios";

export const volunteerLogin = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while voulunteer login", error);
    return error;
  }
};

export const createVolunteer = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/register`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while creating voulunteer", error);
    return error;
  }
};

export const getAllVolunteers = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/users`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting all volunteers", error);
    return error;
  }
};

export const getVolunteerById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${id}`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting volunteer by id", error);
    return error;
  }
};
