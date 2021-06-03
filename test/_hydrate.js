const {expect} = require("chai");
const hydrateMyString = require("../");


describe("hydrateMyString", function() {
    it("Should convert all w\'s to 💧.", () => {
      const testString = "what are you drinking?";
      const testResult = "💧hat are you drinking?"
      
      expect(hydrateMyString(testString)).to.equal(testResult);
    });

    it("Should convert the word \'water\'\ to 💧💧💧💧💧.", () => {
        const testString = "I'm drinking water...";
        const testResult = "I'm drinking 💧💧💧💧💧..."
      
        expect(hydrateMyString(testString)).to.equal(testResult);
      });

    it("Should be case insensitive.", () => {
        const testString = "Ohhh, nice. Water is great!";
        const testResult = "Ohhh, nice. 💧💧💧💧💧 is great!"
        
        expect(hydrateMyString(testString)).to.equal(testResult);
    });

    it("Should handle words that include both w\'s and \'water\'.", () => {
        const testString = "So is nature. I really enjoy studying waterways.";
        const testResult = "So is nature. I really enjoy studying 💧💧💧💧💧💧ays."
        
        expect(hydrateMyString(testString)).to.equal(testResult);
    });
  });