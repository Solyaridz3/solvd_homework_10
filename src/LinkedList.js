// @ts-check

/**
 * Represents a node in a linked list.
 */
export class ListNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

export class LinkedList {
    constructor(value) {
        const newNode = new ListNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    /**
     * Iterates over elements of Linked List
     */
    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.element;
            current = current.next;
        }
    }

    /**
     * Appends a new element to the end of the list.
     * @param {*} element The element to append.
     * @returns {this} The updated list.
     */
    append(element) {
        const newNode = new ListNode(element);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    /**
     * Prepends a new element to the beginning of the list.
     * @param {*} value The element to prepend.
     * @returns {this} The updated list.
     */
    prepend(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.length++;
        this.head = newNode;
        return this;
    }

    /**
     * Retrieves the node at the specified position.
     * @param {number} position The position of the node to retrieve.
     * @returns {ListNode} The node at the specified position.
     * @throws {Error} If the position is out of bounds.
     */
    get(position) {
        if (position < 0 || position >= this.length) {
            throw new Error(`Position ${position} is out of bounds`);
        }

        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

    /**
     * Finds the first node containing the specified element.
     * @param {*} element The element to find.
     * @returns {ListNode | null} The node containing the element, or null if not found.
     */
    find(element) {
        let current = this.head;
        while (current !== null && current.element !== element) {
            current = current.next;
        }
        return current;
    }

    /** Finds item that match callback function
     *
     * @param {Function} callback
     */
    findByCallBack(callback) {
        let current = this.head;
        while (current) {
            if (callback(current.element)) {
                return current;
            }
            current = current.next;
        }
        return current;
    }

    /**
     * Deletes the first node containing the specified element.
     * @param {*} element The element to delete.
     * @returns {boolean} True if the node was deleted, false otherwise.
     */
    delete(element) {
        if (!this.head) {
            return false;
        }

        // If the element is in the head
        if (this.head.element === element) {
            this.head = this.head.next;
            this.length--;
            // If the list becomes empty after deletion
            if (this.length === 0) {
                // @ts-ignore
                this.tail = null;
            }
            return true;
        }

        let current = this.head;
        while (current.next !== null && current.next.element !== element) {
            current = current.next;
        }

        if (current.next === null) {
            return false;
        }

        // If the element is in the tail
        if (current.next === this.tail) {
            this.tail = current;
        }

        current.next = current.next.next;
        this.length--;
        return true;
    }

    /** Deletes the item that match callback function
     *
     * @param {Function} callback
     */
    deleteByCallBack(callback) {
        if (this.head && callback(this.head.element)) {
            this.head = this.head.next;
            this.length--;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (callback(current.next.element)) {
                if (current.next === this.tail) {
                    current.next = null;
                    this.tail = current;
                } else {
                    current.next = current.next.next;
                }
                this.length--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /**
     * Prints the elements of the list.
     */
    _print() {
        let currentNode = this.head;
        if (!currentNode) {
            console.log("List is empty");
            return;
        }

        const items = ["Head"];
        while (currentNode !== null) {
            items.push(currentNode.element);
            currentNode = currentNode.next;
        }
        items.push("Tail");
        console.log(...items);
    }
}
