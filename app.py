from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/redko")
def test():
    return render_template('redko.html')

@app.route("/resume")
def resume():
    return send_from_directory(app.static_folder, 'resume.pdf')

if __name__ == '__main__':
    app.debug = True
    app.run()
