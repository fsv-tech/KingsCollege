(function(){var d=document,root=d.documentElement;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
root.classList.add('js-motion');
/* scroll progress bar + back-to-top */
var bar=d.createElement('div');bar.className='progress';d.body.appendChild(bar);
var up=d.createElement('button');up.type='button';up.className='totop';up.setAttribute('aria-label','Back to top');up.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 15l7-7 7 7"/></svg>';(d.querySelector('footer')||d.body).appendChild(up);
up.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
var hd=d.querySelector('.site-header'),tick=false;
function onScroll(){tick=false;var y=window.pageYOffset,h=root.scrollHeight-window.innerHeight;
bar.style.transform='scaleX('+(h>0?Math.min(1,y/h):0)+')';
up.classList.toggle('on',y>700);if(hd)hd.classList.toggle('scrolled',y>12)}
window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
/* reveal on scroll */
var sel=['main section h2','main .eyebrow','main .split>div','main .split>.fig','main .card','main .doc','main .person','main .tablewrap','main .formcard','.cta .container>*','footer .fgrid>div'];
var els=[].slice.call(d.querySelectorAll(sel.join(','))).filter(function(e){return !e.closest('.hero,.lb,.nav')});
els.forEach(function(e){var sib=[].slice.call(e.parentNode.children).filter(function(c){return els.indexOf(c)>-1});
var i=Math.max(0,sib.indexOf(e));e.style.setProperty('--d',Math.min(i,6)*90+'ms');e.classList.add('rv');
if(e.matches('.split>.fig'))e.classList.add('rv-fig')});
function show(e){e.classList.add('in');setTimeout(function(){e.classList.remove('rv','rv-fig','in');e.style.removeProperty('--d')},1400)}
if(!('IntersectionObserver' in window)){els.forEach(show);return}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){show(x.target);io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
els.forEach(function(e){io.observe(e)});
setTimeout(function(){els.forEach(function(e){if(e.classList.contains('rv')&&!e.classList.contains('in'))show(e)})},6000)})();
