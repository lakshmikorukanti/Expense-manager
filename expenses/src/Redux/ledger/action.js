import axios from "axios"

import {
    TRANSACTION_DATA_REQUEST,
    TRANSACTION_DATA_SUCCESS,
    TRANSACTION_DATA_FAILURE,
    DATA_SORT_REQUEST,
    DATA_SORT_SUCCESS,
    DATA_SORT_FAILURE
} from "./actionType"
export const transactionDataRequest=()=>({
    type:TRANSACTION_DATA_REQUEST
})
export const transactionDataSuccess=(data)=>{
    console.log(data,"tdata")
    return{
    type:TRANSACTION_DATA_SUCCESS,
    payload:{
        data
    }
}
}
export const transactionDataFailure=()=>({
    type:TRANSACTION_DATA_FAILURE
})

export const transactionData=(payload)=>(dispatch)=>{
   
    let id=payload[0].id
    console.log(id,"id",payload)
dispatch(transactionDataRequest())

axios.get(`http://mod-living-db.herokuapp.com/transaction?user_id=${id}`)

.then((res)=>dispatch(transactionDataSuccess(res.data)))
.catch((err)=>dispatch(transactionDataFailure()))
}

export const dataSortRequest=()=>({
    type:DATA_SORT_REQUEST
})
export const dataSortSuccess=(data)=>{
    console.log(data,"tdata")
    return{
    type:TRANSACTION_DATA_SUCCESS,
    payload:{
        data
    }
}
}
export const dataSortFailure=()=>({
    type:TRANSACTION_DATA_FAILURE
})