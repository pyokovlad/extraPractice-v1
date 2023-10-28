function calculateDistance(a, b) {
  return Math.abs(b - a);
}

function calculateSegmentProduct(A, B, C) {
  const lengthAC = Math.abs(C - A);
  const lengthBC = Math.abs(B - C);

  return lengthAC * lengthBC;
}

// fileSizeCalculator.js
function calculateKilobytes(fileSizeInBytes) {
  return Math.floor(fileSizeInBytes / 1024);
}

// segmentCalculator.js
function calculateSegments(lengthA, lengthB) {
  if (lengthB <= 0) {
    throw new Error('Length of segment B must be a positive integer.');
  }

  if (lengthA < lengthB) {
    throw new Error('Length of segment A must be greater than or equal to length of segment B.');
  }
  return Math.floor(lengthA / lengthB);
}

// digitCalculator.js
function calculateDigitSum(twoDigitNumber) {
  const tensDigit = Math.floor(twoDigitNumber / 10);
  const onesDigit = twoDigitNumber % 10;

  return tensDigit + onesDigit;
}

export {
  calculateDistance,
  calculateSegmentProduct,
  calculateKilobytes,
  calculateSegments,
  calculateDigitSum,
};
