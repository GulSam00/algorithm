#include <iostream>

using namespace std;

int n = 0;
int m = 0;
int d[100];

int fibo_D(int x)
{
    printf ("%d try\n", ++m);

    if (x == 1)
        return 1;
    if (x == 2)
        return 2;
    if (d[x] != 0) return d[x];
    return d[x] = fibo_D(x - 1) + fibo_D(x - 2);
}


int fibo(int x)
{
    printf ("%d try\n", ++n);
    
    if (x == 1)
        return 1;
    if (x == 2)
        return 2;

    return fibo(x - 1) + fibo(x - 2);
}

int main(void)
{
    fibo(10);
    fibo_D(10);
    printf ("fibo : %d, fibo_D : %d\n", n, m);
}