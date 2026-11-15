(() => {
  const toggle=document.querySelector('.menu-button');
  const menu=document.querySelector('.mobile-nav');
  const closeMenu=()=>{if(toggle&&menu){menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation menu');}};
  if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});document.addEventListener('click',e=>{if(!toggle.contains(e.target)&&!menu.contains(e.target))closeMenu();});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));}
  document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
  const elements=document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}},{threshold:0.07,rootMargin:'0px 0px 30px 0px'});elements.forEach(el=>observer.observe(el));}else{elements.forEach(el=>el.classList.add('is-visible'));}
})();
