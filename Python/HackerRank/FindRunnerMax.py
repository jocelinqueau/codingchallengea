if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())
    maximun = max(arr)
    for i in range(n - 1):
        if(arr[i] == maximun):
            arr.pop(i)
    print(arr)
