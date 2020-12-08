import urllib.request
import urllib.parse
import urllib.error

file = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')

word_counts = {}
for line in file:
    print(line.decode().strip())

    # print out the number of times each word is used in the file
    words = line.decode().split()
    for word in words:
        word_counts[word] = word_counts.get(word, 0) + 1
print(word_counts)
