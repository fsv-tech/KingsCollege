(function(){
/* stack wide tables into cards on phones: add data-labels from the header row */
[].forEach.call(document.querySelectorAll('.tablewrap table'),function(t){
 var hs=[].map.call(t.querySelectorAll('thead th'),function(h){return h.textContent.replace(/\s+/g,' ').trim()});
 if(hs.length<4)return;
 t.classList.add('stack');
 [].forEach.call(t.querySelectorAll('tbody tr'),function(tr){[].forEach.call(tr.children,function(c,i){if(i>0&&hs[i])c.setAttribute('data-label',hs[i])})})});
/* open a collapsible section when it is the link target */
function openHash(){var h=location.hash&&document.getElementById(decodeURIComponent(location.hash.slice(1)));
 if(h&&h.tagName==='DETAILS'){h.open=true;setTimeout(function(){h.scrollIntoView({behavior:'smooth',block:'start'})},60)}}
addEventListener('hashchange',openHash);openHash();
/* sticky "Book a School Tour" bar (phones only, via CSS) */
var tour=document.querySelector('.util a[href*="school-tour"]');
if(tour&&!/\/(school-tour|enquire|apply)\//.test(location.pathname)){
 var bar=document.createElement('a');bar.className='stickbar';bar.href=tour.getAttribute('href');bar.textContent='Book a School Tour';
 document.body.appendChild(bar);var foot=document.querySelector('footer');
 function upd(){var near=foot&&foot.getBoundingClientRect().top<innerHeight+10;
  var on=scrollY>650&&!near&&!document.documentElement.classList.contains('nav-lock');
  bar.classList.toggle('on',on);document.body.classList.toggle('has-stick',on)}
 addEventListener('scroll',upd,{passive:true});upd()}
})();
