function hydrateMyString(str) {
    // Check arg datatype for 'string'
    // Throw TypeError if arg is not a string
    if (typeof str !== "string") {
        throw new TypeError(`Please provide a string not ${typeof str}.`);
    } else {
        let hydratedString = "";
        // Convert string to Array split by " "
        const stringArray = str.split(" ");
        const arrayLength = stringArray.length;
        let idx = 0;
    
        // Check each word in stringArray
        for (const w of stringArray) {
            idx++;
            // Handle if the word contains 'water'
            if (w.toLowerCase().includes("water")) {
                if (w.length === 5) {
                    hydratedString += "💧💧💧💧💧";
                } else {
                    // Check for leading/trailing w's
                    let temp = "";
                    let leading = "";
                    let trailing = "";
                    let idx = w.toLowerCase().indexOf("water");
                    if (idx > 0) {
                        // If leading exists
                        leading = w.slice(0, idx);
                        trailing = w.slice(idx + 5);
                        temp += hydrateMyString(leading);
                        temp += "💧💧💧💧💧";
                        temp += hydrateMyString(trailing);
                    } else {
                        // If only trailing exists
                        trailing = w.slice(idx + 5);
                        temp += "💧💧💧💧💧"
                        temp += hydrateMyString(trailing)
                    }
                    hydratedString += temp;
                }
    
            } else {
                // If the word doesn't contain 'water'
                for (const c of w) {
                    if (c.toLowerCase() === "w") {
                        hydratedString += "💧";
                    } else {
                        hydratedString += c;
                    }
                }
            }
            // Add space except for after last word
            if (idx !== arrayLength) {
                hydratedString += " ";
            }
        }
        return hydratedString;
    }
}

module.exports = { hydrateMyString };
