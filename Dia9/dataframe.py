import pandas as pd 

# Exemplo de dataframe com dados de vendas
data = {
    'vendas': [1200, 3400, 2300, 4500, 3200, 2800, 4100, 3900, 4600, 2500]
}
df = pd.DataFrame(data)

# Calculando as estatísticas descritivas
media = df['vendas'].mean()
mediana = df['vendas'].median()
desvio_padrao = df['vendas'].std()
maximo = df['vendas'].max()
minimo = df['vendas'].min()


print(f'Média: {media}')
print(f'Mediana: {mediana}')
print(f'Desvio Padrão: {desvio_padrao}')
print(f'Máximo: {maximo}')
print(f'Mínimo: {minimo}')