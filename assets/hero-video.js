(function(){var box=document.querySelector('.hero-video');if(!box)return;
/* phones/touch: YouTube forces its own play/pause/'More videos' overlay on mobile and it can't be hidden, so use the hero photo instead */
if(window.matchMedia('(max-width:820px), (hover:none) and (pointer:coarse)').matches){box.remove();return}
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var c=navigator.connection;if(c&&(c.saveData||/(^|-)[23]g$/.test(c.effectiveType||'')))return;
if(location.protocol!=='http:'&&location.protocol!=='https:')return; /* YouTube refuses file:// embeds (Error 153) */
var id=box.getAttribute('data-yt'),holder=document.createElement('div'),player,visible=true,t;
function init(){player=new YT.Player(holder,{videoId:id,host:'https://www.youtube-nocookie.com',
playerVars:{autoplay:1,mute:1,controls:0,loop:1,playlist:id,playsinline:1,rel:0,modestbranding:1,disablekb:1,iv_load_policy:3,fs:0,origin:location.origin},
events:{onReady:function(e){e.target.mute();if(visible)e.target.playVideo()},
onStateChange:function(e){var s=e.data;clearTimeout(t);
if(s===1)t=setTimeout(function(){box.classList.add('playing')},450); /* brief delay hides YouTube's start-up overlay */
else if(s===2||s===0||s===-1||s===5){box.classList.remove('playing'); /* fade out whenever paused/ended so YouTube's buttons never show */
if(s===0){player.seekTo(0);player.playVideo()}}},
onError:function(){box.remove()}}});
if('IntersectionObserver' in window)new IntersectionObserver(function(es){visible=es[0].isIntersecting;if(player&&player.playVideo)visible?player.playVideo():player.pauseVideo()}).observe(box)}
function start(){box.appendChild(holder);
if(window.YT&&YT.Player)return init();
var prev=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){if(prev)prev();init()};
var s=document.createElement('script');s.src='https://www.youtube.com/iframe_api';s.onerror=function(){box.remove()};document.head.appendChild(s)}
/* load only after the page itself has finished, so the video never delays first paint */
if(document.readyState==='complete')setTimeout(start,300);else window.addEventListener('load',function(){setTimeout(start,300)})})();
