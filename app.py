import re #import template,get_value
from flask import Flask, render_template, request
from dotenv import load_dotenv
load_dotenv()
# from workzeug import secure_filename
import os
import json
# from request import request
# import pprint

# import veryfi
from flask_cors import CORS

from helpers.parse import parse
# from helpers.helper import get_value
from helpers.extract import extract

app = Flask(__name__)
CORS(app)

APP_ROOT = os.path.dirname(os.path.abspath(__file__)) # root path

@app.route('/')
def hello_world():
    return render_template ('index.html')
    # return 'Hello_World!'

@app.route('/uploader', methods=['GET','POST'])
def upload_func():
    if request.method == 'POST':
        f = request.files['file']
        f.save(os.path.join(APP_ROOT, (f.filename))) # Add temp folder to path
        ##print(request.method)
        json1 = parse(f)

        data = extract(json1)

        return data
    return 'Invalid Route!'

if __name__ == '__main__':
    app.run(debug=True, port=8888)