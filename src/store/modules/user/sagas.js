import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    // -> object assign junta objetos, e como parametro se tiver preenchido o oldpassword ele passara o restante dos campos no caso nova senha, se nao passara vazio
    const profile = {
      name,
      email,

      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, '/users', profile);
    Alert.alert('Sucesso!', 'Seu perfil foi atualizado!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha ao atualizar!',
      'Houve um erro ao atualizar seu perfil, verifique seus dados.'
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
