/* projects.js: Renderiza a lista de projetos, a prévia ao passar o mouse e os filtros. */

const pl=$('#pl'),pi=$('#pi');
pl.innerHTML=P.map((p,n)=>`<li class="rv" data-k="${p.k}" style="--d:${n%3*.08}s"><a href="${p.u}" target="_blank" rel="noopener" data-i="${p.i}"><img class="th" src="${imgSrc(p.i)}" alt="Imagem do projeto ${p.t}" loading="lazy"><h3>${p.t}</h3><span class="ar" aria-hidden="true">↗</span><p>${p.d}</p><span class="st">${p.s.join(' / ')}</span></a></li>`).join('');
watch();let ck=P[0].i;const show=k=>{if(ck===k)return;ck=k;pi.classList.add('off');setTimeout(()=>{pi.src=imgSrc(k);pi.classList.remove('off')},220)};
pi.src=imgSrc(ck);
$$('.pl a').forEach(a=>['mouseenter','focus'].forEach(ev=>a.addEventListener(ev,()=>show(a.dataset.i))));
const F=[['all','Todos'],['js','JavaScript'],['layout','Layout e Figma']],fl=$('#fl');
F.forEach(([k,n],x)=>{const b=document.createElement('button');b.type='button';b.textContent=n;if(!x)b.className='on';
 b.onclick=()=>{$$('#fl button').forEach(o=>o.classList.remove('on'));b.classList.add('on');
  $$('.pl li').forEach(li=>{const ok=k==='all'||li.dataset.k===k;li.classList.toggle('hd',!ok);if(ok){li.classList.remove('in');void li.offsetWidth;li.classList.add('in')}})};fl.append(b)});
