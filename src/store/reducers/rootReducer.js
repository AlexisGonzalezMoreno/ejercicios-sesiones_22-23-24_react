import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { filterReducer } from "./filterReducer"
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer,

        //ASYNC example (LOGIN USER)
        userState: userReducer
    }
)