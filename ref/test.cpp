#include <iostream>
using namespace std;

int num;
int nums[11]; // 수열 
string strs[5]; // 연산자의 개수

int main() {
    cin >> num;

    for (int i = 0; i < num; ++i) {
        cin >> nums[i];
    }

    // Read strings into the 'strs' array
    for (int i = 0; i < 5; ++i) {
        cin >> strs[i];
    }

 cout << "Integers: ";
    for (int i = 0; i < num; ++i) {
        cout << nums[i] << " ";
    }
    cout << endl;

    // Print strings stored in the 'strs' array
    cout << "Strings: ";
    for (int i = 0; i < 5; ++i) {
        cout << strs[i] << " ";
    }
    cout << endl;
}