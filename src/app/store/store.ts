import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import cartReducer from "./reducers/cart";


// BINDING MIDDLEWARE
const persistConfig = {
    key: 'mks',
    storage,
}

const reducers = combineReducers({
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({ 
    reducer: persistedReducer, 
    middleware: [thunkMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;