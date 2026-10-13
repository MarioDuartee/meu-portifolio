/* projects-data.js: Dados dos projetos. Para adicionar um, crie o print em assets/img/projects/ e inclua um item em P. */

const imgSrc=k=>`assets/img/projects/${k}.webp`;
const U='https://marioduartee.github.io/';
const P=[
{t:'Calculadora',d:'Calculadora com as quatro operações, feita com lógica em JavaScript.',s:['HTML','CSS','JavaScript'],k:'js',i:'calculadora',u:U+'calculadora/'},
{t:'Relógio digital',d:'Relógio que atualiza a hora em tempo real, usando o DOM.',s:['HTML','CSS','JavaScript'],k:'js',i:'relogio',u:U+'relogioDigital/'},
{t:'Single page do Figma',d:'Landing page com destaque, botão e cards de cores, construída a partir de um layout do Figma.',s:['HTML','CSS','Figma'],k:'layout',i:'desafio3',u:U+'desafio-3-figma/'},
{t:'Codelândia',d:'Página de blog com campo de busca e lista de posts, criada a partir de um layout do Figma.',s:['HTML','CSS','Figma'],k:'layout',i:'codelandia',u:U+'desafioFigma-1/'},
{t:'Jordan Shoes',d:'Loja de tênis Jordan com faixa de promoção e vitrine de destaques, feita a partir de um layout do Figma.',s:['HTML','CSS','Figma'],k:'layout',i:'jordan',u:U+'desafio2-figma/'},
{t:'NLW Copa',d:'Calendário de jogos da Copa com troca de cor do tema, feito durante o NLW Copa.',s:['HTML','CSS','JavaScript'],k:'js',i:'nlw',u:U+'NLW-Copa/'},
{t:'Chihiro',d:'Página sobre A Viagem de Chihiro, com título grande, botões de ação e redes sociais.',s:['HTML','CSS'],k:'layout',i:'chihiro',u:'https://chihiro-8tfsv7bn4-marioduartee.vercel.app/'},
{t:'Alura MIDI',d:'Pads de bateria que tocam um som a cada clique, feito no curso da Alura.',s:['JavaScript','Alura'],k:'js',i:'midi',u:U+'JavaScript/'},
{t:'Alura Books',d:'Loja de livros com filtros por categoria e ordenação por preço, feita no curso da Alura.',s:['JavaScript','Alura'],k:'js',i:'books',u:U+'array/'}];
