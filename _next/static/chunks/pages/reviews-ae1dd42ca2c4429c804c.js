(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),i=t(4651),u=t(7426);var s={};function l(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,v=f.as,p=e.children,h=e.replace,y=e.shallow,_=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,b=u.useIntersection({rootMargin:"200px"}),w=r(b,2),g=w[0],j=w[1],E=a.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);a.default.useEffect((function(){var e=j&&t&&c.isLocalURL(d),n="undefined"!==typeof m?m:o&&o.locale,r=s[d+"%"+v+(n?"%"+n:"")];e&&!r&&l(o,d,v,{locale:n})}),[v,d,j,m,t,o]);var L={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:u,scroll:i}))}(e,o,d,v,h,y,_,m)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,d,v,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof m?m:o&&o.locale,M=o&&o.isLocaleDomain&&c.getDomainLocale(v,k,o&&o.locales,o&&o.domainLocales);L.href=M||c.addBasePath(c.addLocale(v,k,o&&o.defaultLocale))}return a.default.cloneElement(n,L)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,u=o.useRef(),s=o.useState(!1),l=r(s,2),f=l[0],d=l[1],v=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[v,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},2790:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(9008),o=t(480),a=t(87),c=t(9281),i=t.n(c),u=t(5893),s=function(){return(0,u.jsx)("div",{className:i().container,children:(0,u.jsx)("h1",{children:"\u0421\u043a\u043e\u0440\u043e \u0437\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u0437\u044b\u0432\u044b."})})},l=t(2488),f=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.default,{children:[(0,u.jsx)("title",{children:"\u041e\u0442\u0437\u044b\u0432\u044b \u043d\u0430 \u044d\u0432\u0430\u043a\u0443\u0430\u0446\u0438\u044e \u0438 \u0448\u0438\u043d\u043e\u043c\u043e\u043d\u0442\u0430\u0436| \u0410\u0432\u0442\u043e\u043f\u043e\u043c\u043e\u0449\u044c"}),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,u.jsx)("meta",{name:"description",content:"\u041e\u0442\u0437\u044b\u0432\u044b \u044d\u0432\u0430\u043a\u0443\u0430\u0446\u0438\u0438, \u0448\u0438\u043d\u043e\u043c\u043e\u043d\u0442\u0430\u0436\u0430. \u0423\u0441\u043b\u0443\u0433\u0438 \u044d\u0432\u0430\u043a\u0443\u0430\u0446\u0438\u0438 \u0438 \u0448\u0438\u043d\u043e\u043c\u043e\u043d\u0442\u0430\u0436\u0430. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043f\u043e \u041c\u041e \u0438 \u0422\u0443\u043b\u044c\u0441\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438. \u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441."}),(0,u.jsx)("meta",{name:"keywords",content:"\u044d\u0432\u0430\u043a\u0443\u0430\u0442\u043e\u0440 \u043e\u0442\u0437\u044b\u0432\u044b"})]}),(0,u.jsxs)(l.Q8.Provider,{value:l.VT,children:[(0,u.jsx)(o.h,{headerOtherPage:!0}),(0,u.jsx)(s,{}),(0,u.jsx)(l.fb.Provider,{value:l.rK,children:(0,u.jsx)(a.$,{})})]})]})}},2067:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reviews",function(){return t(2790)}])},9281:function(e){e.exports={container:"style_container__2TdQA"}},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[323,774,888,179],(function(){return n=2067,e(e.s=n);var n}));var n=e.O();_N_E=n}]);