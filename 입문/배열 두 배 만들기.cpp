#include <string>
#include <vector>
#include <algorithm>


using namespace std;

int twice(int num)
{
    return (num * num);
}

vector<int> solution(vector<int> numbers) {
    std::transform(numbers.begin(), numbers.end(), numbers.begin(), twice);
    return numbers;
}