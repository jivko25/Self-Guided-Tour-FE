import * as request from "../lib/requester"

const baseUrl = 'http://localhost:3000/auth'

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password
    })
}

export const register = async (email, password) => {
    const result = await request.post(`${baseUrl}/register`, {
        firstName,
        lastName,
        email, 
        password
    })
    return result
}

export const logout = () => request.get(`${baseUrl}/logout`)