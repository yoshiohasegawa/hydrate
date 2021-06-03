function hydrateMyString(str) {
    if (typeof str !== "string") {
        throw new TypeError(`Please provide a string not ${typeof str}.`);
    }
    let hydratedString = "";
    const stringArray = str.split(" ");
    const arrayLength = stringArray.length;
    let idx = 0;

    for (const w of stringArray) {
        idx++;
        if (w.toLowerCase().includes("water")) {
            
            if (w.length === 5) {
                hydratedString += "💧💧💧💧💧";
            } else {
                let temp = "";
                let beginning = "";
                let ending = "";
                let idx = w.toLowerCase().indexOf("water");
                if (idx > 0) {
                    beginning = w.slice(0, idx);
                    ending = w.slice(idx + 5);
                    temp += hydrateMyString(beginning);
                    temp += "💧💧💧💧💧";
                    temp += hydrateMyString(ending);
                } else {
                    ending = w.slice(idx + 5);
                    temp += "💧💧💧💧💧"
                    temp += hydrateMyString(ending)
                }
                hydratedString += temp;
            }

        } else {
            for (const c of w) {
                if (c.toLowerCase() === "w") {
                    hydratedString += "💧";
                } else {
                    hydratedString += c;
                }
            }
        }
        if (idx !== arrayLength) {
            hydratedString += " ";
        }
    }
    return hydratedString;
}

module.exports = hydrateMyString;