def calcular_fatorial(n):
    if n < 0:
        return "Fatorial não definido para números negativos."
    elif n == 0 or n == 1:
        return 1
    else:
        fatorial = 1
        for i in range(2, n + 1):
            fatorial *= i
        return fatorial

# Exemplo de uso:
numero = int(input("Digite um número: "))
print(f"O fatorial de {numero} é {calcular_fatorial(numero)}.")