def find_short(s):
    # your code here
    return min(list(map(lambda word: len(word),  s.split())))


def find_short2(s):
    return min(len(x) for x in s.split())
