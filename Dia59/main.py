import requests
from bs4 import BeautifulSoup

# URL da página que você deseja extrair os links
url = "https://exemplo.com"

# Fazendo uma requisição para a página
response = requests.get(url)

# Verifica se a requisição foi bem sucedida
if response.status_code == 200:
    # Cria o objeto BeautifulSoup
    soup = BeautifulSoup(response.content, "html.parser")
    
    # Encontra todos os elementos <a> e extrai o atributo href
    links = [a.get('href') for a in soup.find_all('a', href=True)]
    
    # Exibe todos os links encontrados no terminal
    for link in links:
        print(link)
else:
    print(f"Erro ao acessar a página: {response.status_code}")
