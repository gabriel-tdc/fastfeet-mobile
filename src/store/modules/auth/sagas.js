import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { id } = payload;

        const response = yield call(api.get, `deliveryman/${id}`);

        if (response.data.length === 0) {
            Alert.alert('Erro', 'ID não localizado');
            yield put(signFailure());
            return;
        }

        yield put(signInSuccess(response.data));

        // history.push('/encomendas');
    } catch (err) {
        Alert.alert(
            'Erro',
            'Erro ao buscar ID no banco de dados. Tente novamente'
        );
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    //   history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
