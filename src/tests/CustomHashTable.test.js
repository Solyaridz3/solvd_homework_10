import { CustomHashTable } from "../CustomHashTable.js";

describe("CustomHashTable", () => {
    let hashTable;

    beforeEach(() => {
        hashTable = new CustomHashTable();
    });

    test("insert and retrieve single item", () => {
        hashTable.insert("key1", "value1");
        const iterator = hashTable[Symbol.iterator]();
        const item = iterator.next().value;
        expect(item).toEqual(["key1", "value1"]);
    });

    test("insert multiple items", () => {
        hashTable.insert("key1", "value1");
        hashTable.insert("key2", "value2");
        hashTable.insert("key3", "value3");
        const items = Array.from(hashTable);
        expect(items).toContainEqual(["key1", "value1"]);
        expect(items).toContainEqual(["key2", "value2"]);
        expect(items).toContainEqual(["key3", "value3"]);
    });

    test("resize table when load factor exceeds 0.75", () => {
        for (let i = 0; i < 13; i++) {
            hashTable.insert(`key${i}`, `value${i}`);
        }
        expect(hashTable.table.length).toBe(32); // After resizing, the table length should be doubled

        const items = Array.from(hashTable);
        for (let i = 0; i < 13; i++) {
            expect(items).toContainEqual([`key${i}`, `value${i}`]);
        }
    });

    test("hash function returns correct index", () => {
        const index = hashTable.hash("testKey", 16);
        expect(index).toBeLessThan(16);
        expect(index).toBeGreaterThanOrEqual(0);
    });

    test("hash function produces different values for different keys", () => {
        const index1 = hashTable.hash("key1", 16);
        const index2 = hashTable.hash("key2", 16);
        expect(index1).not.toBe(index2);
    });

    test("iterator works correctly", () => {
        hashTable.insert("key1", "value1");
        hashTable.insert("key2", "value2");
        const items = Array.from(hashTable);
        expect(items).toContainEqual(["key1", "value1"]);
        expect(items).toContainEqual(["key2", "value2"]);
    });

    test("handle collision using LinkedList", () => {
        const key1 = "abc";
        const key2 = "acb"; // These keys should result in the same hash index for a small table size
        hashTable.insert(key1, "value1");
        hashTable.insert(key2, "value2");
        const items = Array.from(hashTable);
        expect(items).toContainEqual([key1, "value1"]);
        expect(items).toContainEqual([key2, "value2"]);
    });

    test('Deleting from an empty hash table', () => {
        expect(hashTable.delete('nonExistentKey')).toBe(false);
    });

    test('Deleting a non-existent key from a non-empty hash table', () => {
        hashTable.insert('key1', 'value1');
        expect(hashTable.delete('nonExistentKey')).toBe(false);
    });

    test('Deleting a key that exists', () => {
        hashTable.insert('key1', 'value1');
        expect(hashTable.delete('key1')).toBe(true);
        expect(hashTable.get('key1')).toBeUndefined();
    });
});
