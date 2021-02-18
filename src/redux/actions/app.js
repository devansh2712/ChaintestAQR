import {
	USER_DATA_SAVE,
	SAVE_TOKEN,
	REMOVE_USER_DATA,
	SAVE_CONFIG_DATA,
	LOGOUT,
	SAVE_LANGUAGE,
} from "./types";
//import {defaultOptions} from '../../config';
import {aqarChain} from "../../aqarchain";

export const saveUserDataLogin = data => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/admin/adminuser/login", data);
		if (response.status === 1) {
			dispatch({type: USER_DATA_SAVE, payload: response.data});
			dispatch({type: SAVE_TOKEN, token: response.data.token});
			resolve(response);
		} else {
			reject(response.message);
		}
	});
};

export const logOut = () => ({
	type: LOGOUT,
});

export const removeUserData = data => async dispatch => {
	dispatch({type: REMOVE_USER_DATA});
};

export const getConfigData = () => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.get("/api/config/");
		if (response.status === 1) {
			dispatch({type: SAVE_CONFIG_DATA, payload: response.data});
			resolve(response);
		} else {
			reject(response.message);
		}
	});
}; 

export const loading = bool => ({
	type: "LOADING",
	isLoading: bool,
});

export const error = error => ({
	type: "ERROR",
	error,
});


export const saveLanguage = language => ({
	type: SAVE_LANGUAGE,
	payload: language,
});