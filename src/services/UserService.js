//import axios from "axios"
import axios from "./customize-axios";
const fetchAllUser = (page) =>  {
    return axios.get(`/api/users?page=${page}`);
}
const postCreateUser = (name, job) => {
    return axios.post('/api/users', {name: name, job: job})
}
const putUpdateUser = (name, job) => {
    return axios.put("/api/users/2", {name, job})
}
export {fetchAllUser, putUpdateUser};

export {postCreateUser}