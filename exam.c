#include <stdio.h>

int main(void)
{
    int i, j;
    i = 0;
    j = 0;

    while (i < 5)
    {
        while (j < 4)
        {
            printf ("*");
            j++;
        }
        printf ("\n");
        i = i + 1;
    }
}