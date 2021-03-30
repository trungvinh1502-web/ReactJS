import { all, fork, put, takeLatest } from "redux-saga/effects";
import { counterAction } from '../actions';

export function* counterSaga(action) {
    try {
        const response = action
        yield put({ type: counterAction.COUNT_INCREMENT, response })
    } catch (error) {
        yield put({ type: counterAction.COUNT_DECREMENT, error: error });
    }
}

export function* counterSagaWatcher() {
    // yield takeLatest(counterAction.COUNT_INCREMENT, counterSaga);
    // yield takeLatest(counterAction.COUNT_DECREMENT, counterSaga);
}

export default function* rootSaga() {
    yield all([
        fork(counterSagaWatcher),
    ]);
}