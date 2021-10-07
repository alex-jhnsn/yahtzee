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
        case categories.PAIR: {
            const filteredDice = filterDice(dice, 2);
            return Math.max(...filteredDice.map(x => x.value)) * 2;
        };
        case categories.TWO_PAIRS: {
            const filteredDice = filterDice(dice, 2);

            if (filteredDice.length < 2) return 0;

            return (filteredDice[0].value + filteredDice[1].value) * 2;
        };
        case categories.THREE_OF_A_KIND: {
            const filteredDice = filterDice(dice, 3);
            return filteredDice.length ? filteredDice[0].value * 3 : 0;
        };
        case categories.FOUR_OF_A_KIND: {
            const filteredDice = filterDice(dice, 4);
            return filteredDice.length ? filteredDice[0].value * 4 : 0
        };
        case categories.SMALL_STRAIGHT: {
            const filteredDice = filterDice(dice, 1).filter((die) => die.value !== 6)
            return filteredDice.length === 5 ? 15 : 0;
        };
        case categories.LARGE_STRAIGHT: {
            const countedDice = countDice(dice);

            const ones = countedDice[0]
            const twosThreesFoursFives = countedDice.slice(1, 5)
            const sixes = countedDice[5]

            if(!twosThreesFoursFives.every(x => x.count === 1))
                return 0;

            return ones.count + sixes.count === 1 ? 40 : 0;
        };
        case categories.FULL_HOUSE: {
            return (filterDice(dice, 3).length === 1) && (filterDice(dice, 2).length > 1) ? 25 : 0;
        };
        case categories.YAHTZEE: {
            return (filterDice(dice, 5).length === 1 ? 50 : 0);
        };
        case categories.CHANCE: {
            return dice.reduce((a, b) => a + b);
        };
    }

    return dice.filter(d => d === filterBy).reduce((d, v) => ( d + v ), 0);
};

const filterDice = ( dice, filterValue ) => {
    const countedDice = countDice(dice);
    return countedDice.filter((die) => die.count >= filterValue);
};

const countDice = ( dice ) => {
    let countedDice = [
        {value: 1, count: 0},
        {value: 2, count: 0},
        {value: 3, count: 0},
        {value: 4, count: 0},
        {value: 5, count: 0},
        {value: 6, count: 0}
    ];

    dice.forEach(die => {
        countedDice[die - 1].count++;
    });

    return countedDice;
}


module.exports = calculate;