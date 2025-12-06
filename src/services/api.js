import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para adicionar token em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Funções de API
export const cadastrarUsuario = async (dados) => {
  console.log('API: Tentando cadastrar em:', 'http://localhost:3001/api/usuarios/cadastro');
  console.log('API: Dados enviados:', dados);
  try {
    const response = await api.post('/usuarios/cadastro', dados);
    console.log('API: Resposta recebida:', response);
    return response.data;
  } catch (error) {
    console.error('API: Erro na requisição:', error);
    console.error('API: URL completa:', error.config?.url);
    throw error;
  }
};

export const loginUsuario = async (dados) => {
  const response = await api.post('/usuarios/login', dados);
  return response.data;
};

export const buscarUsuarioPorId = async (id) => {
  const response = await api.get(`/usuarios/${id}`);
  return response.data;
};

export default api;
