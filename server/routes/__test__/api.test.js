const request = require("supertest");
const mongoose = require('mongoose');
const app = require('../../app')

describe("TEST REST API", () => {

    afterAll(done => {
        mongoose.connection.close()
        done()
    })

    it('GET - products - respond with 200 status code', async () => {
        const response = await request(app).get("/products").send()
        expect(response.statusCode).toBe(200)
    })

    it('GET - countries - respond with 200 status code', async () => {
        const response = await request(app).get("/countries").send()
        expect(response.statusCode).toBe(200)
    })

    it('POST - cogs - respond with 200 status code', async () => {
        let mockProduct = {
            "_id": "B08QPPGNNZ",
            "productName": "testName",
            "cogs": {
                "unitManufacturingCost": 11,
                "shipmentUnitCost": 12,
                "monthlyAdvertismentCost": 13,
                "manufacturingCountry": "testCountry"
            }
        }
        const response = await request(app).post("/cogs").send({data: mockProduct})
        expect(response.statusCode).toBe(201)
    })
})