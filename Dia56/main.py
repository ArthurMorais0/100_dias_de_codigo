def contar_palavras(nome_arquivo):
    try:
        with open(nome_arquivo, 'r') as arquivo:
            conteudo = arquivo.read()
            palavras = conteudo.split()  # Divide o texto em palavras
            numero_palavras = len(palavras)
            print(f"O número de palavras no arquivo é: {numero_palavras}")
    except FileNotFoundError:
        print("Arquivo não encontrado. Verifique o nome do arquivo e tente novamente.")

# Exemplo de uso
nome_arquivo = "seu_arquivo.txt"
contar_palavras(nome_arquivo)
