module.exports = {
  init (playlists) {
    return playlists
      .filter(el => el !== null)
      .map(el => el.tracks)
      .reduce((prev, curr) => prev.concat(curr))
  },
  match (features, source) {
    return features
      .filter(el => {
        if (source.dance) {
          return el.danceability >= Number(source.dance);
        } else {
          return true;
        }
      })
      .filter(el => {
        if (source.energy) {
          return el.energy >= Number(source.energy);
        } else {
          return true;
        }
      })
      .filter(el => {
        if (source.loud) {
          return el.loudness <= Number(source.loud);
        } else {
          return true;
        }
      })
      .filter(el => {
        if (source.instrumental) {
          return el.instrumentalness >= Number(source.instrumental);
        } else {
          return true;
        }
      })
      .filter(el => {
        if (source.live) {
          return el.liveness >= Number(source.live);
        } else {
          return true;
        }
      })
      .filter(el => {
        if (Number(source.mood)) {
          return el.valence >= 0.5;
        } else if (Number(source.mood) === 0) {
          return el.valence <= 0.5;
        } else {
          return true;
        }
      })
      .filter(el => {
        if (Number(source.major) && Number(source.minor)) {
          return true;
        } else if (Number(source.major)) {
          return Number(el.mode);
        } else if (Number(source.minor)) {
          return Number(el.mode) === 0;
        } else {
          return true;
        }
      })
      .filter(el => {
        if (source.tempo) {
          return (el.tempo >= (source.tempo - 15)) || (el.tempo <= (source.tempo + 15));
        } else {
          return true;
        }
      })
      .map(el => el.id);
  },
  parse (values, tempo) {
    const res = {};
    if (~values.indexOf('Strict')) {
      res.strict = 1;
    } else {
      res.strict = 0;
    }
    if (~values.indexOf('Dance')) {
      res.dance = 0.7;
    } else {
      res.dance = '';
    }
    if (~values.indexOf('Energy')) {
      res.energy = 0.7;
    } else {
      res.energy = '';
    }
    if (~values.indexOf('Loud')) {
      res.loud = -30;
    } else {
      res.loud = '';
    }
    if (~values.indexOf('Instrument')) {
      res.instrumental = 0.7;
    } else {
      res.instrumental = '';
    }
    if (~values.indexOf('Live')) {
      res.live = 0.7;
    } else {
      res.live = '';
    }
    if (~values.indexOf('Happy') && ~values.indexOf('Sad')) {
      res.mood = '';
    } else if (~values.indexOf('Happy')) {
      res.mood = 1;
    } else if (~values.indexOf('Sad')) {
      res.mood = 0;
    } else {
      res.mood = '';
    }
    if (~values.indexOf('Major')) {
      res.major = 1;
    } else {
      res.major = '';
    }
    if (~values.indexOf('Minor')) {
      res.minor = 1;
    } else {
      res.minor = '';
    }
    if (Number(tempo) === 50) {
      res.tempo = ''
    } else {
      res.tempo = (1+((tempo-50)/100))*120;
    }
    return res;
  }
}