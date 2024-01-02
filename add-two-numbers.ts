class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null | undefined,
  l2: ListNode | null | undefined,
): ListNode | null {
  let node1 = l1;
  let node2 = l2;

  let node1List: Array<number> = node1?.val ? [node1.val] : [];

  let node2List: Array<number> = node2?.val ? [node2.val] : [];

  while (node1 !== null && node2 !== null) {
    node1 = l1?.next;
    node2 = l2?.next;

    if (node1?.val) node1List.push(node1.val);
    if (node2?.val) node2List.push(node2.val);
  }

  console.log(node1List, node2List);

  node1List.reverse();
  node2List.reverse();
}
