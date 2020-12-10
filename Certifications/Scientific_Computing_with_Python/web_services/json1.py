import json

data = '''{
  "name": "Manuel",
  "phone": {
    "type": "intl",
    "number": "+1 2345 6789"
  },
  "email": {
    "hide": "yes"
  }
}'''

info = json.loads(data)
print('Name:', info['name'])
print('Hide email:', info['email']['hide'])
