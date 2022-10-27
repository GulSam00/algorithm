#include <stdio.h>

void test(int *arr)
{
    arr[0] = 10;
    arr[1] = 11;
}

int main()
{
    int i = 0;
    int arr[5] = {1, 2, 3, 4, 5};
    test(arr);
    while (arr[i])
    {
        printf ("arr[i] : %d\n", arr[i++]);
    }

    return (0);
}