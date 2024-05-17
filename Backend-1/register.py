from dataclasses import dataclass, asdict
from os import system as shell, path
from hashlib import sha256
from hashing import hexSHA256
from logger import Log
from json_editor import Editor
import json as JSON

shell("cls || clear")

# ident numbers for json dump formatting
IdentNumber = {
    "Account": 3
}

# dataclasses
@dataclass
class Account():
    identifier: str
    name: str
    email: str
    password: str

# register
class Register:
    registered_accounts = 0
    @staticmethod
    def setAccountID()->str:
        Register.registered_accounts+=1
        identifier: str = ""
        if Register.registered_accounts < 10:
            identifier = "ID_0{}".format(Register.registered_accounts)
        else:
            identifier = "ID_{}".format(Register.registered_accounts)
        return identifier

    @staticmethod
    def createAccount(name:str,email:str,password:str):
        account_object = Account(Register.setAccountID(),hexSHA256(name), hexSHA256(email), hexSHA256(password))
        print(account_object)
        account_dict = asdict(account_object)
        Editor.writeJSON(account_dict,IdentNumber["Account"],"accounts.json")


Editor.clearArchive("accounts.json")
#Register.createAccount("Abc","abc@python.com","abc123")
#Register.createAccount("Def","def@python.com","def123")
#Register.createAccount("Ghi","ghi@python.com","ghi123")
#Register.createAccount("Jkl","jkl@python.com","jkl123")
#Register.createAccount("Mno","mno@python.com","mno123")
#parse1 = Editor.parseJSON("accounts.json") 
#viewAccount2 =  parse1[1]
#print("parse 1")
#print(str(viewAccount2))
