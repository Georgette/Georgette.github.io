(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./styles/main.less')

},{"./styles/main.less":2}],2:[function(require,module,exports){
var css = "body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n#bio {\n  margin: auto;\n  color: #69920d;\n  word-break: break-all;\n  word-wrap: break-word;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  font-weight: bold;\n  padding: 0 5px 5px 5px;\n}\n#bio div {\n  text-align: right;\n}\n#about {\n  position: absolute;\n  top: 70%;\n  right: 50px;\n  font-family: Dancing Script,stalemate, fantasy;\n  color: #87A73D;\n  font-size: 9vmax;\n}\n.petal-group {\n  position: relative;\n  height: 25vmax;\n  width: 25vmax;\n  min-width: 180px;\n  min-height: 160px;\n  margin-left: 10%;\n}\n.petals {\n  background: url(../images/hex-background.svg);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: 8px solid white;\n  box-shadow: 0 0 1px 1px #DCDBD8;\n  font-family: Dancing Script,stalemate, fantasy;\n  width: 14vmax;\n  height: 14vmax;\n  min-width: 100px;\n  min-height: 100px;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n  font-size: 2vmax;\n  position: absolute;\n  display: -webkit-inline-box;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  /* modern Flexbox only */\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  /* legacy Flexbox only */\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n}\n.petals:hover {\n  background-color: #F7EDBD;\n  z-index: 20;\n}\n.petals a {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 1;\n  justify-content: center;\n  color: #423d34;\n  width: 60%;\n  line-height: 7vmax;\n  text-decoration: none;\n}\n.petals a:hover {\n  font-weight: bolder;\n  font-size: 2.5vmax;\n}\n#body-background {\n  background: url(../images/limbs.svg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 0 10%;\n  max-width: 100%;\n  max-height: 100%;\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n}\n.name {\n  font-family: Dancing Script,stalemate, fantasy;\n  text-shadow: 1px 1px #8c8277;\n  color: #69920d;\n  opacity: .8;\n  margin-left: 1em;\n  white-space: nowrap;\n}\n.name span {\n  display: inline-block;\n}\n.name .char1 {\n  -webkit-transform: rotate(-16deg);\n  -moz-transform: rotate(-16deg);\n  -ms-transform: rotate(-16deg);\n  -o-transform: rotate(-16deg);\n  transform: rotate(-16deg);\n  font-size: 24vmax;\n  line-height: 32vmax;\n}\n.name .char2 {\n  font-size: 12vmax;\n  position: relative;\n}\n.name .char3 {\n  font-size: 24vmax;\n  position: relative;\n  line-height: 32vmax;\n  bottom: -13px;\n}\n.name .char4 {\n  -webkit-transform: rotate(-24deg);\n  -moz-transform: rotate(-24deg);\n  -ms-transform: rotate(-24deg);\n  -o-transform: rotate(-24deg);\n  transform: rotate(-24deg);\n  font-size: 12vmax;\n  position: relative;\n}\n#git {\n  background: url(../images/hex-background.svg);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: 8px solid white;\n  box-shadow: 0 0 1px 1px #DCDBD8;\n  font-family: Dancing Script,stalemate, fantasy;\n  width: 14vmax;\n  height: 14vmax;\n  min-width: 100px;\n  min-height: 100px;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n  font-size: 2vmax;\n  position: absolute;\n  display: -webkit-inline-box;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  /* modern Flexbox only */\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  /* legacy Flexbox only */\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\n#git:hover {\n  background-color: #F7EDBD;\n  z-index: 20;\n}\n#git a {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 1;\n  justify-content: center;\n  color: #423d34;\n  width: 60%;\n  line-height: 7vmax;\n  text-decoration: none;\n}\n#git a:hover {\n  font-weight: bolder;\n  font-size: 2.5vmax;\n}\n#git span:first-child {\n  display: none;\n}\n#linkedin {\n  background: url(../images/hex-background.svg);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: 8px solid white;\n  box-shadow: 0 0 1px 1px #DCDBD8;\n  font-family: Dancing Script,stalemate, fantasy;\n  width: 14vmax;\n  height: 14vmax;\n  min-width: 100px;\n  min-height: 100px;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n  font-size: 2vmax;\n  position: absolute;\n  display: -webkit-inline-box;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  /* modern Flexbox only */\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  /* legacy Flexbox only */\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  bottom: 0;\n  left: 4vmax;\n}\n#linkedin:hover {\n  background-color: #F7EDBD;\n  z-index: 20;\n}\n#linkedin a {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 1;\n  justify-content: center;\n  color: #423d34;\n  width: 60%;\n  line-height: 7vmax;\n  text-decoration: none;\n}\n#linkedin a:hover {\n  font-weight: bolder;\n  font-size: 2.5vmax;\n}\n#blog {\n  background: url(../images/hex-background.svg);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: 8px solid white;\n  box-shadow: 0 0 1px 1px #DCDBD8;\n  font-family: Dancing Script,stalemate, fantasy;\n  width: 14vmax;\n  height: 14vmax;\n  min-width: 100px;\n  min-height: 100px;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n  font-size: 2vmax;\n  position: absolute;\n  display: -webkit-inline-box;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  /* modern Flexbox only */\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  /* legacy Flexbox only */\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  top: 0;\n  right: 0;\n}\n#blog:hover {\n  background-color: #F7EDBD;\n  z-index: 20;\n}\n#blog a {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 1;\n  justify-content: center;\n  color: #423d34;\n  width: 60%;\n  line-height: 7vmax;\n  text-decoration: none;\n}\n#blog a:hover {\n  font-weight: bolder;\n  font-size: 2.5vmax;\n}\n@media screen and (max-height: 600px) {\n  #bio {\n    font-size: 13px;\n    width: auto;\n    padding: 5px;\n  }\n  #bio h3 {\n    margin: 0;\n  }\n}\n@media screen and (max-width: 1050px) {\n  #bio {\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n}\n@media screen and (max-width: 600px) and (min-height: 450px) {\n  .petal-group {\n    margin: 30px auto 0 auto;\n    width: 220px;\n    height: 220px;\n  }\n  .name {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    text-align: center;\n  }\n  #blog,\n  #git,\n  #linkedin {\n    min-width: 125px;\n    min-height: 125px;\n  }\n  #linkedin {\n    left: 6vmax;\n  }\n  #bio {\n    width: 100%;\n    font-size: 13px;\n  }\n}\n";(require('lessify'))(css); module.exports = css;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9zdHlsZXMvbWFpbi5sZXNzIiwibm9kZV9tb2R1bGVzL2xlc3NpZnkvbm9kZV9tb2R1bGVzL2Nzc2lmeS9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2xlc3NpZnkvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUoJy4vc3R5bGVzL21haW4ubGVzcycpXG4iLCJ2YXIgY3NzID0gXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI2JpbyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogIzY5OTIwZDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDVweCA1cHggNXB4O1xcbn1cXG4jYmlvIGRpdiB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuI2Fib3V0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNzAlO1xcbiAgcmlnaHQ6IDUwcHg7XFxuICBmb250LWZhbWlseTogRGFuY2luZyBTY3JpcHQsc3RhbGVtYXRlLCBmYW50YXN5O1xcbiAgY29sb3I6ICM4N0E3M0Q7XFxuICBmb250LXNpemU6IDl2bWF4O1xcbn1cXG4ucGV0YWwtZ3JvdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAyNXZtYXg7XFxuICB3aWR0aDogMjV2bWF4O1xcbiAgbWluLXdpZHRoOiAxODBweDtcXG4gIG1pbi1oZWlnaHQ6IDE2MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuLnBldGFscyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2hleC1iYWNrZ3JvdW5kLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjRENEQkQ4O1xcbiAgZm9udC1mYW1pbHk6IERhbmNpbmcgU2NyaXB0LHN0YWxlbWF0ZSwgZmFudGFzeTtcXG4gIHdpZHRoOiAxNHZtYXg7XFxuICBoZWlnaHQ6IDE0dm1heDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDJ2bWF4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgZGlzcGxheTogLW1vei1pbmxpbmUtYm94O1xcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogbW9kZXJuIEZsZXhib3ggb25seSAqL1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBsZWdhY3kgRmxleGJveCBvbmx5ICovXFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxufVxcbi5wZXRhbHM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RURCRDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG4ucGV0YWxzIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogIzQyM2QzNDtcXG4gIHdpZHRoOiA2MCU7XFxuICBsaW5lLWhlaWdodDogN3ZtYXg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5wZXRhbHMgYTpob3ZlciB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAyLjV2bWF4O1xcbn1cXG4jYm9keS1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvbGltYnMuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogMCAxMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubmFtZSB7XFxuICBmb250LWZhbWlseTogRGFuY2luZyBTY3JpcHQsc3RhbGVtYXRlLCBmYW50YXN5O1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzhjODI3NztcXG4gIGNvbG9yOiAjNjk5MjBkO1xcbiAgb3BhY2l0eTogLjg7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm5hbWUgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5uYW1lIC5jaGFyMSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE2ZGVnKTtcXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpO1xcbiAgZm9udC1zaXplOiAyNHZtYXg7XFxuICBsaW5lLWhlaWdodDogMzJ2bWF4O1xcbn1cXG4ubmFtZSAuY2hhcjIge1xcbiAgZm9udC1zaXplOiAxMnZtYXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5uYW1lIC5jaGFyMyB7XFxuICBmb250LXNpemU6IDI0dm1heDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAzMnZtYXg7XFxuICBib3R0b206IC0xM3B4O1xcbn1cXG4ubmFtZSAuY2hhcjQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMjRkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMjRkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0yNGRlZyk7XFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMjRkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI0ZGVnKTtcXG4gIGZvbnQtc2l6ZTogMTJ2bWF4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jZ2l0IHtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvaGV4LWJhY2tncm91bmQuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBib3JkZXI6IDhweCBzb2xpZCB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNEQ0RCRDg7XFxuICBmb250LWZhbWlseTogRGFuY2luZyBTY3JpcHQsc3RhbGVtYXRlLCBmYW50YXN5O1xcbiAgd2lkdGg6IDE0dm1heDtcXG4gIGhlaWdodDogMTR2bWF4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMnZtYXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBtb2Rlcm4gRmxleGJveCBvbmx5ICovXFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGxlZ2FjeSBGbGV4Ym94IG9ubHkgKi9cXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuI2dpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdFREJEO1xcbiAgei1pbmRleDogMjA7XFxufVxcbiNnaXQgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiAjNDIzZDM0O1xcbiAgd2lkdGg6IDYwJTtcXG4gIGxpbmUtaGVpZ2h0OiA3dm1heDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuI2dpdCBhOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDIuNXZtYXg7XFxufVxcbiNnaXQgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jbGlua2VkaW4ge1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9oZXgtYmFja2dyb3VuZC5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI0RDREJEODtcXG4gIGZvbnQtZmFtaWx5OiBEYW5jaW5nIFNjcmlwdCxzdGFsZW1hdGUsIGZhbnRhc3k7XFxuICB3aWR0aDogMTR2bWF4O1xcbiAgaGVpZ2h0OiAxNHZtYXg7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAydm1heDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXG4gIGRpc3BsYXk6IC1tb3otaW5saW5lLWJveDtcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIG1vZGVybiBGbGV4Ym94IG9ubHkgKi9cXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogbGVnYWN5IEZsZXhib3ggb25seSAqL1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNHZtYXg7XFxufVxcbiNsaW5rZWRpbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdFREJEO1xcbiAgei1pbmRleDogMjA7XFxufVxcbiNsaW5rZWRpbiBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmbGV4LXNocmluazogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6ICM0MjNkMzQ7XFxuICB3aWR0aDogNjAlO1xcbiAgbGluZS1oZWlnaHQ6IDd2bWF4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4jbGlua2VkaW4gYTpob3ZlciB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAyLjV2bWF4O1xcbn1cXG4jYmxvZyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2hleC1iYWNrZ3JvdW5kLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjRENEQkQ4O1xcbiAgZm9udC1mYW1pbHk6IERhbmNpbmcgU2NyaXB0LHN0YWxlbWF0ZSwgZmFudGFzeTtcXG4gIHdpZHRoOiAxNHZtYXg7XFxuICBoZWlnaHQ6IDE0dm1heDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDJ2bWF4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgZGlzcGxheTogLW1vei1pbmxpbmUtYm94O1xcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogbW9kZXJuIEZsZXhib3ggb25seSAqL1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBsZWdhY3kgRmxleGJveCBvbmx5ICovXFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG59XFxuI2Jsb2c6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RURCRDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG4jYmxvZyBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmbGV4LXNocmluazogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6ICM0MjNkMzQ7XFxuICB3aWR0aDogNjAlO1xcbiAgbGluZS1oZWlnaHQ6IDd2bWF4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4jYmxvZyBhOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDIuNXZtYXg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkge1xcbiAgI2JpbyB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gICNiaW8gaDMge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcbiAgI2JpbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogNDUwcHgpIHtcXG4gIC5wZXRhbC1ncm91cCB7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgfVxcbiAgLm5hbWUge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgI2Jsb2csXFxuICAjZ2l0LFxcbiAgI2xpbmtlZGluIHtcXG4gICAgbWluLXdpZHRoOiAxMjVweDtcXG4gICAgbWluLWhlaWdodDogMTI1cHg7XFxuICB9XFxuICAjbGlua2VkaW4ge1xcbiAgICBsZWZ0OiA2dm1heDtcXG4gIH1cXG4gICNiaW8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgfVxcbn1cXG5cIjsocmVxdWlyZSgnbGVzc2lmeScpKShjc3MpOyBtb2R1bGUuZXhwb3J0cyA9IGNzczsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MsIGN1c3RvbURvY3VtZW50KSB7XG4gIHZhciBkb2MgPSBjdXN0b21Eb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgaWYgKGRvYy5jcmVhdGVTdHlsZVNoZWV0KSB7XG4gICAgdmFyIHNoZWV0ID0gZG9jLmNyZWF0ZVN0eWxlU2hlZXQoKVxuICAgIHNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgcmV0dXJuIHNoZWV0Lm93bmVyTm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLFxuICAgICAgICBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5ieVVybCA9IGZ1bmN0aW9uKHVybCkge1xuICBpZiAoZG9jdW1lbnQuY3JlYXRlU3R5bGVTaGVldCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVTdHlsZVNoZWV0KHVybCkub3duZXJOb2RlO1xuICB9IGVsc2Uge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgcmV0dXJuIGxpbms7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2Nzc2lmeScpO1xuIl19
