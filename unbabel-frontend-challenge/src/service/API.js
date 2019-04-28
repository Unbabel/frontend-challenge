import axios from "axios";

const baseURL  =  "http://www.mocky.io/v2";

export default  axios.create({
    baseURL
})
