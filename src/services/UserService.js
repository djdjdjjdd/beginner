// import axios from "axios"
import axios from "./customize-axios";
const fetchAllUser = (props) =>  {
    return axios.get('/api/users?page=2');
}

export {fetchAllUser};