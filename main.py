from flask import Flask
import pymongo
from pymongo import MongoClient
import json 
from bson import json_util

cluster = MongoClient("mongodb+srv://fortheboys368:zGOG58w1hZGlW8kE@cluster0.kg3ymi5.mongodb.net/?retryWrites=true&w=majority")


db = cluster["CaseStudy"]
collection = db["Wallet"]

app = Flask(__name__)

@app.route("/wallets", methods=["GET"])
def get_wallets():
    all_wallets = list(collection.find({}))
    return all_wallets

@app.route("/transaction", methods=["POST"])
def send_transaction():
    all_wallets = list(collection.find({}))
    return all_wallets



#STOjiJcOjdYPLBhr
#mongodb+srv://fortheboys368:STOjiJcOjdYPLBhr@cluster0.kg3ymi5.mongodb.net/?retryWrites=true&w=majority



