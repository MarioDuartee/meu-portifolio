/* utils.js: Atalhos usados por todos os outros scripts. */

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],
reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,wait=ms=>new Promise(r=>setTimeout(r,ms));
