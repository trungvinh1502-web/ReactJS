import { counterAction } from '../actions';

const initialState = {
    count: 2
};
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case counterAction.COUNT_INCREMENT:
            return { count: state.count + 1 }

        case counterAction.COUNT_DECREMENT:
            return { count: state.count - 1 }
        default:
            return state;
    }


}
export default counterReducer;