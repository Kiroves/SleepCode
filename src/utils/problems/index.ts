import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { subsets } from "./subsets"
import { mergeIntervals } from "./merge-intervals";
import { maxProfit } from "./best-time-to-buy-and-sell-stock";
import { maxDepthBinaryTree, maxDepthHandler } from "./maximum-depth-of-binary-tree";
import { containerWithMostWater } from "./container-with-most-water";

interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "reverse-linked-list": reverseLinkedList,
  "jump-game": jumpGame,
  "search-a-2d-matrix": search2DMatrix,
  "valid-parentheses": validParentheses,
  "container-with-most-water": containerWithMostWater,
  "merge-intervals": mergeIntervals,
  "maximum-depth-of-binary-tree": maxDepthBinaryTree,
  "best-time-to-buy-and-sell-stock": maxProfit,
  "subsets": subsets,
};
