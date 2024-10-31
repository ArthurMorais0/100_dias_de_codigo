class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        # Função para inserir um novo nó com uma chave
        if self.root is None:
            self.root = Node(key)
        else:
            self._insert_recursive(self.root, key)

    def _insert_recursive(self, node, key):
        if key < node.key:
            if node.left is None:
                node.left = Node(key)
            else:
                self._insert_recursive(node.left, key)
        elif key > node.key:
            if node.right is None:
                node.right = Node(key)
            else:
                self._insert_recursive(node.right, key)
        # Se key já existe na árvore, não insere

    def search(self, key):
        # Função para buscar um nó com uma chave
        return self._search_recursive(self.root, key)

    def _search_recursive(self, node, key):
        if node is None or node.key == key:
            return node  # Retorna o nó se encontrado, ou None se não encontrado
        if key < node.key:
            return self._search_recursive(node.left, key)
        return self._search_recursive(node.right, key)

# Exemplo de uso:
bst = BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

# Buscar elementos
result = bst.search(7)
if result:
    print("Elemento encontrado:", result.key)
else:
    print("Elemento não encontrado")
