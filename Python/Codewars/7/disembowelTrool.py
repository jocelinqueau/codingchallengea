import re


def disemvowel(string):
    matches = re.findall(r"[aeiou]", string, re.I)
    for letter in string:
        for letter in matches:
            string = string.replace(letter, "")
    return string


def disemvowel9(string):
    return re.sub('[aeiou]', '', string, flags=re.IGNORECASE)


def disemvowel0(string):
    for letter in string:
        for letter in ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]:
            string = string.replace(letter, "")
    return string


def disemvowel1(s):
    return s.translate(None, "aeiouAEIOU")
# python2


def disemvowel11(s):
    translator = str.maketrans({key: None for key in "aeiouAEIOU"})
    return s.translate(translator)
# for python3


def disemvowel2(string):
    return "".join(c for c in string if c.lower() not in "aeiou")


def disemvowel3(s):
    for i in "aeiouAEIOU":
        s = s.replace(i, '')
    return s
