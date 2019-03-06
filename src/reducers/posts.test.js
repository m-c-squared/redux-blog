import reducer from './posts';

describe('Posts reducer', () => {
  it('handles a fetch post action', () => {
    const state = {
      userId: '',
      title: '',
      body: ''
    };
    const fetchedState = reducer(state, {
      type: 'FETCH_POST',
      payload: {
        userId: 'mc2',
        title: 'blah',
        body: 'blahblahblah'
      }
    });
    expect(fetchedState).toEqual({
      userId: 'mc2',
      title: 'blah',
      body: 'blahblahblah'
    });
  });
});

