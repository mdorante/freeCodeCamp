import socket

# create an ipv4 stream socket
my_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# connect the socket at port 80 to this address
my_socket.connect(('data.pr4e.org', 80))

# the command (request) we will send to the server
cmd = 'GET /romeo.txt HTTP/1.0\r\nHost: data.pr4e.org\r\n\r\n'.encode()
my_socket.send(cmd)

while True:
    # receive data from the socket, 512b at a time
    data = my_socket.recv(512)
    if len(data) < 1:
        break
    print(data.decode())

my_socket.close()
