//base da api https://api.themoviedb.org/3/
// url da api movie/now_playing?api_key=9c4f8975349f627f11cfe07078c55525
import axios from "axios";
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;