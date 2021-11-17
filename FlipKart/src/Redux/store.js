import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';



const reducer=combineReducers({    
})

const middleWare=[thunk];

const store= createStore(
    reducer, composeWithDevTools(applyMiddleware(...middleWare))
)
export default store;