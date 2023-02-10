import { configureStore } from '@reduxjs/toolkit';
import { load, save } from 'redux-localstorage-simple';
import missionsReducer from './missions/missionsSlice';
import rocketsReduer from './rockets/rocketSlice';

const rootReducer = {
  missions: missionsReducer,
  rockets: rocketsReduer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
  preloadedState: load(),
});

export default store;
