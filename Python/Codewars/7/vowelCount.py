import re


def get_count(input_str):
    num_vowels = 0
    # your code here
    num_vowels = len(re.findall(r"[aeiou]", input_str))
    return num_vowels

# example de flag  re.findall(r"[aeiou]", input_str, re.I | )
# still need to train with using regex with python
#  pattern = re.compile(r"[aeiou]", re.I)
#         matches = pattern.finditer(string)


def getCount2(inputStr):
    return sum(1 for let in inputStr if let in "aeiouAEIOU")


def getCount3(s):
    return sum(c in 'aeiou' for c in s)
