import request from "supertest";
import express from "express";
import { save } from "./lib";
import dictionaryRoutes from "./dictionary-routes";


jest.mock("./lib", () => ({
    save: jest.fn()
}));

jest.mock("../data/skiTerms.json", () => [
    {"term": "ski", "defined": "a sport"},
    {"term": "aa", "defined": "aaaa"},
    {"term": "bbb", "defined": "bbb"}
]);

const app = express();

app.use('/dictionary', dictionaryRoutes);

describe("dictionary-routes", () => {
    it("Get /dictionary - success", async() => {
        const {body} = await request(app).get("/dictionary");
        expect(body).toEqual([{"term": "ski", "defined": "a sport"},
        {"term": "aa", "defined": "aaaa"},
        {"term": "bbb", "defined": "bbb"}]);
    });

    it("DELETE /dictionary/bbb -- success", async() => {
        const{body} = await request(app).delete("/dictionary/bbb");
        expect(body).toEqual({
            status: "success",
            removed: "bbb",
            newLength: 2
        });
        expect(save).toHaveBeenCalledWith([
            {"term": "ski", "defined": "a sport"},
        {"term": "aa", "defined": "aaaa"},
        ])
    });
});