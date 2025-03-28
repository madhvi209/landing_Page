import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

// Trie Node Definition
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

// Trie Data Structure
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
    const trie = new Trie(); // ✅ Create an instance of Trie

    // Fetch and store user names in Trie
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
                response.data.forEach(user => trie.insert(user.name)); // ✅ Insert names into Trie
            })
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    // Debounced Search Function
    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearch = useCallback(
        debounce((query) => {
            setFilteredUsers(trie.search(query)); // ✅ Use Trie for search
        }, 300),
        []
    );

    // Handle Input Change
    const handleChange = (event) => {
        const query = event.target.value;
        setSearchTerm(query);
        handleSearch(query);
    };

    return (
        <div className="p-4">
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
