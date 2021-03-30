import { all } from "redux-saga/effects";
// import counterSaga from "./counterSaga";
import pokemonSaga from "./pokemonSaga";

function* allSaga() {
    yield all([
        // counterSaga(),
        pokemonSaga(),
    ]);
}

export default allSaga;
