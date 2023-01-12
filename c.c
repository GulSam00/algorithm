#include <stdio.h>

void reverse(int num)
{
    if (num < 10)
    {
        printf("%d\n", num);
        return;
    }
    printf("%d", num % 10);
    reverse(num / 10);
    
}

void main(void)
{
    int n;
    scanf("%d", &n);
    reverse(n);
}

