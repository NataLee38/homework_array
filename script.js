// let arr = [1, 2, 3, 4, 5,];
//
// console.log(arr.slice(0, 3));
// console.log(arr.slice(3, 6));

let str = "1124356712453";

function splitEven (str, symbol) {
    let splitted = str.split('');

    return splitted.map((item) => {
        const isOdd = item % 2 === 0;
        if (isOdd) {
            return item;
        }

        return item + symbol;
    }).join('');
}

console.log(splitEven(str, "-"));