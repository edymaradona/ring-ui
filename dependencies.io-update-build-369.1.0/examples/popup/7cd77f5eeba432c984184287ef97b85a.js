!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1046)}({10:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var r=t(68),i=o(r),s=t(65),a=o(s),u=t(63),c=o(u),l=t(21),f=o(l);e.default=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));n.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(a.default?(0,a.default)(n,e):(0,i.default)(n,e))}},100:function(n,e,t){t(207),n.exports=t(8).Object.keys},102:function(n,e,t){"use strict";function o(){var n=void 0,e=void 0;return function(t){n=t,e||(e=window.requestAnimationFrame(function(){n(),e=null,n=null}))}}e.a=o},103:function(n,e,t){t(19),t(104),n.exports=t(8).Array.from},104:function(n,e,t){n.exports=t(2)(463)},1046:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(3),r=t.n(o),i=t(22),s=(t.n(i),t(205)),a=r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"anchor"},"Popup anchor",r.a.createElement(s.a,null,"Popup content"))));t.i(i.render)(a,document.getElementById("example"))},11:function(n,e,t){"use strict";e.__esModule=!0;var o=t(21),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,r.default)(e))&&"function"!=typeof e?n:e}},115:function(n,e,t){t(24),t(19),t(20),t(196),t(199),t(198),t(197),n.exports=t(8).Set},12:function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var s=n[r];"number"==typeof s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},13:function(n,e,t){n.exports=t(2)(396)},14:function(n,e,t){"use strict";e.__esModule=!0;var o=t(23),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=r.default||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}},15:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},17:function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=g[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],e))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(f(o.parts[i],e));g[o.id]={id:o.id,refs:1,parts:s}}}}function r(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],s=e.base?i[0]+e.base:i[0],a=i[1],u=i[2],c=i[3],l={css:a,media:u,sourceMap:c};o[s]?o[s].parts.push(l):t.push(o[s]={id:s,parts:[l]})}return t}function i(n,e){var t=b(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),x.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=b(n.insertAt.before,t);t.insertBefore(e,r)}}function s(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function a(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=l();t&&(n.attrs.nonce=t)}return c(e,n.attrs),i(n,e),e}function u(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",c(e,n.attrs),i(n,e),e}function c(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function l(){return t.nc}function f(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var c=y++;t=_||(_=a(e)),o=p.bind(null,t,c,!1),r=p.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=u(e),o=h.bind(null,t,e),r=function(){s(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(e),o=d.bind(null,t),r=function(){s(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function p(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=O(e,r);else{var i=document.createTextNode(r),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function d(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function h(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=T(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var g={},v=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},b=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=m.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),_=null,y=0,x=[],T=t(60);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return o(t,e),function(n){for(var i=[],s=0;s<t.length;s++){var a=t[s],u=g[a.id];u.refs--,i.push(u)}n&&o(r(n,e),e);for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete g[u.id]}}}};var O=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},18:function(n,e,t){"use strict";e.__esModule=!0;var o=t(26),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(n,e,t){return e in n?(0,r.default)(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},19:function(n,e,t){n.exports=t(2)(566)},196:function(n,e,t){n.exports=t(2)(225)},197:function(n,e,t){n.exports=t(2)(629)},198:function(n,e,t){n.exports=t(2)(630)},199:function(n,e,t){n.exports=t(2)(631)},2:function(n,e){n.exports=vendor_lib},20:function(n,e,t){n.exports=t(2)(645)},200:function(n,e,t){n.exports=t(2)(818)},205:function(n,e,t){"use strict";var o=t(18),r=t.n(o),i=t(84),s=t.n(i),a=t(14),u=t.n(a),c=t(9),l=t.n(c),f=t(4),p=t.n(f),d=t(5),h=t.n(d),g=t(11),v=t.n(g),m=t(10),b=t.n(m),_=t(3),y=t.n(_),x=t(22),T=(t.n(x),t(6)),O=t.n(T),w=t(13),E=t.n(w),M=t(33),k=(t.n(M),t(59)),C=(t.n(k),t(36)),R=t(102),S=t(34),P=t(55),H=t(25),L=t(208),I=t(254),A=t.n(I),N=function(n){return n.stopPropagation()},B=function(n){function e(){var n,o,r,i;p()(this,e);for(var a=arguments.length,c=Array(a),f=0;f<a;f++)c[f]=arguments[f];return o=r=v()(this,(n=e.__proto__||l()(e)).call.apply(n,[this].concat(c))),r.state={shortcuts:r.props.shortcuts&&!r.props.hidden,display:L.a.SHOWING},r.listeners=new S.c,r.redrawScheduler=t.i(R.a)(),r.uid=t.i(C.a)("popup-"),r.calculateDisplay=function(n){return u()({},n,{display:r.props.hidden?L.a.SHOWING:L.a.SHOWN})},r.portalRef=function(n){r.node=n,r.parent=n&&n.parentElement,n&&r.getContainer()&&r._redraw()},r.popupRef=function(n){r.popup=n,r._redraw()},r.containerRef=function(n){r.container=n},r._updatePosition=function(){if(r.popup){if(r.isVisible()){var n=r.position();s()(n).forEach(function(e){var t=n[e];r.popup.style[e]="number"==typeof t?t+"px":t.toString()})}r.setState(r.calculateDisplay)}},r._redraw=function(){r.isVisible()&&r.redrawScheduler(r._updatePosition)},r._onEscPress=function(n){r.props.onEscPress(n),r._onCloseAttempt(n,!0)},r._onDocumentClick=function(n){r.container&&r.container.contains(n.target)||!r._listenersEnabled||r.props.dontCloseOnAnchorClick&&r._getAnchor()&&r._getAnchor().contains(n.target)||(r.props.onOutsideClick(n),r._onCloseAttempt(n,!1))},r.shortcutsScope=r.uid,r.shortcutsMap={esc:r._onEscPress},i=o,v()(r,i)}return b()(e,n),h()(e,[{key:"getChildContext",value:function(){return{ringPopupTarget:this.uid}}},{key:"componentDidMount",value:function(){this.setState({client:!0}),this.props.hidden||this._setListenersEnabled(!0)}},{key:"componentWillUpdate",value:function(n){var e=n.shortcuts&&!n.hidden;this.state.shortcuts!==e&&this.setState({shortcuts:e})}},{key:"componentDidUpdate",value:function(n){if(this.props!==n){var e=this.props.hidden;n.hidden!==e&&this._setListenersEnabled(!e),this._redraw()}}},{key:"componentWillUnmount",value:function(){this._setListenersEnabled(!1),this.popup=null}},{key:"getContainer",value:function(){var n=this.props.target||this.context.ringPopupTarget;return n&&document.querySelector("[data-portaltarget="+n+"]")}},{key:"position",value:function(){var n=this,e=L.b.reduce(function(e,t){return e[t]=n.props[t],e},{}),o=this.getContainer();return t.i(L.c)(u()({popup:this.popup,container:o&&"static"!==t.i(S.d)(o).position?o:null,anchor:this._getAnchor()},e))}},{key:"_getAnchor",value:function(){return this.props.anchorElement||this.parent}},{key:"_setListenersEnabled",value:function(n){var e=this;if(n&&!this._listenersEnabled)return void setTimeout(function(){e._listenersEnabled=!0,e.listeners.add(window,"resize",e._redraw),e.listeners.add(window,"scroll",e._redraw),e.listeners.add(document,"click",e._onDocumentClick);for(var n=e._getAnchor();n;)e.listeners.add(n,"scroll",e._redraw),n=n.parentElement},0);!n&&this._listenersEnabled&&(this.listeners.removeAll(),this._listenersEnabled=!1)}},{key:"isVisible",value:function(){return!this.props.hidden}},{key:"_onCloseAttempt",value:function(n,e){this.props.onCloseAttempt(n,e)}},{key:"getInternalContent",value:function(){return this.props.children}},{key:"render",value:function(){var n,e=this.props,o=e.className,i=e.style,s=e.hidden,a=e.attached,u=e.keepMounted,c=e.onMouseDown,l=e.onMouseUp,f=e.onMouseOver,p=e.onMouseOut,d=e.onContextMenu,h=e["data-test"],g=this.state.display===L.a.SHOWING,v=E()(o,A.a.popup,(n={},r()(n,A.a.attached,a),r()(n,A.a.hidden,s),r()(n,A.a.showing,g),n));return y.a.createElement("span",{onClick:N,ref:this.portalRef},this.state.shortcuts&&y.a.createElement(P.a,{map:this.shortcutsMap,scope:this.shortcutsScope}),this.state.client&&(u||!s)&&t.i(x.createPortal)(y.a.createElement("div",{"data-portaltarget":this.uid,ref:this.containerRef,onMouseOver:f,onMouseOut:p,onContextMenu:d},y.a.createElement("div",{"data-test":t.i(H.a)("ring-popup",h),"data-test-shown":!s&&!g,ref:this.popupRef,className:v,style:i,onMouseDown:c,onMouseUp:l},this.getInternalContent())),this.getContainer()||document.body))}}]),e}(_.Component);B.PopupProps={Directions:L.d,Dimension:L.e,MinWidth:L.f,MaxHeight:L.g},B.propTypes={anchorElement:O.a.instanceOf(Node),target:O.a.string,className:O.a.string,style:O.a.object,hidden:O.a.bool.isRequired,onOutsideClick:O.a.func,onEscPress:O.a.func,onCloseAttempt:O.a.func,children:O.a.oneOfType([O.a.arrayOf(O.a.node),O.a.node]),dontCloseOnAnchorClick:O.a.bool,shortcuts:O.a.bool,keepMounted:O.a.bool,"data-test":O.a.string,directions:O.a.arrayOf(O.a.string),autoPositioning:O.a.bool,autoCorrectTopOverflow:O.a.bool,left:O.a.number,top:O.a.number,maxHeight:O.a.number,minWidth:O.a.number,sidePadding:O.a.number,attached:O.a.bool,onMouseDown:O.a.func,onMouseUp:O.a.func,onMouseOver:O.a.func,onMouseOut:O.a.func,onContextMenu:O.a.func},B.contextTypes={ringPopupTarget:O.a.string},B.childContextTypes={ringPopupTarget:O.a.string},B.defaultProps={shortcuts:!0,hidden:!1,onOutsideClick:function(){},onEscPress:function(){},onCloseAttempt:function(){},dontCloseOnAnchorClick:!1,keepMounted:!1,directions:L.h,autoPositioning:!0,autoCorrectTopOverflow:!0,left:0,top:0,offset:0,sidePadding:8,attached:!1,legacy:!1},e.a=B},207:function(n,e,t){n.exports=t(2)(525)},208:function(n,e,t){"use strict";function o(n){return null!==n?{top:n.scrollTop,left:n.scrollLeft}:{top:t.i(h.e)(),left:t.i(h.f)()}}function r(n,e,t,o,r){var i,s=n.clientWidth,a=n.clientHeight,u=o+e.height,c=t+e.width,l=t-s,p=o-a,d=c-s,h=t+e.width/2-s/2,v=o+e.height/2-a/2,m=u-a;return i={},f()(i,g.BOTTOM_RIGHT,{left:t,top:u+r}),f()(i,g.BOTTOM_LEFT,{left:d,top:u+r}),f()(i,g.BOTTOM_CENTER,{left:h,top:u+r}),f()(i,g.TOP_RIGHT,{left:t,top:p-r}),f()(i,g.TOP_LEFT,{left:d,top:p-r}),f()(i,g.TOP_CENTER,{left:h,top:p-r}),f()(i,g.LEFT_BOTTOM,{left:l-r,top:o}),f()(i,g.LEFT_TOP,{left:l-r,top:m}),f()(i,g.LEFT_CENTER,{left:l-r,top:v}),f()(i,g.RIGHT_BOTTOM,{left:c+r,top:o}),f()(i,g.RIGHT_TOP,{left:c+r,top:m}),f()(i,g.RIGHT_CENTER,{left:c+r,top:v}),i}function i(n,e,o){var r=null!==o.container?o.container.clientHeight:t.i(h.g)(),i=e.top+o.sidePadding,s=e.top+r-o.sidePadding,a=Math.max(i-n.top,0),u=o.popup.clientHeight,c=n.top+u-s;return a+Math.max(c,0)}function s(n,e,t){var o=null!==t.container?t.container.clientWidth:window.innerWidth,r=e.left+t.sidePadding,i=e.left+o-t.sidePadding,s=Math.max(r-n.left,0),a=t.popup.clientWidth,u=n.left+a-i;return s+Math.max(u,0)}function a(n){var e=n.sidePadding,t=n.styles,o=n.anchorRect,r=n.maxHeight,i=n.popupScrollHeight,s=n.direction,a=g.TOP_LEFT,u=g.TOP_RIGHT,c=g.TOP_CENTER;if(![a,u,c,g.RIGHT_TOP,g.LEFT_TOP].includes(s))return t;var l=[a,c,u].includes(s),f=l?o.top:o.bottom;return f-(r?Math.min(i,r):i)<=e&&(t.top=e,t.maxHeight=f-e+1),t}function u(n,e,t){t=t||document.documentElement;var o=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.max(o.top-r.top,0),s=Math.max(r.height,t===document.documentElement?t.clientHeight:0),a=Math.max(s-(i+o.height),0);switch(n){case g.TOP_LEFT:case g.TOP_CENTER:case g.TOP_RIGHT:return i;case g.BOTTOM_LEFT:case g.BOTTOM_CENTER:case g.BOTTOM_RIGHT:case g.LEFT_BOTTOM:case g.RIGHT_BOTTOM:return a;case g.LEFT_TOP:case g.RIGHT_TOP:return o.height+a;case g.RIGHT_CENTER:case g.LEFT_CENTER:return o.height/2+a;default:return null}}function c(n){var e=n.popup,u=n.anchor,c=n.container,l=n.directions,f=n.autoPositioning,p=n.sidePadding,d=n.top,g=n.left,v=n.offset,y=n.maxHeight,x=n.minWidth,O=n.autoCorrectTopOverflow,w=void 0===O||O,E={top:0,left:0},M=null,k=null!==c?t.i(h.a)(c):T,C=null!==c?c:document.body,R=t.i(h.a)(t.i(h.h)(u)?u:C),S=o(c),P=R.left+S.left+g-k.left,H=R.top+S.top+d-k.top;if(e){var L=r(e,R,P,H,v);if(f&&1!==l.length){var I=l.concat(l[0]).filter(function(n){return L[n]}).map(function(n){return{styles:L[n],direction:n}}).sort(function(e,t){var o=e.styles,r=t.styles;return i(o,S,n)+s(o,S,n)-(i(r,S,n)+s(r,S,n))});E=I[0].styles,M=I[0].direction}else E=L[l[0]],M=l[0]}return y===_.SCREEN||"screen"===y?E.maxHeight=window.innerHeight+S.top-E.top-m.MARGIN:y&&(E.maxHeight=y),w&&(E=a({sidePadding:p,styles:E,anchorRect:R,maxHeight:y,direction:M,popupScrollHeight:e.scrollHeight})),x===b.TARGET||"target"===x?E.minWidth=R.width:x&&(E.minWidth=R.width<x?x:R.width),E}t.d(e,"d",function(){return g}),t.d(e,"h",function(){return v}),t.d(e,"e",function(){return m}),t.d(e,"f",function(){return b}),t.d(e,"g",function(){return _}),t.d(e,"a",function(){return y}),t.d(e,"b",function(){return x}),e.i=u,e.c=c;var l=t(18),f=t.n(l),p=t(33),d=(t.n(p),t(59)),h=(t.n(d),t(34)),g={BOTTOM_RIGHT:"BOTTOM_RIGHT",BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_CENTER:"BOTTOM_CENTER",TOP_LEFT:"TOP_LEFT",TOP_RIGHT:"TOP_RIGHT",TOP_CENTER:"TOP_CENTER",RIGHT_TOP:"RIGHT_TOP",RIGHT_BOTTOM:"RIGHT_BOTTOM",RIGHT_CENTER:"RIGHT_CENTER",LEFT_TOP:"LEFT_TOP",LEFT_BOTTOM:"LEFT_BOTTOM",LEFT_CENTER:"LEFT_CENTER"},v=[g.BOTTOM_RIGHT,g.BOTTOM_LEFT,g.TOP_LEFT,g.TOP_RIGHT,g.RIGHT_TOP,g.RIGHT_BOTTOM,g.LEFT_TOP,g.LEFT_BOTTOM],m={MARGIN:16,BORDER_WIDTH:1},b={TARGET:-1},_={SCREEN:-1},y={HIDDEN:0,SHOWING:1,SHOWN:2},x=["directions","autoPositioning","autoCorrectTopOverflow","sidePadding","top","left","offset","maxHeight","minWidth"],T={top:0,left:0}},21:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var r=t(67),i=o(r),s=t(66),a=o(s),u="function"==typeof a.default&&"symbol"==typeof i.default?function(n){return typeof n}:function(n){return n&&"function"==typeof a.default&&n.constructor===a.default&&n!==a.default.prototype?"symbol":typeof n};e.default="function"==typeof a.default&&"symbol"===u(i.default)?function(n){return void 0===n?"undefined":u(n)}:function(n){return n&&"function"==typeof a.default&&n.constructor===a.default&&n!==a.default.prototype?"symbol":void 0===n?"undefined":u(n)}},219:function(n,e,t){"use strict";var o=t(21),r=t.n(o),i=t(23),s=t.n(i),a=t(4),u=t.n(a),c=t(5),l=t.n(c),f=t(223),p=(t.n(f),t(33)),d=(t.n(p),t(222)),h=t.n(d),g=t(40),v=function(){function n(){var e=this;u()(this,n),this.ALLOW_SHORTCUTS_SELECTOR=".ring-js-shortcuts",this.ROOT_SCOPE={scopeId:"ROOT",options:{}},this._scopes={},this.combokeys=new h.a(document.documentElement),this.trigger=function(n){return e.combokeys.trigger(n)},this._dispatcher=function(n,t){for(var o=void 0,r=e._scopeChain.length-1;r>=0;r--){var i=e._scopeChain[r];if((o=e._scopes[i.scopeId])&&o[t]){var s=o[t](n,t,i.scopeId);if(!0!==s)return s}if(i.options.modal)return!0}},this._defaultFilter=function(n,t){return t!==document&&!t.matches(e.ALLOW_SHORTCUTS_SELECTOR)&&!t.closest(e.ALLOW_SHORTCUTS_SELECTOR)&&(t.matches("input,select,textarea")||t.contentEditable&&"true"===t.contentEditable)},this.setFilter(),this.setScope()}return l()(n,[{key:"bind",value:function(n){if(!(n instanceof Object)||"function"!=typeof n.handler)throw new Error("Shortcut handler should exist");if(n.scope||(n.scope=this.ROOT_SCOPE.scopeId),Array.isArray(n.key))for(var e=0;e<n.key.length;e++)this.bind(s()({},n,{key:n.key[e]}));else{if("string"!=typeof n.key)throw new Error("Shortcut key should exist");this._scopes[n.scope]||(this._scopes[n.scope]={}),this._scopes[n.scope][n.key]=n.handler,this.combokeys.bind(n.key,this._dispatcher,this._getKeyboardEventType(n))}}},{key:"bindMap",value:function(n,e){if(!(n instanceof Object))throw new Error("Shortcuts map shouldn't be empty");for(var t in n)n.hasOwnProperty(t)&&this.bind(s()({},e||{},{key:t,handler:n[t]}))}},{key:"unbindScope",value:function(n){this._scopes[n]=null}},{key:"getScope",value:function(){return this._scopeChain.slice(1)}},{key:"hasScope",value:function(n){return-1!==this.indexOfScope(n)}},{key:"pushScope",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n){var t=this.indexOfScope(n);-1!==t&&this._scopeChain.splice(t,1),this._scopeChain.push(this.wrapScope(n,e))}}},{key:"popScope",value:function(n){if(n){var e=this.indexOfScope(n);if(-1!==e)return this._scopeChain.splice(e,this._scopeChain.length-1)}}},{key:"spliceScope",value:function(n){if(n){var e=this.indexOfScope(n);-1!==e&&this._scopeChain.splice(e,1)}}},{key:"setScope",value:function(n){var e=this;if(n){var t=void 0;if(t="string"==typeof n||!Array.isArray(n)&&"object"===(void 0===n?"undefined":r()(n))&&null!==n?[n]:n,!Array.isArray(t))return;t=t.map(function(n){return"string"==typeof n?e.wrapScope(n):n}),this._scopeChain=[this.ROOT_SCOPE].concat(t)}else this._scopeChain=[this.ROOT_SCOPE]}},{key:"wrapScope",value:function(n){return{scopeId:n,options:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}}}},{key:"hasKey",value:function(n,e){return!(!this._scopes[e]||!this._scopes[e][n])}},{key:"_getKeyboardEventType",value:function(n){return!n.type&&"windows"===g.a.os.name&&n.key.match(/ctrl/i)&&n.key.match(/shift/i)&&n.key.match(/[0-9]/)?"keyup":n.type}},{key:"setFilter",value:function(n){this.combokeys.stopCallback="function"==typeof n?n:this._defaultFilter}},{key:"indexOfScope",value:function(n){return this._scopeChain.findIndex(function(e){return e.scopeId===n})}},{key:"reset",value:function(){this._scopes={},this.setScope(),this.combokeys.reset()}}]),n}();e.a=new v},22:function(n,e,t){n.exports=t(2)(402)},222:function(n,e,t){n.exports=t(2)(397)},223:function(n,e,t){n.exports=t(2)(670)},23:function(n,e,t){n.exports={default:t(44),__esModule:!0}},24:function(n,e,t){n.exports=t(2)(529)},25:function(n,e,t){"use strict";function o(n){return p()(n).reduce(function(n,e){var t=l()(e,2),o=t[0];return t[1]?[].concat(u()(n),[o]):n},[])}function r(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(function(n){return!!n}).reduce(function(n,e){return"object"===(void 0===e?"undefined":s()(e))?[].concat(u()(n),u()(o(e))):[].concat(u()(n),[e])},[]).join(" ")}e.a=r;var i=t(21),s=t.n(i),a=t(62),u=t.n(a),c=t(28),l=t.n(c),f=t(35),p=t.n(f)},253:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.i(t(7),void 0),e.push([n.i,".popup_b24 {\n\n  position: absolute;\n  z-index: 5;\n  z-index: var(--ring-overlay-z-index);\n  top: -100vh;\n  left: -100vw;\n\n  overflow-y: auto;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n\n  border: 1px solid rgba(0, 42, 76, .1);\n\n  border: 1px solid var(--ring-popup-border-color);\n  border-radius: 3px;\n  border-radius: var(--ring-border-radius);\n\n  background-color: #fff;\n\n  background-color: var(--ring-content-background-color);\n  -webkit-box-shadow: 0 2px 16px 0 rgba(0, 42, 76, .15);\n          box-shadow: 0 2px 16px 0 rgba(0, 42, 76, .15);\n  -webkit-box-shadow: 0 2px 16px 0 var(--ring-popup-shadow-color);\n          box-shadow: 0 2px 16px 0 var(--ring-popup-shadow-color);\n}\n\n.hidden_2b7 {\n  display: none;\n}\n\n.showing_152 {\n  opacity: 0;\n}\n\n.attached_ebc {\n  border-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n",""]),e.locals={popup:"popup_b24 "+t(7).locals.font,hidden:"hidden_2b7",showing:"showing_152",attached:"attached_ebc"}},254:function(n,e,t){var o=t(253);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(17)(o,r),o.locals&&(n.exports=o.locals)},26:function(n,e,t){n.exports={default:t(43),__esModule:!0}},28:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var r=t(93),i=o(r),s=t(86),a=o(s);e.default=function(){function n(n,e){var t=[],o=!0,r=!1,i=void 0;try{for(var s,u=(0,a.default)(n);!(o=(s=u.next()).done)&&(t.push(s.value),!e||t.length!==e);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return t}return function(e,t){if(Array.isArray(e))return e;if((0,i.default)(Object(e)))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},3:function(n,e,t){n.exports=t(2)(128)},33:function(n,e,t){n.exports=t(2)(400)},34:function(n,e,t){"use strict";function o(n){return n===document||n instanceof Node&&document.documentElement.contains(n.parentNode)}function r(n){if(n instanceof Range||o(n)){var e=n.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}return b()({},x)}function i(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function s(){return window.innerHeight}function a(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function u(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function c(n){n.preventDefault&&n.preventDefault()}t.d(e,"d",function(){return y}),e.h=o,e.a=r,e.b=i,e.g=s,e.e=a,e.f=u,t.d(e,"l",function(){return T}),t.d(e,"j",function(){return O}),t.d(e,"k",function(){return w}),t.d(e,"c",function(){return E}),e.i=c;var l=t(99),f=t.n(l),p=t(4),d=t.n(p),h=t(5),g=t.n(h),v=t(35),m=(t.n(v),t(23)),b=t.n(m),_=t(200),y=(t.n(_),window.getComputedStyle.bind(window)),x={top:0,right:0,bottom:0,left:0,width:0,height:0},T=function(n){return function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/g).forEach(function(t){return e[n](t)})}},O=T("add"),w=T("remove"),E=function(){function n(){d()(this,n),this._all=new f.a}return g()(n,[{key:"add",value:function(n,e,t,o){n.addEventListener(e,t,o);var r=function(){return n.removeEventListener(e,t,o)};return this._all.add(r),r}},{key:"remove",value:function(n){n(),this._all.delete(n)}},{key:"removeAll",value:function(){var n=this;this._all.forEach(function(e){return n.remove(e)})}}]),n}()},35:function(n,e,t){n.exports={default:t(88),__esModule:!0}},36:function(n,e,t){"use strict";function o(n){if(!n)throw Error('Argument "name" is required in getUID()');return r[n]||(r[n]=0),n+String(r[n]++)}e.a=o;var r={}},4:function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},40:function(n,e,t){"use strict";var o=t(92),r=t.n(o),i=new r.a;i.sniff(),e.a=i},43:function(n,e,t){t(61);var o=t(8).Object;n.exports=function(n,e,t){return o.defineProperty(n,e,t)}},44:function(n,e,t){t(71),n.exports=t(8).Object.assign},45:function(n,e,t){t(72);var o=t(8).Object;n.exports=function(n,e){return o.create(n,e)}},46:function(n,e,t){t(73);var o=t(8).Object;n.exports=function(n,e){return o.getOwnPropertyDescriptor(n,e)}},47:function(n,e,t){t(75),n.exports=t(8).Object.getPrototypeOf},48:function(n,e,t){t(76),n.exports=t(8).Object.setPrototypeOf},49:function(n,e,t){t(77),t(24),t(78),t(79),n.exports=t(8).Symbol},5:function(n,e,t){"use strict";e.__esModule=!0;var o=t(26),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}()},50:function(n,e,t){t(19),t(20),n.exports=t(70).f("iterator")},53:function(n,e,t){n.exports={default:t(46),__esModule:!0}},55:function(n,e,t){"use strict";var o=t(9),r=t.n(o),i=t(4),s=t.n(i),a=t(5),u=t.n(a),c=t(11),l=t.n(c),f=t(10),p=t.n(f),d=t(3),h=(t.n(d),t(6)),g=t.n(h),v=t(219),m=function(n){function e(){return s()(this,e),l()(this,(e.__proto__||r()(e)).apply(this,arguments))}return p()(e,n),u()(e,[{key:"componentWillMount",value:function(){var n=this.props,e=n.map,t=n.scope,o=n.options;v.a.bindMap(e,this.props),v.a.pushScope(t,o)}},{key:"componentWillUnmount",value:function(){var n=this.props.scope;v.a.unbindScope(n),v.a.spliceScope(n)}},{key:"render",value:function(){return this.props.children||null}}]),e}(d.Component);m.propTypes={map:g.a.object.isRequired,scope:g.a.string.isRequired,options:g.a.object,children:g.a.node},m.defaultProps={options:{}},e.a=m},59:function(n,e,t){n.exports=t(2)(797)},6:function(n,e,t){n.exports=t(2)(187)},60:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},61:function(n,e,t){n.exports=t(2)(516)},62:function(n,e,t){"use strict";e.__esModule=!0;var o=t(98),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return(0,r.default)(n)}},63:function(n,e,t){n.exports={default:t(45),__esModule:!0}},64:function(n,e,t){n.exports={default:t(69),__esModule:!0}},65:function(n,e,t){n.exports={default:t(48),__esModule:!0}},66:function(n,e,t){n.exports={default:t(49),__esModule:!0}},67:function(n,e,t){n.exports={default:t(50),__esModule:!0}},68:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var r=t(26),i=o(r),s=t(53),a=o(s),u=t(64),c=o(u);e.default=function(n,e){for(var t=(0,c.default)(e),o=0;o<t.length;o++){var r=t[o],s=(0,a.default)(e,r);s&&s.configurable&&void 0===n[r]&&(0,i.default)(n,r,s)}return n}},69:function(n,e,t){t(74);var o=t(8).Object;n.exports=function(n){return o.getOwnPropertyNames(n)}},7:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},70:function(n,e,t){n.exports=t(2)(222)},71:function(n,e,t){n.exports=t(2)(513)},72:function(n,e,t){n.exports=t(2)(514)},73:function(n,e,t){n.exports=t(2)(518)},74:function(n,e,t){n.exports=t(2)(519)},75:function(n,e,t){n.exports=t(2)(520)},76:function(n,e,t){n.exports=t(2)(528)},77:function(n,e,t){n.exports=t(2)(576)},78:function(n,e,t){n.exports=t(2)(638)},79:function(n,e,t){n.exports=t(2)(639)},8:function(n,e,t){n.exports=t(2)(24)},84:function(n,e,t){n.exports={default:t(100),__esModule:!0}},86:function(n,e,t){n.exports={default:t(87),__esModule:!0}},87:function(n,e,t){t(20),t(19),n.exports=t(89)},88:function(n,e,t){t(90),n.exports=t(8).Object.entries},89:function(n,e,t){n.exports=t(2)(447)},9:function(n,e,t){n.exports={default:t(47),__esModule:!0}},90:function(n,e,t){n.exports=t(2)(612)},92:function(n,e,t){n.exports=t(2)(405)},93:function(n,e,t){n.exports={default:t(95),__esModule:!0}},95:function(n,e,t){t(20),t(19),n.exports=t(96)},96:function(n,e,t){n.exports=t(2)(223)},98:function(n,e,t){n.exports={default:t(103),__esModule:!0}},99:function(n,e,t){n.exports={default:t(115),__esModule:!0}}});