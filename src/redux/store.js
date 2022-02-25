// Libraries
import { createStore } from 'redux';

let initialState = {
    topic: "react",
    breadcrumbs: [],
}
  
function reducer(state=initialState, action) {
    switch(action.type) {
        case "SET_TOPIC":
            return {...state, topic: action.payload};
        case "ADD_BREADCRUMB":
            return {...state, breadcrumbs: [...state.breadcrumbs, action.payload]};
        case "BREADCRUMB_CLICK":
            return {...state, breadcrumbs: action.payload};
        default:
            return state;
    }
}
  
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store };