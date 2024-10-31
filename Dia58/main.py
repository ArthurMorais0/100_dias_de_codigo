import random
import string

def gerar_senha(tamanho=12):
    # Define os caracteres possíveis
    caracteres = string.ascii_letters + string.digits + string.punctuation
    # Gera a senha aleatória com o tamanho especificado
    senha = ''.join(random.choice(caracteres) for _ in range(tamanho))
    return senha

# Exemplo de uso
tamanho_desejado = 12  # Ajustar de acordo com o tamanho da senha desejado
senha_gerada = gerar_senha(tamanho_desejado)
print("Senha gerada:", senha_gerada)
