<h1 align="center">Meu Portfólio</h1>

<p align="center">
  Desenvolvedor Front-End júnior em transição para Q.A.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-estrutura-de-pastas">Estrutura</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-projetos-exibidos">Projetos exibidos</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-contato">Contato</a>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-e34f26?style=flat&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572b6?style=flat&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-f7df1e?style=flat&logo=javascript&logoColor=black">
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white">
</p>

<br>

<!-- Adicione aqui um print da página, por exemplo:
![Preview do portfólio](assets/img/preview.png)
-->

## 🚀 Tecnologias

Este projeto foi feito sem frameworks e sem etapa de build, só com:

- **HTML5**: estrutura semântica e acessível.
- **CSS3**: variáveis, Grid, Flexbox, animações e layout responsivo.
- **JavaScript**: DOM, eventos e `IntersectionObserver`, tudo em arquivos separados por responsabilidade.

Fontes: [Syne](https://fonts.google.com/specimen/Syne), [DM Sans](https://fonts.google.com/specimen/DM+Sans) e [Fira Code](https://fonts.google.com/specimen/Fira+Code), carregadas pelo Google Fonts.

## 💻 Projeto

O portfólio apresenta quem eu sou, o que já sei fazer e o que estou estudando. Ele mostra minha base em Front-End (HTML, CSS, JavaScript, React e Git) e a transição para **Q.A.** (Quality Assurance), com os projetos que construí até aqui.

A versão atual foi refeita e separada em arquivos de HTML, CSS, JavaScript e assets, para ficar fácil de manter e de ampliar.

## ✨ Funcionalidades

- Menu flutuante com indicador que desliza até a seção atual, que se esconde ao rolar para baixo e vira um painel no celular.
- Barra de progresso de leitura no topo da página.
- Terminal que digita o resumo das minhas skills ao abrir o site.
- Foto com anel animado e leve inclinação 3D ao passar o mouse.
- Lista de projetos com filtro (Todos, JavaScript, Layout e Figma) e prévia da imagem ao passar o mouse.
- Seção de Q.A. com o botão **rodar testes nesta página**, que executa 7 verificações reais no próprio site (idioma, textos alternativos, rolagem horizontal, links, entre outras).
- Responsivo, com foco visível no teclado e respeito a `prefers-reduced-motion`.

## 📁 Estrutura de pastas

```
portfolio/
├── index.html
├── README.md
├── assets/
│   ├── favicon.svg
│   ├── cv.pdf                  
│   └── img/
│       ├── mario.webp
│       └── projects/           # prints dos projetos (.webp)
├── css/
│   └── style.css
└── js/
    ├── utils.js                # atalhos ($, $$, wait)
    ├── reveal.js               # animação ao rolar a página
    ├── menu.js                 # menu, progresso e seção ativa
    ├── hero.js                 # luz do mouse, foto e terminal
    ├── projects-data.js        # dados dos projetos
    ├── projects.js             # lista, filtros e prévia
    └── qa-tests.js             # testes que rodam na página
```

A ordem dos `<script>` no `index.html` importa: `utils.js` e `reveal.js` vêm primeiro porque os outros arquivos usam o que eles definem.


## 🎨 Layout

Tema escuro em azul-petróleo, com destaque em âmbar.

| Uso | Cor |
| --- | --- |
| Fundo | `#0e1c22` |
| Painéis | `#142830` |
| Linhas e bordas | `#26434d` |
| Texto | `#e8eef0` |
| Destaque | `#ffb347` |
| Sucesso (teste passou) | `#7be0b0` |
| Erro (teste falhou) | `#ff7a6b` |

Os espaçamentos seguem uma escala única (`--s1` a `--s5`), definida no `:root` de `css/style.css`.

## 📂 Projetos exibidos

| Projeto | Tecnologias | Link |
| --- | --- | --- |
| Calculadora | HTML, CSS, JavaScript | [Ver projeto](https://marioduartee.github.io/calculadora/) |
| Relógio digital | HTML, CSS, JavaScript | [Ver projeto](https://marioduartee.github.io/relogioDigital/) |
| Single page do Figma | HTML, CSS, Figma | [Ver projeto](https://marioduartee.github.io/desafio-3-figma/) |
| Codelândia | HTML, CSS, Figma | [Ver projeto](https://marioduartee.github.io/desafioFigma-1/) |
| Jordan Shoes | HTML, CSS, Figma | [Ver projeto](https://marioduartee.github.io/desafio2-figma/) |
| NLW Copa | HTML, CSS, JavaScript | [Ver projeto](https://marioduartee.github.io/NLW-Copa/) |
| Chihiro | HTML, CSS | [Ver projeto](https://chihiro-8tfsv7bn4-marioduartee.vercel.app/) |
| Alura MIDI | JavaScript | [Ver projeto](https://marioduartee.github.io/JavaScript/) |
| Alura Books | JavaScript | [Ver projeto](https://marioduartee.github.io/array/) |

## 📬 Contato

- E-mail: [j.mario.d.c@gmail.com](mailto:j.mario.d.c@gmail.com)
- Instagram: [@marioduartec](https://www.instagram.com/marioduartec/)

---

<p align="center">
  Feito por Mário Duarte, junto com o Claude, a IA da Anthropic.
</p>
