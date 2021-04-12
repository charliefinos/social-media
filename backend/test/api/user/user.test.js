import chai, { expect } from 'chai';
import request from 'supertest';

import post from '../../../routes/postRoutes.js';
import { connectDB, close } from '../../../config/db.js';

describe('GET /api/users/signup', () => {
    before((done) => {
        connectDB()
            .then(() => done())
            .catch((err) => done(err))
    })

    after((done) => {
        close()
            .then(() => done())
            .catch((err) => done(err))
    })

    it('Get user details by username keyword', (done) => {
        request(post).post('/')
            .send({
                caption: "dia de campo",
                image: "/uploads/asdasd"
            })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property('_id')
                expect(body).to.contain.property('caption')
                expect(body).to.contain.property('image')
                expect(body).to.contain.property('user')
                expect(body).to.contain.property('comments')
                expect(body).to.contain.property('createdAt')
                expect(body).to.contain.property('updatedAt')
                expect(body).to.contain.property('__v')
                done();
            })
            .catch((err) => done(err))
    })
})