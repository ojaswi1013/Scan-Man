from .helper import get_keys,get_value

def extract(json1):
    keys = []
    get_keys(json1, keys)

    for key in keys:
        k = f"{key}"
        if(k != "line_items" and k != "vendor" and k != "tax_lines" and k != "warnings"):
            value = json1[k]
            if(value == None or value == ""):
                del json1[k]
            # else:
                # print(key + ": " + f"{value}")
        elif (k == "line_items"):
            items = []
            for item in json1["line_items"]:
                item_keys = []
                get_keys(item,item_keys)
                for item_key in item_keys:
                    k = f"{item_key}"
                    value = item[k]
                    if(value == None or value == "" or value == []):
                        del item[k]
                items.insert(0,item)
            del json1["line_items"]
            json1["line_items"] = items
        elif (k == "vendor"):
            vendor = json1["vendor"]
            vendor_keys = []
            get_keys(vendor, vendor_keys)
            for vendor_key in vendor_keys:
                k = f"{vendor_key}"
                value = vendor[k]
                if(value != None and value != ""):
                    # print(value)
                    json1[f"vendor_{k}"] = vendor[k]
            del json1["vendor"]
        elif (k == "tax_lines" or k == "warnings"):
            if len(json1[k]) == 0 :
                del json1[k]
    return json1