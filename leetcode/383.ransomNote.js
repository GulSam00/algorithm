/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function(ransomNote, magazine) {
//     const magazaineHash = {};
//     for (let char of magazine) {
//         magazaineHash[char] = magazaineHash[char] + 1 || 1;
//     }
//     for (let i = 0; i < ransomNote.length; i++) {
//         if (magazaineHash[ransomNote[i]] && magazaineHash[ransomNote[i]] > 0) {
//             magazaineHash[ransomNote[i]]--;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

// replace

var canConstruct = function(ransomNote, magazine) {
    for (const char of magazine) {
     ransomNote = ransomNote.replace(char, "");
   }
   

   console.log(ransomNote);
   if (!ransomNote) return true;
   else return false;
 };

console.log(canConstruct("gfawaaaeee", "aabccc"));