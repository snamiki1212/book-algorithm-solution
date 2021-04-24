const MAX_WEIGHTS = 15;
const WEIGHTS = [2, 1, 3, 2, 1, 5];
const VALUES = [3, 2, 6, 1, 3, 85];
const ITEM_COUNTS = WEIGHTS.length;
if (ITEM_COUNTS !== VALUES.length) throw new Error("Data error");
// -----------------------------------------------------------

const dp = Array.from({ length: ITEM_COUNTS + 1 }, () =>
  Array.from({ length: MAX_WEIGHTS + 1 }, () => 0)
);

// i = item
for (let i = 0; i <= ITEM_COUNTS; i++) {
  // w = weight
  for (let w = 0; w <= MAX_WEIGHTS; w++) {
    if (i == 0) {
      dp[i][w] = 0;
      continue;
    }

    const itemIdx = i - 1; // not i

    // case: choose
    if (w - WEIGHTS[itemIdx] >= 0) {
      dp[i][w] = Math.max(
        dp[i][w],
        dp[i - 1][w - WEIGHTS[itemIdx]] + VALUES[itemIdx]
      );
    }

    // case: no choose
    dp[i][w] = Math.max(dp[i][w], dp[i - 1][w]);
  }
}

console.log(dp);
