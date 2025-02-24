/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

const reverseInteger = (int) => {
 const reverse = int.toString().split("").reverse().join("");
 return parseInt(reverse) * Math.sign(int);
};





module.exports = reverseInteger;
