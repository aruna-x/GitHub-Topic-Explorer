// Libraries
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

let initialState = {
  topic: "react",
  breadcrumbs: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOPIC":
      return { ...state, topic: action.payload };
    case "ADD_BREADCRUMB":
      return { ...state, breadcrumbs: [...state.breadcrumbs, action.payload] };
    case "BREADCRUMB_CLICK":
      return { ...state, breadcrumbs: action.payload };
    case "RESET_BREADCRUMBS":
      return {...state, breadcrumbs: []}
    default:
      return state;
  }
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };
