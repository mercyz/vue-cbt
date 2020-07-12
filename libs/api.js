import axios from "axios"
export const login = formData => axios.post("login", formData);