const client = require('./redis.js');
const search = require('../userModels/findTrack.js');
const locate = require('../userModels/findUser.js');

async function getPlaylist(id, simple) {
  return new Promise((resolve, reject) => {
    const playlist = {};
    playlist.id = id;
    client.hgetall(`playlist:${id}`, async (err, details) => {
      if (err) reject(err);
      if (!details) resolve(null);
      playlist.adminId = details.admin;
      const user = await locate(playlist.adminId);
      playlist.admin = user[0].name;
      playlist.name = details.name;
      if (details.dance) playlist.dance = 'Dance';
      if (details.energy) playlist.energy = 'Energetic';
      if (details.loud) playlist.loud = 'Loud';
      if (details.instrumental) playlist.instrumental = 'Instrumental';
      if (details.live) playlist.live = 'Live';
      if (details.mood === '1') playlist.mood = 'Happy';
      if (details.mood === '0') playlist.mood = 'Sad';
      if (details.major) playlist.major = 'Major';
      if (details.minor) playlist.minor = 'Minor';
      if (details.done) playlist.done = true;
      client.smembers(`tracks:${details.tracks}`, async (err, tracks) => {
        if (err) reject(err);
        playlist.length = tracks.length;
        playlist.tracks = await Promise.all(tracks.map(async el => await search(el)));
        playlist.tracks = playlist.tracks.length ? playlist.tracks.reduce((prev, curr) => prev.concat(curr)) : [];
        playlist.cover = playlist.tracks.length ? playlist.tracks.reduce((acc,el) => {
          if (acc.length < 4) {
            acc.push({image: el.image, popularity: el.popularity});
            return acc.sort((a,b) => b.popularity - a.popularity);
          } else if (el.popularity > acc[3].popularity) {
            acc = [
              ...acc.slice(0,3),
              {image: el.image, popularity: el.popularity}
            ];
            return acc.sort((a,b) => b.popularity - a.popularity);
          } else return acc;  
        }, []).map(el => el.image) : undefined;
        client.smembers(`collabs:${details.collabs}`, async (err, users) => {
          if (err) reject(err);
          collabers = await Promise.all(users.map(async el => await locate(el)));
          playlist.collabers = collabers.map(el => el[0].name);
          resolve(playlist);
        })
      })
    });
  });
}

module.exports = getPlaylist;