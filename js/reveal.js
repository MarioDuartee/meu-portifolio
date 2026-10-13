/* reveal.js: Faz os blocos com a classe .rv aparecerem ao rolar a página (watch() observa novos elementos). */

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
const watch=()=>$$('.rv:not(.in)').forEach(el=>io.observe(el));watch();
