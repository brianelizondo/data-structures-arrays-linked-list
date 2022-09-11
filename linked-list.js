/** Node: node for a singly linked list. */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


/** LinkedList: chained together nodes. */
class LinkedList{
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */
    push(val) {
        let newNode = new Node(val);

        if (this.head === null) this.head = newNode;
        
        if (this.tail !== null) this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
    }

    /** unshift(val): add new value to start of list. */
    unshift(val) {
        if(this.head === null){
            this.push(val);
        }else{
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    /** pop(): return & remove last item. */
    pop() {
        if(this.head === null){
            throw "The list is empty";
        }else{
            let currentNode = this.head;
            let previousNode;
            while(currentNode){
                if(currentNode === this.tail){
                    this.tail = previousNode;
                    this.length--;
                    if(this.length == 0){
                        this.head = null;
                        this.tail = null;
                    }
                    return currentNode.val;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    /** shift(): return & remove first item. */
    shift() {
        if(this.head === null){
            throw "The list is empty";
        }else{
            let currentHead = this.head;
            this.head = this.head.next;
            this.length--;
            if(this.length == 0){
                this.head = null;
                this.tail = null;
            }
            return currentHead.val;
        }
    }

    /** getAt(idx): get val at idx. */
    getAt(idx) {
        if(idx < 0 || idx >= this.length){
            throw "The index is invalid";
        }
         
        let currentNode = this.head;
        let idxPos = 0;
        while(currentNode){
            if(idx === idxPos){
                return currentNode.val;
            }
            idxPos++;
            currentNode = currentNode.next;
        }
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {

    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {

    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {

    }

    /** average(): return an average of all values in the list */

    average() {

    }
}

module.exports = LinkedList;
