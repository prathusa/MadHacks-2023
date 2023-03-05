import json

with open('nhs_disease_data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

print(d['hyperglycaemia-high-blood-sugar'])