import {combineReducers} from "redux";
// import {routerReducer} from "react-router-redux";
import {incrementReducer} from './reducer';
// import { syncHistory, syncParams, routeParamsReducer } from 'react-router-redux-params'

const rootReducer = combineReducers({
        incrementReducer
        // routing: routerReducer,
    });

export default rootReducer;