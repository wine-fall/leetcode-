var translateNum = function(num) {
  let str = num.toString()
  let dp = Array(str.length+1)
  dp[0] = 1
  dp[1] = 1
  for (let i=2; i<dp.length; i++) {
    let temp = Number(str[i-2] + str[i-1])
    if (temp >= 10 && temp <= 25) {
      dp[i] = dp[i-1] + dp[i-2]
    } else {
      dp[i] = dp[i-1]
    }
  }
  return dp[str.length]
};
translateNum(25)