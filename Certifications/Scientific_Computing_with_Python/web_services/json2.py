import json

data = '''[
  {
    "id": "01",
    "name": "Dude"
  },
  {
    "id": "02",
    "name": "Guy"
  }
]'''

info = json.loads(data)

print('User count:', len(info))
for item in info:
    print('Name:', item['name'], 'id:', item['id'])
