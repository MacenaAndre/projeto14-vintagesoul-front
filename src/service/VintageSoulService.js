import axios from "axios";

const BASE_URL = "http://localhost:5000";

function SignInApi(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
};

export {SignInApi};