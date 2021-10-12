import re #import template,get_value
from flask import Flask, render_template, request
# from workzeug import secure_filename
import os
import json
# from request import request
import pprint

import veryfi




client_id = "vrfcnRUxjSbpO7I0ydFoNIgG5TZYXT29HThSs7G"
client_secret = "sNAhigeiw5w28Eda7S5k3xNhdAnTn0poyhBZixsx5jAdrABi8XXANDXWv7FG9Yjruso9Yur4Ua9AC7ND4Ki0ABgb7oab2EAxYMtxCXT0PPx5vecwUPHxhASrC8T4smV6"
username = "kejriwalharshita"
api_key = "926fd300df925417d24f20c64871faf8"

app = Flask(__name__)

APP_ROOT = os.path.dirname(os.path.abspath(__file__)) # root path

@app.route('/')
def hello_world():
    return render_template ('index.html')
    # return 'Hello_World!'

# USE UUID INSTEAD OF FILE1, BOTH ON FROTHEND AND BACKEND
@app.route('/uploader', methods=['GET','POST'])
def upload_func():
    if request.method == 'POST':
        print(request.files['file1'])
        f = request.files['file1']
        f.save(os.path.join(APP_ROOT, (f.filename))) # Add temp folder to path
        ##print(request.method)

        client = veryfi.Client(client_id, client_secret, username, api_key)

        categories = ["college", "professor_name", "events"]
        # json_result = client.process_document((f.filename), categories)

        # pprint.pprint(json_result)
        json1 = client.process_document((f.filename), categories)

        
        pprint.pprint(json1)

        def get_value(key):
            a = ["(",")","{","}","[","]"]
            b = json1[key]
            for x in a:
                b = b.replace(x, " ")

            b = b.replace("\n"," ")
            b = b.replace("\t"," ")
            b = b.replace("  "," ")
            return b 


        print(get_value("bill_to_address") )

        print(get_value("invoice_number"))

        print(get_value("bill_to_name"))

        print(get_value("date"))

        print(get_value("document_reference_number"))

        ocr_text = get_value("ocr_text")
        emailid = re.findall(r'[\w\.-]+@[\w\.-]+', ocr_text)
        print(emailid)

        print(json1["subtotal"])

        print(get_value("ship_to_address"))

        
        # return b 


        return 'uploaded successfully'
    return 'here!!'

if __name__ == '__main__':
    app.run(debug=True, port=8888)