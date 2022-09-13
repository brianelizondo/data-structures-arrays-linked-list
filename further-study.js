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

    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) {
        if(idx === 0){
            this.shift();
        } else if(idx >= this.length){
            throw "The index is invalid";
        } else{
            let currentNode = this.head;
            let previousNode;
            let idxPos = 0;
            while(currentNode){
                if(idx === idxPos){
                    previousNode.next = currentNode.next;
                    this.length--;
                    return currentNode.val;
                }
                idxPos++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    /** pivot around value */
    pivot(pivotValue){
        let currentNode = this.head;
        let count = this.length;

        let currentIDX = 0;
        while(currentNode && count > 0){
            if(currentNode.val >= pivotValue){
                let nextCurrentNode = currentNode.next;
                this.removeAt(currentIDX);
                this.push(currentNode.val);

                currentNode = nextCurrentNode;
            }else{
                currentIDX++;
                currentNode = currentNode.next;
            }
            count--;
        }
    }
}

/** new sorted linked list */
function sortedLists(listA, listB){
    let listBase = listA.head;
    let listAdditional = listB.head;

    if(listBase.val > listAdditional.val){
        listBase = listB.head;
        listAdditional = listA.head;
    }

    let newList = new LinkedList();
    while(listBase){
        newList.push(listBase.val);
        
        let listAdditionalHead = listB.head;
        while(listAdditionalHead){
            if(listAdditionalHead.val >= listBase.val && listAdditionalHead.val < listBase.next.val){
                newList.push(listAdditionalHead.val);
            }
            listAdditionalHead = listAdditionalHead.next;
        }
        listBase = listBase.next;
    }
    
    return newList;
}

module.exports = {LinkedList, sortedLists};
