from os import path
from logger import Log
import json as JSON

# editing json archives
class Editor: 
    @staticmethod
    def clearArchive(target_path):
        with open(target_path, "w") as archive:
            pass

    @staticmethod
    def nestKeyValue(source: dict, key_name: str):
        nested = {
            key_name: source
        }
        return nested

    @staticmethod
    def parseJSON(target: str):
        if not path.exists(target):
            print(f"{target} not found")
            return None
        try:
            with open(target, 'r') as archive:
                data = JSON.load(archive)
                return data
        except Exception as err:
            print(str(err))
            return None

    @staticmethod
    def writeJSON(source_dict, ident_number, target_path:str):
        try:
            data = []
            if path.exists(target_path):
                with open(target_path, "r") as destination:
                    try:
                        data = JSON.load(destination)
                    except JSON.JSONDecodeError:
                        pass 
            
            data.append(source_dict)
            
            with open(target_path, "w") as destination:
                JSON.dump(data, destination, indent=ident_number)
            print(Log.archiveUpdate(target_path))
            
        except Exception as err:
            print(str(err))
