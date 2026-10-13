/* menu.js: Barra de progresso, menu flutuante com indicador, seção ativa e menu mobile. */

const bar=$('#bar'),links=$$('#menu a'),nav=$('#nav'),ind=$('#ind'),mb=$('#mb');let last=0;
const moveInd=a=>{if(!a||innerWidth<=860){ind.style.opacity=0;return}ind.style.opacity=1;ind.style.width=a.offsetWidth+'px';ind.style.transform=`translateX(${a.offsetLeft}px)`};
const act=()=>moveInd($('#menu a.on'));
addEventListener('scroll',()=>{
 const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
 let cur='';$$('main section[id]').forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});
 links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur));act();
 const y=h.scrollTop;nav.classList.toggle('hide',y>last&&y>300&&!nav.classList.contains('open'));last=y;
},{passive:true});
links.forEach(a=>{a.addEventListener('mouseenter',()=>moveInd(a));a.addEventListener('click',()=>nav.classList.remove('open'))});
$('#menu').addEventListener('mouseleave',act);
mb.onclick=()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
addEventListener('resize',act);addEventListener('load',act);if(document.fonts)document.fonts.ready.then(act);
