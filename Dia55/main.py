from textblob import TextBlob

def analisar_sentimento(texto):
    # Cria um objeto TextBlob
    blob = TextBlob(texto)
    
    # Obtém a polaridade (de -1 a 1)
    polaridade = blob.sentiment.polarity
    
    # Classifica o sentimento com base na polaridade
    if polaridade > 0:
        sentimento = "Positivo"
    elif polaridade < 0:
        sentimento = "Negativo"
    else:
        sentimento = "Neutro"
    
    return sentimento, polaridade

# Solicita o texto do usuário
texto = input("Digite o texto para análise de sentimento: ")

# Realiza a análise de sentimento
sentimento, polaridade = analisar_sentimento(texto)

# Exibe o resultado
print(f"Sentimento: {sentimento} (Polaridade: {polaridade})")
