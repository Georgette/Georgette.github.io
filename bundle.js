(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./styles/main.less')
$("#bio-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#bio").offset().top
    }, 800)
})

},{"./styles/main.less":2}],2:[function(require,module,exports){
var css = "body {\n  margin: 0;\n  padding: 0;\n  background: rgba(255, 255, 255, 0.8) url(../images/office-compressed.jpg) no-repeat;\n  background-position: center center;\n  background-attachment: fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n#body-background .buttons {\n  height: 100%;\n  padding-top: 30px;\n  text-align: center;\n}\n#body-background .buttons .btn {\n  cursor: pointer;\n  margin: 10px;\n  border-radius: 5px;\n  text-decoration: none;\n  padding: 10px;\n  font-size: 22px;\n  -webkit-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -o-transition: 0.3s;\n  display: inline-block;\n  width: 120px;\n  color: #e0ff01;\n  border: 2px white solid;\n}\n#body-background .buttons .btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background-color: rgba(224, 255, 0, 0.5);\n}\n#body-background h2 {\n  font-size: 6vmax;\n  font-family: 'Indie Flower', cursive;\n  text-align: center;\n}\n#body-background h1 {\n  font-size: 8vmax;\n  font-family: 'Indie Flower', cursive;\n  text-align: center;\n}\n#body-background h1 b {\n  font-size: 10vmax;\n}\n#body-background b {\n  font-weight: normal;\n  font-family: monospace;\n  color: #e0ff01;\n  text-shadow: 0px 1px 2px #717171;\n}\n#body-background #bio,\n#body-background #joke,\n#body-background #family {\n  padding: 5%;\n  font-size: 2.5vmax;\n  font-family: 'Indie Flower', cursive;\n  background-color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n}\n#body-background #bio span,\n#body-background #joke span,\n#body-background #family span {\n  font-size: 2vmax;\n  font-family: monospace;\n}\n#body-background #joke,\n#body-background #family {\n  margin-top: 2px;\n}\n#body-background #joke p,\n#body-background #family p {\n  margin-top: 10px;\n  font-family: monospace;\n  font-size: 1.5vmax;\n  padding: 2%;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n@media (max-width: 800px) {\n  body {\n    margin: 0;\n    padding: 0;\n    background: rgba(255, 255, 255, 0.8) url(../images/office-smaller.png) no-repeat;\n    background-position: center center;\n    background-attachment: fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n  #joke,\n  #family {\n    display: none !important;\n  }\n}\n";(require('lessify'))(css); module.exports = css;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9zdHlsZXMvbWFpbi5sZXNzIiwibm9kZV9tb2R1bGVzL2xlc3NpZnkvbm9kZV9tb2R1bGVzL2Nzc2lmeS9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2xlc3NpZnkvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlKCcuL3N0eWxlcy9tYWluLmxlc3MnKVxuJChcIiNiaW8tYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2Jpb1wiKS5vZmZzZXQoKS50b3BcbiAgICB9LCA4MDApXG59KVxuIiwidmFyIGNzcyA9IFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIHVybCguLi9pbWFnZXMvb2ZmaWNlLWNvbXByZXNzZWQuanBnKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4jYm9keS1iYWNrZ3JvdW5kIC5idXR0b25zIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYm9keS1iYWNrZ3JvdW5kIC5idXR0b25zIC5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcXG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGNvbG9yOiAjZTBmZjAxO1xcbiAgYm9yZGVyOiAycHggd2hpdGUgc29saWQ7XFxufVxcbiNib2R5LWJhY2tncm91bmQgLmJ1dHRvbnMgLmJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAyNTUsIDAsIDAuNSk7XFxufVxcbiNib2R5LWJhY2tncm91bmQgaDIge1xcbiAgZm9udC1zaXplOiA2dm1heDtcXG4gIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2JvZHktYmFja2dyb3VuZCBoMSB7XFxuICBmb250LXNpemU6IDh2bWF4O1xcbiAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYm9keS1iYWNrZ3JvdW5kIGgxIGIge1xcbiAgZm9udC1zaXplOiAxMHZtYXg7XFxufVxcbiNib2R5LWJhY2tncm91bmQgYiB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGNvbG9yOiAjZTBmZjAxO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMnB4ICM3MTcxNzE7XFxufVxcbiNib2R5LWJhY2tncm91bmQgI2JpbyxcXG4jYm9keS1iYWNrZ3JvdW5kICNqb2tlLFxcbiNib2R5LWJhY2tncm91bmQgI2ZhbWlseSB7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGZvbnQtc2l6ZTogMi41dm1heDtcXG4gIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2JvZHktYmFja2dyb3VuZCAjYmlvIHNwYW4sXFxuI2JvZHktYmFja2dyb3VuZCAjam9rZSBzcGFuLFxcbiNib2R5LWJhY2tncm91bmQgI2ZhbWlseSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMnZtYXg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG4jYm9keS1iYWNrZ3JvdW5kICNqb2tlLFxcbiNib2R5LWJhY2tncm91bmQgI2ZhbWlseSB7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcbiNib2R5LWJhY2tncm91bmQgI2pva2UgcCxcXG4jYm9keS1iYWNrZ3JvdW5kICNmYW1pbHkgcCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMS41dm1heDtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSB1cmwoLi4vaW1hZ2VzL29mZmljZS1zbWFsbGVyLnBuZykgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG4gICNqb2tlLFxcbiAgI2ZhbWlseSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCI7KHJlcXVpcmUoJ2xlc3NpZnknKSkoY3NzKTsgbW9kdWxlLmV4cG9ydHMgPSBjc3M7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzLCBjdXN0b21Eb2N1bWVudCkge1xuICB2YXIgZG9jID0gY3VzdG9tRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gIGlmIChkb2MuY3JlYXRlU3R5bGVTaGVldCkge1xuICAgIHZhciBzaGVldCA9IGRvYy5jcmVhdGVTdHlsZVNoZWV0KClcbiAgICBzaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIHJldHVybiBzaGVldC5vd25lck5vZGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuYnlVcmwgPSBmdW5jdGlvbih1cmwpIHtcbiAgaWYgKGRvY3VtZW50LmNyZWF0ZVN0eWxlU2hlZXQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlU3R5bGVTaGVldCh1cmwpLm93bmVyTm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSB1cmw7XG5cbiAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBsaW5rO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdjc3NpZnknKTtcbiJdfQ==
