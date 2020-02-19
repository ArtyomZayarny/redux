import {createStore} from 'redux';
import formReducer from './card/cardReducer'

const store = createStore(formReducer);


export default store;