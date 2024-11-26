import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import themeReducer from "../store/slices/ThemeSlice";

// Configuração do redux-persist
const persistConfig = {
    key: "root", // Chave para salvar no localStorage
    storage,
    whitelist: ["theme"], // Apenas o tema será persistido
};

// Combina os reducers
const rootReducer = combineReducers({
    theme: themeReducer, // Adiciona o reducer de tema
});

// Aplica persistência aos reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuração da Store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Cria o persistor
export const persistor = persistStore(store);

// Tipos para uso em hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
