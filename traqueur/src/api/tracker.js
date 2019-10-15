import axios from 'axios';
import { AsyncStorage } from 'react-native';

//Connect to custom track-server api
const instance = axios.create({
    baseURL: 'https://traqueur.herokuapp.com'//Official server url
});

//Uses the token stored on the device if it exists
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },

    (err) => {
        Promise.reject(err);
    }
);

export default instance;