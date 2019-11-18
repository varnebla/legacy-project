const register = require('./spotifyController').register;

const fakeUser = {
  name: 'MockUser',
  username: 'MockUsername',
  picture: 'MockPicture',
  playlists: 'MockAdmin'
};

const fakeContext = {
  request: {
    body: '{}'
  },
  response: {
    body: {}
  }
}

jest.mock('../models/spotifyModels/getAuth.js', () => {
  return jest.fn().mockResolvedValue([{
    name: 'MockUser',
    username: 'MockUsername',
    picture: 'MockPicture',
    adminOf: 'MockAdmin'
  }]);
})


describe('spotifyRegister method', () => {
  it('method Register is declared', ()=> {
    expect(register).toBeDefined();
  })

  it('return an object from register inside response body', async () => {
    await register(fakeContext)
    expect(fakeContext.response.body).toEqual(fakeUser);
  })

  it('when success status code is 200', async ()=> {
    await register(fakeContext);
    expect(fakeContext.status).toEqual(200);
  })
  
  it('when passing wrong agrs should fail with status code 400', async ()=> {
    const testingError = {}
    await register(testingError);
    expect(testingError.status).toEqual(400);
  })
})