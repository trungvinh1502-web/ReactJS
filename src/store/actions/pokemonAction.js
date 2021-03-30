const actions = {
    POKEMON_REQUEST: 'POKEMON_REQUEST',
    POKEMON_SUCCESS: 'POKEMON_SUCCESS',
    POKEMON_FAIL: 'POKEMON_FAIL',

    listPokemon: (params) => ({
        type: actions.POKEMON_REQUEST,
        params: params
    }),

}
export default actions;