import { createStore } from "redux";
import meetingsReducer from "./reducers/meetingsReducer";

const store = createStore(meetingsReducer);

export default store;
