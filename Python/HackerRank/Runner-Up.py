if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    maximum = max(arr)
    arr = list(filter(lambda a: a != maximum, arr))
    print(max(arr))
