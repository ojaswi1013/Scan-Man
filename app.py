from re import template
from flask import Flask, render_template, request
# from workzeug import secure_filename
import os
# import json
# from request import request
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
        print(request.method)
        return 'uploaded successfully'
    return 'here!!'

if __name__ == '__main__':
    app.run(debug=True, port=8888)