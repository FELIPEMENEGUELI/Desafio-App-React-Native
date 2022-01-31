import axios from "axios";

export const api = axios.create({
    baseURL: 'https://serratecgrupo03.herokuapp.com/'
})
