import requests, re, bs4, json, csv
from tqdm import tqdm
import unicodedata

def links(url):
    r = requests.get(url).text
    return list(map(lambda s: s[len('<a href="'):-len('" class="nhs-uk__az-link">')], re.findall('<a href=".*" class="nhs-uk__az-link">', r)))

def to(s, b):
    return s[:s.find(b)].strip()

def from_to(s, a, b):
    return s[s.find(a):s.find(b)].strip()

def exclude(s, a, b):
    return s[:s.find(a)].strip() + ' ' + s[s.find(b):].strip()

def link_text(link):
    try:
        r = requests.get(link)
        if r.status_code != 200: return ''
        r = r.text
    except:
        return ''
    soup = bs4.BeautifulSoup(r, 'html.parser')
    content = soup.select('#maincontent > div > div > div.col.small-12.large-9.panel-content > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
    if len(content) == 0: return ''
    content = content[0].find_all('p')
    content = ' '.join([p.text for p in content])
    # res = content[0].text.encode('ascii', 'ignore').decode('ascii')
    # res = unicodedata.normalize('NFKC', content).encode('ascii', 'ignore').decode('ascii')
    # cleaned = res
    cleaned = content
    # cleaned = from_to(res, '\n\n\n\n', 'Find your local ')
    # cleaned = to(cleaned, 'Online appointment booking')
    # cleaned = exclude(cleaned, 'Online appointment booking', 'Book an appointment online')
    # cleaned = cleaned.replace('\n', ' ')
    cleaned = ' '.join(cleaned.split())
    return cleaned

def main(url, filename):
    # print(links())
    # print(link_text('https://www.nhsinform.scot/illnesses-and-conditions/infections-and-poisoning/yellow-fever/'))
    base = 'https://www.nhsinform.scot'
    # link = links()[308]
    # res = link_text(base+link)
    # print(res)
    d = {}
    for link in tqdm(links(url)):
        key = link[link.rfind('/')+1:]
        d[key] = link_text(base+link)
        
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(d, f, indent=4)
    
    with open(filename[:-4]+'csv', 'w', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['key', 'text'])
        for key, text in d.items():
            writer.writerow([key, text])
    
if __name__ == '__main__':
    main('https://www.nhsinform.scot/illnesses-and-conditions/a-to-z', 'nhs_disease_data.json')
    main('https://www.nhsinform.scot/symptoms-and-self-help/a-to-z', 'nhs_symptom_data.json')