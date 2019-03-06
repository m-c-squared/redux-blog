import reducer from './users';

describe('Users reducers', () => {
  it('handles a fetch user action', () => {
    const state = {
      id: null,
      name: '',
      username: '',
      email: ''
    };
    const fetchedState = reducer(state, {
      type: 'FETCH_USER',
      payload: {
        id: 2,
        name: 'mc2',
        username: 'usermc2',
        email: 'mc2email@com'
      }
    });
    expect(fetchedState).toEqual({
      id: 2,
      name: 'mc2',
      username: 'usermc2',
      email: 'mc2email@com'
    });
  });
});
