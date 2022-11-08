import {configureStore, combineReducers} from '@reduxjs/toolkit'
import ProductCartSlice from './productCartReducer/ProductCartSlice'

import {persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:"root",
    version:1,
    storage
}

const reducer = combineReducers({
    product: ProductCartSlice
})
const persistedReducer = persistReducer(persistConfig, reducer)
export const Store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: true

})