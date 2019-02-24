import axios from 'axios';

export const getAllClients = () => (
    axios.get(`/api/client`)
        .then(response => response.data)
);

export const getClient = (clientId) => (
    axios.get(`/api/client/${clientId}`)
        .then(response => response.data)
);

export const getAllLawyers = () => (
    axios.get(`/api/lawyer`)
        .then(response => response.data)
);

export const getLawyer = (lawyerId) => (
    axios.get(`/api/lawyer/${lawyerId}`)
        .then(response => response.data)
);

export const login = (email,password, roleName) => (
    axios.post(`/api/login/${roleName}`, {email, password})
        .then(response => response.data)
);

export const getLawyerRecommendations = (topic, location, query) => (
    axios.post(`/api/lawyer-recommendations`, {topic, location, query})
        .then(response => response.data)
);

export const register = (userObj) => (
    axios.post(`/api/register/client`, { userObj })
        .then(response => response.data)
);