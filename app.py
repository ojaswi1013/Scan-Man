from flask import Flask, render_template, request, url_for, jsonify

import os
import uuid
import json
from bson.objectid import ObjectId
from bson.json_util import dumps
from flask_cors import CORS
from flask_pymongo import PyMongo
from flask_uuid import FlaskUUID


from dotenv import load_dotenv
load_dotenv()

from helpers.parse import parse
from helpers.extract import extract
from helpers.helper import get_keys

app = Flask(__name__)

# CORS setup
CORS(app)

#UUID setup
flask_uuid = FlaskUUID()
flask_uuid.init_app(app)

# Database setup
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)
user_collection = mongo.db.users
invoice_collection = mongo.db.invoices
item_collection = mongo.db.items

# JSON Encoder setupfrom bson import ObjectId
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

APP_ROOT = os.path.dirname(os.path.abspath(__file__)) # root path

@app.route('/')
def base_template():
    return render_template ('index.html')
    # return 'Hello_World!'

@app.route('/uploader', methods=['GET','POST'])
def upload_func():
    if request.method == 'POST':
        filename = uuid.uuid4()
        f = request.files['file']
        f.save(os.path.join(APP_ROOT, (f.filename)))
        json1 = parse(f)
        data = extract(json1)
        print(data)
        # insert into user database        
        # get user
        # email =  "jon@scanman.com"
        # user = user_collection.find_one_or_404({"email":email})#json.loads(json.dumps(user_collection.find_one_or_404({"email":email})))
        # JSONEncoder().encode(user)
        items = json1["line_items"]
        # create invoice with user id attached to it
        invoice = json1
        emp_id = "101"#"user["emp_id"]"
        del invoice["line_items"]
        invoice["by"] = emp_id
        invoice["sp_id"] = filename
        invoice_collection.insert({"invoice":invoice})
        # insert each item in items table with invoice id attached to it
        data["line_items"] = items
        for item in items:
            item["in"] = filename
            item_collection.insert({"item":item})
        return data
    return 'Invalid Route!'

if __name__ == '__main__':
    app.run(debug=True, port=8888)