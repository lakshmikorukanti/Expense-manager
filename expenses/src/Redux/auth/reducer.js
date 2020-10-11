import{
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_EXIST_FAILURE,
    USER_EXIST_SUCCESS,
    USER_EXIST_REQUEST
} from "./actionType"
export const initState = {
    errorReg: "",
    user:[],
    userComp:[],
    successReg: "",
    errorLogin: "",
    successLogin: "",
    isAuth: false,
  };
  const authreducer = (state = initState, { type, payload }) => {
    switch (type) {
        case USER_REGISTER_REQUEST:
            return{
                ...state
            }
        case USER_REGISTER_SUCCESS:
            return{
                ...state,
                successReg:"Registration Success"
            }
        case USER_REGISTER_FAILURE:
            return{
                ...state,
                errorReg:"something went wrong or User already Exists"
            }
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                isAuth:false
            }
        case USER_LOGIN_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isAuth:true,
                user:payload.data
            }
        case USER_LOGIN_FAILURE:
            return{
                ...state,
                errorLogin:"Wrong Password or email"
            }
        case USER_EXIST_REQUEST:
            return{
                ...state
            }
        case USER_EXIST_SUCCESS:
            return{
                ...state,
                userComp:payload.data
            }
            case USER_LOGIN_FAILURE:
                return{
                    ...state
                }
        default:
                return state;
     }
};
export default authreducer;