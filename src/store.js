import { createStore } from "redux";
import calendarReducer from "./reducers/calendarReducer";

const store = createStore(calendarReducer);

export default store;
