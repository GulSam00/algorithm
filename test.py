def sum(list, n):
    tempsum = 0.0
    for i in range(0, n):
        tempsum += list[i]
    return tempsum

list = [2, 6, 3, 1, 8, 2, 19]
print(sum(list, 7))