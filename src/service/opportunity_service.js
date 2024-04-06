import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function opportunity_service() {

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  const [location, setLocation] = useState(null);
  const [objective, setObjective] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [organizationId, setOrganizationId] = useState(null);

  const [opportunities, setOpportunities] = useState(null);
  const [organizations, setOrganizations] = useState(null);

  const [opportunityById, setOpportunityById] = useState(null);
  const [opportuntyByOragnization, setOpportuntyByOragnization] = useState(null);

  const navigate = useNavigate();

  const createOpportunity = async () => {
    const data = {
      "title": title,
      "description": description,
      "type": type,
      "location": location,
      "objective": objective,
      "startDate": startDate,
      "endDate": endDate,
      "organizationId": organizationId
    }
    try {
      const response = await axios.post("http://localhost:8080/opportunities", data);
      setOpportunities(response.data);
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

  const updateOpportunity = async (id) => {
    const updatedData = {
      "title": title,
      "description": description,
      "type": type,
      "location": location,
      "objective": objective,
      "startDate": startDate,
      "endDate": endDate,
      "organizationId": organizationId
    }
    try {
      const response = await axios.put(`http://localhost:8080/opportunities/${id}`, updatedData);
      setOpportunities(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/");
      }
    }
  }

  const deleteOpportunity = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/opportunities/${id}`);
      setOpportunities(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/");
      }
    }
  }

  const getOpportunitiesById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/opportunities/${id}`);
      setOpportunityById(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/");
      }
    }
  };

  const getOpportunitiesByOrganization = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/organizations/${id}/opportunities`);
      setOpportuntyByOragnization(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/");
      }
    }
  };

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

  return (
    <div>
      
    </div>
  )
}
