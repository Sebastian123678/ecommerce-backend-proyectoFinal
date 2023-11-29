const request = require('supertest');
const app = require('../app');

let id;
let token;

test('POST /users', async () => {
    const body = {
        firstName: "Sebas",
        lastName: "Laiton",
        email: "sebaslai@mail.com",
        password: "12345",
        phone: "1234567890"
    };
    const res = await request(app).post('/users').send(body);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(body.firstName);
    expect(res.body.id).toBeDefined();
});

test('POST /users/login', async () => {
    const body = {
        email: "sebaslai@mail.com",
        password: "12345"
    }
    const res = await request(app)
        .post('/users/login')
        .send(body);
    token = res.body.token
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
});

test('POST /users/login debe retornar credenciales incorrectas', async () => {
    const body = {
        email: "incorrecto@mail.com",
        password: "incorrecto"
    }
    const res = await request(app).post('/users/login').send(body);
    expect(res.status).toBe(401);
})

test('GET /users', async () => {
    const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('PUT /users/:id', async () => {
    const user = {
        lastName: "Sebastian"
    };
    const res = await request(app)
        .put(`/users/${id}`)
        .send(user)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(user.name);
});

test ('DELETE /users/:id', async () => {
    const res = await request(app)
        .delete(`/users/${id}`)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(204);
})