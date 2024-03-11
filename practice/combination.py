# 순서에 상관없이 n개 중에서 r개를 뽑는 경우의 수
# 중복을 허용하지 않는다.
from itertools import combinations
arr = ['A', 'B', 'C', 'D', 'E', 'F']

# 조합 공식
# nCr = n! / r! * (n-r)!
# nCr = n * (n-1) * (n-2) * ... * (n-r+1) / r!
# n의 개수가 6개이고, r의 개수가 3개이므로
# 6C2 = (6 * 5 * 4) / (1 * 2 * 3) = 20

print(len(list(combinations(arr,3)))) 