const apiKey = 'f159cb5b1ee94642b80210617242209';

const searchBtn = document.getElementById('searchBtn'); // Botão de pesquisa
const cityInput = document.getElementById('cityInput'); // Campo de input para o nome da cidade
const weatherResult = document.getElementById('weatherResult'); // Div onde os resultados do clima serão exibidos
const cityName = document.getElementById('cityName'); // Elemento que exibirá o nome da cidade
const temperature = document.getElementById('temperature'); // Elemento que exibirá a temperatura
const description = document.getElementById('description'); // Elemento que exibirá a descrição do clima
const humidity = document.getElementById('humidity'); // Elemento que exibirá a umidade

// Adiciona um listener para o botão de pesquisa
searchBtn.addEventListener('click', () => {
  // Pega o valor digitado no campo de input de cidade
  const city = cityInput.value;

  // Verifica se o usuário digitou o nome de uma cidade
  if (city) {
    // Faz uma requisição à WeatherAPI para obter os dados do clima da cidade informada
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`)
      .then(response => response.json()) // Converte a resposta da API para JSON
      .then(data => {
        // Atualiza os elementos HTML com os dados recebidos da API
        cityName.innerText = `Cidade: ${data.location.name}`; // Nome da cidade
        temperature.innerText = `Temperatura: ${data.current.temp_c}°C`; // Temperatura em Celsius
        description.innerText = `Clima: ${data.current.condition.text}`; // Descrição do clima (ex.: "Ensolarado")
        humidity.innerText = `Umidade: ${data.current.humidity}%`; // Umidade do ar em porcentagem

        // Exibe a div com os resultados (que estava oculta)
        weatherResult.style.display = 'block';
      })
      .catch(error => {
        // Exibe uma mensagem de erro se a cidade não for encontrada ou houver outro problema
        alert('Cidade não encontrada!');
        // Esconde a div com os resultados
        weatherResult.style.display = 'none';
      });
  } else {
    // Se o campo estiver vazio, o usuário recebe um alerta para digitar o nome da cidade
    alert('Por favor, digite o nome de uma cidade.');
  }
});