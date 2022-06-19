// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

// function cleanString(s) {
  
// }
// cleanString('a#bc#d')
// console.log('========')
// cleanString('abc#d##c')
// console.log('========')
// cleanString('#######')

// str = 'a#bc#d'
// str = 'abc#d##c'
// strlength = str.length
// i=0
// while(i<=strlength-1){
//     console.log(str[i])
//     for(j=0; j<=strlength-1; j++){
//         if(str[j] == '#'){
//             str = str.replace(str.slice(j-1,j+1), '')
//             console.log(str)
//         }
//     }

//     i++
// }

function cleanString(s) {
    let str = s;
    for (let i = 0; i < s.length-1; i += 1) {
      const idx = str.indexOf('#');
      const splitStr = str.split(str.slice(idx-1, idx+1)).join('');
    //   console.log(splitStr)
      if (idx === 0) {
        // str = str.substring(1, );
        str = str.substring(1);
        // console.log(str)
        // if (str === '#') {
        //   return '';
        // }
        
      } else {
        str = splitStr;
      }

        // if(idx != 0){
        //     str = splitStr;
        // }
    }
    
    console.log(str);
  };
  // cleanString('abc#d##c')
  // console.log('=========')
  // cleanString('abc##d######')
  // console.log('========')
  cleanString('abc##d######y')
  // console.log('========')
  // cleanString('a#bc#d')

// str = str.replace(str.slice(j-1,j+1), '')
// str = 'abc#d##c'
// console.log(str)
// console.log(str.replace(str.slice(2,4), ''))
// str = 'abd##c'
// console.log(str.replace(str.slice(2,4), ''))
// str = 'ab#c'
// console.log(str.replace(str.slice(1,3), ''))
// console.log('========================================')