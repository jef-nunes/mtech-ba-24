from hashlib import sha256

# hashing with sha256 algorithm
def hexSHA256(source:str):
    return sha256(source.encode()).hexdigest()
