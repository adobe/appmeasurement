/*
 Copyright 1996 Adobe. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function AppMeasurement_Module_Integrate(f){var c=this;c.s=f;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var g=document,k=g.getElementsByTagName("HEAD"),l,f;if(!a.disable&&(d||(f="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=f,a.CALLBACK="s_c_il["+c._in+
"]."+a.a+".callback",a.delay(),k=k&&0<k.length?k[0]:g.body))try{l=g.createElement("SCRIPT"),l.type="text/javascript",l.setAttribute("async","async"),l.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(l.onload=l.onreadystatechange=function(){a.callback(e[f])}),k.firstChild?k.insertBefore(l,k.firstChild):k.appendChild(l)}catch(m){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=
e[d]=new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||f.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](f,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,h,g;"http"!=b.toLowerCase().substring(0,
4)&&(b="http://"+b);f.ssl&&(b=f.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(h=b.substring(a+1,e),2<h.length&&"s."==h.substring(0,2)?(g=f[h.substring(2)])||(g=""):(g=""+c[h],g!=c[h]&&parseFloat(g)!=c[h]&&(h=0)),h&&(b=b.substring(0,a)+encodeURIComponent(g)+b.substring(e+1)),a=e));return b}}
