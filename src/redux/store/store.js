import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { movieListReducer } from '../reducers/movieReducers'
import { userLoginReducer } from "../reducers/userReducers";
import { userRegisterReducer } from "../reducers/userReducers";
import { userDetailsReducer } from "../reducers/userReducers";
import { userUpdateProfileReducer } from "../reducers/userReducers";
import { usersLikesListReducer } from "../reducers/userReducers";

const combinedReducers = combineReducers({
  movieList: movieListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  usersLikesList: usersLikesListReducer
});

const userInfoFromLocalStorage = localStorage.getItem('userInfoForMovieMatch2021App') ?
JSON.parse(localStorage.getItem('userInfoForMovieMatch2021App')) : null

const initState = {
  userLogin: { userInfo: userInfoFromLocalStorage }
};

const middleware = [thunk];

const appStore = createStore(
  combinedReducers,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default appStore