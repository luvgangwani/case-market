import axios from 'axios';

export const getAllClients = () => (
    axios.get(`/api/client`)
        .then(response => response)
);

export const getClient = (clientId) => (
    axios.get(`/api/client/${clientId}`)
        .then(response => response)
);

export const getAllLawyers = () => (
    axios.get(`/api/lawyer`)
        .then(response => response)
);

export const getLawyer = (lawyerId) => (
    axios.get(`/api/lawyer/${lawyerId}`)
        .then(response => response)
);

export const login = (email,password, roleName) => (
    axios.post(`/api/login/${roleName}`, {email, password})
        .then(response => response)
);