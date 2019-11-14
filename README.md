## listmera-server

Welcome to the Github repository for Listmera! Listmera is a platform to create true collaborative playlists for Spotify. Sign-up for the platform, create a playlist and invite your friends and Listmera will find the music you have in common and create a playlist based on that. There is a guarantee that any Listmera playlist used at a party will have at least 1 song for everyone (or everytwo).



## Getting Started

### Prerequisites

- Download and install [redis](https://redis.io/download)
- Download and install [mongoDB](https://docs.mongodb.com/getting-started/shell/installation/)

Use [postman](https://www.getpostman.com/) to test out the end-points or clone [listmera-client](https://github.com/vidocco/listmera-client) to see the full platform working.

### Installing

- Clone this repo `git clone https://github.com/vidocco/listmera-server`
- Initialize redis with `redis-server` (use `redis-cli` to query the playlist database).
- Initialize mongoDB client (run `mongo`) and create a new database `use listmera`.
- Move into the new folder `cd listmera-server`
- Install all dependencies`npm install`
- To start the back-end run `nodemon app.js`. Nodemon should start the back-end in the port 3000 and update automatically after any saved change made to the code.

## Built with

- [Koa](http://koajs.com/)
  - [koa-body-parser](https://www.npmjs.com/package/koa-body-parser) (koa-bodyparser had some conflicts with the rest of the code that we still have to resolve).
  - [koa-cors](https://www.npmjs.com/package/koa-cors)
  - [koa-router](https://www.npmjs.com/package/koa-router)
- [Spotify API](https://developer.spotify.com/web-api/)
  - [spotify-web-api-node](https://www.npmjs.com/package/spotify-web-api-node)
- [redis](https://www.npmjs.com/package/redis)
- [mongodb](https://www.npmjs.com/package/mongodb)

## Coming Soon

- [Socket.IO](https://socket.io/): display real-time updates for playlists collaborations.
- [Mongoose](https://www.npmjs.com/package/mongoose): improve safety of mongoDB database.
- Privacy levels for playlists: public or invite only.
- Discover functionality that will propose 500 new songs based on 5  or more songs you like.
- Asking for further information on register if information is missing.



## Sending Feedback

Please feel free to write an issue in this github repo if you have any feedback, suggestions, improvements and (specially) if you bump into any bugs. I will be happy to solve them :).



## Collaborating

If you want to collaborate with this repo, please leave an issue beforehand to let us know and to ensure that you are not working on anything that is already on the way.