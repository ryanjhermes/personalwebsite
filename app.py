from flask import Flask, render_template, send_from_directory
import csv

app = Flask(__name__, static_folder='static', template_folder='templates')

# Function to read URLs from the CSV file
def read_urls_from_csv(file_path):
    data = []
    with open(file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            data.append({
                'Website': row['Website'].strip(),
                # 'Description': row['Description'].strip()  # Uncomment if you want to include the description
            })
    return data

# Load data from CSV
def load_data():
    return read_urls_from_csv('companies2.csv')  # Ensure the path is correct

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/sourcing-tool")
@app.route("/sourcing-tool")
def sourcing_tool():
    data = load_data()  # Load the data from the CSV file
    return render_template('sourcing_tool.html', data=data)  # Pass the data to the template



@app.route("/resume")
def resume():
    return send_from_directory(app.static_folder, 'resume.pdf')

if __name__ == '__main__':
    app.run(debug=True)
