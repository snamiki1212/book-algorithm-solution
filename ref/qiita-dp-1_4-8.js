// https://qiita.com/drken/items/a5e6fe22863b7992efdb#%E5%95%8F%E9%A1%8C-8%E6%9C%80%E9%95%B7%E5%85%B1%E9%80%9A%E9%83%A8%E5%88%86%E5%88%97-lcs-%E5%95%8F%E9%A1%8C

const TEXT_S = "pirikapirirara";
const TEXT_T = "poporinapeperuto";

const dp = Array.from({ length: TEXT_S.length + 1 }, () =>
  Array.from({ length: TEXT_T.length + 1 }, () => 0)
);

for (let s = 0; s < TEXT_S.length; s++) {
  for (let t = 0; t < TEXT_T.length; t++) {
    if (s == 0 && t == 0) {
      dp[s][t] = 0;
      continue;
    }
    if (TEXT_S[s] == TEXT_T[t]) {
      dp[s + 1][t + 1] = dp[s][t] + 1;
    } else {
      dp[s + 1][t + 1] = Math.max(dp[s + 1][t], dp[s][t + 1]);
    }
  }
}

console.log(dp);
