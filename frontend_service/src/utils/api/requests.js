import { sendRequest } from './helpers';
import { auth } from './endpoints';

export async function testToken(token) {
  return sendRequest({ method: 'get', endpoint: auth.test, headers: { Authorization: `Bearer ${token}` } });
}

export async function login(credentials) {
  return sendRequest({ method: 'post', data: credentials, endpoint: auth.login });
}

export async function register(credentials) {
  return sendRequest({ method: 'post', data: credentials, endpoint: auth.register });
}
