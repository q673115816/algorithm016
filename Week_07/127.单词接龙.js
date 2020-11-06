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
    let hash = new Set(wordList)
    if(!hash.has(endWord)) return 0
    let beginSet = new Set([beginWord])
    let endSet = new Set([endWord])
    let len = 1
    while (beginSet.size && endSet.size) {

        if (beginSet.size > endSet.size) {
            [beginSet, endSet] = [endSet, beginSet]
        }

        const temp = new Set
        for (const word of beginSet) {
            for (let i = 0; i < word.length; i++) {
                for (let j = 97; j < 123; j++) {
                    const newWord = word.slice(0, i) + String.fromCodePoint(j) + word.slice(i + 1)
                    if (endSet.has(newWord)) {
                        return len + 1
                    }
                    if (hash.has(newWord)) {
                        hash.delete(newWord)
                        temp.add(newWord)
                    }
                }
            }
        }
        beginSet = temp
        len++
    }
    return 0
};
// var ladderLength = function (beginWord, endWord, wordList) {
//     let hash = new Set(wordList)
//     let queue = []
//     queue.push([beginWord, 1])
//     while (queue.length) {
//         const [word, level] = queue.shift()
//         if (word === endWord) {
//             return level
//         }
//         for (let i = 0; i < word.length; i++) {
//             for (let j = 97; j < 123; j++) {
//                 const newWord = word.slice(0, i) + String.fromCodePoint(j) + word.slice(i + 1)
//                 if (hash.has(newWord)) {
//                     queue.push([newWord, level + 1])
//                     hash.delete(newWord)
//                 }
//             }
//         }
//     }
//     return 0

// };
// @lc code=end

