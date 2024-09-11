# Função para converter Celsius para Fahrenheit
def celsius_para_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

# Solicita ao usuário que insira uma temperatura em Celsius
celsius = float(input("Digite a temperatura em Celsius: "))

# Converte para Fahrenheit e exibe o resultado
fahrenheit = celsius_para_fahrenheit(celsius)
print(f"{celsius}°C é equivalente a {fahrenheit}°F")
