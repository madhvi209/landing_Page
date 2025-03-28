import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word.toLowerCase()) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(prefix) {
        let node = this.root;
        for (let char of prefix.toLowerCase()) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }
        return this.collectWords(node, prefix);
    }

    collectWords(node, prefix) {
        let words = [];
        if (node.isEndOfWord) words.push(prefix);
        for (let char in node.children) {
            words.push(...this.collectWords(node.children[char], prefix + char));
        }
        return words;
    }
}

const UserSearch = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [trie] = useState(new Trie());  // ✅ Use the Trie in state

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
                response.data.forEach(user => trie.insert(user.name)); // ✅ Store names in Trie
            })
            .catch(error => console.error("Error fetching users:", error));
    }, [trie]);

    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearch = useCallback(
        debounce((query) => {
            setFilteredUsers(trie.search(query)); // ✅ Use Trie search
        }, 300),
        [trie]
    );

    const handleChange = (event) => {
        const query = event.target.value;
        setSearchTerm(query);
        handleSearch(query);
    };

    return (
        <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">🔍 Search Users</h2>
            <input
                type="text"
                placeholder="Search users..."
                className="border p-2 w-full rounded-md"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul className="mt-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((name, index) => (
                        <li key={index} className="p-2 border-b">{name}</li>
                    ))
                ) : (
                    <li className="p-2 text-gray-500">No results found</li>
                )}
            </ul>
        </div>
    );
};

export default UserSearch;
