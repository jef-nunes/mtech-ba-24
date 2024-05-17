from time import sleep
from os import system as shell

def signup():
    exit = 0
    while exit == 0:
        print("\n")
        print("~> Registrando uma conta de usuario")
        email = str(input("Email: ").strip())
        usuario = str(input("Nome de usuario: ").strip())
        senha = str(input("Senha: ").strip())
        topico = "signup"
        dados = f'topico={topico}&usuario={usuario}&senha={senha}'
        curl_command = f'curl -X POST -d "{dados}" localhost:54321'
        response = shell(curl_command)
        delayExit = input("\nPara voltar ao menu digite [Enter]")
        exit += 1
    menu()
    
def login():
    exit = 0
    while exit == 0:
        print("\n")
        print("~> Login")
        email = str(input("Email: ").strip())
        senha = str(input("Senha: ").strip())
        topico = "login"
        dados = f'topico={topico}email={email}&senha={senha}'
        curl_command = f'curl -X POST -d "{dados}" localhost:54321'
        response = shell(curl_command)
        delayExit = input("\nPara voltar ao menu digite [Enter]")
        exit += 1
    menu()

def listarFilmes():
    exit = 0
    while exit == 0:
        print("\n")
        shell("curl localhost:54321/movies")
        delayExit = input("\nPara voltar ao menu digite [Enter]")
        exit += 1
    menu()

def menu():
    shell("cls || clear")
    print("» Menu - API de Filmes")
    print("     _________________________________________________________________")
    print("     | Índice | Funcionalidade                                       |")
    print("     |        |                                                      |")
    print("     |  [1]   | Criar uma nova conta                                 |")
    print("     |        |                                                      |")
    print("     |  [2]   | Fazer login                                          |")
    print("     |        |                                                      |")
    print("     |  [3]   | Ver lista de filmes  (http://localhost:54321/movies) |")
    print("     |________|______________________________________________________|")
    x = int(input("\nInforme o índice para acessar \na funcionalidade correspondente: "))
    if x == 1:
        signup()
    elif x == 2:
        login()
    elif x == 3:
        listarFilmes()


shell("cls || clear")
print("\033[38;2;30;240;254m")
sleep(2)
menu()
end = input("\n\n\n\n\nPressione [Enter] para fechar este programa")