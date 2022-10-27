#include <string>
#include <vector>
#include <iostream>

using namespace std;


vector<int> Sort(vector<int> array)
{
    int temp;
    int length = array.size();
    std::cout << "length : " << length << std::endl;
    for (int i = 0; i < length; i++)
    {
        for (int j = 0; j < length - i - 1; j++) 
        // 뒤에서부터 집합의 크기가 하나씩 줄어든다.
        // 바로 앞의 배열을 검사하기에 for 문 조건에 -1을 해준다.
        {
            if (array[j] > array[j + 1])
            {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

int main() {
    int i = 0;
    vector<int> array = {1, 9, 8, 4, 51, 6, 7, 2,};
    array = Sort(array);
    while (array[i])
        cout << array[i++] << endl;
    return 0;
}