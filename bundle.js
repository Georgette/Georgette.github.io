(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./styles/main.less')
$("#bio-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#bio").offset().top
    }, 800)
})

},{"./styles/main.less":2}],2:[function(require,module,exports){
var css = "body {\n  margin: 0;\n  padding: 0;\n  background: url(../images/office-smaller.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  background-attachment: fixed;\n}\n#body-background .btn {\n  cursor: pointer;\n  margin: 10px;\n  border-radius: 5px;\n  text-decoration: none;\n  padding: 10px;\n  font-size: 22px;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -o-transition: .3s;\n  display: inline-block;\n  width: 110px;\n  color: #E0FF01;\n  border: 2px white solid;\n}\n#body-background .btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background-color: rgba(224, 255, 0, 0.5);\n}\n#body-background .buttons {\n  height: 100%;\n  padding-top: 30px;\n  text-align: center;\n}\n#body-background h2 {\n  font-size: 6vmax;\n  font-family: 'Indie Flower', cursive;\n  text-align: center;\n}\n#body-background h1 {\n  font-size: 8vmax;\n  font-family: 'Indie Flower', cursive;\n  text-align: center;\n}\n#body-background h1 b {\n  font-size: 10vmax;\n}\n#body-background b {\n  font-weight: normal;\n  font-family: monospace;\n  color: #E0FF01;\n}\n#body-background #bio,\n#body-background #joke,\n#body-background #family {\n  padding: 5%;\n  font-size: 2.5vmax;\n  font-family: 'Indie Flower', cursive;\n  background-color: rgba(140, 140, 140, 0.8);\n  text-align: center;\n}\n#body-background #bio span,\n#body-background #joke span,\n#body-background #family span {\n  font-size: 2vmax;\n  font-family: monospace;\n}\n#body-background #joke,\n#body-background #family {\n  margin-top: 150px;\n}\n#body-background #joke p,\n#body-background #family p {\n  margin-top: 10px;\n  font-family: monospace;\n  font-size: 1.5vmax;\n  padding: 2%;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n@media (max-width: 600px) {\n  body {\n    background: url(../images/office-mobile.png);\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    background-attachment: fixed;\n  }\n}\n";(require('lessify'))(css); module.exports = css;
},{"lessify":4}],3:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],4:[function(require,module,exports){
module.exports = require('cssify');

},{"cssify":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9zdHlsZXMvbWFpbi5sZXNzIiwibm9kZV9tb2R1bGVzL2xlc3NpZnkvbm9kZV9tb2R1bGVzL2Nzc2lmeS9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2xlc3NpZnkvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlKCcuL3N0eWxlcy9tYWluLmxlc3MnKVxuJChcIiNiaW8tYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2Jpb1wiKS5vZmZzZXQoKS50b3BcbiAgICB9LCA4MDApXG59KVxuIiwidmFyIGNzcyA9IFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9vZmZpY2Utc21hbGxlci5wbmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcbiNib2R5LWJhY2tncm91bmQgLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgdHJhbnNpdGlvbjogLjNzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XFxuICAtbW96LXRyYW5zaXRpb246IC4zcztcXG4gIC1vLXRyYW5zaXRpb246IC4zcztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGNvbG9yOiAjRTBGRjAxO1xcbiAgYm9yZGVyOiAycHggd2hpdGUgc29saWQ7XFxufVxcbiNib2R5LWJhY2tncm91bmQgLmJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAyNTUsIDAsIDAuNSk7XFxufVxcbiNib2R5LWJhY2tncm91bmQgLmJ1dHRvbnMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNib2R5LWJhY2tncm91bmQgaDIge1xcbiAgZm9udC1zaXplOiA2dm1heDtcXG4gIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2JvZHktYmFja2dyb3VuZCBoMSB7XFxuICBmb250LXNpemU6IDh2bWF4O1xcbiAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYm9keS1iYWNrZ3JvdW5kIGgxIGIge1xcbiAgZm9udC1zaXplOiAxMHZtYXg7XFxufVxcbiNib2R5LWJhY2tncm91bmQgYiB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGNvbG9yOiAjRTBGRjAxO1xcbn1cXG4jYm9keS1iYWNrZ3JvdW5kICNiaW8sXFxuI2JvZHktYmFja2dyb3VuZCAjam9rZSxcXG4jYm9keS1iYWNrZ3JvdW5kICNmYW1pbHkge1xcbiAgcGFkZGluZzogNSU7XFxuICBmb250LXNpemU6IDIuNXZtYXg7XFxuICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuOCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNib2R5LWJhY2tncm91bmQgI2JpbyBzcGFuLFxcbiNib2R5LWJhY2tncm91bmQgI2pva2Ugc3BhbixcXG4jYm9keS1iYWNrZ3JvdW5kICNmYW1pbHkgc3BhbiB7XFxuICBmb250LXNpemU6IDJ2bWF4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuI2JvZHktYmFja2dyb3VuZCAjam9rZSxcXG4jYm9keS1iYWNrZ3JvdW5kICNmYW1pbHkge1xcbiAgbWFyZ2luLXRvcDogMTUwcHg7XFxufVxcbiNib2R5LWJhY2tncm91bmQgI2pva2UgcCxcXG4jYm9keS1iYWNrZ3JvdW5kICNmYW1pbHkgcCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMS41dm1heDtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL29mZmljZS1tb2JpbGUucG5nKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIH1cXG59XFxuXCI7KHJlcXVpcmUoJ2xlc3NpZnknKSkoY3NzKTsgbW9kdWxlLmV4cG9ydHMgPSBjc3M7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzLCBjdXN0b21Eb2N1bWVudCkge1xuICB2YXIgZG9jID0gY3VzdG9tRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gIGlmIChkb2MuY3JlYXRlU3R5bGVTaGVldCkge1xuICAgIHZhciBzaGVldCA9IGRvYy5jcmVhdGVTdHlsZVNoZWV0KClcbiAgICBzaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIHJldHVybiBzaGVldC5vd25lck5vZGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuYnlVcmwgPSBmdW5jdGlvbih1cmwpIHtcbiAgaWYgKGRvY3VtZW50LmNyZWF0ZVN0eWxlU2hlZXQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlU3R5bGVTaGVldCh1cmwpLm93bmVyTm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSB1cmw7XG5cbiAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBsaW5rO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdjc3NpZnknKTtcbiJdfQ==
