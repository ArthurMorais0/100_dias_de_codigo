# Versionamento de Código com Git e GitHub no VSCode

Este guia fornece uma introdução ao uso do Git e GitHub diretamente no Visual Studio Code (VSCode) para versionamento de código.

## Requisitos

- Visual Studio Code instalado
- Extensão do GitHub instalada no VSCode

## Instruções

### 1. Configurar o Repositório

1. Abra o VSCode e vá para a aba de *Source Control* no menu lateral esquerdo (ícone de ramificação).
2. Selecione **Initialize Repository** para criar um novo repositório Git no diretório atual.

### 2. Criar um Commit

1. Faça alterações no seu código.
2. Acesse a aba *Source Control* para ver os arquivos modificados.
3. Clique no ícone **+** ao lado dos arquivos que deseja adicionar ao *staging*.
4. Digite uma mensagem descritiva no campo de mensagem e clique no ícone **✓** para confirmar o commit.

### 3. Conectar ao GitHub

1. Clique em **Publish to GitHub** na seção do Git para criar um repositório remoto no GitHub.
2. Siga as instruções para autenticar e vincular seu repositório local ao GitHub.
3. Após a publicação, use o comando **Push** para enviar seus commits para o repositório remoto.

### 4. Comandos Básicos no Terminal do VSCode

Para quem prefere usar a linha de comando, o terminal integrado do VSCode suporta os comandos básicos do Git:

- `git status` - Ver o status do repositório.
- `git add .` - Adicionar todas as alterações ao staging.
- `git commit -m "sua mensagem"` - Confirmar as mudanças com uma mensagem de commit.
- `git push` - Enviar as alterações para o GitHub.

---



