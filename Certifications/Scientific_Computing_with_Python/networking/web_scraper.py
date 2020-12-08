import urllib.request
import urllib.parse
import urllib.error
from bs4 import BeautifulSoup

url = 'https://www.google.com'
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')

# retrieve all links
tags = soup('a')
for tag in tags:
    print(tag.get('href', None))
