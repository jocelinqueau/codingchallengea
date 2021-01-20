def accum(s):
    # your code
    letters = list(s)
    solutionArray = list(map(lambda item: item[1].upper(
    ) + item[1].lower()*(item[0]), enumerate(letters)))
    return str("-".join(solutionArray))

def accum2(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))

def accum3(s):
    return '-'.join((a * i).title() for i, a in enumerate(s, 1))
