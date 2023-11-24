import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSubsets = `// Do not edit function name
function subset(nums) {
    // Write your code here
};`;

// Test handler for subsets
export const subsetsHandler = (fn: any) => {
  try {
    const tests = [
      [1, 2, 3], // Input: [1, 2, 3]
      [0], // Input: [0]
    ];

    const answers = [
      [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
      [[], [0]],
    ];

    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Error from subsetsHandler: ", error);
    throw new Error(error);
  }
};

export const subsets: Problem = {
  id: "subsets",
  title: "10. Subsets",
  problemStatement: `<p class='mt-3'>
  Given an integer array <code>nums</code> of <strong>unique</strong> elements,
  <em>return all possible
subsets
(the power set).</em>
</p>
<p class='mt-3'>
  The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [1,2,3]",
      outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
    },
    {
      id: 2,
      inputText: "nums = [0]",
      outputText: "[[],[0]]",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 <= nums.length <= 10</code>
</li> <li class='mt-2'>
<code>-10 <= nums[i] <= 10</code>
</li> <li class='mt-2'>
All the numbers of <code>nums</code> are <strong>unique.</strong>
</li>`,
  handlerFunction: subsetsHandler,
  starterCode: starterCodeSubsets,
  order: 10,
  starterFunctionName: "function subsets(",
};
