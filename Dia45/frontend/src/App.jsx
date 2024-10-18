import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Função para buscar os usuários do backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  // Função para adicionar um novo usuário
  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', formData);
      setFormData({ name: '', email: '', password: '' });
      fetchUsers(); // Atualiza a lista de usuários após adicionar
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  };

  // Carrega os usuários quando o componente é montado
  useEffect(() => {
    fetchUsers();
  }, []);

  // Atualiza o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>

      <h2>Adicionar Usuário</h2>
      <form onSubmit={addUser}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Senha"
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default App;
