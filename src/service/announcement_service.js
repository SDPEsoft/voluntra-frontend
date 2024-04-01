import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function announcement_service() {

    const [message, setMessage] = useState(null);
    const [date, setDate] = useState(null);
    const [organizationId, setOrganizationId] = useState(null);

    const [announcements, setAnnouncements] = useState(null);
    const [organizations, setOrganizations] = useState(null);

    const [announcementsById, setAnnouncementsById] = useState(null);
    const [announcementsByOrganizations, setAnnouncementsByOrganizations] = useState(null);

    const navigate = useNavigate();

    const createAnnouncement = async () => {
        const data = {
            "message": message,
            "date": date,
            "organizationId": organizationId
        }
        try {
            const response = await axios.post("http://localhost:8080/announcements", data);
            setAnnouncements(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getAllAnnouncements = async () => {
        try {
            const response = await axios.get("http://localhost:8080/announcements");
            setAnnouncements(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const updateAnnouncement = async (id) => {
        const updatedData = {
            "message": message,
            "date": date,
            "organizationId": organizationId
        }
        try {
            const response = await axios.put(`http://localhost:8080/announcements/${id}`, updatedData);
            setAnnouncements(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const deleteAnnouncement = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/announcements/${id}`);
            setAnnouncements(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getAllOrganizations = async () => {
        try {
            const response = await axios.get("http://localhost:8080/organizations");
            setOrganizations(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getAnnouncementsById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/announcements/${id}`);
            setAnnouncementsById(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    };

    const getAnnouncementsByOrganization = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/organizations/${id}/announcements`);
            setAnnouncementsByOrganizations(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    };

    return (
        <div>

        </div>
    )
}
