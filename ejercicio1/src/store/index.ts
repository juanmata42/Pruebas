/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import initialState from "./initialState";
import loading from "./loading";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

const combinedReducer = combineReducers({
  loading,
});

// Define a special action type for resetting the state
const RESET_APP_STATE = "RESET_APP_STATE";

export const resetAppState = () => ({
  type: RESET_APP_STATE,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_APP_STATE) {
    // Return the initial state when the reset action is dispatched
    return initialState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
