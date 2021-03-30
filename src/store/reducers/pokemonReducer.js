import { pokemonAction } from '../actions';

const initialState = {
    list: [],
};
const pokemonReducer = (state = initialState, action) => {
    // console.log("---reducer-List", action.params);
    switch (action.type) {
        case pokemonAction.POKEMON_REQUEST:
            return {
                ...state,
            }
        case pokemonAction.POKEMON_SUCCESS:
            return {
                ...state,
                list: action.params,
                error: false,
            }
        case pokemonAction.POKEMON_FAIL:
            return {
                ...state,
                list: action.params,
                error: true,
            }
        default:
            return state;
    }

}
export default pokemonReducer;