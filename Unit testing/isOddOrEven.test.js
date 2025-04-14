import { assert } from "chai";
import{isOddOrEven} from"../isOddOrEven";

describe("test with non string value", () =>{
    it("test with array", ()=>{
        assert.isNotOk(isOddOrEven(["Pesho"]), "result must be undefind")
    });
    it("test with object", ()=>{
        assert.equal(isOddOrEven({name: "pesho"}),undefined, "result must be undefind");
    });
    it("test with number", ()=>{
        assert.isNotOk(isOddOrEven(5), "result must be undefind");
    });

    it("test without parameter", ()=>{
        assert.isNotOk(isOddOrEven(), "result must be undefind");
    })
})

describe("test with string value", () =>{
    it("test with even text length", () =>{
        assert.equal(isOddOrEven("abcd"), "even", "result must be even");
    });

    it("test with odd text length", () =>{
        assert.equal(isOddOrEven("abcde"), "odd", "result must be even");
    });
    
})


//4
describe("mathEnforcer", () => {
    describe("addFive method", () => {
        describe("test with invalid values", () => {
            it("test with string", () => {
                assert.isUndefined(mathEnforcer.addFive("Pesho"), "Result must be undefined");
            });

            it("test with array", () => {
                assert.isUndefined(mathEnforcer.addFive([6]), "Result must be undefined");
            });

            it("test with object", () => {
                assert.isUndefined(mathEnforcer.addFive({ num: 5 }), "Result must be undefined");
            });
        });

        describe("test with valid values", () => {
            it("test with negative values", () => {
                assert.equal(mathEnforcer.addFive(-10), -5, "Result must be -5");
                assert.equal(mathEnforcer.addFive(-5), 0, "Result must be 0");
                assert.closeTo(mathEnforcer.addFive(-5.5), -0.5, 0.01, "Result must be -0.5");
            });

            it("test with zero and positive values", () => {
                assert.equal(mathEnforcer.addFive(0), 5, "Result must be 5");
                assert.equal(mathEnforcer.addFive(5), 10, "Result must be 10");
                assert.closeTo(mathEnforcer.addFive(0.5), 5.5, 0.01, "Result must be 5.5");
            });
        });
    });

    describe("subtractTen method", () => {
        describe("test with invalid values", () => {
            it("test with string", () => {
                assert.isUndefined(mathEnforcer.subtractTen("Pesho"), "Result must be undefined");
            });

            it("test with array", () => {
                assert.isUndefined(mathEnforcer.subtractTen([5]), "Result must be undefined");
            });

            it("test with object", () => {
                assert.isUndefined(mathEnforcer.subtractTen({ num: 10 }), "Result must be undefined");
            });
        });

        describe("test with valid values", () => {
            it("test with negative values", () => {
                assert.equal(mathEnforcer.subtractTen(0), -10, "Result must be -10");
                assert.equal(mathEnforcer.subtractTen(-10), -20, "Result must be -20");
                assert.closeTo(mathEnforcer.subtractTen(-0.5), -10.5, 0.01, "Result must be -10.5");
            });

            it("test with zero and positive values", () => {
                assert.equal(mathEnforcer.subtractTen(10), 0, "Result must be 0");
                assert.equal(mathEnforcer.subtractTen(20), 10, "Result must be 10");
                assert.closeTo(mathEnforcer.subtractTen(10.5), 0.5, 0.01, "Result must be 0.5");
            });
        });
    });

    describe("sum method", () => {
        describe("test with invalid values", () => {
            it("test with first parameter as string", () => {
                assert.isUndefined(mathEnforcer.sum("Pesho", 5), "Result must be undefined");
            });

            it("test with second parameter as string", () => {
                assert.isUndefined(mathEnforcer.sum(5, "Pesho"), "Result must be undefined");
            });

            it("test with both parameters as non-number", () => {
                assert.isUndefined(mathEnforcer.sum("Pesho", "Gosho"), "Result must be undefined");
            });
        });

        describe("test with valid values", () => {
            it("test with two positive numbers", () => {
                assert.equal(mathEnforcer.sum(5, 10), 15, "Result must be 15");
            });

            it("test with a positive and a negative number", () => {
                assert.equal(mathEnforcer.sum(5, -3), 2, "Result must be 2");
            });

            it("test with two negative numbers", () => {
                assert.equal(mathEnforcer.sum(-5, -10), -15, "Result must be -15");
            });

            it("test with two floating-point numbers", () => {
                assert.closeTo(mathEnforcer.sum(1.1, 2.2), 3.3, 0.01, "Result must be 3.3");
            });

            it("test with one integer and one floating-point number", () => {
                assert.closeTo(mathEnforcer.sum(5, 2.3), 7.3, 0.01, "Result must be 7.3");
            });

            it("test with two zeros", () => {
                assert.equal(mathEnforcer.sum(0, 0), 0, "Result must be 0");
            });
        });
    });
});

//3
describe('lookupChar', function () {
    it('should return undefined if first parameter is not a string', function () {
        expect(lookupChar(123, 1)).to.be.undefined;
        expect(lookupChar({}, 1)).to.be.undefined;
        expect(lookupChar([], 1)).to.be.undefined;
        expect(lookupChar(null, 1)).to.be.undefined;
    });

    it('should return undefined if second parameter is not a number', function () {
        expect(lookupChar('test', '1')).to.be.undefined;
        expect(lookupChar('test', {})).to.be.undefined;
        expect(lookupChar('test', [])).to.be.undefined;
        expect(lookupChar('test', null)).to.be.undefined;
    });

    it('should return "Incorrect index" if index is out of bounds', function () {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
        expect(lookupChar('hello', 10)).to.equal('Incorrect index');
    });

    it('should return "Incorrect index" if index is a floating-point number', function () {
        expect(lookupChar('test', 1.5)).to.be.undefined;
        expect(lookupChar('hello', 2.3)).to.be.undefined;
    });

    it('should return the correct character if valid index is provided', function () {
        expect(lookupChar('hello', 0)).to.equal('h');
        expect(lookupChar('world', 2)).to.equal('r');
        expect(lookupChar('javascript', 4)).to.equal('s');
    });
});
