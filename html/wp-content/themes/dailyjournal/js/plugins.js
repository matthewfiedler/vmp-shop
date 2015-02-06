/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia=window.matchMedia||(function(l,k){var n,i=l.documentElement,h=i.firstElementChild||i.firstChild,m=l.createElement("body"),j=l.createElement("div");j.id="mq-test-1";j.style.cssText="position:absolute;top:-100em";m.appendChild(j);return function(a){j.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>';i.insertBefore(m,h);n=j.offsetWidth==42;i.removeChild(m);return{matches:n,media:a}}})(document);
/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with divs). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
(function(a){a.picturefill=function(){var b=a.document.getElementsByTagName("div");for(var f=0,k=b.length;f<k;f++){if(b[f].getAttribute("data-picture")!==null){var c=b[f].getElementsByTagName("div"),h=[];for(var e=0,g=c.length;e<g;e++){var d=c[e].getAttribute("data-media");if(!d||(a.matchMedia&&a.matchMedia(d).matches)){h.push(c[e])}}var l=b[f].getElementsByTagName("img")[0];if(h.length){if(!l){l=a.document.createElement("img");l.alt=b[f].getAttribute("data-alt");b[f].appendChild(l)}l.src=h.pop().getAttribute("data-src")}else{if(l){b[f].removeChild(l)}}}}};if(a.addEventListener){a.addEventListener("resize",a.picturefill,false);a.addEventListener("DOMContentLoaded",function(){a.picturefill();a.removeEventListener("load",a.picturefill,false)},false);a.addEventListener("load",a.picturefill,false)}else{if(a.attachEvent){a.attachEvent("onload",a.picturefill)}}}(this));