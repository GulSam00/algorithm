#include <string>
#include <vector>
#include <iostream>
#include <map>
#include <stack>

using namespace std;


void indexing_land_num(vector<vector<int>> land, vector<vector<int>> &land_index, int row, int col, int i, int j, int land_num)
{
    if (i < 0 || i >= row || j < 0 || j >= col)
    {
        return;
    }
    if (land[i][j] == 0 || land_index[i][j] != -1)
    {
        return;
    }
    land_index[i][j] = land_num;
    indexing_land_num(land, land_index, row, col, i + 1, j, land_num);
    indexing_land_num(land, land_index, row, col, i - 1, j, land_num);
    indexing_land_num(land, land_index, row, col, i, j + 1, land_num);
    indexing_land_num(land, land_index, row, col, i, j - 1, land_num);
}

int solution(vector<vector<int>> land) {
    vector<vector<int>> land_index(land.size(), vector<int>(land[0].size(), -1));
    int land_num = 0;
    vector<int> land_area;
    int max_oil = 0;
    int cur_oil = 0;

    for (int i = 0; i < land.size(); i++)
    {
        for (int j = 0; j < land_index[0].size(); j++)
        {
            if (land[i][j] == 0)
            {
                land_index[i][j] = 0;
            }
            else if (land[i][j] == 1 && land_index[i][j] == -1)
            {
                land_num++;
                land_area.push_back(1);
                indexing_land_num(land, land_index, land.size(), land[0].size(), i, j, land_num);
            }
            else {
                land_area[land_index[i][j] - 1]++;
            }
        }
   }

//   for (int i = 0; i < land.size(); i++)
//     {
//         for (int j = 0; j < land_index[0].size(); j++)
//         {
//             cout << land_index[i][j] << " ";
//         } 
//         cout << endl;
//     }

//     for (int i = 0; i < land_area.size(); i++)
//     {
//         cout << land_area[i] << " ";
//     }

    for (int j = 0; j < land[0].size(); j++)
    {
        cur_oil = 0;
        stack<int> stk;
        for (int i = 0; i < land.size(); i++) {
        if (land_index[i][j] != 0)
        {
            if (stk.empty())
            {
                stk.push(land_index[i][j]);
                cur_oil += land_area[land_index[i][j] - 1];
            }
            else if (stk.top() != land_index[i][j])
            {
                cur_oil += land_area[land_index[i][j] - 1];
                stk.push(land_index[i][j]);
            }
        }

        if (cur_oil > max_oil)
            {
                max_oil = cur_oil;
            }
        }
    // cout << cur_oil << " ";
    }
    return max_oil;
}

int main()
{
    // [[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]]
    // 위 인자로 호출, [] 대신 {}
    vector<vector<int>> land = {{0, 0, 0, 1, 1, 1, 0, 0}, {0, 0, 0, 0, 1, 1, 0, 0}, {1, 1, 0, 0, 0, 1, 1, 0}, {1, 1, 1, 0, 0, 0, 0, 0}, {1, 1, 1, 0, 0, 0, 1, 1}};
    cout << solution(land);
}