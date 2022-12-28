#include <iostream>
#include <string>

using namespace std;

long long int d[1000001][2];

long long int dpTable(int x)
{
    d[0][0] = 0;
    d[1][0] = 2;
    d[2][0] = 7;
    d[2][1] = 1;
    for (int i = 3; i <= x; i++) {
        d[i][1] = (d[i - 1][1] + d[i - 3][0]) % 1000000007;
        d[i][0] = (3 * d[i - 2][0] + 2 * d[i - 1][0] + 2 * d[i][1]) % 1000000007;
    }
    return d[x][0];
}

// int dp1(int x)
// {
//     if (x == 1)
//         return 1;
//     if (x == 2)
//         return 2;
//     if (d[x] != 0) return d[x];
//     return d[x] = (dp1(x - 1) + dp1(x - 2)) % 10007;
// // 값이 커질 수 있으므로 나머지 연산으로 오버플로우 방지
// } 

// int dp2(int x)
// {
//     if (x == 1)
//         return 1;
//     if (x == 2)
//         return 3;
//     if (d[x] != 0) return d[x];
//     return d[x] = (dp2(x - 1) + 2 * dp2(x - 2)) % 10007;
// // 값이 커질 수 있으므로 나머지 연산으로 오버플로우 방지
// } 

// int dp3(int x)
// {
//     if (x == 0)
//         return 1;
//     if (x == 1)
//         return 0;
//     if (x == 2)
//         return 3;
//     if (d[x] != 0) return d[x];
//     int result = 3 * dp3(x - 2);
//     for (int i = 3; i <= x; i++)
//     {
//         if (i % 2 == 0)
//             result += 2 * dp3(x - i);
//     }
//     return d[x] = result;
// }

int dp4(int x)
{
    if (x == 0)
        return 1;
    if (x == 1)
        return 2;
    if (x == 2)
        return 7;
    if (d[x] != 0) return d[x];
    int result = 3 * dp4(x - 2) + 2 * dp4(x - 1);
    for (int i = 3; i <= x; i++)
    {
        result += (2 * dp4(x - i)) % 1000007;
    }
    return d[x] = result % 1000007; 
}
int main()
{
    int test;
    scanf("%d", &test);
    printf("%lld", dpTable(test));
    return 0;
}