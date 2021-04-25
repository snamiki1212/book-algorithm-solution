const N = 20;

const dp = Array.from({ length: N + 1 }, () => 0);

dp[1] = 1;
for (let i = 0; i < N - 1; i++) {
  dp[i + 2] = dp[i] + dp[i + 1];
}
console.log(dp);
