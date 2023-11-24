import assert from "assert";
import { Problem } from "../types/problem";

// Definition for a binary tree node.
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Max Depth of Binary Tree
function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Test handler for maxDepth
export const maxDepthHandler = (fn: any) => {
  try {
    const tests = [
      [3, 9, 20, null, null, 15, 7], // Binary tree: [3, 9, 20, null, null, 15, 7]
      [1, null, 2], // Binary tree: [1, null, 2]
      [], // Empty tree
    ];

    const answers = [3, 2, 0];

    for (let i = 0; i < tests.length; i++) {
      const tree = createBinaryTree(tests[i]);
      const result = fn(tree);
      assert.strictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Error from maxDepthHandler: ", error);
    throw new Error(error);
  }
};

// Helper function to create a binary tree from an array
function createBinaryTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0) {
    return null;
  }

  const root = new TreeNode(values[0] as number);

  const queue = [root];
  let currentIndex = 1;

  while (currentIndex < values.length) {
    const currentNode = queue.shift()!;
    
    const leftValue = values[currentIndex++];
    if (leftValue !== null && leftValue !== undefined) {
      currentNode.left = new TreeNode(leftValue);
      queue.push(currentNode.left);
    }

    const rightValue = values[currentIndex++];
    if (rightValue !== null && rightValue !== undefined) {
      currentNode.right = new TreeNode(rightValue);
      queue.push(currentNode.right);
    }
  }

  return root;
}

const starterCodeMaxDepthJS = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// Do not edit function name
function maxDepth(root) {
  // Write your code here
};`;

export const maxDepthBinaryTree: Problem = {
  id: "maximum-depth-of-binary-tree",
  title: "8. Maximum Depth of Binary Tree",
  problemStatement: `<p class='mt-3'>Given the <code>root</code> of a binary tree, return its maximum depth.</p>
  <p class='mt-3'>
    A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.
    </p>`,
  examples: [
    {
      id: 0,
      inputText: "root = [3,9,20,null,null,15,7]",
      outputText: "3",
    },
    {
      id: 1,
      inputText: "root = [1,null,2]",
      outputText: "2",
    },
    {
      id: 2,
      inputText: "root = []",
      outputText: "0",
    },
  ],
  constraints: `<li class='mt-2'>The number of nodes in the tree is in the range <code>[0, 10^4]</code>.</li>
<li class='mt-2'><code>-100 <= Node.val <= 100</code></li>`,
  starterCode: starterCodeMaxDepthJS,
  handlerFunction: maxDepthHandler,
  starterFunctionName: "function maxDepth(",
  order: 8,
};