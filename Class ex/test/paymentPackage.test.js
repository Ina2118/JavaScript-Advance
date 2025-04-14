import { assert } from "chai";
import { PaymentPackage } from "../PaymentPackage.js"
import { afterEach, beforeEach, describe, it } from "mocha";


describe("create instance", () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage("Pesho", 10);
    })
    afterEach(() => {
        paymentPackage = null;
    })

    it("name property", () => {
        assert.equal(PaymentPackage._name, "Pesho", "name property is corect set to Pesho");
    })
    it("value property", () => {
        assert.strictEqual(PaymentPackage._value, 10, "value must be 10");
    })
    it("VAT property", () => {
        assert.strictEqual(PaymentPackage.VAT, 20, "vat is corect");
    })
    it("active property", () => {
        assert.strictEqual(PaymentPackage.active, true, "active is correct");
    })
})

describe("test Accessor", () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage("Gosho", 10);
    })

    it("correct get and set name", () => {
        assert.strictEqual(paymentPackage._name, "Gosho");
        paymentPackage.name = "Tosho";
        assert.strictEqual(paymentPackage.name, "Tosho");
    })

    it("correct get and set value", () => {
        assert(paymentPackage.value, 10);
        paymentPackage.value = 20;
        assert.strictEqual(paymentPackage.value, 20);
    })
    it("correct get and set VAT", () => {
        assert.strictEqual(paymentPackage.VAT, 20);
        paymentPackage.VAT = 10;
        assert.strictEqual(paymentPackage.VAT, 10);
    })
    it("correct get and set active", () => {
        assert.strictEqual(paymentPackage.active, true)
        paymentPackage.active = false;
        assert.strictEqual(paymentPackage.active, false)
    })
})

describe("test invalid value", () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage("Gosho", 10);
    })
    it("test invalid name", () => {
        assert.throws(() => new PaymentPackage("", 10), "Name must be a non-empty string", "non empty string");
        assert.throws(() => new PaymentPackage(10, 10), "Name must be a non-empty string", "non empty string");
    })

    it("test invalid value", () => {
        assert.throws(() => new PaymentPackage("Tosho", -1), "Value must be a non-negative number", "non negative number");
        assert.throws(() => new PaymentPackage("Tosho", 10), "Value must be a non-negative number", "");
    })
    it("test invalid VAT", () => {
        assert.throws(() => paymentPackage.VAT = -10, "VAT must be a non-negative number", "negative vat");
        assert.throws(() => paymentPackage.VAT = "10", "VAT must be a non-negative number", "negative vat");
    })
    it("test invalid active", () => {
        assert.throws(() => PaymentPackage.active = "true", "Active status must be a boolean")
        assert.throws(() => PaymentPackage.active = "Gosho", "Active status must be a boolean")
    })

})


