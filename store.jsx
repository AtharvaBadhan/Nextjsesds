// store.js
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(rootReducer, composeWithDevTools());

export default store;
