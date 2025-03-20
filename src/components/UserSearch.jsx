import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Trie Node
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
        return this.getWordsFromNode(node, prefix);
    }

    getWordsFromNode(node, prefix) {
        let results = [];
        function dfs(currentNode, currentPrefix) {
            if (currentNode.isEndOfWord) results.push(currentPrefix);
            for (let char in currentNode.children) {
                dfs(currentNode.children[char], currentPrefix + char);
            }
        }
        dfs(node, prefix);
        return results;
    }
}

const UserSearch = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const trie = new Trie();

    useEffect(() => {
        setLoading(true);
        axios.get(API_URL).then((res) => {
            setUsers(res.data);
            res.data.forEach((user) => trie.insert(user.name));
            setLoading(false);
        });
    }, []);

    // Debounce function to optimize search performance
    const handleSearch = useCallback(
        debounce((query) => {
            if (!query) {
                setFilteredUsers([]);
                return;
            }
            const matchedNames = trie.search(query);
            setFilteredUsers(users.filter((user) => matchedNames.includes(user.name)));
        }, 300),
        [users]
    );

    const handleChange = (e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">🔍 Search Users</h2>
            <div className="relative">
                <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search by name..."
                    className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all duration-300"
                />
                {loading && (
                    <div className="absolute top-4 right-4 animate-spin rounded-full h-5 w-5 border-t-2 border-blue-500"></div>
                )}
            </div>

            {/* User List */}
            <ul className="mt-6">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <li
                            key={user.id}
                            className="p-4 bg-gray-50 rounded-lg shadow-md border flex justify-between items-center hover:bg-blue-100 transition-all duration-300 mb-3"
                        >
                            <div>
                                <p className="font-semibold text-gray-700">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                        </li>
                    ))
                ) : (
                    search && (
                        <p className="text-gray-500 text-center mt-4">No results found.</p>
                    )
                )}
            </ul>
        </div>
    );
};

export default UserSearch;
