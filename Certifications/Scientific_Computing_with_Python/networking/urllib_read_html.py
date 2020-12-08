import urllib.request
import urllib.parse
import urllib.error

file = urllib.request.urlopen('http://data.pr4e.org/page1.htm')

for line in file:
    print(line.decode().strip())
