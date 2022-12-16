#include <iostream>

using namespace std;

// 이진 트리의 노드 구조
typedef struct node  *treePointer;
int number = 15;

typedef struct node
{
    int data;
    treePointer left;
    treePointer right;
} Node;

// 전위 순회
void preorder(treePointer ptr)
{
    if (ptr)
    {
        cout << ptr->data << " ";
        preorder(ptr->left);
        preorder(ptr->right);
    }
}

// 중위 순회
void inorder(treePointer ptr)
{
    if (ptr)
    {
        inorder(ptr->left);
        cout << ptr->data << " ";
        inorder(ptr->right);
    }
}

// 후위 순회
void postorder(treePointer ptr)
{
    if (ptr)
    {
        postorder(ptr->left);
        postorder(ptr->right);
        cout << ptr->data << " ";
    }
}

int main(void)
{
    Node nodes[number + 1];
    for (int i = 1; i <= number; i++)
    {
        nodes[i].data = i;
        nodes[i].left = NULL;
        nodes[i].right = NULL;
    }

    for (int i = 1; i <= number; i++)
    {
        if (i % 2 == 0)
        {
            nodes[i / 2].left = &nodes[i];
        }
        else
        {
            nodes[i / 2].right = &nodes[i];
        }
    }
    cout << "전위 ";
    preorder(&nodes[1]);
    cout << endl;

    cout << "중위 ";
    inorder(&nodes[1]);
    cout << endl;

    cout << "후위 ";
    postorder(&nodes[1]);
    cout << endl;
    
    return (0);
}