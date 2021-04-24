const MAX_WEIGHTS = 15;
const WEIGHTS = [2, 1, 3, 2, 1, 5];
const VALUES = [3, 2, 6, 1, 3, 85];
const ITEM_COUNTS = WEIGHTS.length;
if (ITEM_COUNTS !== VALUES.length) throw new Error("Data error");
// -----------------------------------------------------------

const dp = Array.from({ length: ITEM_COUNTS + 1 }, () =>
  Array.from({ length: MAX_WEIGHTS + 1 }, () => 0)
);

for (let i = 0; i < ITEM_COUNTS; i++) {
  for (let w = 0; w <= MAX_WEIGHTS; w++) {
    const itemIdx = i; // next item

    // CASE: choose
    if (w - WEIGHTS[itemIdx] >= 0) {
      dp[i + 1][w] = Math.max(
        dp[i + 1][w],
        dp[i][w - WEIGHTS[itemIdx]] + VALUES[itemIdx]
      );
    }

    // CASE: no-choose
    dp[i + 1][w] = Math.max(dp[i + 1][w], dp[i][w]);
  }
}

console.log(dp);
