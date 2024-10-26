# Função para calcular o montante de juros compostos
def calcular_juros_compostos(principal, taxa, anos):
    # Cálculo do montante com a fórmula de juros compostos
    montante = principal * (1 + taxa / 100) ** anos
    return montante

# Solicita ao usuário as informações 
try:
    principal = float(input("Digite o valor inicial do investimento (principal): "))
    taxa = float(input("Digite a taxa de juros anual (em %): "))
    anos = int(input("Digite o número de anos do investimento: "))

    # Calcula o montante final
    montante = calcular_juros_compostos(principal, taxa, anos)

    # Exibe o resultado
    print(f"O montante após {anos} anos será de: R$ {montante:.2f}")

except ValueError:
    print("Por favor, insira valores numéricos válidos.")
