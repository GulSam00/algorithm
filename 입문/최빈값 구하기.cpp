#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

int solution(vector<int> array) {
    int length = array.size();
    vector<int> count_arr(length, 0);

    sort(array.begin(), array.end());
    int maxNum = array[0];
    int curNum;
    int maxCount = 0;
    int curCount;
    int notSolo = 0;

    for (int i = 0; i < length; i++)
    {
        curNum = array[i];
        curCount = 0;
        for (int j = 0; j < length; j++)
        {
            if (curNum == array[j])
                curCount++;
        }
        if (curCount > maxCount)
        {
            cout << "maxCount! -> " << array[i] << endl;
            maxCount = curCount;
            maxNum = array[i];
            notSolo = 0;

        }
        else if (curCount == maxCount && curNum != maxNum)
        {
            cout << "same! -> " << array[i] << endl;
            notSolo = 1;
        }
        
    }
        cout << maxNum << endl;
        cout << maxCount << endl;
        cout << "twice : " << notSolo << endl;
        
    if (notSolo)
        return -1;
    return maxNum;
}

int main() {
    int result = solution({1, 2, 7, 7, 10, 10, 11, 11, 11});
    cout << "answer : " << result << endl;
    return 0;
}