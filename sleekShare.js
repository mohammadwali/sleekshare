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
var x = function(d) {
  throw new Error(d)
};
window.jQuery ? null : x("Jquery library not found SleekShare requires Jquery to work");
(function(e, f, g) {
  "use strict";
  var E = function(r) {
    throw new Error(r)
},
      CL = function(l) {
      console.log(l)
      },
      CW = function(w) {
      console.warn(w);
      };
  g.sleekShare = function(options) {
    var o = g.extend({
      position: "left",
      countEach: true,
      commentIcon: true,
      customStyles: false
    }, options);
    function format(n, d) {
      var x = ('' + n).length,
          p = Math.pow,
          d = p(10, d);
      x -= x % 3;
      return Math.round(n * d / p(10, x)) / d + " kMGTPE" [x / 3]
    }
    if (!e.getElementById('sleekShare-style') && o.customStyles == false) {
      var s = e.createElement("link");
      s.type = "text/css";
      s.rel = "stylesheet";
      s.href = "http://mohammadwali.net/sleekshare/sleekShare-min.css"; //style sheet link
      s.id = "sleekShare-style";
      e.getElementsByTagName("head")[0].appendChild(s);
      CW("SleekShare stylesheet Not found added automatically");
    } else if (o.customStyles) {
      CW("SleekShare customStyles mode Activated")
    }
    var int = function(data) {
      var prefix = "sleekshare",
          localUrl = f.location.href,
          title = e.title,
          services = {
          facebook: {
            url: "http://www.facebook.com/sharer/sharer.php?u=",
            id: "facebook"
          },
          google: {
            url: "https://plus.google.com/share?url=",
            id: "google"
          },
          linkedin: {
            url: "http://www.linkedin.com/shareArticle?url=",
            id: "linkedin"
          },
          reddit: {
            url: "http://reddit.com/submit?url=",
            id: "reddit"
          },
          delicious: {
            url: "https://delicious.com/save?v=5&amp;url=",
            id: "delicious"
          },
          stumbleupon: {
            url: "http://www.stumbleupon.com/submit?url=",
            id: "stumbleupon"
          },
          twitter: {
            url: "https://twitter.com/share?url=",
            id: "twitter"
          },
          pinterest: {
            url: "https://pinterest.com/pin/create/bookmarklet/?url=",
            id: "pinterest"
          }
          };
      if (!e.getElementById(prefix)) {
        var m = e.createElement("div"),
            ul = e.createElement("ul");
        m.id = prefix;
        m.dataset.sleeksharePosition = o.position;
        e.body.appendChild(m);
        if (o.countEach) {
          m.className = prefix + "-counteach";
        }
        m.appendChild(ul);
        var ttl = e.createElement("li");
        ttl.id = prefix + "-tcount";
        ttl.innerHTML = (format(data.shares.total, 1)) == 0 ? "No shares" : (format(data.shares.total, 1)) <= 1 ? (format(data.shares.total, 1) + " share") : (format(data.shares.total, 1) + " shares");
        ul.appendChild(ttl);
        for (var service in services) {
          if (services.hasOwnProperty(service)) {
            var url = services[service].url + localUrl,
                id = services[service].id,
                d = e.createElement("li");
            d.id = prefix + "-" + id;
            ul.appendChild(d);
            var ic = e.createElement("a");
            ic.id = "ico-" + id;
            ic.href = "#";
            ic.rel = "nofollow";
            ic.dataset.sleekshareService = id;
            ic.dataset.sleekshareUrl = url;
            d.appendChild(ic);
            if (o.countEach) {
              var co = e.createElement("span");
              co.className = prefix + "-count";
              co.innerHTML = (format(data.shares[id], 1)) == 0 ? "No shares" : (format(data.shares[id], 1)) <= 1 ? (format(data.shares[id], 1) + "share") : (format(data.shares[id], 1) + "shares");
              ic.appendChild(co);
            }
          } 
        };
        if (o.commentIcon) {
          var sci = e.createElement("li"),
              scic = e.createElement("a");
          sci.id = prefix + "-comment";
          ul.appendChild(sci);
          scic.href = "#comment";
          scic.rel = "nofollow";
          scic.dataset.sleekshare = "scrollto";
          sci.appendChild(scic);
        }
      }
      g("[data-sleekshare-service]").each(function() {
        var r = g(this);
        g(this).click(function(e) {
          e.preventDefault();
          var url = g(this).data("sleekshare-url");
          e.preventDefault();
          e.stopPropagation();
          f.open(url, prefix, "width=580,height=530");
        })
      })
      g("#sleekshare").css("margin-top", -g("#sleekshare").height() / 2)
      g('[data-sleekshare=scrollto]').click(function(e) {
        e.preventDefault();
        var target = "#comments" || "#comment";
        $('html,body').animate({
          scrollTop: $(target).offset().top
        }, 1000);
      });
    }
    g.ajax({
      method: "GET",
      dataType: "jsonp",
      url: "http://mwa.li/apis/share/?url=" + encodeURI(f.location.href),
      success: function(data) {
        int(data)
      },
      error: function(data) {
        E("Something went Wrong while fetching.")
      }
    })
  }
})(document, window, $);