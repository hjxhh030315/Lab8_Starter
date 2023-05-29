const functions = require('../code-to-unit-test/unit-test-me.js');
// unit.test.js
// TODO - Part 2
//isPhoneNumber tests
test('test an incorrect phone number: 999999999', () => {
    expect(functions.isPhoneNumber('999999999')).toBe(false);
});

test('test a correct phone number: 999-999-9999', () => {
    expect(functions.isPhoneNumber('999-999-9999')).toBe(true);
});

test('test @@@-***-!!!', () => {
    expect(functions.isPhoneNumber('@@@-***-!!!')).toBe(false);
});


test('test correct phone number: 123-123-1234', () => {
    expect(functions.isPhoneNumber('123-123-1234')).toBe(true);
});

//isEmail tests
test('invalid email: jessica@gmai1.com', () => {
    expect(functions.isEmail('jessica@gmai1.com')).toBe(false);
});

test('invalid email: lalalal)gmail.com', () => {
    expect(functions.isEmail('lalalal)gmail.com')).toBe(false);
});

test('valid email: jessica@gmail.com', () => {
    expect(functions.isEmail('jessica@gmail.com')).toBe(true);
});

test('Check valid email: jessica@ucsd.edu', () => {
    expect(functions.isEmail('jessica@ucsd.edu')).toBe(true);
});

//isStrongPassword tests
test('short password: lo', () => {
    expect(functions.isStrongPassword('lo')).toBe(false);
});

test('password with invalid chars', () => {
    expect(functions.isStrongPassword('lol@#$@!')).toBe(false);
});

test('valid password with length 15', () => {
    expect(functions.isStrongPassword('ABCDEFGJIESHILE')).toBe(true);
});

test('special chars: JESSICA_', () => {
    expect(functions.isStrongPassword('JESSICA_')).toBe(true);
});

//isDate tests
test('short year field: 05/29/23', () => {
    expect(functions.isDate('05/29/23')).toBe(false);
});

test('without /: 05292023', () => {
    expect(functions.isDate('05292023')).toBe(false);
});

test('valid date: 05/29/2023', () => {
    expect(functions.isDate('05/29/2023')).toBe(true);
});

test('valid date: 03/15/2003', () => {
    expect(functions.isDate('03/15/2003')).toBe(true);
});

//isHexColor tests
test('invalid: #88', () => {
    expect(functions.isHexColor('#88')).toBe(false);
});

test('2 digits: #01', () => {
    expect(functions.isHexColor('#07')).toBe(false);
});

test('valid color: #123456', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});

test('valid:#b65fcf', () => {
    expect(functions.isHexColor('#abcdef')).toBe(true);
});