from flask import Flask
from flask import jsonify
import requests

app = Flask(__name__)

@app.route("/weather")
def weather():
    r = requests.get("http://api.openweathermap.org/data/2.5/weather", params={"q":"Evanston","APPID":"2632210dcc93cc19c2ee8b5fb2b59af9"})
    result = r.json()

    return jsonify({"main":result["main"],"weather":result["weather"]})

if __name__ == "__main__":
    app.run()
