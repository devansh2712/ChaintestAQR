import {
	SAVE_LANGUAGE,
} from "../actions/types";
let initialState = {
	adminUser: {},
	token: "",
	language: "en",
	configData: [],
};
export default function(state = initialState, action) {
	switch (action.type) {
	case SAVE_LANGUAGE:
		return {...state, language: action.payload};
	case "USER_DATA_SAVE":
		return {...state, adminUser: action.payload};
	case "REMOVE_USER_DATA":
		return {...state, adminUser: {}, token: ""};
	case "SAVE_TOKEN":
		return {...state, token: action.token};
	case "REMOVE_TOKEN":
		return {...state, token: action.token};
	case "SAVE_CONFIG_DATA":
		return {...state, configData: action.payload};
	case "LOGOUT": 
		return {...state, adminUser: {}, token: ""};
	default:
		return state;
	}
}
