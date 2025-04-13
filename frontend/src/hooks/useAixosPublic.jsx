import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: "http://localhost:3000/api"
})

const UseAixosPublic = () => {
    return axiosPublic;
};

export default UseAixosPublic;