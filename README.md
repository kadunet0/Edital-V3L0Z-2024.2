# 🌍 Plataforma de Listagem de Países

Este projeto é uma plataforma web interativa que consome a API RestCountries para listar e exibir informações sobre países ao redor do mundo. A interface permite que os usuários explorem países, apliquem filtros e ordenações, e visualizem detalhes de países específicos.

## 📋 Funcionalidades

1. **Listagem de Países**
   - **Consumo da API:** Utilização da API RestCountries para buscar informações sobre países.
   - **Exibição:** A listagem exibe nome, bandeira, capital e região dos países.
   - **Paginação/Scroll Infinito:** A listagem é paginada ou utiliza scroll infinito para melhorar a experiência do usuário.
   - **Filtros:**
     - Filtro por sub-região.
     - Filtro por região.
     - Filtro por intervalo de população (ex.: <1M, 1M-10M, 10M-100M, >100M).
   - **Busca por Nome:** Campo de busca para localizar países por nome.
   - **Ordenação:**
     - Por nome.
     - Por população.
     - Por área.

2. **Detalhes de País**
   - Exibição de detalhes aprofundados sobre um país, incluindo:
     - Nome oficial.
     - Bandeira.
     - Capital, região e sub-região.
     - População.
     - Área.
     - Idiomas.
     - Moedas.
     - Fuso horário.
     - Domínio de internet (TLD).
     - Código de discagem internacional.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **API:** RestCountries API
- **Ferramentas:** Git, GitHub
- **Frameworks:** Nenhum framework foi utilizado, priorizando JavaScript vanilla para interações com a API.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/kadunet0/Edital-V3L0Z-2024.2.git
   cd Edital-V3L0Z-2024.2

2. **Abrir o projeto**
 - Abra o arquivo index.html diretamente no seu navegador ou utilize uma extensão como o Live Server no VSCode para rodar um servidor local.

3. **Executar o projeto**
   -Após abrir o arquivo index.html no navegador, você poderá interagir com a plataforma e explorar os países consumindo a API RestCountries.

## 📖 Documentação da API

A aplicação consome a API RestCountries para obter dados sobre os países. Os principais endpoints utilizados são:

- **Obter todos os países:** [https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all)
- **Buscar por nome:** [https://restcountries.com/v3.1/name/{name}](https://restcountries.com/v3.1/name/{name})
- **Buscar por região:** [https://restcountries.com/v3.1/region/{region}](https://restcountries.com/v3.1/region/{region})

Para mais detalhes, consulte a [documentação oficial](https://restcountries.com/).

## 🧪 Testes

Atualmente, não foram implementados testes automatizados. O projeto foi validado manualmente com base nos seguintes critérios:

- Verificação de funcionalidade para todas as funcionalidades mencionadas.
- Compatibilidade com diferentes tamanhos de tela (responsividade).
- Testes de performance em navegação por scroll infinito.

## 📂 Estrutura de Pastas

```bash
.
├── index.html        # Arquivo principal da aplicação
├── styles.css        # Estilos para a aplicação
├── scripts.js        # Lógica JavaScript para consumir a API e manipular o DOM
├── README.md         # Documentação do projeto
└── assets/           # Assets adicionais (imagens, ícones)

## ✨ Funcionalidades Futuras

- **Suporte a modo escuro:** Implementar um modo escuro para melhorar a usabilidade em diferentes condições de luz.
- **Melhorias de performance:** Aplicar técnicas de otimização de carregamento para aumentar a velocidade do site.
- **Cache de dados:** Implementar caching para diminuir o número de requisições à API e aumentar a performance.

## 📝 Licença

Este projeto está licenciado sob a MIT License. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

## 📞 Contato

Se você tiver alguma dúvida ou sugestão, entre em contato:

- **Email:** seuemail@exemplo.com
- **GitHub:** [kadunet0](https://github.com/kadunet0)


