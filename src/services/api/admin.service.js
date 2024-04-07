import axios from "axios";

export const adminLogin = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/admin/login`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while admin login", error);
    return error;
  }
};

export const createAdmin = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/admin/register`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while creating admin", error);
    return error;
  }
};
