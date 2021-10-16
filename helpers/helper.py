def get_value(key,json1):
    a = ["(",")","{","}","[","]"]
    b = json1[key]
    for x in a:
        b = b.replace(x, " ")
    b = b.replace("\n"," ")
    b = b.replace("\t"," ")
    b = b.replace("  "," ")
    return b 

def get_keys(dl, keys_list):
    if isinstance(dl, dict):
        keys_list += dl.keys()
        map(lambda x: get_keys(x, keys_list), dl.values())
    elif isinstance(dl, list):
        map(lambda x: get_keys(x, keys_list), dl)
