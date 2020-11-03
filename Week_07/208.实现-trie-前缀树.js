/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root
    for (const char of word) {
        if (node[char]) {
            node = node[char]
        } else {
            node[char] = {}
            node = node[char]
        }
    }
    node.end = true
};
/**
 * @param {String} word
 * @return {}
 */
Trie.prototype.commonTraverse = function (word) {
    let node = this.root
    for (const char of word) {
        if (node[char]) {
            node = node[char]
        } else {
            return false
        }
    }
    return node
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const node = this.commonTraverse(word)
    return node && node.end === true
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    const node = this.commonTraverse(prefix)
    return node && Object.keys(node).length > 0
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

