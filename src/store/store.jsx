import { legacy_createStore as createStore, combineReducers} from "redux";
import ContactReducer from "../reducers/ContactReducer";
import authReducer from "../reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

let reducers = combineReducers({
  ContactReducer: ContactReducer,
  authReducer: authReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor };
