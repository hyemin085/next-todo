import {
  configureStore,
  ConfigureStoreOptions,
  ThunkAction,
  Action, AnyAction,
} from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import thunk, { ThunkMiddleware } from "redux-thunk";
import useSWR, { Middleware, SWRHook } from 'swr'

const { logger } = require("redux-logger");

const persistConfig = {
  key: "root",
  storage,
};

const swrMiddleware: Middleware = (useSWRNext: SWRHook) => (key, fetcher, config) => {
  return useSWRNext(key, fetcher, config)
}
const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(logger);


// const makeStore = () =>
//     configureStore({
//         reducer: persistedReducer,
//         devTools: true,
//         middleware,
//     });
const persistedReducer = persistReducer(persistConfig, reducer);

// @ts-ignore
const storeConfig : ConfigureStoreOptions<AppState, AnyAction,[ThunkMiddleware<AppState, AnyAction>]> = {
  reducer: persistedReducer,
  middleware,
  swrMiddleware,

};
export const store = configureStore(storeConfig);

// @ts-ignore
// export const wrapper = createWrapper<AppStore>(makeStore);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
