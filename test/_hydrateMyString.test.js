const { expect } = require("chai");
const { hydrateMyString } = require("../src/hydrateMyString");


describe("hydrateMyString", function() {
    it("Should convert all w\'s to 💧", () => {
      const testString = "what are you drinking?";
      const testResult = "💧hat are you drinking?"
      
      expect(hydrateMyString(testString)).to.equal(testResult);
    });

    it("Should convert the word \'water\'\ to 💧💧💧💧💧", () => {
        const testString = "I'm drinking water...";
        const testResult = "I'm drinking 💧💧💧💧💧..."
      
        expect(hydrateMyString(testString)).to.equal(testResult);
      });

    it("Should be case insensitive", () => {
        const testString = "Ohhh, nice. Water is great!";
        const testResult = "Ohhh, nice. 💧💧💧💧💧 is great!"
        
        expect(hydrateMyString(testString)).to.equal(testResult);
    });

    it("Should handle words that include both w\'s and \'water\'", () => {
        const testString = "So is nature. I really enjoy studying waterways.";
        const testResult = "So is nature. I really enjoy studying 💧💧💧💧💧💧ays."
        
        expect(hydrateMyString(testString)).to.equal(testResult);
    });

    it("Should throw a TypeError when anything but a string is passed", () => {      
      const param1 = 3;
      const param2 = ["Water", "is", "Life"];
      const param3 = {we: "should", all: "have", access: "to", clean: "water"};
      const param4 = true;

      expect(hydrateMyString.bind(hydrateMyString, param1)).to.throw(TypeError);
      expect(hydrateMyString.bind(hydrateMyString, param2)).to.throw(TypeError);
      expect(hydrateMyString.bind(hydrateMyString, param3)).to.throw(TypeError);
      expect(hydrateMyString.bind(hydrateMyString, param4)).to.throw(TypeError);


  });
  });