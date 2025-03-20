class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }
        return this.getWords(node, prefix);
    }

    getWords(node, prefix) {
        let results = [];
        if (node.isEnd) results.push(prefix);
        for (let char in node.children) {
            results = results.concat(this.getWords(node.children[char], prefix + char));
        }
        return results;
    }
}

export default Trie;
