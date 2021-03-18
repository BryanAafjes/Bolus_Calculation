let CalculateBolus = require('./boluscalculation.js');

//tests for Daily Dose Function
test('properly calculate daily dose from weight', () => {
    expect(CalculateBolus.calculateDailyDose(90)).toBe(49.50000000000001);
});

test('give error when negative number is entered in calculate daily dose function', () => {
    expect(CalculateBolus.calculateDailyDose(-10)).toBe(0);
});

test('give error when number over 430 entered in calculate daily dose function', () => {
    expect(CalculateBolus.calculateDailyDose(500)).toBe(0);
});

test('give error when text is entered', () => {
    expect(CalculateBolus.calculateDailyDose("test")).toBe(0);
});

//tests for calculating Basal Dose Function
test('properly calculate basal dose from daily dose', () => {
    expect(CalculateBolus.calculateBasalDose(50)).toBe(25);
});

test('give error when negative number is entered in calculate basal dose', () => {
    expect(CalculateBolus.calculateBasalDose(-1)).toBe(0);
});

//tests for calculating meal intake
test('properly calculate meal dose from daily intake and carbs in grams', () => {
    expect(CalculateBolus.calculateIntakeMeal(50, 70)).toBe(7);
});

test('give error when text is entered', () => {
    expect(CalculateBolus.calculateIntakeMeal("test")).toBe(0);
});

test('give error when negative number is entered in calculate meal intake function', () => {
    expect(CalculateBolus.calculateIntakeMeal(50, -200)).toBe(0);
});

test('give error when number over 300 is entered in calculate meal intake function', () => {
    expect(CalculateBolus.calculateIntakeMeal(50, 500)).toBe(0);
});
