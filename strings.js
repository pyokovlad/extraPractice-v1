
const countUppercaseLetters = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) {
        count++;
      }
    }
    return count;
  }
  

  
  export function containsSubstring(S, S0) {
    return S.includes(S0);
  }

  let S = 'Hello, World!';
  let S0 = 'World';
  console.log(containsSubstring(S, S0)); // Выведет true
  
  S = 'Hello, World!';
  S0 = 'Python';
  console.log(containsSubstring(S, S0)); // Выведет false

  export function countWordsWithSameLetters(sentence) {
    const words = sentence.split(' ');
    let count = 0;
  
    for (const word of words) {
      if (word.length > 1 && word[0].toLowerCase() === word[word.length - 1].toLowerCase()) {
        count++;
      }
    }
  
    return count;
  }
  

  export function normalizeSpaces(sentence) {
    return sentence.replace(/\s+/g, ' ').trim();
  }
  

  export function encryptSentence(sentence) {
    let evenChars = '';
    let oddChars = '';
  
    for (let i = 0; i < sentence.length; i++) {
      if (i % 2 === 0) {
        evenChars += sentence[i];
      } else {
        oddChars = sentence[i] + oddChars;
      }
    }
  
    return evenChars + oddChars;
  }

  
  export function combineStrings(N1, N2, S1, S2) {
    const A = S1.slice(0, N1);
    const B = S2.slice(-N2);
    return A + B;
  }
  console.log(combineStrings(3, 2, 'Hello', 'World')); // 'Helld'
  console.log(combineStrings(2, 4, 'JavaScript', 'Coding')); // 'Jading'
  console.log(combineStrings(1, 3, 'Apple', 'Banana')); // 'Aana'
  
  // 4
  export function replaceSubstring(S, S1, S2) {
    const index = S.indexOf(S1);
    if (index !== -1) {
      return S.slice(0, index) + S2 + S.slice(index + S1.length);
    }
    return S;
  }
  // 6
  export function countWordsWithA(sentence) {
    const words = sentence.split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase().includes('a')) {
        count++;
      }
    }
    return count;
  }
  
  // 8
  export function extractFileName(fullFileName) {
    const N = fullFileName.split('/').pop();
    const Z = N.split('.')[0];
    return Z;
  }

  
  //10
  export function checkBrackets(str) {
      let stack = [];
  
      for (let char of str) {
          if (char === '(') {
              stack.push(char);
          } else if (char === ')') {
              if (stack.length === 0 || stack.pop() !== '(') {
                  return false;
              }
          }
      }
  
      return stack.length === 0;
  }
  
  // Пример использования
  const inputStringq = "((a+b)*(c-d))";
  if (checkBrackets(inputStringq)) {
      console.log("Скобки расставлены правильно.");
  } else {
      console.log("Скобки расставлены неправильно.");
  }