import { expect } from "chai";
import { homeGardener } from "../homeGardener.js";




describe("homeGardener", function () {

  describe("plantCareInstructions", function () {
    it("if plant is'succulent'", function () {
      expect(homeGardener.plantCareInstructions("succulent")).to.equal(
        "Succulents require minimal watering, indirect sunlight, and well-draining soil."
      );
    });

    it("if plant is 'vegetable'", function () {
      expect(homeGardener.plantCareInstructions("vegetable")).to.equal(
        "Vegetables need full sun, regular watering, and nutrient-rich soil."
      );
    });

    it("if plant is 'tree'", function () {
        expect(homeGardener.plantCareInstructions("tree")).to.equal(
          "Trees need deep watering, proper spacing, and regular mulching."
        );
      });

    it("if plant is 'flowering'", function () {
      expect(homeGardener.plantCareInstructions("flowering")).to.equal(
        "Flowering plants require moderate watering, occasional fertilization, and pruning."
      );
    });

    

    it("for an invalid plant type throw an error", function () {
      expect(() => homeGardener.plantCareInstructions("cactus")).to.throw("Invalid plant type!");
    });
  });

  describe("availablePlants", ()  => {
    it(" return the correct count of plants", ()  => {
      expect(homeGardener.availablePlants([2, 3, 5, 7], 5)).to.equal(
        "There are 3 plants suitable for your garden height criteria!"
      );
    });

    it("return 0 when no plants fit the criteria", ()  => {
      expect(homeGardener.availablePlants([10, 12, 15], 5)).to.equal(
        "There are 0 plants suitable for your garden height criteria!"
      );
    });

    it("for invalid input throw an error", ()  => {
      expect(() => homeGardener.availablePlants("string", 5)).to.throw("Invalid Information!");
    });

    it("for invalid maxHeight throw an error ",  ()  => {
      expect(() => homeGardener.availablePlants([2, 3, 5], "five")).to.throw("Invalid Information!");
    });

    it("if maxHeight is less than 1 throw an error", ()  => {
      expect(() => homeGardener.availablePlants([2, 3, 5], 0)).to.throw("Invalid Information!");
    });

    it("if the plantSizes array is empty throw an error", ()  => {
      expect(() => homeGardener.availablePlants([], 5)).to.throw("Invalid Information!");
    });
  });

  describe("gardenExpenses", ()  => {
    it("calculate total cost without discount", ()  => {
      expect(homeGardener.gardenExpenses(["shovel", "rake"], ["vegetable seeds", "flower seeds"], false)).to.equal(
        "You spent $53.00 on tools and seeds!"
      );
    });

    it("calculate total cost  with discount", ()  => {
      expect(homeGardener.gardenExpenses(["shovel", "rake"], ["vegetable seeds", "flower seeds"], true)).to.equal(
        "You spent $47.70 on tools and seeds with a 10% discount!"
      );
    });

    it("return the correct cost when no tools are bought", ()  => {
      expect(homeGardener.gardenExpenses([], ["vegetable seeds", "flower seeds"], false)).to.equal(
        "You spent $13.00 on tools and seeds!"
      );
    });

    it("return the correct cost when no seeds are bought", ()  => {
      expect(homeGardener.gardenExpenses(["shovel"], [], false)).to.equal(
        "You spent $25.00 on tools and seeds!"
      );
    });

    it("for invalid tool/seeds input throw an error", ()  => {
      expect(() => homeGardener.gardenExpenses("shovel", ["vegetable seeds"], false)).to.throw("Invalid Information!");
    });

    it("for invalid discount type throw an error", ()  => {
      expect(() => homeGardener.gardenExpenses(["shovel"], ["vegetable seeds"], "yes")).to.throw("Invalid Information!");
    });
  });

});