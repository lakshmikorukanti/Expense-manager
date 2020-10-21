import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_EXIST_FAILURE, USER_EXIST_SUCCESS, USER_EXIST_REQUEST, USER_LOGOUT_REQUEST } from "./actionType";

import { loadData, saveData } from "../../Components/localStorage.js";

export let initState = {
	errorReg: "",
	user: loadData("user") || [],
	userComp: loadData("userComp") || [],
	successReg: "",
	errorLogin: "",
	successLogin: "",
	isAuth: loadData("isAuth") || false,
};
const authreducer = (state = initState, { type, payload }) => {
	switch (type) {
		case USER_REGISTER_REQUEST:
			return {
				...state,
			};
		case USER_REGISTER_SUCCESS:
			return {
				...state,
				successReg: "Registration Success",
			};
		case USER_REGISTER_FAILURE:
			return {
				...state,
				errorReg: "something went wrong or User already Exists",
			};
		case USER_LOGIN_REQUEST:
			return {
				...state,
				isAuth: false,
			};
		case USER_LOGIN_SUCCESS:
			console.log(payload);
			saveData("isAuth", true);
			saveData("user", payload.data);
			return {
				...state,
				isAuth: true,
				user: payload.data,
			};
		case USER_LOGIN_FAILURE:
			return {
				...state,
				errorLogin: "Wrong Password or email",
			};
		case USER_EXIST_REQUEST:
			return {
				...state,
			};
		case USER_EXIST_SUCCESS:
			saveData("userComp", payload.Data);
			return {
				...state,
				userComp: payload.data,
			};
		case USER_LOGIN_FAILURE:
			return {
				...state,
			};
		case USER_LOGOUT_REQUEST:
			saveData("user", []);
			return {
				...state,
				user: [],
			};
		default:
			return state;
	}
};
export default authreducer;
