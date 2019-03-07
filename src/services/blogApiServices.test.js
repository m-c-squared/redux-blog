const { getUser, getUsers, getPosts, getComments } = require('./blogApiServices');

jest.mock('./blogApiServices');

describe('blogApi services', () => {
  it('gets a user', () => {
    return getUser()
      .then(user => {
        expect(user).toEqual([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          }
        ]);
      });
  });

  it('gets a list of users', () => {
    return getUsers()
      .then(users => {
        expect(users).toEqual([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
          }
        ]);
      });
  });

  it('gets a list of posts', () => {
    return getPosts()
      .then(posts => {
        expect(posts).toEqual([
          {
            userId: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
          },
          {
            userId: 1,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
          }
        ]);
      });
  });

  it('gets a list of comments', () => {
    return getComments()
      .then(comments => {
        expect(comments).toEqual([
          {
            postId: 1,
            body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
          },
          {
            postId: 1,
            body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
          }
        ]);
      });
  });
});
