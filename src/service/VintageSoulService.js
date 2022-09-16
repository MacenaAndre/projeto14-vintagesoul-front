import axios from "axios";

const BASE_URL = "http://localhost:5000";

function getToken() {
	const auth = JSON.parse(localStorage.getItem("VintageSoul"));
	if (auth) {
		const token = {
			headers: {
				Authorization: `Bearer ${auth.token}`,
			},
		};
		return {token, name: auth.name};
	}
	return false;
}

function SignInApi(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
};

function SignUpApi(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
};


export {getToken,SignInApi, SignUpApi};