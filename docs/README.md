# 🌍 Países API

Demo: 

Aplicação web que permite selecionar países e visualizar informações básicas como **bandeira, capital e população**.

O projeto consome dados da **REST Countries API** e exibe as informações em **cards dinâmicos** que podem ser removidos individualmente.

Este projeto foi desenvolvido com o objetivo de praticar:

* consumo de APIs com **fetch**
* **JavaScript modular**
* manipulação do **DOM**
* organização de código em **múltiplos arquivos**

---

# 📸 Preview

![Layout do projeto](./images/layout.png)

---

# 🚀 Funcionalidades

* Selecionar país em uma lista
* Exibir informações do país em um **card**
* Mostrar:

  * nome do país
  * bandeira
  * capital
  * população formatada
* Criar múltiplos cards
* Remover cards individualmente
* Interface simples e responsiva

---

# 🛠 Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES Modules)**
* **Fetch API**

---

# 🌐 API utilizada

O projeto utiliza a API pública:

REST Countries

Endpoint utilizado:

```
https://restcountries.com/v3.1/name/{country}?fullText=true&fields=name,flags,capital,population
```

Exemplo de resposta:

```json
{
  "name": {
    "common": "Brazil"
  },
  "flags": {
    "png": "flag-url"
  },
  "capital": ["Brasilia"],
  "population": 214000000
}
```

---

# 📁 Estrutura do projeto

```
paises-api
│
├── index.html
│
├── css
│   └── style.css
│
├── images
│   └── layout.png
│
├── js
│   ├── main.js
│   ├── api.js
│   └── ui.js
│
└── docs
    └── README.md
```

---

# ⚙️ Responsabilidade dos arquivos

### `main.js`

Responsável por:

* controlar o fluxo da aplicação
* capturar eventos da interface
* conectar **API** e **UI**

---

### `api.js`

Responsável por:

* comunicação com a API externa
* buscar informações dos países

---

### `ui.js`

Responsável por:

* manipulação do DOM
* criação dos cards de países
* remoção de cards

---

# 🔄 Fluxo da aplicação

```
Usuário seleciona um país
        ↓
Clica no botão adicionar
        ↓
main.js captura evento
        ↓
api.js faz requisição à API
        ↓
dados retornam em JSON
        ↓
ui.js cria o card
        ↓
card aparece na tela
```

---

# ▶️ Como executar o projeto

1. Clone o repositório

```
git clone https://github.com/seu-usuario/paises-api.git
```

2. Abra a pasta do projeto

3. Execute o arquivo

```
index.html
```

ou utilize **Live Server** no VS Code.

---

# 💡 Melhorias futuras

* evitar países duplicados
* salvar cards no **localStorage**
* adicionar animações nos cards
* botão **remover todos**
* indicador de carregamento ao buscar dados
* filtro por continente

---

# 📚 Objetivo do projeto

Este projeto foi desenvolvido para praticar:

* consumo de **APIs REST**
* organização de código com **JavaScript modular**
* criação dinâmica de elementos no **DOM**

Ele também serve como base para evoluir para projetos com:

* **Node.js**
* **Express**
* **banco de dados**
* **React**
