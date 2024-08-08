#include <iostream>

int main() {
  int N, cmd;
  long long factorial[21];
  bool check[21] = {false};

  std::cin >> N;

  // 팩토리얼 구하기
  factorial[0] = 1;
  for (long long i = 1; i <= 20; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  std::cin >> cmd;

  // k번째 순열 구하기
  if (cmd == 1) {
    long long k;

    std::cin >> k;

    for (long long i = 1; i <= N; i++) {
      for (long long j = 1; j <= N; j++) {
        if (check[j] == true) {
          continue;
        } else if (factorial[N - i] < k) {
          k -= factorial[N - i];
        } else {
          std::cout << j << " ";
          check[j] = true;
          break;
        }
      }
    }
    std::cout << std::endl;
  }
  // k번째 순열 찾기
  else if (cmd == 2) {
    long long k[21];

    for (long long i = 1; i <= N; i++) {
      std::cin >> k[i];
    }

    for (long long i = 1; i <= N; i++) {
      check[i] = false;
    }

    long long result = 1;

    for (long long i = 1; i <= N; i++) {
      int count = 0;
      for (long long j = 1; j < k[i]; j++) {
        if (!check[j]) {
          count++;
        }
      }
      result += count * factorial[N - i];
      check[k[i]] = true;
    }
    std::cout << result << std::endl;
  }
}