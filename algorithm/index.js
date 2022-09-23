// var twoSum1 = function (nums, target) {
//     const map = new Map()
//     for(let i = 0; i < nums.length; i ++) {
//         map.set(nums[i], i)
//     }
//     for(let i = 0; i < nums.length; i ++) {
//         const diff = target - nums[i]
//         if(map.has(diff) && map.get(diff) !== i) {
//             return [i, map.get(diff)]
//         }
//     }
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers2 = function (l1, l2) {
    function getNode(list, nextNode, outcome) {
        outcome.push(list.val)
        if (nextNode) {
            getNode(nextNode, nextNode.next, outcome)
        }
    }
    function sum(arr1, arr2) {
        num1 = BigInt(arr1.reverse().join(''))
        num2 = BigInt(arr2.reverse().join(''))
        console.log(num1, num2)
        return (num1 + num2).toString().split('').reverse()
    }
    function createList(arr) {
        let head = new ListNode(arr[0])
        let currentNode = head
        for (let i = 1; i < arr.length; i++) {
            const node = new ListNode(arr[i])
            currentNode = appendNode(currentNode, node)
        }
        return head
    }
    function appendNode(list, node) {
        list.next = node
        return list.next
    }
    function master() {
        let outcome1 = []
        let outcome2 = []
        getNode(l1, l1.next, outcome1)
        getNode(l2, l2.next, outcome2)
        let total = sum(outcome1, outcome2)
        console.log(total)
        return createList(total)
    }
    return master()
};
