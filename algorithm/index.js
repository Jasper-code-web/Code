/*
 * @Author: shenqing 1156657702@qq.com
 * @Date: 2022-09-20 14:48:51
 * @LastEditors: shenqing 1156657702@qq.com
 * @LastEditTime: 2022-10-17 10:16:39
 * @FilePath: \code\code\algorithm\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
//  var addTwoNumbers2 = function (l1, l2) {
//     function getNode(list, nextNode, outcome) {
//         outcome.push(list.val)
//         if (nextNode) {
//             getNode(nextNode, nextNode.next, outcome)
//         }
//     }
//     function sum(arr1, arr2) {
//         num1 = BigInt(arr1.reverse().join(''))
//         num2 = BigInt(arr2.reverse().join(''))
//         console.log(num1, num2)
//         return (num1 + num2).toString().split('').reverse()
//     }
//     function createList(arr) {
//         let head = new ListNode(arr[0])
//         let currentNode = head
//         for (let i = 1; i < arr.length; i++) {
//             const node = new ListNode(arr[i])
//             currentNode = appendNode(currentNode, node)
//         }
//         return head
//     }
//     function appendNode(list, node) {
//         list.next = node
//         return list.next
//     }
//     function master() {
//         let outcome1 = []
//         let outcome2 = []
//         getNode(l1, l1.next, outcome1)
//         getNode(l2, l2.next, outcome2)
//         let total = sum(outcome1, outcome2)
//         console.log(total)
//         return createList(total)
//     }
//     return master()
// };

/**
 * @discription: No.704 binary search [left, right]
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
// var search = function(nums, target) {
//     left = 0
//     right = nums.length - 1
//     while(left <= right) {
//         const middle = Math.floor((left + right) / 2)
//         if(nums[middle] > target) {
//             right = middle - 1
//         } else if(nums[middle] < target) {
//             left = middle + 1
//         } else {
//             return middle
//         }
//     }
//     return -1
// };

/**
 * @discription: No.34
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
// var searchInsert = function(nums, target) {
//     let left = 0
//     let right = nums.length - 1
//     while(left <= right) {
//         const middle = Math.floor((left + right) / 2)
//         if(nums[middle] > target) {
//             right = middle - 1
//         } else if(nums[middle] < target) {
//             left = middle + 1
//         } else {
//             return middle
//         }
//     }
//     return left
// };

/**
 * @discription: No.27
 * @param {*} nums
 * @param {*} val
 * @return {*}
 */
// var removeElement = function(nums, val) {
//     for(let i = 0; i < nums.length; i ++) {
//         if(nums[i] === val) {
//             nums.splice(i, 1)
//             i = i - 1
//         }
//     }
//     return nums.length
// };

/**
 * @discription: No.203
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//     let ret = new ListNode(0, head),
//         cur = ret
//     while(cur.next) {
//         if(cur.next.val === val) {
//             cur.next = cur.next.next
//             continue
//         }
//         cur = cur.next
//     }
//     return ret.next
// };

/**
 * @discription: No.206
 * @param {ListNode} head
 * @return {ListNode}
 */
//双指针
// var reverseList = function(head) {
//     if(!head || !head.next) return head
//     let temp = null, pre = null, cur = head
//     while(cur) {
//         temp = cur.next
//         cur.next = pre
//         pre = cur
//         cur = temp
//     }
//     return pre
// };

//递归1
// var reverse = function(pre, head) {
//     if(!head) return pre
//     const temp = head.next
//     head.next = pre
//     pre = head
//     return reverse(pre, temp)
// }
// var reverseList = function(head) {
//     return reverse(null, head)
// };

/**
 * * @discription: No.24
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//     //创建一个0为头的虚拟头节点
//     let ret = new ListNode(0, head),
//         //temp等于新链表
//         temp = ret;
//     while (temp.next && temp.next.next) {
//         let cur = temp.next.next,
//             pre = temp.next;
//         pre.next = cur.next;
//         cur.next = pre;
//         temp.next = cur;
//         temp = pre;
//     }
//     return ret.next;
// };

/**
 * @discription: No.160
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//  var getListLen = function(head) {
//     let len = 0, cur = head;
//     while(cur) {
//        len++;
//        cur = cur.next;
//     }
//     return len;
// }
// var getIntersectionNode = function(headA, headB) {
//     let curA = headA,curB = headB,
//         lenA = getListLen(headA),
//         lenB = getListLen(headB);
//     if(lenA < lenB) {
//         [curA, curB] = [curB, curA];
//         [lenA, lenB] = [lenB, lenA];
//     }
//     let i = lenA - lenB;
//     while(i-- > 0) {
//         curA = curA.next;
//     }
//     while(curA && curA !== curB) {
//         curA = curA.next;
//         curB = curB.next;
//     }
//     return curA;
// };

/**
 * @discription: No.142
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//     if(head || !head.next) return null
//     let slow = head.next, fast = head.next.next
//     while(!fast || !fast.next || fast !== slow) {
//         slow = slow.next
//         fast = fast.next.next
//     }
//     if(!fast || !fast.next) return null
//     slow = head
//     while(fast !== slow) {
//         fast = fast.next
//         slow = slow.next
//     }
//     return slow
// };

/**
 * @discription: No.242
 * @type: hash
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false
//     const strArr = Array(26).fill(0),
//           data = "a".charCodeAt()
//     for(const i of s) {
//         strArr[i.charCodeAt() - data] ++
//     }
//     for(const i of t) {
//         if(!strArr[i.charCodeAt() - data]) return false
//         strArr[i.charCodeAt() - data] --
//     }
//     return true
// };

/**
 * oneself
 * O: N^2
 * @discription: No.349
 * @type: hash
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//  var intersection = function(nums1, nums2) {
//     let setNums1 = new Set(nums1)
//     let setNums2 = new Set(nums2)
//     let intersectSet = new Set()
//     setNums1.forEach(item => {
//         setNums2.forEach(ele => {
//             if(item === ele) intersectSet.add(item)
//         })
//     })
//     return Array.from(intersectSet)
// };
/**
 * @discription: No.349
 * O: n
 * type: hash
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//     if(nums1.length < nums2.length) {
//         let _ = nums1
//         nums1 = nums2
//         nums2 = _
//     }
//     const intersectSet = new Set()
//     for(let i = nums1.length; i > 0; i --) {
//         nums2.includes(nums1[i - 1]) && intersectSet.add(nums1[i - 1])
//     }
//     return Array.from(intersectSet)
// };

/**
 * @discription: No.202
 * O: O(n)
 * type: hash
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function (n) {
//     let m = new Map()
//     function getSum(n) {
//         let sum = 0
//         while(n) {
//             sum += (n % 10) ** 2
//             n = Math.floor(n / 10)
//         }
//         return sum
//     }
//     while(true) {
//         if(m.get(n)) return false
//         if(n === 1) return true
//         m.set(n, 1)
//         n = getSum(n)
//     }
// };

/**
 * @discription: No.1
 * O: O(n)
 * type: hash
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     const iMap = new Map();
//     for(let i = 0; i < nums.length; i ++) {
//         if(iMap.has(target - nums[i])) {
//             return [i, iMap.get(target - nums[i])]
//         }
//         iMap.set(nums[i], i)
//     }
// };

/**
 * @discription: No.454
 * O: O(n ^ 2)
 * type: hash
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
// var fourSumCount = function (nums1, nums2, nums3, nums4) {
//     const twoSumMap = new Map()
//     let count = 0

//     for(a of nums1) {
//         for(b of nums2) {
//             let sum = a + b
//             twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1)
//         }
//     }

//     for(c of nums3) {
//         for(d of nums4) {
//             let sum = c + d
//             if(twoSumMap.has(0 - sum)) {
//                 count += twoSumMap.get(0 - sum)
//             }
//         }
//     }

//     return count
// };
