const request = require('supertest');
const app = require('../app');

let id;
let token; // Crear

//Antes de los test un login
beforeAll(async() => {
    const user = {
        email: 'test@gmail.com',
        password: 'test1234'
    }
    const res = await request(app).post('/users/login').send(user);
    token = res.body.token; // Definir
})

test('GET /categories', async () => {
    const res = await request(app).get('/categories');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /categories', async () => {
    const category = {
        name: "TV"
    }
    const res = await request(app)
        .post('/categories')
        .send(category)
        .set('Authorization', `Bearer ${token}`) // Usar
    id = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(category.name);
});

test("PUT '/categories/:id' debe actualizar una categoria", async () => {
    const categories = {
        name: "TV"
    };
    const res = await request(app)
        .put(`/categories/${id}`)
        .send(categories)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(categories.name);
});

test('DELETE /categories/:id', async () => {
    const res = await request(app)
        .delete(`/categories/${id}`)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204);
});