// N個の正の整数a0,a1,...,aN－1からいくつか選んで総和を所望の整数Wに一致させることができるかどうかを判定する問題をO(NW)で解くアルゴリズムを設計してください．

const MAX_WEIGHT = 25;
const list = [1, 4, 2, 5, 7, 20];

const dp = Array.from({ length: list.length + 1 }, () =>
  Array.from({ length: MAX_WEIGHT + 1 }, () => false)
);

dp[0][0] = true;

for (let i = 0; i < list.length; i++) {
  for (let w = 0; w <= MAX_WEIGHT; w++) {
    // no choose
    dp[i + 1][w] = dp[i + 1][w] || dp[i][w];

    // choose cases
    if (w - list[i] >= 0) {
      dp[i + 1][w] = dp[i + 1][w] || dp[i][w - list[i]];
    }
  }
}

console.log(dp);
