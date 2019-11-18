const get = require('./userController').get;

jest.mock('../models/playlistModels/getDisplayPlaylist.js', () => {
  return jest.fn().mockResolvedValue('mock Function worked')
})

jest.mock('../models/userModels/findUser.js',() => {
  return jest.fn().mockResolvedValue([{
    name: 'MockUser',
    username: 'MockUsername',
    picture: 'MockPicture',
    adminOf: ['MockAdmin']
  }])
})

const fakeContext = {
  headers: {
    user: 'user'
  },
  response: {

  }
};

const fakeResult = {
  name: 'MockUser',
  username: 'MockUsername',
  picture: 'MockPicture',
  adminOf: ['mock Function worked']
}

const fakeFailure = {};

describe('testing UserController get method', () => {
  
  it('Get method is defined', () => {
      expect(get).toBeDefined();
    })
    
  it('Get method return a used in ctx.response,body', async () => {
      await get(fakeContext);
      expect(fakeContext.response.body).toEqual(fakeResult); 
    })

  it('Get method returns status 200 when successful', async () => {
    await get(fakeContext);
    expect(fakeContext.status).toEqual(200);
    })
  
  it('Get method returns status 401 when fails', async () => {
    await get(fakeFailure);
    expect(fakeFailure.status).toEqual(401);
    })

})