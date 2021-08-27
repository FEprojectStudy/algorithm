
arr = [1,2,3,4,5,6,6,7,8,9,10]

for i in arr:
    if i == 6:
        arr.remove(6)
    print(i)

print(arr)