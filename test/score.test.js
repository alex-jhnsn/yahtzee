const calculate = require("../src/score");
const categories = require("../src/categories");

describe("Total of x only", () => {

    test("Sum ones", () => {
        expect(calculate([1, 1, 2, 1, 4], categories.ONES)).toBe(3);
    });

    test("Sum twos", () => {
        expect(calculate([2, 1, 2, 1, 2], categories.TWOS)).toBe(6);
    });

    test("Sum threes", () => {
        expect(calculate([3, 3, 3, 3, 2], categories.THREES)).toBe(12);
    });

    test("Sum fours", () => {
        expect(calculate([4, 4, 1, 1, 2], categories.FOURS)).toBe(8);
    });

    test("Sum fives", () => {
        expect(calculate([5, 5, 5, 1, 2], categories.FIVES)).toBe(15);
    });

    test("Sum sixes", () => {
        expect(calculate([6, 1, 2, 6, 3], categories.SIXES)).toBe(12);
    });
});

describe("Pairs", () => {

    test("Pair ones", () => {
        expect(calculate([1, 1, 2, 6, 3], categories.PAIR)).toBe(2);
    });

    test("Pair twos", () => {
        expect(calculate([2, 2, 3, 4, 5], categories.PAIR)).toBe(4);
    });

    test("Pair threes", () => {
        expect(calculate([2, 3, 3, 4, 5], categories.PAIR)).toBe(6);
    });

    test("Pair fours", () => {
        expect(calculate([2, 3, 4, 4, 5], categories.PAIR)).toBe(8);
    });

    test("Pair fives", () => {
        expect(calculate([2, 3, 5, 4, 5], categories.PAIR)).toBe(10);
    });

    test("Pair sixes", () => {
        expect(calculate([2, 3, 6, 4, 6], categories.PAIR)).toBe(12);
    });

    test("GivenDiceThatContainAPairOfTwosAndPairOfFours_WithACategoryOfPair_ThenTheResultShouldBeEight", () => {
        expect(calculate([2, 2, 4, 4, 6], categories.PAIR)).toBe(8);
    });

    test("GivenDiceThatContainAPairOfFivesAndPairOfThrees_WithACategoryOfPair_ThenTheResultShouldBeTen", () => {
        expect(calculate([5, 5, 3, 3, 6], categories.PAIR)).toBe(10);
    });

    test("GivenDiceThatContainThreeFivesAndPairOfThrees_WithACategoryOfPair_ThenTheResultShouldBeTen", () => {
        expect(calculate([5, 5, 3, 3, 5], categories.PAIR)).toBe(10);
    });

    test("GivenDiceThatContainTwoThreesAndPairOfFours_WithACategoryOfPair_ThenTheResultShouldBeEight", () => {
        expect(calculate([3, 3, 4, 4, 4], categories.PAIR)).toBe(8);
    });
});

describe("GivenACategoryTwoPairs", () => {
    test("WhenDiceValuesContainAPairOfTwosAndAPairOfFives_ThenTheResultShouldBeFourteen", () => {
        expect(calculate([5, 2, 3, 5, 2], categories.TWO_PAIRS)).toBe(14);
    });

    test("WhenDiceValuesContainOnePairsOfTwos_ThenTheResultShouldBeZero", () => {
        expect(calculate([5, 2, 3, 5, 1], categories.TWO_PAIRS)).toBe(0);
    });

    test("GivenDiceThatContainTwoThreesAndPairOfFours_ThenTheResultShouldBeFourteen", () => {
        expect(calculate([3, 3, 4, 4, 4], categories.TWO_PAIRS)).toBe(14);
    });
});

describe("Given the category ThreeOfAKind", () => {
    test("When dice values contain three fours, then the result should be twelve", () => {
        expect(calculate([3, 3, 4, 4, 4], categories.THREE_OF_A_KIND)).toBe(12);
    });

    test("When the dice values do not contain three of a kind, then the result should be zero", () => {
        expect(calculate([1, 2, 4, 6, 4], categories.THREE_OF_A_KIND)).toBe(0);
    });
});

describe("Given the catgory is FourOfAKind", () => {
    test("When dice values contain four fives, then the result should be 20", () => {
        expect(calculate([3, 5, 5, 5, 5], categories.FOUR_OF_A_KIND)).toBe(20);
    });

    test("When the dice values do not contain 4 of a kind, then the result should be 0", () => {
        expect(calculate([3, 3, 5, 5, 5], categories.FOUR_OF_A_KIND)).toBe(0);
    });
});

describe("Given the category is SmallStraight", () => {
    test("When the dice values are 1, 2, 3, 4, 5 then the result shoud be 15", () => {
        expect(calculate([1, 2, 3, 4, 5], categories.SMALL_STRAIGHT)).toBe(15);
    });

    test("When the dice values are 2, 3, 4, 5, 6 then the result shoud be 0", () => {
        expect(calculate([2, 3, 4, 5, 6], categories.SMALL_STRAIGHT)).toBe(0);
    });

    test("When the dice values are 1, 3, 4, 5, 6 then the result shoud be 0", () => {
        expect(calculate([1, 3, 4, 5, 6], categories.SMALL_STRAIGHT)).toBe(0);
    });

    test("When the dice values do not contain a small straight the result shoud be 0", () => {
        expect(calculate([1, 2, 3, 3, 5], categories.SMALL_STRAIGHT)).toBe(0);
    });
});

describe("Given the category is LargeStraight", () => {
    test("When the dice values are 2, 3, 4, 5, 6 then the result should be 40", () => {
        expect(calculate([2, 3, 4, 5, 6], categories.LARGE_STRAIGHT)).toBe(40);
    });

    test("When the dice values are 1, 2, 3, 4, 5 then the result should be 40", () => {
        expect(calculate([1, 2, 3, 4, 5], categories.LARGE_STRAIGHT)).toBe(40);
    });

    test("When the dice values are 3, 5, 4, 2, 1 then the result should be 40", () => {
        expect(calculate([3, 5, 4, 2, 1], categories.LARGE_STRAIGHT)).toBe(40);
    });

    test("When the dice values are 1, 2, 4, 4, 5 then the result should be 0", () => {
        expect(calculate([1, 2, 4, 4, 5], categories.LARGE_STRAIGHT)).toBe(0);
    });

    test("When the dice values are 1, 2, 3, 4, 6 then the result should be 0", () => {
        expect(calculate([1, 2, 3, 4, 6], categories.LARGE_STRAIGHT)).toBe(0);
    });
});

describe("Given the category is FullHouse", () => {
    test("When the dice values are 2, 2, 3, 3, 3 then the result should be 25", () => {
        expect(calculate([2, 2, 3, 3, 3], categories.FULL_HOUSE)).toBe(25);
    });

    test("When the dice values are 4, 4, 4, 4, 4 then the result should be 0", () => {
        expect(calculate([4, 4, 4, 4, 4], categories.FULL_HOUSE)).toBe(0);
    });

    test("When the dice values are 1, 3, 2, 5, 5 then the result should be 0", () => {
        expect(calculate([1, 3, 2, 5, 5], categories.FULL_HOUSE)).toBe(0);
    });
});

describe("Given the category is Yahtzee", () => {
    test("When the dice values are 5, 5, 5, 5, 5 then the result should be 50", () => {
        expect(calculate([5, 5, 5, 5, 5], categories.YAHTZEE)).toBe(50);
    });

    test("When the dice values are 4, 4, 4, 4, 5 then the result should be 0", () => {
        expect(calculate([4, 4, 4, 4, 5], categories.YAHTZEE)).toBe(0);
    })
});

describe("Given the category is Chance", () => {
    test("When the dice values are 4, 5, 3, 6, 4 then the result should be 22", () => {
        expect(calculate([4, 5, 3, 6, 4], categories.CHANCE)).toBe(22);
    });
});