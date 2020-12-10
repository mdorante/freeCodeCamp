import xml.etree.ElementTree as ET

data = '''<person>
  <name>Manuel</name>
  <phone type="intl">
    +1 234567890
  </phone>
  <email hide="yes"/>
</person>'''

tree = ET.fromstring(data)
print('Name:', tree.find('name').text)
print('Phone:', tree.find('phone').text.strip())
print('Hide email? ', tree.find('email').get('hide'))
