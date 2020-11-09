/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {

    const initHash = new Set(wordList)
    if (!initHash.has(endWord)) return 0
    let beginHash = new Set([beginWord])
    let endHash = new Set([endWord])
    let len = 1
    while (beginHash.size && endHash.size) {
        if (beginHash.size > endHash.size) {
            [beginHash, endHash] = [endHash, beginHash]
        }
        let tempHash = new Set
        for (const char of beginHash) {
            for (let i = 0; i < char.length; i++) {
                for (let k = 97; k <= 122; k++) {
                    const newChar = char.slice(0, i) + String.fromCharCode(k) + char.slice(i + 1)
                    if (endHash.has(newChar)) return len + 1
                    if (initHash.has(newChar)) {
                        initHash.delete(newChar)
                        tempHash.add(newChar)
                    }
                }
            }
        }
        len++
        beginHash = tempHash
    }
    return 0
};
// var ladderLength = function (beginWord, endWord, wordList) {
//     const hash = new Set(wordList)
//     const queue = [[beginWord, 0]]
//     while (queue.length) {
//         const [char, len] = queue.shift()
//         if (endWord === char) return len + 1
//         for (let i = 0; i < char.length; i++) {
//             for (let j = 97; j <= 122; j++) {
//                 const newChar = char.slice(0, i) + String.fromCharCode(j) + char.slice(i + 1)
//                 if (hash.has(newChar)) {
//                     hash.delete(newChar)
//                     queue.push([newChar, len + 1])
//                 }
//             }
//         }
//     }
//     return 0
// };
// @lc code=end

