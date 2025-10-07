// 20:42 ~ 21:16

#include <bits/stdc++.h>

using namespace std;

int todaytoi(string today) {
    int total_date = 0;

    int sep = today.find('.');

    total_date += stoi(today.substr(0, sep)) * 12 * 28;
    today = today.substr(sep + 1);
    sep = today.find('.');
    total_date += stoi(today.substr(0, sep)) * 28;
    today = today.substr(sep + 1);

    total_date += stoi(today);
    return total_date;
            
   
}

vector<int> solution(string today, vector<string> terms, vector<string> privacies) {
    vector<int> today_date;
    vector<int> alpha_terms(26, 0);
    vector<int> result;
    int todayValue = todaytoi(today);

    for (int i = 0; i < terms.size(); i++) {
        int sep = terms[i].find(' ');
        string termAlpha = terms[i].substr(0, sep);
        int termValue = stoi(terms[i].substr(sep + 1));
        alpha_terms[termAlpha[0] - 'A'] = termValue;

    }
    
    for (int i = 0; i < privacies.size(); i++)
    {
        int sep = privacies[i].find(" ");

        string termStart = privacies[i].substr(0, sep);
        char termEnd = privacies[i][sep + 1];
        int termStartValue = todaytoi(termStart);
        int termLong = alpha_terms[termEnd - 'A'] * 28;

        if (todayValue > termStartValue + termLong)
            result.push_back(i + 1);
    }
    return result;
}


int main()
{

    // "2022.05.19"	["A 6", "B 12", "C 3"]	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
    string today = "2022.05.19";
    vector<string> terms = { "A 6", "B 12", "C 3" };
    vector<string> privacies = { "2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C" };
    vector<int> result = solution(today, terms, privacies);
    for (int i = 0; i < result.size(); i++)
    {
        cout << result[i] << " ";
    }
}