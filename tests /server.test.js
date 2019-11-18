const request = require('supertest');

const app = require('../app.js');

let server, agent;

// beforeEach((done)=> {
//   server = app.listen(4000, async (err) => {
//     if (err) return done(err);
//     agent = await request.agent(server);
//     done();
//   })
// })

// afterEach((done)=> {
//   return server && server.close(done);
// })

// test('Server works', async () => {
//   await agent.get('/')
// })

describe('testing main / endpoint', () => {
  it('respond with user Data', (done) => {
    request(app)
      .get('/api/register')
      .set('Accept', 'application/json')
      .expect(200)
      .end( (err, res) => {
        if (err) return done(err)
        done()
      })
  })
})





// const request = require('supertest');

// const app = require('../app.js').app;

// // const mockListen = jest.fn();
// // app.listen = mockListen;

// let server = {};

// beforeAll((done) => {
//   server = app.listen(done)
// })

// afterAll( (done) => {
//   console.log(server, 'server');
//   server.close(done)
// })

// test('Server works', () => {
//   expect(mockListen.mock.calls.length).toBe(1);
//   expect(mockListen.mock.calls[0][0]).toBe(3001);
// })