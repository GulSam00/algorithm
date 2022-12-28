def solution(participant, completion):
    marathon = {}
    hash_sum = 0
    for p in participant:
        marathon[hash(p)] = p
        hash_sum += hash(p)
        print(marathon)
    for c in completion:
        hash_sum -= hash(c)
    print(marathon)
    answer = marathon[hash_sum]
    return answer

solution(["kiki", "kiki", "eden"], ["eden", "kiki"])