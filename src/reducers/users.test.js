import reducer from './users';
import { FETCH_USER } from '../actions/users';

describe('Users reducers', () => {
  it('handles a fetch user action', () => {
    const state = {
      users: {
        id: null,
        name: '',
        username: '',
        email: ''
      }
    };
    const fetchedState = reducer(state, {
      type: FETCH_USER,
      payload: {
        id: 2,
        name: 'mc2',
        username: 'usermc2',
        email: 'mc2email@com'
      }
    });
    console.log('fetched state', fetchedState);
    // expect(fetchedState).toEqual({
    //   users: {
    //     id: 2,
    //     name: 'mc2',
    //     username: 'usermc2',
    //     email: 'mc2email@com'
    //   }
    // });
  });
});
