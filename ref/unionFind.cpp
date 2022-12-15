#include <stdio.h>

int getParent(int parent[], int x)
{
    if (parent[x] == x)
        return x;
    return parent[x] = getParent(parent, parent[x]);
}

void unionParent(int parent[], int a, int b)
{
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a < b)
        parent[b] = a;
    else
        parent[a] = b;
}

int findParent(int parent[], int a, int b)
{
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a == b)
        return 1;
    else
        return 0;
}

void printParent(int parent[])
{
    for (int i = 1; i <= 10; i++)
        printf("%d ", parent[i]);
    printf ("\n");
}

int main(void)
{
    int parent[11];
    for (int i = 1; i <= 10; i++)
        parent[i] = i;

    printParent(parent);
    unionParent(parent, 1, 2);
    printParent(parent);
    unionParent(parent, 2, 3);
    printParent(parent);
    unionParent(parent, 3, 4);
    printParent(parent);
    unionParent(parent, 5, 6);
    printParent(parent);
    unionParent(parent, 6, 7);
    printParent(parent);
    unionParent(parent, 7, 8);
    printParent(parent);


    printf("1과 5는 연결되어 있나요? %d\n", findParent(parent, 1, 5));
    unionParent(parent, 1, 5);
    printParent(parent);

    printf("1과 5는 연결되어 있나요? %d\n", findParent(parent, 1, 5));
}