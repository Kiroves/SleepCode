import assert from "assert";
import { Problem } from "../types/problem";

// Container With Most Water
function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    const area = h * w;

    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Test handler for maxArea
export const maxAreaHandler = (fn: any) => {
  try {
    const tests = [
      [1, 8, 6, 2, 5, 4, 8, 3, 7], // Heights: [1, 8, 6, 2, 5, 4, 8, 3, 7]
      [1, 1], // Heights: [1, 1]
      [4, 3, 2, 1, 4], // Heights: [4, 3, 2, 1, 4]
      [1, 2, 1], // Heights: [1, 2, 1]
    ];

    const answers = [49, 1, 16, 2];

    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i]);
      assert.strictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Error from maxAreaHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeMaxAreaJS = `// Do not edit function name
function maxArea(height) {
  // Write your code here
};`;

export const containerWithMostWater: Problem = {
  id: "container-with-most-water",
  title: "6. Container With Most Water",
  problemStatement: `<p class='mt-3'>Given <code>n</code> non-negative integers <code>height</code> where each integer represents the height of a vertical line chart. Determine the maximum area that can be formed by two of the vertical lines and the x-axis.</p>`,
  examples: [
    {
      id: 0,
      inputText: "height = [1,8,6,2,5,4,8,3,7]",
      outputText: "49",
    },
    {
      id: 1,
      inputText: "height = [1,1]",
      outputText: "1",
    },
    {
      id: 2,
      inputText: "height = [4,3,2,1,4]",
      outputText: "16",
    },
    {
      id: 3,
      inputText: "height = [1,2,1]",
      outputText: "2",
    },
  ],
  constraints: `<li class='mt-2'>n is the range <code>[2, 10^5]</code>.</li>
<li class='mt-2'><code>0 <= height[i] <= 10^4</code></li>`,
  starterCode: starterCodeMaxAreaJS,
  handlerFunction: maxAreaHandler,
  starterFunctionName: "function maxArea(",
  order: 6,
};
