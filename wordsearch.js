const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let bool = false;
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      console.log("this is a true statement :", l);
      return true;
    } else if (!l.includes(word)) {
      console.log("this is a flase statment:", l);
      bool = false;
    }
  }

  //this code constructs a transposed array
  let newArry = [];
        
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      // begin creating rows  - one for each digit
      if (newArry[j] === undefined) newArry[j] = [];
      // now reorder the arrays
      newArry[j][i] = letters[i][j];
    }
  }
  // performed checks on new H. Array
  const verticalJoin = newArry.map(ls => ls.join(''));
  for (let h of verticalJoin) {
    if (h.includes(word)) {
      console.log("this is a true statement :", h);
      return true;
    }
  }
  return bool;
};
        





module.exports = wordSearch;
        
        
        
