import csv

def load_data():
    return read_urls_from_csv('static/companies.csv')  # Ensure the path is correct

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