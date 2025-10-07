// 19:05 ~ 
#include <bits/stdc++.h>


using namespace std;
// commands_len은 배열 commands의 길이입니다.
// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
string solution(string video_len, string pos, string op_start, string op_end, vector<string> commands) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    string video_len_str = video_len;
    string pos_str = pos;
    string op_start_str = op_start;
    string op_end_str = op_end;

    int video_len_int = stoi(video_len_str.substr(0, 2)) * 60 + stoi(video_len_str.substr(video_len_str.length() - 2));
    int pos_int = stoi(pos_str.substr(0, 2)) * 60 + stoi(pos_str.substr(pos_str.length() -2));
    int op_start_int = stoi(op_start_str.substr(0, 2)) * 60 + stoi(op_start_str.substr(op_start_str.length() -2));
    int op_end_int = stoi(op_end_str.substr(0, 2)) * 60 + stoi(op_end_str.substr(op_end_str.length() -2));
  
    if (pos_int >= op_start_int && pos_int <= op_end_int)
            pos_int = op_end_int;
            
    for (int i = 0; i < commands.size(); i++) {
       if (commands[i][0] == 'n')
            pos_int += 10;
        else
            pos_int -= 10;
    if (pos_int > video_len_int)
            pos_int = video_len_int;
        if (pos_int < 0)
            pos_int = 0;
        if (pos_int >= op_start_int && pos_int <= op_end_int)
            pos_int = op_end_int;
    

    }
    char* answer = (char*)malloc(5);
    sprintf(answer, "%02d:%02d", pos_int / 60, pos_int % 60);

    return answer;
}

int main() {
    vector <string> commands = {"next", "next","next","next"};
    cout << solution("7:55", "00:05", "00:15", "07:45",commands);
}