import axios from "axios";

export const createAnnouncement = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/announcements",
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while creating announcement", error);
    return error;
  }
};

export const getAllAnnouncements = async () => {
  try {
    const response = await axios.get("http://localhost:8080/announcements");
    return response;
  } catch (error) {
    console.log("Error: while getting all announcements", error);
    return error;
  }
};

export const updateAnnouncement = async (id, data) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/announcements/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.log("Error: while updating announcement", error);
    return error;
  }
};

export const deleteAnnouncement = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/announcements/${id}`
    );
    return response;
  } catch (error) {
    console.log("Error: while deleting announcement", error);
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

export const getAnnouncementsById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/announcements/${id}`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting announcement by id", error);
    return error;
  }
};

export const getAnnouncementsByOrganization = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/organizations/${id}/announcements`
    );
    return response;
  } catch (error) {
    console.log("Error: while getting announcement by id", error);
    return error;
  }
};
