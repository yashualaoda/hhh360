// export default (state = 0, action) => {
//     switch (action.type) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         default:
//             return state;
//     }
// };
import { combineReducers } from 'redux';

const appLoading = (state = 'noloading', action) => {
    switch (action.type) {
        case "updateAppLoading":
            return action.appLoading;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    appLoading
})
export default rootReducer;
