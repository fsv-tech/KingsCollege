(function(){var cards=[].slice.call(document.querySelectorAll('.card.ig'));if(!cards.length)return;
var m=document.createElement('div');m.className='lb';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.hidden=true;
m.innerHTML='<div class="lb-box"><button type="button" class="lb-x" aria-label="Close">\u00d7</button><button type="button" class="lb-nav lb-prev" aria-label="Previous post">\u2039</button><button type="button" class="lb-nav lb-next" aria-label="Next post">\u203a</button><div class="lb-media"><img alt="" referrerpolicy="no-referrer"></div><div class="lb-side"><p class="lb-cap"></p><p class="lb-meta"></p><a class="btn" target="_blank" rel="noopener">View on Instagram</a></div></div>';
document.body.appendChild(m);var q=function(s){return m.querySelector(s)},img=q('img'),cap=q('.lb-cap'),meta=q('.lb-meta'),go=q('.btn'),cur=0;
cards.forEach(function(c){c.setAttribute('aria-label',c.textContent.replace(/\s+/g,' ').trim())});
img.onerror=function(){q('.lb-media').hidden=true};
function show(i){cur=(i+cards.length)%cards.length;var c=cards[cur];cap.textContent=c.querySelector('p').textContent;meta.textContent='\u2665 '+c.dataset.likes+'   \u00b7   '+c.dataset.comments+(c.dataset.comments==='1'?' comment':' comments');go.href=c.dataset.link;q('.lb-media').hidden=false;img.src=c.dataset.src}
function open(i){show(i);m.hidden=false;document.documentElement.classList.add('nav-lock');q('.lb-x').focus()}
function close(){m.hidden=true;document.documentElement.classList.remove('nav-lock');cards[cur].focus()}
cards.forEach(function(c,i){c.addEventListener('click',function(){open(i)})});
q('.lb-prev').addEventListener('click',function(){show(cur-1)});q('.lb-next').addEventListener('click',function(){show(cur+1)});
m.addEventListener('click',function(e){if(e.target===m)close()});q('.lb-x').addEventListener('click',close);
document.addEventListener('keydown',function(e){if(m.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)})})();
