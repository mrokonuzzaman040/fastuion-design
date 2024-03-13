import axios from "axios";

const axiosPublic = axios.create( {
    baseURL: 'https://api.lamianasifraisa.com/',
} );

const usePublicApi = () => {
    return axiosPublic;
};

export default usePublicApi;

