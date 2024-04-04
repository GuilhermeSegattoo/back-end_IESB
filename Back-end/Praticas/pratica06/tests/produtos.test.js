const supertest = require("supertest");

const app = require('../app');

const request = supertest(app);

test("Deve retornar 201 no POST e um JSON", async function(){
    const response = await request.post("/produtos").send({nome: "uva", preco: 20.00});
    expect (response.status).toBe(201);
    expect (response.body).toHaveProperty('id', 1);
    expect (response.body).toHaveProperty('nome', 'uva');
    expect (response.body).toHaveProperty('preco', 20.00);
    expect(response.headers['content-type']).toMatch(/JSON/);
});

test("Deve retornar 200 no GET e um JSON", async function(){
   const response = await request.get("/produtos");
   expect (response.status).toBe(200);
   expect (Array.isArray(response.body)).toBe(true);
   expect (response.headers['content-type']).toMatch(/JSON/);
});

test("Deve retornar 200 no GET e um JSON", async function(){
    const response = await request.get("/produtos/1");
    expect (response.status).toBe(200);
    expect (response.body).toHaveProperty();
    expect (response.headers['content-type']).toMatch(/JSON/);
 });
 

