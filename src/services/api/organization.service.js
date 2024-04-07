import axios from "axios";

export const organizationLogin = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/org/login`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while organization login", error);
    return error;
  }
};

export const createOrganization = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/org/register`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while creating organization", error);
    return error;
  }
};

export const getAllOrganizations = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/organizations`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting all organizations", error);
    return error;
  }
};

export const getOrganizationById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/organizations/${id}`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting organization by id", error);
    return error;
  }
};
