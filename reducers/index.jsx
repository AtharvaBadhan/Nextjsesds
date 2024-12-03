// reducers/index.js
import { combineReducers } from 'redux';

// Example reducer
const sampleReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export default rootReducer;
