function storeUniqueArrays(jsonArrays) {
    const arrays = jsonArrays.map(string => JSON.parse(string));
    const uniqueArrays = new Map();

    arrays.forEach((arr, index) => {
        const sortedArray = arr.slice().sort((a, b) => b - a);
        const key = sortedArray.join(',');

        if (!uniqueArrays.has(key)) {
            uniqueArrays.set(key, {array: sortedArray, index});
        }
    });

    Array.from(uniqueArrays.values())
        .sort((a, b) => {
            if (a.array.length !== b.array.length) {
                return a.array.length - b.array.length;
            } else {
                return a.index - b.index;
            }
        })
        .forEach(item => console.log(`[${item.array.join(', ')}]`));
}


// test code
storeUniqueArrays(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);

console.log();

storeUniqueArrays(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]);