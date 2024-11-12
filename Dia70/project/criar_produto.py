import os
import django

# Configurar o ambiente Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nome_do_projeto.settings')
django.setup()

# Importar os modelos
from app.models import Produto, Categoria

# Criação dos dados
categoria = Categoria.objects.create(nome="Eletrônicos")
produto = Produto.objects.create(
    nome="Smartphone",
    categoria=categoria,
    preco=1999.99,
    estoque=50,
    descricao="Smartphone com 128GB de armazenamento"
)

print("Dados inseridos com sucesso!")
