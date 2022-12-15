#include <stdio.h>

int main(void)
{
    // 5줄 피라미드
    int i, j;
    for (i = 0; i < 5; i++)
    {
        for (j = 0; j <=i ; j++)
            printf ("*");
        printf ("\n");
    }
}