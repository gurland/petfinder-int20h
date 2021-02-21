import { sendRequest } from './helpers';
import { ads, auth } from './endpoints';

export async function testToken(token) {
  return sendRequest({ method: 'get', endpoint: auth.test, headers: { Authorization: `Bearer ${token}` } });
}

export async function login(credentials) {
  return sendRequest({ method: 'post', data: credentials, endpoint: auth.login });
}

export async function register(credentials) {
  return sendRequest({ method: 'post', data: credentials, endpoint: auth.register });
}

export async function searchAds(params) {
  return sendRequest({ method: 'get', data: params, endpoint: ads.search });
}

export async function getAd(id) {
  const endpoint = ads.get.replace(':id', id);
  return sendRequest({ method: 'get', endpoint });
}

export async function createAd(ad) {
  const token = localStorage.getItem('accessToken');
  return sendRequest({ method: 'post', data: ad, endpoint: ads.create, headers: { Authorization: `Bearer ${token}` } });
}

export async function getProfile() {
  const token = localStorage.getItem('accessToken');
  return sendRequest({ method: 'get', endpoint: auth.profile, headers: { Authorization: `Bearer ${token}` } });
}

export async function updateProfile(profileData) {
  const token = localStorage.getItem('accessToken');
  return sendRequest({
    method: 'put',
    endpoint: auth.profile,
    data: profileData,
    headers: { Authorization: `Bearer ${token}` },
  });
}
