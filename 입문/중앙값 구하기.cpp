#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(vector<int> array) {
    int temp, j;
    int length = array.size();
    for (int i = 0; i < length - 1; i++)
    {
        j = i;
        while (array[j] > array[j + 1] && j >= 0)
        {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            j--;
        }
    }    
    return array[array.size() / 2];
}

int main() {
    solution({1, 2, 7, 10, 11});
    return 0;
}