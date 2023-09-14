import { USER_LOGIN_FAILURE, USER_LOGOUT } from "../User/actionTypes";
import { USER_LOGIN_SUCCESS } from "../User/actionTypes";
const intialState={
        userInfo:null
}
const userReducer=(state=intialState,action)=>{
        switch (action.type) {
          case USER_LOGIN_SUCCESS:
        //     console.log(" USER_LOGIN_SUCCESS");
            return {
              userInfo: action.payload,
            };
          case USER_LOGIN_FAILURE:
        //     console.log("USER_LOGIN_FAILURE");
            return {
              error: action.payload,
            };
          case USER_LOGOUT:
            return {
                userInfo:null
            };
          default:
            return state;
        }
}
export default userReducer;