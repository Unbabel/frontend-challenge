import API from "./API";

export default {
    getItems: () => API.get('/5ae1c5792d00004d009d7e5c'),
    uploadItems: (d)=> API.post('/5ae1c5792d00004d009d7e5c',d)
}
