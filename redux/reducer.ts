

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import userSlice from "./user/userSlice";
import {store} from "next/dist/build/output/store"; // 리덕스 로깅 라이브러리


// 개발모드 체크
const isDev = process.env.NODE_ENV === 'development';

const createStore = () => {
    const middleware = getDefaultMiddleware();
    if (isDev) {
        middleware.push(logger); // 개발모드라면 미들웨어에 logger 추가
    }
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
        devTools: isDev, // 개발모드라면 리덕스 데브툴즈 사용
    });
    return store;
};

const wrapper = createWrapper(createStore, {
    debug: isDev,
});

export default wrapper;

export const rootReducer = combineReducers({
    user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
