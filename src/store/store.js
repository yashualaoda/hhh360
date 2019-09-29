import { createStore } from 'redux';
import Reducer from './reducer';

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
let storeChange = store.subscribe(() => {
    console.log('state--change')
})
storeChange();
export default store;
