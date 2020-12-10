import xml.etree.ElementTree as ET

input_data = '''<stuff>
  <users>
    <user x="2">
      <id>002</id>
      <name>Dude</name>
    </user>
    <user x="19">
      <id>019</id>
      <name>Guy</name>
    </user>
  </users>
</stuff>'''

stuff = ET.fromstring(input_data)

user_list = stuff.findall('users/user')
print('User count:', len(user_list))

for user in user_list:
    print('User:', user.find('name').text, 'ID:', user.find('id').text)
