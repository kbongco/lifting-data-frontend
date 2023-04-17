
import api from './api-config'

export const getDeadlift = async () => {
  const resp = await api.get('/deadlift');
  return resp.data;
}