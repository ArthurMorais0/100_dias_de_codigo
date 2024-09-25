Utilizando git bash para commit e push do arquivo README dia 23 com os comandos:

# 1. Navegar até a pasta do projeto
No Git Bash, navegue até a pasta onde está o seu projeto:

cd /caminho/para/meu-projeto

# 2. Verificar o status do repositório
Verifique o status do repositório para ver quais arquivos foram modificados ou adicionados:

git status

# 3. Adicionar arquivos ao commit
Adicione todos os arquivos modificados ou novos ao staging area (ou seja, os arquivos que você deseja commitar):

git add .
Ou, se preferir adicionar arquivos específicos:

git add arquivo1.js arquivo2.html

# 4. Realizar o commit
Agora faça o commit das suas mudanças com uma mensagem descritiva:


git commit -m "Descrição das alterações"

Exemplo:

git commit -m "Adicionado nova funcionalidade na logica no arquivo main.js"

# 5. Realizar o push para o repositório remoto
Se você já configurou um repositório remoto (por exemplo, no GitHub, GitLab ou Bitbucket), pode enviar as alterações com o seguinte comando:

git push origin main