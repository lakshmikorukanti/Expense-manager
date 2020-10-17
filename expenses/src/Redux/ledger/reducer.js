import{
    TRANSACTION_DATA_REQUEST,
    TRANSACTION_DATA_SUCCESS,
    TRANSACTION_DATA_FAILURE,
    DATA_SORT_REQUEST,
    DATA_SORT_SUCCESS,
    DATA_SORT_FAILURE
} from "./actionType"
export const initState = {
  TData:[],
  sortData:[]
  };
  const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case TRANSACTION_DATA_REQUEST:
            return{
                ...state
            }
        case TRANSACTION_DATA_SUCCESS:
            return{
                ...state,
                TData:payload.data
            }
        case TRANSACTION_DATA_FAILURE:
            return{
                ...state
            }
            case DATA_SORT_REQUEST:
            return{
                ...state
            }
        case DATA_SORT_SUCCESS:
            return{
                ...state,
                TData:payload.data
            }
        case DATA_SORT_FAILURE:
            return{
                ...state
            }
            default:
                return state;
     }
};
export default reducer;