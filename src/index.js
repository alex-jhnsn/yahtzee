const calculate = require("./score.js");

const yahtzee = () => {
    console.log(`You scored ${calculate(1,2,3,4,5)}`)
};

yahtzee();