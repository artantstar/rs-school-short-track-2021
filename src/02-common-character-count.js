/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a = s1;
  let b = s2;

  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < b.length; k++) {
      if (a[i] === b[k]) {
        sum++;

        b = b.slice(0, k) + b.slice(k + 1);

        k = b.length;
      }
    }
  }

  return sum;
}

module.exports = getCommonCharacterCount;
