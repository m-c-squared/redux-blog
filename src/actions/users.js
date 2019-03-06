import { getUsers } from '../services/blogApiServices';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: getUsers()
});
