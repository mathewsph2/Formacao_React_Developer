<h1 align="center">🧮 Calculadora React</h1>

<p align="center">
  <img src="./src/assets/logo-react-developer.png" alt="Brasão da Formação React Developer" width="180" />
</p>

<p align="center">
  <strong>Formação React Developer — DIO</strong><br/>
  Desafio de Projeto: Criando uma calculadora com React
</p>

---

## 📋 Sobre o projeto

Calculadora funcional construída em **React**, baseada no projeto inicial da
[trilha React da DIO](https://github.com/digitalinnovationone/trilha-react-desafio01-calculadora).
Suporta as quatro operações básicas (soma, subtração, multiplicação e divisão),
números decimais, e exibe a operação em andamento no visor — tudo com um tema
escuro moderno.

## 🚀 Tecnologias

- [React 19](https://react.dev/) — biblioteca de UI (via Create React App)
- [styled-components](https://styled-components.com/) — CSS escrito dentro do JavaScript
- Hook `useState` — gerenciamento de estado da calculadora

## ▶️ Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Suba o servidor de desenvolvimento
npm start
```

A aplicação abre em [http://localhost:3000](http://localhost:3000).

## 📁 Estrutura de pastas

```
src/
├── assets/
│   └── logo-react-developer.png   # Brasão do curso (512x512, fundo transparente)
├── components/
│   ├── Button/
│   │   ├── index.js               # Botão reutilizável (recebe label, onClick e variant)
│   │   └── styles.js              # Estilos + variantes de cor do botão
│   └── Input/
│       ├── index.js               # Visor da calculadora (valor + expressão em andamento)
│       └── styles.js              # Estilos do visor
├── styles/
│   └── global.js                  # Reset de CSS global (createGlobalStyle)
├── styles.js                      # Layout da página: Container, Title, Wrapper, Brand, Content, Row
├── App.js                         # Toda a lógica da calculadora
└── index.js                       # Ponto de entrada: renderiza <GlobalStyle /> e <App />
```

## 🧠 Como funciona a lógica

Toda a lógica vive no [`App.js`](./src/App.js), controlada por **três estados**:

| Estado          | O que guarda                                                        |
| --------------- | ------------------------------------------------------------------- |
| `currentNumber` | O número exibido no visor (o que está sendo digitado)               |
| `firstNumber`   | O primeiro operando, salvo quando um operador é pressionado         |
| `operation`     | A operação pendente (`+`, `-`, `x` ou `/`), usada pelo botão `=`    |

### Fluxo de um cálculo (ex.: `7 + 3 =`)

1. **`7`** → `handleAddNumber('7')` concatena o dígito ao visor.
   O visor começa em `'0'`, então o zero é substituído em vez de virar `07`:

   ```js
   setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
   ```

2. **`+`** → `handleSumNumbers()` percebe que ainda não há primeiro operando,
   então guarda o `7` em `firstNumber`, registra `operation = '+'` e limpa o visor.
   A linha secundária do visor passa a mostrar `7 +`.

3. **`3`** → concatenado ao visor, como no passo 1.

4. **`=`** → `handleEquals()` consulta a `operation` pendente num `switch` e
   chama a função da operação correta. Como agora `firstNumber` já existe, a
   função calcula `Number(firstNumber) + Number(currentNumber)` e exibe o
   resultado no visor.

Cada operação (`handleSumNumbers`, `handleMinusNumbers`, `handleMultiplyNumbers`,
`handleDivideNumbers`) segue o mesmo padrão de dois momentos: **primeiro clique**
guarda o operando e a operação; **segundo momento** (via `=`) efetua o cálculo.
O botão **`C`** (`handleOnClear`) zera os três estados.

> Os estados guardam **strings** (não números) para permitir a digitação
> incremental de dígitos e do ponto decimal; a conversão com `Number()` só
> acontece na hora do cálculo.

## 🧩 Componentes

### `<Button />`

Um único componente atende os 18 botões do teclado, variando pelas props:

```jsx
<Button label="7" onClick={() => handleAddNumber('7')} />
<Button label="+" variant="operator" onClick={handleSumNumbers} />
<Button label="C" variant="clear" onClick={handleOnClear} />
<Button label="=" variant="equals" onClick={handleEquals} />
```

A prop `variant` escolhe o bloco de CSS no `styles.js` do componente
(números em cinza, operadores em azul, `C` em vermelho, `=` com gradiente).
Ela é repassada ao styled-component como `$variant` — o prefixo `$`
(*transient prop*) diz ao styled-components para **não** repassar a prop ao
DOM, evitando warnings de atributo desconhecido.

### `<Input />`

O visor. Recebe duas props: `value` (número atual) e `expression` (a operação
em andamento, ex.: `8 x`, exibida em fonte menor acima do número). O `<input>`
é somente leitura — quem controla o que aparece é o estado do `App`
(componente controlado).

## 🎨 Estilização

- **Tema escuro** com gradiente radial de fundo e cartão flutuante com sombra;
- **Variantes de botão** via interpolação de função no styled-components:

  ```js
  ${({ $variant }) => variants[$variant] || variants.default}
  ```

- **Microinterações**: botões clareiam no hover e "afundam" (`scale(0.95)`) ao clicar;
- **Layout responsivo**: o `Wrapper` usa `flex-wrap`, então em telas estreitas o
  brasão sobe para cima da calculadora em vez de espremer os dois lado a lado.


## 🏆 Créditos

- Projeto base: [digitalinnovationone/trilha-react-desafio01-calculadora](https://github.com/digitalinnovationone/trilha-react-desafio01-calculadora)
- Desafio da **Formação React Developer** da [DIO](https://www.dio.me/)
