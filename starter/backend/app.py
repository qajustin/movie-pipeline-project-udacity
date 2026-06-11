from flask import Flask
from flask_cors import CORS
from movies.movies_api import movies_api

app = Flask(__name__)
CORS(app)
app.register_blueprint(movies_api)
