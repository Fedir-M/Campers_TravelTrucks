import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import trucksReducer from "./trucks/trucksSlice";
import buttonActiveClickReducer from "../redux/trucks/buttonActiveClickSlice";
import favoritesReducer from "./trucks/favoritesSlice";
import filterOpenReducer from "./trucks/filterOpen";

const persistConfig = {
  key: "favorites",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    buttonActive: buttonActiveClickReducer,
    // favorites: favoritesReducer, was before Persist
    favorites: persistedReducer, // became after Persist applied
    filterOpen: filterOpenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoring of redux-persist actions
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
