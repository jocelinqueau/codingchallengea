import math


def is_square(n):
    if(n < 0):
        return False
    elif(math.sqrt(n) - int(math.sqrt(n)) != 0):
        return False
    else:
        return True
