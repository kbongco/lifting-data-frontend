import api from './api-config';

export const getBench = async () => {
  const resp = await api.get('/bench');
  return resp.data;
}