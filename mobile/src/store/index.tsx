import AsyncStorage from '@react-native-community/async-storage';
import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {combineReducers} from 'redux';
import onboarding from './onboarding';
import list from './list';

const rootReducer = combineReducers({
  onboarding,
  list,
});
/** Root End */

const persistConfig = {
  key: 'root',
  whiteList: ['onboarding', 'list'],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
