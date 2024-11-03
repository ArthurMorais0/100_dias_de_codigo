import tkinter as tk
from tkinter import messagebox

# Funções que serão chamadas ao clicar nos botões
def botao1_clicado():
    messagebox.showinfo("Botão 1", "Você clicou no Botão 1")

def botao2_clicado():
    messagebox.showinfo("Botão 2", "Você clicou no Botão 2")

def botao3_clicado():
    messagebox.showinfo("Botão 3", "Você clicou no Botão 3")

# Criação da janela principal
janela = tk.Tk()
janela.title("Interface com Botões")
janela.geometry("300x200")

# Criação dos botões e associação das funções
botao1 = tk.Button(janela, text="Botão 1", command=botao1_clicado)
botao1.pack(pady=10)

botao2 = tk.Button(janela, text="Botão 2", command=botao2_clicado)
botao2.pack(pady=10)

botao3 = tk.Button(janela, text="Botão 3", command=botao3_clicado)
botao3.pack(pady=10)

# Iniciar o loop da interface 
janela.mainloop()
