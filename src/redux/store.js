import  {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk'
import rootReducer from './root-reducer'

const middelwares = [reduxThunk];
if(process.env.NODE_ENV === 'development'){
    middelwares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middelwares))

export default store