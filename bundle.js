(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./styles/main.less')
$("#bio-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#bio").offset().top
    }, 800)
})

},{"./styles/main.less":2}],2:[function(require,module,exports){
var css = "body {\n  margin: 0;\n  padding: 0;\n  background: url(../images/office-smaller.png) no-repeat center center fixed;\n  background-size: cover;\n}\n#body-background .btn {\n  cursor: pointer;\n  margin: 10px;\n  border-radius: 5px;\n  text-decoration: none;\n  padding: 10px;\n  font-size: 22px;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -o-transition: .3s;\n  display: inline-block;\n  width: 110px;\n  color: #E0FF01;\n  border: 2px white solid;\n}\n#body-background .btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background-color: rgba(224, 255, 0, 0.5);\n}\n#body-background .buttons {\n  height: 100%;\n  padding-top: 30px;\n  text-align: center;\n}\n#body-background h2 {\n  font-size: 6vmax;\n  font-family: 'Indie Flower', cursive;\n  text-align: center;\n}\n#body-background h1 {\n  font-size: 8vmax;\n  font-family: 'Indie Flower', cursive;\n  text-align: center;\n}\n#body-background h1 b {\n  font-size: 10vmax;\n}\n#body-background b {\n  font-weight: normal;\n  font-family: monospace;\n  color: #E0FF01;\n}\n#body-background #bio,\n#body-background #joke,\n#body-background #family {\n  padding: 5%;\n  font-size: 2.5vmax;\n  font-family: 'Indie Flower', cursive;\n  background-color: rgba(140, 140, 140, 0.8);\n  text-align: center;\n}\n#body-background #bio span,\n#body-background #joke span,\n#body-background #family span {\n  font-size: 2vmax;\n  font-family: monospace;\n}\n#body-background #joke,\n#body-background #family {\n  margin-top: 150px;\n}\n#body-background #joke p,\n#body-background #family p {\n  margin-top: 10px;\n  font-family: monospace;\n  font-size: 1.5vmax;\n  padding: 2%;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n@media (max-width: 700px) {\n  #bio,\n  #joke,\n  #family {\n    margin-top: 0px !important;\n    background-color: #8c8c8c !important;\n  }\n}\n";(require('lessify'))(css); module.exports = css;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9zdHlsZXMvbWFpbi5sZXNzIiwibm9kZV9tb2R1bGVzL2xlc3NpZnkvbm9kZV9tb2R1bGVzL2Nzc2lmeS9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2xlc3NpZnkvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlKCcuL3N0eWxlcy9tYWluLmxlc3MnKVxuJChcIiNiaW8tYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2Jpb1wiKS5vZmZzZXQoKS50b3BcbiAgICB9LCA4MDApXG59KVxuIiwidmFyIGNzcyA9IFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9vZmZpY2Utc21hbGxlci5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuI2JvZHktYmFja2dyb3VuZCAuYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICB0cmFuc2l0aW9uOiAuM3M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcXG4gIC1tb3otdHJhbnNpdGlvbjogLjNzO1xcbiAgLW8tdHJhbnNpdGlvbjogLjNzO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgY29sb3I6ICNFMEZGMDE7XFxuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcXG59XFxuI2JvZHktYmFja2dyb3VuZCAuYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDI1NSwgMCwgMC41KTtcXG59XFxuI2JvZHktYmFja2dyb3VuZCAuYnV0dG9ucyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2JvZHktYmFja2dyb3VuZCBoMiB7XFxuICBmb250LXNpemU6IDZ2bWF4O1xcbiAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYm9keS1iYWNrZ3JvdW5kIGgxIHtcXG4gIGZvbnQtc2l6ZTogOHZtYXg7XFxuICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNib2R5LWJhY2tncm91bmQgaDEgYiB7XFxuICBmb250LXNpemU6IDEwdm1heDtcXG59XFxuI2JvZHktYmFja2dyb3VuZCBiIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgY29sb3I6ICNFMEZGMDE7XFxufVxcbiNib2R5LWJhY2tncm91bmQgI2JpbyxcXG4jYm9keS1iYWNrZ3JvdW5kICNqb2tlLFxcbiNib2R5LWJhY2tncm91bmQgI2ZhbWlseSB7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGZvbnQtc2l6ZTogMi41dm1heDtcXG4gIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC44KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2JvZHktYmFja2dyb3VuZCAjYmlvIHNwYW4sXFxuI2JvZHktYmFja2dyb3VuZCAjam9rZSBzcGFuLFxcbiNib2R5LWJhY2tncm91bmQgI2ZhbWlseSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMnZtYXg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG4jYm9keS1iYWNrZ3JvdW5kICNqb2tlLFxcbiNib2R5LWJhY2tncm91bmQgI2ZhbWlseSB7XFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXG59XFxuI2JvZHktYmFja2dyb3VuZCAjam9rZSBwLFxcbiNib2R5LWJhY2tncm91bmQgI2ZhbWlseSBwIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxLjV2bWF4O1xcbiAgcGFkZGluZzogMiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgI2JpbyxcXG4gICNqb2tlLFxcbiAgI2ZhbWlseSB7XFxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM4YzhjICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblwiOyhyZXF1aXJlKCdsZXNzaWZ5JykpKGNzcyk7IG1vZHVsZS5leHBvcnRzID0gY3NzOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcywgY3VzdG9tRG9jdW1lbnQpIHtcbiAgdmFyIGRvYyA9IGN1c3RvbURvY3VtZW50IHx8IGRvY3VtZW50O1xuICBpZiAoZG9jLmNyZWF0ZVN0eWxlU2hlZXQpIHtcbiAgICB2YXIgc2hlZXQgPSBkb2MuY3JlYXRlU3R5bGVTaGVldCgpXG4gICAgc2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICByZXR1cm4gc2hlZXQub3duZXJOb2RlO1xuICB9IGVsc2Uge1xuICAgIHZhciBoZWFkID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgICAgIHN0eWxlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG5cbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmJ5VXJsID0gZnVuY3Rpb24odXJsKSB7XG4gIGlmIChkb2N1bWVudC5jcmVhdGVTdHlsZVNoZWV0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVN0eWxlU2hlZXQodXJsKS5vd25lck5vZGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLFxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gdXJsO1xuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICByZXR1cm4gbGluaztcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnY3NzaWZ5Jyk7XG4iXX0=
