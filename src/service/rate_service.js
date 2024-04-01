import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function rate_service() {

    const [feedback, setFeedback] = useState(null);
    const { rate, setRate } = useState(null);
    const [volunteerId, setVolunteerId] = useState(null);
    const [organizationId, setOrganizationId] = useState(null);
    const [opportunityId, setOpportunityId] = useState(null);

    const [rates, setRates] = useState(null);
    const [organizations, setOrganizations] = useState(null);
    const [volunteers, setVolunteers] = useState(null);
    const [opportunities, setOpportunities] = useState(null);

    const [ratesById, setRatesById] = useState(null);
    const [ratesByOrg, setRatesByOrg] = useState(null);
    const [ratesByVol, setRatesByVol] = useState(null);
    const [ratesByOppo, setRatesByOppo] = useState(null);

    const navigate = useNavigate();

    const addRate = async () => {
        const data = {
            "feedback": feedback,
            "rate": rate,
            "volunteerId": volunteerId,
            "organizationId": organizationId,
            "opportunityId": opportunityId
        }
        try {
            const response = await axios.post("http://localhost:8080/rates", data);
            setRates(response.data);
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

    const getRatesByVol = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/users/${id}/rates`);
            setRatesByVol(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getRatesByOppo = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/opportunities/${id}/rates`);
            setRatesByOppo(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getRatesByOrg = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/organizations/${id}/rates`);
            setRatesByOrg(response.data);
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/");
            }
        }
    }

    const getRatesById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/rates/${id}`);
            setRatesById(response.data);
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
