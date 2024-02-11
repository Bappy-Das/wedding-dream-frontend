
import axios from "axios";

const Axios = axios.create({
    baseURL: "https://weeding-archive.onrender.com",
});

// Where you would set stuff like your 'Authorization' header, etc ...
Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token") || null}`;

// Also add/ configure interceptors && all the other cool stuff
Axios.interceptors.request.use(
    (config) => {
        if (!config.headers.Authorization) {
            const token = JSON.parse(localStorage.getItem("token")) || null;

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default Axios;