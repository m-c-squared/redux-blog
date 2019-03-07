import reducer from './comments';

describe('Comments reducer', () => {
  it('handles a fetch comment action', () => {
    const state = {
      comments: {
        postId: null,
        body: ''
      }
    };
    const fetchedState = reducer(state, {
      type: 'FETCH_COMMENT',
      payload: {
        postId: 2,
        body: 'blahblahblah'
      }
    });
    expect(fetchedState).toEqual({
      comments: {
        postId: 2,
        body: 'blahblahblah'
      }
    });
  });
});
