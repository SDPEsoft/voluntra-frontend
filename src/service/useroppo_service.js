import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function useroppo_service() {

    const [name, setName] = useState(null);
    const [contact, setContact] = useState(null);
    const [qualification, setQualification] = useState(null);
    const [volunteerId, setVolunteerId] = useState(null);
    const [opportunityId, setOpportunityId] = useState(null);

    const [useroppos, setUserOppos] = useState(null);
    const [volunteers, setVolunteers] = useState(null);
    const [opportunities, setOpportunities] = useState(null);

    const [useropposById, setUseropposById] = useState(null);
    const [useropposByVol, setUseropposByVol] = useState(null);
    const [useropposByOppo, setUseropposByOppo] = useState(null);

    const navigate = useNavigate();

    const registerForOpportunity = async () => {
        const data = {
            "name": name,
            "contact": contact,
            "qualification": qualification,
            "volunteerId": volunteerId,
            "opportunityId": opportunityId
        }
        try {
            const response = await axios.post("http://localhost:8080/useroppos", data);
            setUserOppos(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getAllUseroppos = async () => {
        try {
            const response = await axios.get("http://localhost:8080/useroppos");
            setUserOppos(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getAllVolunteers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/users");
            setVolunteers(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getAllOpportunities = async () => {
        try {
            const response = await axios.get("http://localhost:8080/opportunities");
            setOpportunities(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getUserOpposByVol = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/users/${id}/useroppos`);
            setUseropposByVol(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getUserOpposByOppo = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/opportunities/${id}/useroppos`);
            setUseropposByOppo(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getUseropposById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/useroppos/${id}`);
            setUseropposById(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const deleteUseroppo = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/useroppos/${id}`);
            setUserOppos(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    return (
        <div>

        </div>
    )
}
