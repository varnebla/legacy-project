const controller = require('./playlistController');

jest.mock('../engine/engine.js', () => {
  return {
    parse: jest.fn(),
    init: jest.fn()
  }
})

jest.mock('../models/userModels/findUser.js', () => {
  return async function() {
    return 'username';
  }
});
jest.mock('../models/userModels/userPlaylistModel.js', () => {
  return jest.fn().mockResolvedValue({})
});
jest.mock('../models/userModels/removeAdmin.js', () => ({}));
jest.mock('../models/spotifyModels/createPlaylist.js', () => ({}));
jest.mock('../models/playlistModels/createPlaylist.js', () => {
  return jest.fn().mockResolvedValue({})
});
const fakeCreate = require('../models/playlistModels/createPlaylist.js')
jest.mock('../models/playlistModels/getDisplayPlaylist.js', () => {
  return jest.fn().mockResolvedValue({})
});

const fakeDisplay = require('../models/playlistModels/getDisplayPlaylist.js');
jest.mock('../models/playlistModels/getPlaylistDetails.js', () => ({}));
jest.mock('../models/playlistModels/createTrackList.js', () => ({}));
jest.mock('../models/playlistModels/intersectTracks.js', () => ({}));
jest.mock('../models/playlistModels/retrieveTrackList.js', () => ({}));
jest.mock('../models/playlistModels/recentPlaylists.js', () => ({}));
jest.mock('../models/playlistModels/deletePlaylist.js', () => ({}));

describe('playlistController', () => {
  describe('create', () => {
    it('should return the new playlist as body', async () => {
      const fakeContext = {
        request: {
          body: '{}'
        },
        response: {}
      }
      const fakeUser = {
        id: 42
      }
      fakeCreate.mockResolvedValue(fakeUser)

      await controller.create(fakeContext);

      expect(fakeContext.response.body).toBe(fakeUser)
    })
    it('should save ', async () => {
      const fakeContext = {
        request: {
          body: '{}'
        },
        response: {}
      }
      const fakeUser = {
        id: 42
      }
      fakeCreate.mockResolvedValue(fakeUser)
  
      await controller.create(fakeContext);
  
      expect(fakeContext.response.body).toBe(fakeUser)
    })
  })
  
  describe('get', () => {
    it('should receive content', async () => {
      const fakeContext = {
        params: {
          id: '2'
        }
      }
    })
    
  })
  


})
