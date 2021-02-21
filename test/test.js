const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
    it('respond with hello world', (done) => {
        //navigate to root and check the response is 'hello world'
        request(app).get('/').expect('hello world!',done);
    })
})

// describe('GET /typingErrorTest', () => {
//     it('respond with error', (done) => {
//         request(app).get('/typingErrorTest').expect('일부러 에러냄',done);
//     })
// })

//에러나면 빌드 안되는 것까지 확인~~