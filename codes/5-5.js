// -- Levenshtein distance
const text1 = "logistic";
const text2 = "algorithm";
// ------------------------------------

const dp = Array.from({ length: text1.length + 1 }, () =>
  Array.from({ length: text2.length + 1 }, () => Infinity)
);

for (let t1 = 0; t1 <= text1.length; t1++) {
  for (let t2 = 0; t2 <= text2.length; t2++) {
    if (t1 == 0 && t2 == 0) {
      dp[t1][t2] = 0;
      continue;
    }

    if (t1 > 0 && t2 > 0) {
      // text[tx - 1] = this char. not prev char.
      if (text1[t1 - 1] === text2[t2 - 1]) {
        // CASE: no process
        dp[t1][t2] = Math.min(dp[t1][t2], dp[t1 - 1][t2 - 1]);
      } else {
        // CASE: replace
        dp[t1][t2] = Math.min(dp[t1][t2], dp[t1 - 1][t2 - 1] + 1);
      }
    }

    // CASE: remove
    if (t1 > 0) dp[t1][t2] = Math.min(dp[t1][t2], dp[t1 - 1][t2] + 1);

    // CASE: add
    if (t2 > 0) dp[t1][t2] = Math.min(dp[t1][t2], dp[t1][t2 - 1] + 1);
  }
}

console.log(dp);
