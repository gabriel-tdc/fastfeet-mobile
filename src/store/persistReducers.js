import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'fastfeet',
            storage: AsyncStorage,
            whiteList: ['auth', 'problem'],
        },
        reducers
    );

    return persistedReducer;
};
