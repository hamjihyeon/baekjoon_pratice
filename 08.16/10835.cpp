#include <iostream>
#include <algorithm>
#include <vector>

int main() {
  int N;
  std::cin >> N;

  std::vector<int> left(N);
  std::vector<int> right(N);

  for (int i = 0; i < N; i++) {
    std::cin >> left[i];
  }

  for (int i = 0; i < N; i++) {
    std::cin >> right[i];
  }

  std::vector<std::vector<int> > dp(N + 1, std::vector<int>(N + 1, 0));

  for (int i = N - 1; i >= 0; i--) {
    for (int j = N - 1; j >= 0; j--) {
      dp[i][j] = std::max(dp[i + 1][j], dp[i + 1][j + 1]);
      if (left[i] > right[j]) {
        dp[i][j] = std::max(dp[i][j], dp[i][j + 1] + right[j]);
      }
    }
  }
  std::cout << dp[0][0] << std::endl;

  return 0;
}