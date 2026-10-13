/* qa-tests.js: Testes que rodam de verdade na página, ao clicar em "rodar testes nesta página". */

const T=[
['idioma da página definido como pt-BR',()=>document.documentElement.lang==='pt-BR'],
['todas as imagens têm texto alternativo',()=>[...document.images].every(i=>i.hasAttribute('alt'))],
['sem rolagem horizontal nesta largura',()=>document.documentElement.scrollWidth<=innerWidth+1],
['existe um único título h1',()=>$$('h1').length===1],
['links de projeto abrem em nova aba com segurança',()=>$$('.pl a').every(a=>a.target==='_blank'&&a.rel.includes('noopener'))],
['links de e-mail e telefone preenchidos',()=>!!$('a[href^="mailto:"]')&&!!$('a[href^="tel:"]')],
['botões de filtro têm texto',()=>$$('#fl button').every(b=>b.textContent.trim())]];
$('#run').onclick=async e=>{
 const btn=e.target,res=$('#res'),sum=$('#sum');btn.disabled=true;res.innerHTML='';sum.textContent='';let ok=0;
 for(const [n,f] of T){
  let r=false;try{r=f()}catch(x){}
  await wait(reduce?0:420);ok+=r;
  res.insertAdjacentHTML('beforeend',`<li><span class="r ${r?'ok':'bad'}">${r?'✓':'✗'}</span><span>${n}</span></li>`);
 }
 sum.textContent=`${ok} de ${T.length} testes passaram.`;btn.disabled=false;btn.textContent='rodar de novo';
};
