import axios from "axios"
import{
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_EXIST_REQUEST,
    USER_EXIST_SUCCESS,
    USER_EXIST_FAILURE,
    USER_LOGIN_FAILURE
} from "./actionType"


export const userRegisterRequest=()=>({
    type:USER_REGISTER_REQUEST
})
export const userRegisterSuccess=()=>({
    type:USER_REGISTER_SUCCESS
})
export const userRegisterFailure=()=>({
    type:USER_REGISTER_FAILURE
})
export const userRegister=(payload)=>(dispatch)=>{
    console.log(payload,"register")
    dispatch(userRegisterFailure())
    axios.post("https://mod-living-db.herokuapp.com/user",{
        name:payload.fullname,
        email:payload.email,
        password:payload.password,
        
    })
    .then((res)=>dispatch(userRegisterSuccess()))
    .catch((err)=>userRegisterFailure())
}
export const userExistRequest=()=>({
    type:USER_EXIST_REQUEST
})
export const userExistSuccess=(data)=>({
    type:USER_EXIST_SUCCESS,
    payload:{
        data
    }
})
export const userExistFailure=()=>({
    type:USER_EXIST_FAILURE
})
export const userExist=(payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(userExistFailure())
    axios.get("https://mod-living-db.herokuapp.com/user")
    .then((res)=>dispatch(userExistSuccess(res.data)))
    .catch((err)=>userExistFailure())
}

export const userLoginRequest=()=>({
    type:USER_LOGIN_REQUEST
})
export const userLoginSuccess=(data)=>{
    console.log(data)
    return{
    type:USER_LOGIN_SUCCESS,
    payload:{
        data
    }
}
}
export const userLoginFailure=()=>({
    type:USER_LOGIN_FAILURE
})
export const userLogin= (payload)=>async(dispatch)=>{
    console.log(payload ,"payload login")
    dispatch(userLoginRequest())
    
   await axios.get(`https://mod-living-db.herokuapp.com/user?email=${payload.email}&password=${payload.password}`).
    then((res)=>dispatch(userLoginSuccess(res.data)))
    .catch((err)=>dispatch(userLoginFailure()))
}