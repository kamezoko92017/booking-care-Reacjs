import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {
        email: email,
        password: password
    })
}

const getAllUsers = (inputId) => {
    return axios.post('/api/get-all-users', { id: inputId })
}

export { handleLoginApi, getAllUsers }