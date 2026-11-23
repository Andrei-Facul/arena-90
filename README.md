
# ARENA 90 🏆

**O esporte não para.**

O ARENA 90 é um portal esportivo desenvolvido como projeto acadêmico da disciplina de Programação Web Coding, do curso de Ciências da Computação.

## 🌐 Acesse o site

https://andrei-facul.github.io/arena-90/

## 📌 Sobre o projeto

O portal reúne conteúdos de três modalidades esportivas:

- Futebol
- Basquete
- Fórmula 1

O objetivo é oferecer uma experiência de navegação organizada, acessível e responsiva, utilizando tecnologias de desenvolvimento web.

## 💻 Tecnologias utilizadas

- HTML5 — estrutura e semântica
- CSS3 — estilização e responsividade
- Flexbox — organização de elementos
- CSS Grid — distribuição dos cartões
- BEM — organização das classes CSS
- JavaScript — interatividade e consumo de API
- Fetch API — requisições HTTP
- JSON — tratamento dos dados recebidos

## 📄 Páginas disponíveis

- index.html — Página inicial
- futebol.html — Conteúdos sobre futebol
- basquete.html — Conteúdos sobre basquete
- formula1.html — Fórmula 1 e classificação de pilotos
- noticias.html — Seleção de notícias esportivas
- sobre.html — Informações sobre o projeto

## 🏎️ Integração com API

A página de Fórmula 1 utiliza a Jolpica F1 API para consultar a classificação de pilotos da temporada de 2026.

API utilizada:
https://api.jolpi.ca/

Os dados são obtidos com JavaScript utilizando fetch().

A disponibilidade das informações depende do serviço externo.

## 📱 Responsividade

O layout foi desenvolvido para diferentes tamanhos de tela, incluindo celulares, tablets e computadores.



## 📸 Testes de responsividade

O ARENA 90 foi testado em três larguras de tela,
utilizando o modo responsivo do Google Chrome.

### Computador — 1366 px
![ARENA 90 no computador](Screenshots%20Arena%2090/desktop.png)

### Tablet — 768 px
![ARENA 90 no tablet](Screenshots%20Arena%2090/tablet.png)

### Celular — 375 px
![ARENA 90 no celular](Screenshots%20Arena%2090/mobile.png)




## 🔧 Implementação técnica

### HTML5 semântico

O portal utiliza elementos semânticos como
header, nav, main, section, article e footer
para organizar as páginas.

### Metodologia BEM

As classes CSS seguem a metodologia BEM:

- Bloco: `.noticia`
- Elemento: `.noticia__titulo`
- Modificador: `.noticia--destaque`

Essa organização facilita a manutenção e
a reutilização dos estilos.

### Flexbox

O Flexbox foi aplicado em diferentes áreas:

- `.cabecalho`: centralização do cabeçalho.
- `.menu`: organização dos links de navegação.
- `.modalidades__lista`: lista flexível de modalidades.
- `.rodape`: distribuição dos textos.
- `.classificacao__piloto`: alinhamento dos dados dos pilotos.

### CSS Grid

O projeto utiliza dois layouts principais:

1. `.noticias__grade`: organiza os cartões
   esportivos em até três colunas.

2. `.informacoes__grade`: organiza os cartões
   informativos da página Sobre em duas colunas.

O segundo Grid também utiliza posicionamento
explícito com `grid-column: 1 / -1`.

### Media Queries

A responsividade é implementada com
três faixas principais:

- Até 600 px: layout para celulares.
- De 601 a 1024 px: layout para tablets.
- A partir de 1025 px: layout para computadores.

Também existe uma Media Query auxiliar para
o posicionamento dos cartões informativos.

O site foi testado nas larguras de
375 px, 768 px e 1366 px.

### Interatividade e acessibilidade

O CSS utiliza efeitos `:hover` e `:focus-visible`
para fornecer respostas visuais durante
a navegação por mouse e teclado.

### JavaScript e API

O arquivo `js/formula1-api.js` utiliza
JavaScript, `fetch()` e JSON para consultar
a classificação de pilotos da temporada
de 2026 pela Jolpica F1 API.

A interface apresenta os dados recebidos
e prevê uma mensagem quando o serviço
não está disponível.



## 📰 Conteúdo e fontes

O portal apresenta conteúdos esportivos com referências a organizações e veículos de comunicação.

As notícias são selecionadas manualmente e identificadas por data. Não representam atualizações automáticas em tempo real.

## 🖼️ Imagens e créditos

As imagens utilizadas no portal devem manter os créditos e respeitar as condições de uso de suas respectivas fontes.


## 🔧 Implementação técnica

### HTML5 semântico
As páginas utilizam elementos como header, nav,
main, section, article e footer para organizar
o conteúdo.

### Metodologia BEM
O CSS utiliza a metodologia BEM para organizar
as classes em blocos, elementos e modificadores.

Exemplos:
- Bloco: .noticia
- Elemento: .noticia__titulo

### Flexbox
Utilizado para organizar elementos de navegação,
listas e outras áreas da interface.

### CSS Grid
Utilizado nas grades de cartões das modalidades
esportivas e na seção de informações da página Sobre.

### Media Queries
Regras responsivas adaptam o layout para telas
de celulares, tablets e computadores.

### JavaScript e API
O arquivo js/formula1-api.js utiliza fetch()
para consultar os dados da Jolpica F1 API
e exibir a classificação de pilotos.





## 🎓 Finalidade

Projeto desenvolvido para fins acadêmicos e de aprendizagem em desenvolvimento web.

© 2026 ARENA 90
