// Given two strings, write a function to determine if the second string is an anagram of the first.
// A anagram is a word , phrase, or name formed by rearranging the letter of another, such as cinema formed from iceman.

const isValidAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const frequencyOne = {};

  for (const char of str1) {
    frequencyOne[char] = (frequencyOne[char] || 0) + 1;
  }
  for (const char of str2) {
    if (frequencyOne[char] > 0) {
      frequencyOne[char] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

isValidAnagram("", ""); // true
isValidAnagram("aaz", "zza"); // false
isValidAnagram("anagram", "nagaram"); // true
isValidAnagram("rat", "car"); // false) // false
isValidAnagram("awesome", "awesom"); //false
isValidAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
isValidAnagram("qwerty", "qeywrt"); // true
isValidAnagram("texttwisttime", "timetwisttext");
isValidAnagram("aa", "aaz");
