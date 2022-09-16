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

function getCart() {
	const auth = getToken();	
		const promise = axios.get(`${BASE_URL}/cart`,auth.token );
		return promise;
	 
};

<<<<<<< HEAD
export {getToken,SignInApi, SignUpApi, getCart};
=======
export {getToken,SignInApi, SignUpApi};
>>>>>>> 5ebe724da9db25f6e79d728755d98f4f1d5fbe33
