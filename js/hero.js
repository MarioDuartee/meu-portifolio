/* hero.js: Luz que segue o mouse, inclinação da foto e terminal que digita. */

const hero=$('.hero'),ph=$('#ph'),img=ph.querySelector('img');
if(!reduce){
 hero.addEventListener('mousemove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--mx',(e.clientX-r.left)+'px');hero.style.setProperty('--my',(e.clientY-r.top)+'px')});
 ph.addEventListener('mousemove',e=>{const r=ph.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;img.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg)`});
 ph.addEventListener('mouseleave',()=>img.style.transform='');
}

/* terminal digitando */
(async()=>{
 const t=$('#term'),lines=[['ok','✓','HTML, CSS e JavaScript'],['ok','✓','React, Git e GitHub'],['bad','…','Q.A. em andamento'],['mu','>','aberto a vagas júnior']];
 for(const [c,i,txt] of lines){
  const d=document.createElement('div');d.innerHTML=`<i class="${c}">${i}</i> <span></span>`;t.append(d);
  const s=d.querySelector('span');d.classList.add('cur');
  if(reduce){s.textContent=txt;d.classList.remove('cur');continue}
  for(const ch of txt){s.textContent+=ch;await wait(26)}
  d.classList.remove('cur');await wait(180);
 }
})();
