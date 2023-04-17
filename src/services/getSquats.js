import api from './api-config'

export const getSquats = async () => {
  const resp = await api.get('/squat');
  console.log(resp);
  return resp.data;
}