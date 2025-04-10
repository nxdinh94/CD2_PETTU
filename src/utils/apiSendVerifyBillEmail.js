import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({
    baseURL: 'http://localhost:5678/webhook',
    // withCredentials: true
});

instance.interceptors.response.use((response) => {
    // Thrown error for request with OK status code
    const { data } = response;
    return response.data;
});


export const handleSendVerifyBillEmail = (data) => {
    console.log(data);
    return instance.post(
        '/send-verify',
        data,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
};
