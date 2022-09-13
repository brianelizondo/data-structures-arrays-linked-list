const {LinkedList, sortedLists} = require("./further-study");

describe("push", function() {
  it("appends node and increments length", function() {
    let lst = new LinkedList();

    lst.push(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.push(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.tail.val).toBe(10);

    lst.push(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.next.val).toBe(15);
    expect(lst.tail.val).toBe(15);
  });
});

describe("sortedLists", function() {
    it("passed two linked lists and return a new linked list in sorted order", function() {
      let listA = new LinkedList([1,3,5,7,11]);
      let listB = new LinkedList([2,4,6,8,10]);
  
      let newList = sortedLists(listA, listB);
      expect(newList.length).toBe(10);
      expect(newList.head.val).toBe(1);
      expect(newList.head.next.next.val).toBe(3);
      expect(newList.head.next.next.next.val).toBe(4);
      expect(newList.tail.val).toBe(11);
    });
});

describe("pivot", function() {
    it("rearrange the items in the linked list, with a pivot number", function() {
      let lst = new LinkedList([7, 6, 2, 3, 9, 1, 1])
  
      lst.pivot(5);
      expect(lst.length).toBe(7);
      expect(lst.head.val).toBe(2);
      expect(lst.head.next.next.next.val).toBe(1);
      expect(lst.head.next.next.next.next.val).toBe(7);
      expect(lst.tail.val).toBe(9);

      lst = new LinkedList([7, 6, 2, 5, 3, 5, 9, 1, 1]);
      lst.pivot(5);
      expect(lst.length).toBe(9);
      expect(lst.head.val).toBe(2);
      expect(lst.head.next.next.next.val).toBe(1);
      expect(lst.head.next.next.next.next.val).toBe(7);
      expect(lst.head.next.next.next.next.next.next.val).toBe(5);
      expect(lst.tail.val).toBe(9);
    });
});