/*
 * SleekShare Plugin V1.01
 * A Tiny jquery based share plugin with share counts. 
 * 
 * Copyright (c) 2014 Mohammad Wali
 * http://mwa.li/sleekShare
 * Release date : 24 April 2014
 * The MIT License (MIT)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var x=function(e){throw new Error(e)};window.jQuery?null:x("Jquery library not found SleekShare requires Jquery to work"),function(e,t,r){"use strict";var a=function(e){throw new Error(e)},s=function(e){console.warn(e)};r.sleekShare=function(l){function o(e,t){var r=(""+e).length,a=Math.pow,t=a(10,t);return r-=r%3,Math.round(e*t/a(10,r))/t+" kMGTPE"[r/3]}var n=r.extend({position:"left",countEach:!0,commentIcon:!0,customStyles:!1},l);if(e.getElementById("sleekShare-style")||0!=n.customStyles)n.customStyles&&s("SleekShare customStyles mode Activated");else{var i=e.createElement("link");i.type="text/css",i.rel="stylesheet",i.href="http://mohammadwali.net/sleekshare/sleekShare-min.css",i.id="sleekShare-style",e.getElementsByTagName("head")[0].appendChild(i),s("SleekShare stylesheet Not found added automatically")}var h=function(a){var s="sleekshare",l=t.location.href,i=(e.title,{facebook:{url:"http://www.facebook.com/sharer/sharer.php?u=",id:"facebook"},google:{url:"https://plus.google.com/share?url=",id:"google"},linkedin:{url:"http://www.linkedin.com/shareArticle?url=",id:"linkedin"},reddit:{url:"http://reddit.com/submit?url=",id:"reddit"},delicious:{url:"https://delicious.com/save?v=5&amp;url=",id:"delicious"},stumbleupon:{url:"http://www.stumbleupon.com/submit?url=",id:"stumbleupon"},twitter:{url:"https://twitter.com/share?url=",id:"twitter"},pinterest:{url:"https://pinterest.com/pin/create/bookmarklet/?url=",id:"pinterest"}});if(!e.getElementById(s)){var h=e.createElement("div"),c=e.createElement("ul");h.id=s,h.dataset.sleeksharePosition=n.position,e.body.appendChild(h),n.countEach&&(h.className=s+"-counteach"),h.appendChild(c);var d=e.createElement("li");d.id=s+"-tcount",d.innerHTML=0==o(a.shares.total,1)?"No shares":o(a.shares.total,1)<=1?o(a.shares.total,1)+" share":o(a.shares.total,1)+" shares",c.appendChild(d);for(var u in i)if(i.hasOwnProperty(u)){var p=i[u].url+l,m=i[u].id,f=e.createElement("li");f.id=s+"-"+m,c.appendChild(f);var k=e.createElement("a");if(k.id="ico-"+m,k.href="#",k.rel="nofollow",k.dataset.sleekshareService=m,k.dataset.sleekshareUrl=p,f.appendChild(k),n.countEach){var w=e.createElement("span");w.className=s+"-count",w.innerHTML=0==o(a.shares[m],1)?"No shares":o(a.shares[m],1)<=1?o(a.shares[m],1)+"share":o(a.shares[m],1)+"shares",k.appendChild(w)}}if(n.commentIcon){var v=e.createElement("li"),y=e.createElement("a");v.id=s+"-comment",c.appendChild(v),y.href="#comment",y.rel="nofollow",y.dataset.sleekshare="scrollto",v.appendChild(y)}}r("[data-sleekshare-service]").each(function(){r(this);r(this).click(function(e){e.preventDefault();var a=r(this).data("sleekshare-url");e.preventDefault(),e.stopPropagation(),t.open(a,s,"width=580,height=530")})}),r("#sleekshare").css("margin-top",-r("#sleekshare").height()/2),r("[data-sleekshare=scrollto]").click(function(e){e.preventDefault();var t="#comments";$("html,body").animate({scrollTop:$(t).offset().top},1e3)})};r.ajax({method:"GET",dataType:"jsonp",url:"http://mwa.li/apis/share/?url="+encodeURI(t.location.href),success:function(e){h(e)},error:function(){a("Something went Wrong while fetching.")}})}}(document,window,$);