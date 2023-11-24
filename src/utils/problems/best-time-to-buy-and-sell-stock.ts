import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeBestBuy = `// Do not edit function name
function maxProfit(nums) {
    // Write your code here
};`;

// checks if the user has the correct code
const handlerBestBuy = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const prices = [
      [7, 1, 5, 3, 6, 4],
      [7, 6, 4, 3, 1],
    ];
    const answers = [5,0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < prices.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(prices[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("max profit handler function error");
    throw new Error(error);
  }
};

export const maxProfit: Problem = {
  id: "best-time-to-buy-and-sell-stock",
  title: "9. Best Time to Buy and Sell Stock",
  problemStatement: `<p class='mt-3'>
  You are given an array prices where <code>prices[i]</code> is the price of a given stock on the <code>ith</code> day.
</p>
<p class='mt-3'>
You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.
</p>
<p class='mt-3'>
Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "prices = [7,1,5,3,6,4]",
      outputText: "5",
      explanation:
        "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
    },
    {
      id: 2,
      inputText: "prices = [7,6,4,3,1]",
      outputText: "0",
      explanation:
        "In this case, no transactions are done and the max profit = 0.",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>1 <= prices.length <= 105</code>
</li> <li class='mt-2'>
<code>0 <= prices[i] <= 104</code>
</li> <li class='mt-2'>
All the numbers of <code>nums</code> are <strong>unique.</strong>
</li>`,
  handlerFunction: handlerBestBuy,
  starterCode: starterCodeBestBuy,
  order: 9,
  starterFunctionName: "function maxProfit(",
};
