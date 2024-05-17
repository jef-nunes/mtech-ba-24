from dataclasses import dataclass, asdict
from hashlib import sha256
from hashing import hexSHA256
from logger import Log
from json_editor import Editor
from register import Register, Account, IdentNumber
import json as JSON
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from os import system as shell, path
from sys import executable as exec
from subprocess import Popen, CREATE_NEW_CONSOLE
from multiprocessing import Process
from typing import List
import urllib.parse

shell("cls||clear")
print("\033[38;2;92;254;28m")

class FilmesAPI(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/movies":
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            fmt = listaDeFilmes()
            self.wfile.write(f"{fmt}".encode())
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Error")

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode()
        parsed_data = urllib.parse.parse_qs(post_data)
        topico = parsed_data.get("topico",[''])[0]
        if topico == "signup":
            email = parsed_data.get('email', [''])[0]
            usuario = parsed_data.get('usuario', [''])[0]
            senha = parsed_data.get('senha', [''])[0]
            print("\nFormulario de nova conta recebida: \nEmail:{}\nUsuario:{}\nSenha:{}".format(email,usuario,senha))
            print(" Registrando no banco de dados...\n")
            Register.createAccount(usuario,email,senha)
        elif topico == "login":
            email = parsed_data.get('email', [''])[0]
            senha = parsed_data.get('senha', [''])[0]
            print("\n Formulario de login recebido: \n Email:{}\n Senha:{}".format(email,senha))
            print(" Autorizando...")
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Error")

def listaDeFilmes()->str:
    filmes: List[str] = ["Ação","Aventura","Comédia","Documentário","Drama","Espionagem","Faroeste","Fantasia","Ficção científica",
    "Filmes de guerra","Mistério","Musical","Filme policial","Romance","Terror"]
    fmt:str = ""
    i = 1
    for element in filmes:
        fmt+=" {} - {}\n".format(i,element)
        i+=1
    return fmt

@dataclass
class HttpServerOptions:
    port: int
    handler: SimpleHTTPRequestHandler

server_options = HttpServerOptions(54321, FilmesAPI)
def runServer():
    with TCPServer(("", server_options.port), server_options.handler) as server:
        print("Servidor rodando em localhost:{}/".format(server_options.port))
        server.serve_forever()


if __name__ == "__main__":
    server_process = Process(target=runServer)
    server_process.start()
    client = Popen([exec, "term_client.py"], creationflags=CREATE_NEW_CONSOLE)
    client.communicate()
