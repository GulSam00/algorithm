#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(vector<int> bandage, int health, vector<vector<int>> attacks) {
    int time = 0;
    int continue_heal = 0;
    int attack_num = 0;
    int init_health = health;
    while (attack_num < attacks.size())
    {
        if (time == attacks[attack_num][0])
        {
            health -= attacks[attack_num][1];
            attack_num++;
            continue_heal = 0;
            if (health <= 0)
            {
                return -1;
            }
        }
        else {
            health += bandage[1];
            continue_heal++;
            if (continue_heal == bandage[0])
            {
                health += bandage[2];
                continue_heal = 0;
            }
        }
        if (init_health < health)
        {
            health = init_health;
        }
        // cout << "time: " << time << " health: " << health << endl;
        time++;
    }
    return health;
}

int main() {
    vector<int> bandage = {5, 1, 5};
    int health = 30;
    vector<vector<int>> attacks = {{2, 10}, {9, 15}, {10, 5}, {11, 5}};
    cout << solution(bandage, health, attacks);
    return 0;
}
   