const wordSearch = (letters, word) => {
  let checkHorizontal = searchHorizontal(letters, word);
  
  if (checkHorizontal === true) {
    return true;
  } else {
    let checkBackHorizontal = searchBackHorizontal(letters, word);
  
    if (checkBackHorizontal) {
      return true;
    } else {
      let checkVertical = searchVertical(letters, word);
  
      if (checkVertical) {
        return true;
      } else {
        let checkBackVertical = searchBackVertical(letters, word);
  
        return (checkBackVertical ? true : false);
      }
    }
  }
    
};
  
//Function to check horizontally.
const searchHorizontal = (letters, word) => {
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  let horizontalCheck = searchWord(horizontalJoin, word);
  return horizontalCheck;
  
};
  
//Function to check horizontally but backwards.
const searchBackHorizontal = (letters, word) => {
  
  const horizontalBackJoin = letters.map(ls => {
    let newWord = ls.join('');
    let reversedWord = newWord.split('').reduce((a, b)=> b + a, '');
    return reversedWord;
  });
  
  let horizontalBackCheck = searchWord(horizontalBackJoin, word);
  return horizontalBackCheck;
  
};
  
//Function to check vertically.
const searchVertical = (letters, word) => {
  
  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let joinedWord = '';
    for (let array of letters) {
      joinedWord += array[i];
    } verticalJoin.push(joinedWord);
  } let verticalCheck = searchWord(verticalJoin, word);
  
  return verticalCheck;
  
};
  
//Function to check vertically but backwards.
const searchBackVertical = (letters, word) => {
  
  const verticalBackJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let joinedWord = '';
    for (let a = letters.length - 1; a >= 0; a--) {
      joinedWord += letters[a][i];
    } verticalBackJoin.push(joinedWord);
  }
    
  let verticalBackCheck = searchWord(verticalBackJoin, word);
  
  return verticalBackCheck;
};
  
const searchWord = (joined, word) => {
  for (let l of joined) {
    if (l.includes(word)) {
      return true;
    }
  } return false;
};
  

module.exports = wordSearch;