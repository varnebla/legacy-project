const findUser = require('../findUser');

jest.mock('../mongo.js', () => {
  return new Promise((resolve, reject ) => {
    const db = {
      collection: () => ({
        users: {
          1: {name: 'Viktor'},
          2: {name: 'Germanas'},
          3: {name: 'John'}
        },
        find: (id) => {
          return {
          toArray: (cb) => {cb(null, db.collection().users[Object.values(id)[0]])}
        }},
      }),
    }
    resolve(db);
  })
})


describe('Tesing find user function', () => {
  test('findUser is a function', () => {
    expect(typeof findUser).toEqual('function');
  })
  
  test('findUser func finds a user Viktor', async () => {
    expect.assertions(1);
    const fakeId = 1;
    const fakeUser = {name: 'Viktor'};
    const result = await findUser(fakeId);
    expect(result).toEqual(fakeUser);
  })

  test('findUser func finds a user Germanas', async () => {
    expect.assertions(1);
    const fakeId = 2;
    const fakeUser = {name: 'Germanas'};
    const result = await findUser(fakeId);
    expect(result).toEqual(fakeUser);
  })

  test('findUser func should not return a user John', async () => {
    expect.assertions(1);
    const fakeId = 2;
    const fakeUser = {name: 'John'};
    const result = await findUser(fakeId);
    expect(result).not.toEqual(fakeUser);
  })

  test('findUser func should return undefined if there is no user', async () => {
    expect.assertions(1);
    const fakeId = 5;
    const result = await findUser(fakeId);
    expect(result).toBeUndefined();
  })

})

