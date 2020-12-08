import socket

# create an ipv4 stream socket
my_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# connect the socket at port 80 to this address
my_socket.connect(('google.com', 80))

my_socket.close()