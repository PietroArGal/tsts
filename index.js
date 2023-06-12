class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function inserNode(head, value, index) {
    const newNode = new ListNode(value);

    if (index <= 0) {
        newNode.next = head;
        return newNode;
    }

    let current = head;
    let prev = null;
    let currentIndex = 0;

    while (current !== null && currentIndex < index) {
        prev = current;
        current = current.next;
        currentIndex++;
    }

    if (current === null) {
        prev.next = newNode;
    } else {
        newNode.next = current;
        if (prev !== null) {
            prev.next = newNode;
        } else {
            head = newNode
        }
    }

    return head

}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

const newValue = 4;
const insertIndex = 1;

const newHead = inserNode(head, newValue, insertIndex)

let current = newHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}