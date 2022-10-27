#include <string>
#include <vector>
#include <iostream>

using namespace std;


vector<int> Sort(vector<int> array) // array의 스코프는 지역 함수 내부이기에 인자가 변해도 main의 벡터는 변하지 않는다.
{
    int min, index, temp;
    // int length = sizeof(array) / sizeof(int);
    int length = array.size();
    // std::cout << "length : " << length << std::endl;
    for (int i = 0; i < length; i++)
    {
        min = array[i];
        index = i;
        for (int j = i; j < length; j++)
        {
            if (array[j] < min)
            {
                min = array[j];
                index = j;
            }
        }
        temp = array[i];
        array[i] = array[index];
        array[index] = temp;
    }
    return array;
}

int main() {
    int i = 0;
    vector<int> array = {2, 5, 7, 8, 3, 9, 4, 11, 31};
    array = Sort(array);
    while (array[i])
        cout << array[i++] << endl;
    return 0;
}