let arrayZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine'];
let arrayElevenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let arrayTens = ['twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];
let arrayHundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
    'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

let app = {};

app.main = (num) => {
    switch (true) {
        case (num >= 0 && num < 10):
            return arrayZeroToNine[num];
        case (num >= 10 && num < 20):
            return arrayElevenToNineteen[num - 10];
        case (num >= 20 && num < 100):
            return Tens(num);
        case (num >= 100 && num < 1000):
            return Hundreds(num);
        default:
            return "out of ability";
    }
}


function Tens(number) {
    let tens = Math.floor(number / 10);
    let surplus = number % 10;
    if (surplus === 0) {
        return arrayTens[tens - 2];
    } else {
        return arrayTens[tens - 2] + ' ' + arrayZeroToNine[surplus];
    }
}

function Hundreds(number) {
    let hundreds = Math.floor(number / 100);
    let surplus = number % 100;
    if (surplus === 0) {
        return arrayHundreds[hundreds - 1];
    } else {
        return arrayHundreds[hundreds - 1] + ' and ' + app.main(surplus);
    }
}

module.exports = app;