# Recebe a frase do usuário
frase = input("Digite uma frase: ")

# Contar o número de caracteres
num_caracteres = len(frase)
print(f"Número de caracteres: {num_caracteres}")

# Inverter a string
string_invertida = frase[::-1]
print(f"Frase invertida: {string_invertida}")

# Imprimir cada palavra em uma linha
palavras = frase.split()
print("Palavras uma por linha:")
for palavra in palavras:
    print(palavra)
