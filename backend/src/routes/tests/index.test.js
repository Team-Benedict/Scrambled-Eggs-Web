const request = require('supertest');
const app = require('../../../config/express.js');

describe('GET route responds and has expected content', () => {
    test('route should be / and return "Eggs are being scrambled!"', done => {
        request(app)
            .get('/')
            .send()
            .expect("Eggs are being scrambled!")
            .end(function(err, res){
                if (err) throw err;
                else done();
            });
    });
});
