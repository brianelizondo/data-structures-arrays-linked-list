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
