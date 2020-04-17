import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { problemRequestSuccess, problemRequestFailure } from './actions';

export function* problemRequest({ payload }) {
    try {
        const { id, description } = payload;

        yield call(api.post, `/delivery/${id}/problems/`, {
            description,
        });

        Alert.alert('Aviso', 'Problema cadastrado com sucesso!');

        yield put(problemRequestSuccess());
    } catch (err) {
        Alert.alert('Aviso', 'Erro ao relatar problema!');
        yield put(problemRequestFailure());
    }
}

export default all([takeLatest('@problem/PROBLEM_REQUEST', problemRequest)]);
