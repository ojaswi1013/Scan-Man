import os

from dotenv import load_dotenv
load_dotenv()

import veryfi

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")
username = os.getenv("CLIENT_NAME")
api_key = os.getenv("API_KEY")


def parse(f):
    client = veryfi.Client(client_id, client_secret, username, api_key)
    json1 = client.process_document((f.filename))#, categories)
    # pprint.pprint(json1)
    return json1