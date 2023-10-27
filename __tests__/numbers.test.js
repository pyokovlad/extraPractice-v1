// calculateDistance.test.js
import { describe } from 'yargs';
import {
  calculateDistance,
  calculateSegmentProduct,
  calculateKilobytes,
  calculateSegments,
  calculateDigitSum,
  swapHundredsAndTens,
  getHundredsDigit,
  getFullHours,
  getDayOfWeek,
  countSquares,
} from '../numbers';

import {
  countUppercaseLetters,
  combineStrings,
  containsSubstring,
  replaceSubstring,
  countWordsWithSameLetters,
  countWordsWithA,
  normalizeSpaces,
  extractFileName,
  encryptSentence,
  checkBrackets
} from '../strings';

import {
  isPositive,
  isOdd,
  checkInequality,
  checkInequality2,
  checkBetweenNumbers,
  checkOddThreeDigitNumber,
  checkUniqueDigits,
  isSecondQuadrant,
  isIsoscelesTriangle,
  areSameColorFields
} from '../boolean';

describe('Group: numbers', () => {
  test('task1', () => {
    expect(calculateDistance(0, 5)).toBe(5);

    expect(calculateDistance(-3, 2)).toBe(5);

    expect(calculateDistance(10, 5)).toBe(5);
    expect(calculateDistance(-5, -10)).toBe(5);

    expect(calculateDistance(0, 0)).toBe(0);
    expect(calculateDistance(-3, -3)).toBe(0);
  });

  test('task2', () => {
    expect(calculateSegmentProduct(0, 5, 2)).toBe(6);

    expect(calculateSegmentProduct(-3, 2, 0)).toBe(6);

    expect(calculateSegmentProduct(-5, 3, 0)).toBe(15);

    expect(calculateSegmentProduct(48, 1031, 547)).toBe(241516);

    expect(calculateSegmentProduct(7, 64, 23)).toBe(656);
  });

  test('task3', () => {
    expect(calculateKilobytes(1024)).toBe(1);

    expect(calculateKilobytes(500)).toBe(0);

    expect(calculateKilobytes(2048)).toBe(2);

    expect(calculateKilobytes(1536)).toBe(1);
  });

  test('task4', () => {
    expect(calculateSegments(10, 10)).toBe(1);

    expect(calculateSegments(20, 5)).toBe(4);

    expect(calculateSegments(25, 7)).toBe(3);
  });

  test('task5', () => {
    expect(calculateDigitSum(34)).toBe(7);

    expect(calculateDigitSum(10)).toBe(1);

    expect(calculateDigitSum(99)).toBe(18);

    expect(calculateDigitSum(44)).toBe(8);
  });

  test('task6', () => {
    expect(swapHundredsAndTens(456)).toBe(546);

    expect(swapHundredsAndTens(100)).toBe(10);

    expect(swapHundredsAndTens(987)).toBe(897);

    expect(swapHundredsAndTens(355)).toBe(535);
  });

  test('task7', () => {
    expect(getHundredsDigit(3456)).toBe(4);

    expect(getHundredsDigit(1000)).toBe(0);

    expect(getHundredsDigit(98765)).toBe(7);

    expect(getHundredsDigit(77777)).toBe(7);
  });

  test('task8', () => {
    expect(getFullHours(5000)).toBe(1);

    expect(getFullHours(0)).toBe(0);

    expect(getFullHours(100000)).toBe(27);

    expect(getFullHours(3600)).toBe(1);

    expect(() => getFullHours(123.5)).toThrow();

    expect(() => getFullHours(-1000)).toThrow();
  });

  test('task9', () => {
    expect(getDayOfWeek(100)).toBe(2);

    expect(getDayOfWeek(1)).toBe(1);

    expect(getDayOfWeek(365)).toBe(1);
  });

  test('task10', () => {
    expect(countSquares(10, 15, 2)).toBe(35);

    expect(countSquares(8, 8, 8)).toBe(1);

    expect(countSquares(12, 24, 3)).toBe(32);

    expect(countSquares(1, 1, 1)).toBe(1);
  });
});

describe('Group: strings', () => {
  test('task1', () => {
    expect(countUppercaseLetters('Hello World')).toBe(2);

    expect(countUppercaseLetters('')).toBe(0);

    expect(countUppercaseLetters('123!@#')).toBe(0);

    expect(countUppercaseLetters('ABCDEFGHIJKLM')).toBe(13);

    expect(countUppercaseLetters('!@#$%^&*()')).toBe(0);
  });

  test('task2', () => {
    expect(combineStrings(2, 1, 'abc', 'def')).toBe('abf');

    expect(combineStrings(0, 3, 'hello', 'world')).toBe('rld');

    expect(combineStrings(5, 2, 'abcdefgh', 'ijklmnop')).toBe('abcdeop');

    expect(combineStrings(3, 4, '$#@%', '!&*()')).toBe('$#@&*()');

    expect(combineStrings(0, 0, 'abc', 'def')).toBe('');
  });

  test('task3', () => {
    expect(containsSubstring('Hello World', 'Hello')).toBe(true);

    expect(containsSubstring('Lorem Ipsum', 'World')).toBe(false);

    expect(containsSubstring('', '')).toBe(true);

    expect(containsSubstring('ABCdef', 'abc')).toBe(false);

    expect(containsSubstring('$#@%', '#')).toBe(true);
  });

  test('task4', () => {
    expect(replaceSubstring('Hello World, Hello Universe', 'Hello', 'Hi')).toBe('Hi World, Hello Universe');

    expect(replaceSubstring('apple pie is delicious', 'apple', 'cherry')).toBe('cherry pie is delicious');

    expect(replaceSubstring('JavaScript is fun! JavaScript is powerful!', 'JavaScript', 'TypeScript')).toBe('TypeScript is fun! JavaScript is powerful!');

    expect(replaceSubstring('No changes here', 'missing', 'replace')).toBe('No changes here');
  });

  test('task5', () => {
    expect(countWordsWithSameLetters('apple banana avocado')).toBe(0);

    expect(countWordsWithSameLetters('dog cat elephant')).toBe(0);

    expect(countWordsWithSameLetters('')).toBe(0);

    expect(countWordsWithSameLetters('a b c d e')).toBe(5);

    expect(countWordsWithSameLetters('Hello world Willow')).toBe(1);
  });

  test('task6', () => {
    expect(countWordsWithA('apple banana avocado')).toBe(3);

    expect(countWordsWithA('dog cat elephant')).toBe(2);

    expect(countWordsWithA('')).toBe(0);

    expect(countWordsWithA('a b c d e')).toBe(1);

    expect(countWordsWithA('Hello world Wicked')).toBe(1);
  });

  test('task7', () => {
    expect(normalizeSpaces('   Hello     world!   ')).toBe('Hello world!');

    expect(normalizeSpaces('This is a normal sentence.')).toBe('This is a normal sentence.');

    expect(normalizeSpaces('')).toBe('');

    expect(normalizeSpaces('     ')).toBe('');

    expect(normalizeSpaces('Multiple    spaces    between   words.')).toBe('Multiple spaces between words.');
  });

  test('task8', () => {
    expect(extractFileName('/path/to/file.txt')).toBe('file');

    expect(extractFileName('')).toBe('');

    expect(extractFileName('/folder1/folder2/file.name.ext')).toBe('file');

    expect(extractFileName('../filename.txt')).toBe('filename');

    expect(extractFileName('/path.with.dots/to/file.xls')).toBe('file');
  });

  test('task9', () => {
    expect(encryptSentence('JavaScript')).toBe('aacitprSvJ');

    expect(encryptSentence('Hello, World!')).toBe('el,Wrd!lo olH');

    expect(encryptSentence('')).toBe('');

    expect(encryptSentence('A')).toBe('A');
  });

  test('task10', () => {
    expect(checkBrackets('(a[b{c}]d)')).toBe(0);

    expect(checkBrackets('(a[b{c]d)')).toBe(-1);

    expect(checkBrackets('(ab]{c}')).toBe(3);

    expect(checkBrackets('')).toBe(0);
  });
});

describe('Group: boolean', () => {
  test('task1', () => {
    expect(isPositive(5)).toBe(true);

    expect(isPositive(-3)).toBe(false);

    expect(isPositive(0)).toBe(false);

    expect(isPositive(2.5)).toBe(true);

    expect(isPositive(-1.7)).toBe(false);
  });

  test('task2', () => {
    expect(isOdd(5)).toBe(true);

    expect(isOdd(4)).toBe(false);

    expect(isOdd(0)).toBe(false);

    expect(isOdd(-3)).toBe(true);

    expect(isOdd(-2)).toBe(false);
  });

  test('task3', () => {
    expect(checkInequality(5, 3)).toBe(true);

    expect(checkInequality(2, 3)).toBe(false);

    expect(checkInequality(4, 5)).toBe(false);

    expect(checkInequality(1, 4)).toBe(false);

    expect(checkInequality(6, 3)).toBe(true);

    expect(checkInequality(2, -1)).toBe(false);
  });

  test('task4', () => {
    expect(checkInequality2(5, -3)).toBe(true);

    expect(checkInequality2(-1, -3)).toBe(true);

    expect(checkInequality2(4, -2)).toBe(true);

    expect(checkInequality2(-4, 0)).toBe(false);

    expect(checkInequality2(1, -3)).toBe(true);

    expect(checkInequality2(-3, -4)).toBe(true);

    expect(checkInequality2(6, -2)).toBe(true);
  });

  test('task5', () => {
    expect(checkBetweenNumbers(2, 3, 4)).toBe(true);

    expect(checkBetweenNumbers(3, 3, 4)).toBe(false);

    expect(checkBetweenNumbers(2, 4, 4)).toBe(false);

    expect(checkBetweenNumbers(4, 2, 3)).toBe(false);

    expect(checkBetweenNumbers(2, 2, 1)).toBe(false);

    expect(checkBetweenNumbers(5, 6, 6)).toBe(false);
  });

  test('task6', () => {
    expect(checkOddThreeDigitNumber(357)).toBe(true);

    expect(checkOddThreeDigitNumber(246)).toBe(false);

    expect(checkOddThreeDigitNumber(79)).toBe(false);

    expect(checkOddThreeDigitNumber(1234)).toBe(false);

    expect(checkOddThreeDigitNumber(4680)).toBe(false);

    expect(checkOddThreeDigitNumber(007)).toBe(false);

    expect(checkOddThreeDigitNumber(900)).toBe(false);
  });

  test('task7', () => {
    expect(checkUniqueDigits(123)).toBe(true);

    expect(checkUniqueDigits(1223)).toBe(false);

    expect(checkUniqueDigits(5)).toBe(false);

    expect(checkUniqueDigits(7777)).toBe(false);

    expect(checkUniqueDigits(-123)).toBe(true);

    expect(checkUniqueDigits(01234)).toBe(false);
  });

  test('task8', () => {
    expect(isSecondQuadrant(-2, 3)).toBe(true);

    expect(isSecondQuadrant(0, 5)).toBe(false);

    expect(isSecondQuadrant(-3, 0)).toBe(false);

    expect(isSecondQuadrant(4, 2)).toBe(false);

    expect(isSecondQuadrant(-2, -4)).toBe(false);

    expect(isSecondQuadrant(5, -1)).toBe(false);
  });

  test('task9', () => {
    expect(isIsoscelesTriangle(3, 3, 5)).toBe(true);

    expect(isIsoscelesTriangle(4, 5, 4)).toBe(true);

    expect(isIsoscelesTriangle(7, 7, 2)).toBe(true);

    expect(isIsoscelesTriangle(5, 8, 6)).toBe(false);

    expect(isIsoscelesTriangle(0, 0, 0)).toBe(false);
  });

  test('task10', () => {
    expect(areSameColorFields(1, 1, 3, 3)).toBe(true);

    expect(areSameColorFields(2, 4, 8, 8)).toBe(true);

    expect(areSameColorFields(1, 1, 3, 4)).toBe(false);

    expect(areSameColorFields(5, 7, 1, 2)).toBe(false);

    expect(areSameColorFields(1, 2, 2, 1)).toBe(true);

    expect(areSameColorFields(4, 7, 6, 5)).toBe(true);
  });
});