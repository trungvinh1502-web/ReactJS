import { combineReducers } from 'redux';
// import counterReducer from './counterReducer'
import pokemonReducer from './pokemonReducer'

const allReducer = combineReducers({
    // counterReducer,
    pokemonReducer
})
export default allReducer;