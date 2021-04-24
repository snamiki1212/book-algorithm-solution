const N = 7;
const list = [2, 9, 4, 5, 1, 6, 10];
const dp = Array.from({ length: list.length }, () => Infinity);

const chmin = (idx, val) => {
  if (dp[idx] > val) dp[idx] = val;
};

for (let i = 0; i < N; i++) {
  if (i === 0) {
    dp[0] = 0;
    continue;
  }
  if (i === 1) {
    dp[1] = Math.abs(list[1] - list[0]);
    continue;
  }

  // step1
  const cost1 = Math.abs(list[i] - list[i - 1]) + dp[i - 1];
  chmin(i, cost1);

  // step2
  const cost2 = Math.abs(list[i] - list[i - 2]) + dp[i - 2];
  chmin(i, cost2);
}

console.log(dp);
