import  {USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT} from "../User/actionTypes";
const userLogin = (data) => {

        return async(dispatch)=>{
           dispatch({
                   type:USER_LOGIN_SUCCESS,
                   payload:data
           });
           localStorage.setItem("userAuth",JSON.stringify(data));
        }
}
const userLoginFailure = (data) => async(dispatch)=>{
        return dispatch({
        type: USER_LOGIN_FAILURE,
        payload:data,
        })
}
        
const userLogOut=(data)=>async(dispatch)=>{
        return dispatch({
        type:USER_LOGOUT,
        payload:data
         })
}
export {userLogin,userLoginFailure, userLogOut};