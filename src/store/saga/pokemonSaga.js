import { all, fork, put, takeLatest } from "redux-saga/effects";
import { pokemonAction } from '../actions';

export function* pokemonSaga(action) {
    // console.log("action-List", action.params);
    try {
        const response = action.params;
        response.success
            ? yield put({ type: pokemonAction.POKEMON_SUCCESS, response })
            : yield put({ type: pokemonAction.POKEMON_FAIL, response })
    } catch (error) {
        yield put({ type: pokemonAction.POKEMON_FAIL, error: error });
    }
}

export function* pokemonSagaWatcher() {
    yield takeLatest(pokemonAction.POKEMON_REQUEST, pokemonSaga);
}

export default function* rootSaga() {
    yield all([
        fork(pokemonSagaWatcher),
    ]);
}