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
});


