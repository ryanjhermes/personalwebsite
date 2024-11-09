from flask import Flask, render_template, send_from_directory
import functions

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/resume")
def resume():
    return send_from_directory(app.static_folder, 'resume.pdf')

@app.route("/testing")
def test():
    return render_template('testing.html')

if __name__ == '__main__':
    app.run(debug=True)
