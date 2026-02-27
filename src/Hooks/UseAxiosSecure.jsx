import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://task-api-eight-flax.vercel.app/'
});


const UseAxiosSecure = () => {
    return axiosInstance;
};

export default UseAxiosSecure;