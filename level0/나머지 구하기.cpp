#include <string>
#include <vector>

using namespace std;

int solution(int num1, int num2) {
    int answer = num1 % num2;
    return answer;
}

int main() {
    solution(5, 2);
    return 0;
}