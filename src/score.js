const categories = require("./categories")

const calculate = ( dice, category ) => {

    var filterBy;

    switch (category) {
        case categories.ONES:
            filterBy = 1;
            break;
        case categories.TWOS:
            filterBy = 2;
            break;
        case categories.THREES:
            filterBy = 3;
            break;
        case categories.FOURS:
            filterBy = 4;
            break;
        case categories.FIVES:
            filterBy = 5;
            break;
        case categories.SIXES:
            filterBy = 6;
            break;
        case categories.PAIR:
            let foo = [0,0,0,0,0,0];

            for(let i = 0; i < dice.length; i ++) {
                foo[dice[i] - 1]++;
            }

            return (foo.indexOf(2) + 1) * 2;
    }

    return dice.filter(d => d === filterBy).reduce((d, v) => ( d + v ), 0);
};


module.exports = calculate;