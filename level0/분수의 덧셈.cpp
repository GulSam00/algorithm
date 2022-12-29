#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(int denum1, int num1, int denum2, int num2) {
    int totalNum = num1 * num2;
    int totalDenum = num2 * denum1 + num1 * denum2;

    // if (totalNum % totalDenum == 0) // 둘이 같은 값이 아니더라도 나머지가 0일 수는 있음
    //     return {1, 1};

        if (totalNum == totalDenum)
        return {1, 1};
    
    for (int i = totalNum / 2; i > 1; i--)
    {
        if (totalDenum % i == 0 && totalNum % i == 0)
        {
            return {totalDenum / i, totalNum / i};
        }
    }
    return {totalDenum, totalNum};
    //  vector는 중괄호 사용?
    
}
