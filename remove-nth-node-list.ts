// @ts-ignore
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function removeNthFromEnd(head: ListNode | null, n: number) {
    if (!head || isNaN(parseInt(head?.val.toString() ?? "")) || !head?.next) return head

    function reverseNode(current: ListNode, reversedHead = new ListNode()) {
        if (!current.next) {
            return reversedHead
        }

        const oldNext = reversedHead.next
        reversedHead.next = new ListNode(current.val, oldNext)

        if (!isNaN(current.next?.val)) {
            reversedHead.val = current.next.val
        }


        return reverseNode(current.next, reversedHead)
    }

    return reverseNode(head)
};

const testNode = new ListNode(0, new ListNode(1, new ListNode(4, new ListNode(-2))))


console.log(removeNthFromEnd(testNode, 2))
