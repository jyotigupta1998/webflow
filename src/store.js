import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {AddToAction,RemoveTodoAction} from "./actions";
                         
const reducer=combineReducers({
   Todo:AddToAction,  
    
})

const initialState ={}

const middleware=[thunk];

const store =createStore( 
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store