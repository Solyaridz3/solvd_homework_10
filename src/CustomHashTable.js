import { LinkedList } from "./LinkedList.js";

export class CustomHashTable {
    constructor() {
        this.table = new Array(16);
        this.itemsCount = 0;
    }
    /**
     * Iterates through [key, value] pairs of hash table
     */
    *[Symbol.iterator]() {
        for (const item of this.table) {
            if (item instanceof LinkedList) {
                for (const element of item) {
                    yield element;
                }
            } else if (item) {
                yield item;
            }
        }
    }

    /**
     * Resizes the hash table by creating a new table with double the size and rehashing all the elements.
     */
    resize() {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach((item) => {
            if (item instanceof LinkedList) {
                for (const element of item) {
                    const [key, value] = element;
                    this._setValue(newTable, key, value);
                }
            } else if (item) {
                const [key, value] = item;
                this._setValue(newTable, key, value);
            }
        });
        this.table = newTable;
    }

    /**
     * djb2 hash function with a little change to match table length
     * @param {string} key
     * @param {number} tableLength
     * @returns {number}
     */
    hash(key, tableLength) {
        let index = 5381;
        for (let i = 0; i < key.length; i++) {
            index = (index << 5) + index + key.charCodeAt(i);
        }
        return (index >>> 0) % tableLength;
    }

    /**
     * Inserts a key-value pair into the hash table. If the load factor exceeds 0.75,
     * the hash table is resized.
     *
     * @param {string} key - The key to be inserted.
     * @param {any} value - The value associated with the key.
     */
    insert(key, value) {
        this.itemsCount++;
        const loadFactor = this.itemsCount / this.table.length;

        if (loadFactor > 0.75) {
            this.resize();
        }

        this._setValue(this.table, key, value);
    }

    /**
     * Sets the value in the table at the specified index. If the index is already occupied,
     * appends the key-value pair to the LinkedList at that index. If the index is not
     * occupied, creates a new LinkedList with the key-value pair and assigns it to the index.
     *
     * @param {Array} table - The table to set the value in.
     * @param {string} key - The key to set the value for.
     */
    _setValue(table, key, value) {
        const index = this.hash(key, table.length);

        if (table[index]) {
            if (table[index] instanceof LinkedList) {
                table[index].append([key, value]);
            } else {
                const item = new LinkedList(table[index]);
                item.append([key, value]);
                table[index] = item;
            }
        } else {
            table[index] = [key, value];
        }
    }

    _searchCallback =
        (key) =>
        ([currentKey]) =>
            currentKey === key;


    /**
     * Retrieves the value associated with the given key from the hash table.
     *
     * @param {string} key - The key to search for in the hash table.
     * @return {any} The value associated with the key, or undefined if the key is not found.
     */
    get(key) {
        const target = this._get(key);
        if (target instanceof LinkedList) {
            return target.element[1];
        } else if (target) {
            return target[1];
        }
        return undefined;
    }

    /**
     * Retrieves the value associated with the given key from the hash table.
     *
     * @param {string} key - The key to search for in the hash table.
     * @return {any} The value associated with the key, or undefined if the key is not found.
     */
    _get(key) {
        const index = this.hash(key, this.table.length);
        const cell = this.table[index];
        if (!cell) {
            return undefined;
        }
        if (cell instanceof LinkedList) {
            const target = cell.findByCallBack(this._searchCallback(key));
            return target;
        } else {
            return cell;
        }
    }

    /**
     * Deletes a key-value pair from the hash table.
     *
     * @param {string} key - The key of the key-value pair to be deleted.
     * @return {boolean} Returns true if the key-value pair is successfully deleted, false otherwise.
     */
    delete(key) {
        const hashedKey = this.hash(key, this.table.length);
        let cell = this.table[hashedKey];
        if (cell instanceof LinkedList) {
            this.itemsCount--;
            return cell.deleteByCallBack(this._searchCallback(key));
        } else if (cell) {
            this.itemsCount--;
            this.table[hashedKey] = undefined;
            return true;
        }
        return false;
    }
    /**
     * Prints the key-value pairs of the object.
     */
    _print() {
        console.log("Key Value Pairs:");
        for (const [key, value] of this) {
            console.log(`${key} = ${value}`);
        }
    }
}
