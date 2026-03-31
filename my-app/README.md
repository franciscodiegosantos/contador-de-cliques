# 📊 Projeto Contador de Cliques

Este é um projeto simples desenvolvido com **React** que demonstra o uso de componentes funcionais e do hook `useState` para gerenciar estado.

---

## 🚀 Funcionalidade

O projeto consiste em um contador de cliques que:

* Exibe o número atual de cliques na tela
* Incrementa o valor toda vez que o botão é pressionado

---

## 🧩 Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

```
src/
├── App.js
├── Contador.js
├── index.js
├── App.css
├── index.css
```

---

## 💡 Como funciona

### 📌 Componente `Contador`

* Utiliza o hook `useState` para armazenar o valor do contador
* O estado inicial é `0`
* A função `incrementarContador` atualiza o estado somando +1 a cada clique

```jsx
const [count, setCount] = useState(0);
```

---

## ▶️ Como executar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar o projeto

```bash
npm start
```

O projeto será iniciado em:

```
http://localhost:3000
```

---

## 🛠️ Tecnologias utilizadas

* React
* JavaScript (ES6+)
* HTML5
* CSS3

---

## 📷 Interface

A aplicação possui uma interface simples com:

* Um título do projeto
* Um contador exibido na tela
* Um botão para incrementar o contador

---

## 📈 Possíveis melhorias

* Adicionar botão de decremento
* Criar botão de reset
* Estilizar melhor a interface
* Salvar valor do contador no Local Storage
* Adicionar animações

---

## 📚 Aprendizados

Com este projeto, é possível praticar:

* Criação de componentes funcionais
* Uso do `useState`
* Manipulação de eventos (`onClick`)
* Estrutura básica de um projeto React

---

## 👨‍💻 Autor

Desenvolvido para fins de estudo e prática com React.
