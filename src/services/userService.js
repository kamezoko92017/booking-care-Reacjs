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

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
}