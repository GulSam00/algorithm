#include <cstdio>
#include <vector>
#include <iostream>

void test(int *arr)
{
    arr[0] = 10;
    arr[1] = 11;
}

void vec_test(std::vector<int> &arr)
{
    arr[0] = 10;
    arr[1] = 11;
}

int main()
{
    int i = 0;
    int arr[5] = {1, 2, 3, 4, 5};
    std::vector<int> new_arr = {1, 2, 3, 4, 5};
    test(arr);
    vec_test(new_arr);
    while (arr[i])
    {
        printf ("arr[i] : %d\n", arr[i++]);
    }
    i = 0;
    while (new_arr[i])
    {
        printf ("new_arr[i] : %d\n", new_arr[i++]);
    }

    return (0);
}