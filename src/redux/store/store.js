import { applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { legacy_createStore as createStore} from "redux";
import userReducer from "../User/userReducer";
const userAuthorization=localStorage.getItem("userAuth")?JSON.parse(localStorage.getItem("userAuth")):"";
const intialState={
        userInfo:userAuthorization
}

const store=createStore(userReducer,intialState,applyMiddleware(thunk));
export default store;