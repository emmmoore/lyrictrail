import lyricsgenius
import random

token = "0ex8GF9EFwR5_2cEv637XuJdMbK32fOgsjHoWBgyXoydD9B3n2LysgkQIPU12o3R"
genius = lyricsgenius.Genius(token)

print("Please pick a song to guess lyrics from.")
song = input("Title: ")
artist = input("by: ")

lyrics = genius.search_song(song, artist).lyrics.split('\n')
line = lyrics[random.randint(0, len(lyrics))].split(' ')

while len(line) < 2 or line[0][0] == '[' or line[len(line)-1][0] == '(':
    line = lyrics[random.randint(0, len(lyrics))].split(' ')

shortenedline = ""
for i in range(len(line)-1):
    shortenedline += line[i] + " "

guess = input(shortenedline)
correct = line[len(line)-1]
if guess == correct:
    print("Nice job!")
else:
    print("Bad job. Correct answer was " + correct)