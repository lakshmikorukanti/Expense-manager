import { TRANSACTION_DATA_REQUEST, TRANSACTION_DATA_SUCCESS, TRANSACTION_DATA_FAILURE, DATA_SORT_REQUEST, DATA_SORT_SUCCESS, DATA_SORT_FAILURE } from "./actionType";
import { loadData, saveData } from "../../Components/localStorage";

export const initState = {
	TData: loadData("TData") || [],
	sortData: [],
};
const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case TRANSACTION_DATA_REQUEST:
			return {
				...state,
			};
		case TRANSACTION_DATA_SUCCESS:
        console.log(payload.data, "tran success")
			saveData("TData", payload.data);
			return {
				...state,
				TData: payload.data,
			};
		case TRANSACTION_DATA_FAILURE:
			return {
				...state,
			};
		case DATA_SORT_REQUEST:
			return {
				...state,
			};
		case DATA_SORT_SUCCESS:
			// saveData("TData", payload.data);
			return {
				...state,
				// TData: payload.data,
			};
		case DATA_SORT_FAILURE:
			return {
				...state,
			};
		default:
			return state;
	}
};
export default reducer;
