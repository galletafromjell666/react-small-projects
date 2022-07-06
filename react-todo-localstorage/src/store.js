import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./features/toDo/toDoSlice.js";
import createModalReducer from "./features/createModal/createModalSlice.js"
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const toDoPersistedReducer = persistReducer(persistConfig, toDoReducer)
//
export const store = configureStore({
  reducer:{
    toDo: toDoPersistedReducer,
    createModal: createModalReducer
  }
});


export const persistor = persistStore(store)