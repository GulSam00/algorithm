# 순서를 고려하여 나열하는 경우의 수

from itertools import permutations
arr = ['A', 'B', 'C', 'D']
# 순열 공식
# nPr = n! / (n-r)!
# nPr = n * (n-1) * (n-2) * ... * (n-r+1)
# n의 개수가 4개이고, r의 개수가 2개이므로
# 4P2 = 4 * 3 = 12
# n부터 1씩 감소하면서 r개수만큼 곱해준다.


print(len(list(permutations(arr, 2))))
