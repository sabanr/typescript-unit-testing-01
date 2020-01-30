"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var calculator_1 = __importDefault(require("../src/calculator"));
describe("calculate", function () {
    it("add", function () {
        var result = calculator_1.default.Sum(5, 2);
        chai_1.expect(result).equal(7);
    });
    it("subtract", function () {
        var result = calculator_1.default.Difference(5, 2);
        chai_1.expect(result).equal(3);
    });
});
//# sourceMappingURL=calculator.test.js.map