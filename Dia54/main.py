def analisar_texto(texto):
    # Contando o número de caracteres
    num_caracteres = len(texto)
    
    # Contando o número de palavras
    palavras = texto.split()
    num_palavras = len(palavras)
    
    # Contando o número de frases
    frases = texto.split('.')
    num_frases = len([f for f in frases if f.strip()])  # Ignora frases vazias
    
    # Exibindo os resultados
    print("Análise do Texto:")
    print(f"Número de caracteres: {num_caracteres}")
    print(f"Número de palavras: {num_palavras}")
    print(f"Número de frases: {num_frases}")

# Exemplo de uso
texto_usuario = input("Digite um texto para análise: ")
analisar_texto(texto_usuario)
