import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    // withCredentials: true
});

instance.interceptors.response.use((response) => {
    // Thrown error for request with OK status code
    const { data } = response;
    return response.data;
});
export const myStripePaymentApi = async (data) => {
    console.log(data)
    try {
        const response = await instance.post(
            "/create-payment-intent",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("API Response:", response.data);
        return response; // Trả về clientSecret
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};


