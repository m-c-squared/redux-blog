import reducer from './users';

describe('Users reducers', () => {
  it('handles a fetch user action', () => {
    const state = {
      name: '',
      username: '',
      email: ''
    };
    const fetchedState = reducer(state, {
      type: 'FETCH_USER',
      payload: {
        name: 'mc2',
        username: 'usermc2',
        email: 'mc2email@com'
      }
    });
    expect(fetchedState).toEqual({
      name: 'mc2',
      username: 'usermc2',
      email: 'mc2email@com'
    });
  });
});
