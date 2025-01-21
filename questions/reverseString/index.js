/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// 0 a = '', c = 'D' => a = 'D' + '' = 'D'
// 1 a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// 2 a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// 3 a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// 4 a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

const reverseString = (str) => {
 
// let reverse = '';
//  for (let i = 0; i < str.length; ++i) {
//     reverse = str[i] + reverse;
//  }
//  return reverse;
//  };


// let reverse = '';
// for (let char of str) {
//     reverse = char + reverse;
// }
//  return reverse;
//  };


// const arr = str.split('');
// const reverseArr = arr.reverse();
// return reverseArr.join('');
// };


// return str.split('').reverse().join('');
// };


return str
    .split("")
    .reduce((accumulator, currentValue) => currentValue + accumulator);
};


module.exports = reverseString;
