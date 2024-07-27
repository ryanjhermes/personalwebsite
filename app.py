from flask import Flask, render_template, Response

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/redko")
def test():
    return render_template('redko.html')

@app.route("/resume")
def another():
    return render_template('resume.html')

if __name__ == '__main__':
    app.debug = True
    app.run()