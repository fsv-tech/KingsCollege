(function(){var t=document.querySelector('.menu-toggle'),n=document.querySelector('.nav'),hd=document.querySelector('.site-header');if(!t||!n)return;
n.id=n.id||'site-nav';t.setAttribute('aria-controls',n.id);var mq=window.matchMedia('(max-width:980px)'),logo=document.querySelector('.logo');
var head=document.createElement('div');head.className='panel-head';
head.innerHTML='<a class="panel-title" href="'+(logo?logo.getAttribute('href'):'#')+'">King\u2019s College Doha</a><a class="panel-tel" href="tel:+97444965888">Admissions: +974 4496 5888</a>';
n.insertBefore(head,n.firstChild);
var cl=document.createElement('button');cl.type='button';cl.className='panel-close';cl.innerHTML='<span aria-hidden="true">\u00d7</span> Close Panel';n.appendChild(cl);
var sc=document.createElement('div');sc.className='scrim';hd.appendChild(sc);
function reset(){document.querySelectorAll('.dd-parent').forEach(function(x){x.setAttribute('aria-expanded','false')});n.classList.remove('drilled');document.querySelectorAll('.has-dd.open').forEach(function(x){x.classList.remove('open')})}
function setOpen(o){n.classList.toggle('open',o);sc.classList.toggle('on',o);t.setAttribute('aria-expanded',o);t.textContent=o?'Close':'Menu';document.documentElement.classList.toggle('nav-lock',o&&mq.matches);if(!o)reset();if(o&&mq.matches)setTimeout(function(){var f=n.querySelector('.panel-title');if(f)f.focus()},320)}
t.addEventListener('click',function(){setOpen(!n.classList.contains('open'))});
cl.addEventListener('click',function(){setOpen(false);t.focus()});sc.addEventListener('click',function(){setOpen(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false)});
mq.addEventListener&&mq.addEventListener('change',function(){setOpen(false)});
n.querySelectorAll('.dd').forEach(function(d){var b=document.createElement('a');b.href='#';b.className='dd-back';b.textContent='\u2039 Back';d.insertBefore(b,d.firstChild);b.addEventListener('click',function(e){e.preventDefault();reset()})});
n.querySelectorAll('.dd a:not(.dd-back)').forEach(function(a){a.addEventListener('click',function(){if(mq.matches)setOpen(false)})});
document.querySelectorAll('.dd-parent').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var li=a.parentNode,was=li.classList.contains('open');document.querySelectorAll('.has-dd.open').forEach(function(x){x.classList.remove('open')});a.setAttribute('aria-expanded',String(!was));if(!was){li.classList.add('open');if(mq.matches)n.classList.add('drilled')}else n.classList.remove('drilled')})});
document.addEventListener('click',function(e){if(!mq.matches&&!e.target.closest('.has-dd'))document.querySelectorAll('.has-dd.open').forEach(function(x){x.classList.remove('open')})})})();
