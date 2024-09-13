import pandas as pd


data = {
    'nomes': ['João', 'Maria', 'Carlos', 'Ana', 'Lucas'],
    'departamento': ['TI', 'RH', 'TI', 'Marketing', 'TI'],
    'salário': [5000, 4500, 5200, 4700, 5800]
}

df = pd.DataFrame(data)

# Filtrar funcionários do departamento "TI"
df_ti = df[df['departamento'] == 'TI']

# Calcular a média salarial dos funcionários de TI
media_salarial_ti = df_ti['salário'].mean()

print(f'Média salarial do departamento de TI: {media_salarial_ti}')
