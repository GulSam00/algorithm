#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(int num1, int num2) {
    float result = float(num1) / float(num2);
      std::cout << result * 1000 << std::endl;

    
    return 0;
}

int main() {
    solution(5, 2);
    return 0;
}