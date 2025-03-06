from itertools import combinations
from collections import namedtuple

Card = namedtuple("Card", ["color", "shape", "fill", "number"])

Cards = [
Card("red", "diamond", "hollow", 1),
Card("green", "squiggle", "solid", 3),
Card("red", "oval", "striped", 3),
Card("red", "oval", "hollow", 2),
Card("purple", "oval", "hollow", 1),
Card("purple", "diamond", "solid", 1),
Card("purple", "squiggle", "solid", 3),
Card("red", "diamond", "solid", 3),
Card("green", "oval", "hollow", 3),
Card("red", "diamond", "hollow", 2),
Card("green", "oval", "striped", 3),
Card("red", "oval", "hollow", 1),
]