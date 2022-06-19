// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
// Solution from this link: https://bokki.org/codewars/6kyu/6kyu-backspaces-in-string/

function cleanString(s) {
    let str = s;
    for (let i = 0; i < s.length-1; i++) {
      const idx = str.indexOf('#');
      const splitStr = str.split(str.slice(idx-1, idx+1)).join('');
      if (idx === 0) {
        str = str.substring(1); 
      } else {
        str = splitStr;
      }
    }
    console.log(str);
};
cleanString('abc#d##c')
console.log('=========')
cleanString('abc##d######')
console.log('========')
cleanString('abc##d######y')
console.log('========')
cleanString('a#bc#d')
