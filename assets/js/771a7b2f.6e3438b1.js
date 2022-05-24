(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{115:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),i=t(7),o=(t(0),t(161)),a=["components"],c={title:"Server Guide"},s={unversionedId:"guides/extension/server-guide",id:"guides/extension/server-guide",isDocsHomePage:!1,title:"Server Guide",description:"The Server concept is quite simple. A server needs to have a two functions:",source:"@site/../docs/guides/extension/server-guide.md",slug:"/guides/extension/server-guide",permalink:"/docs/guides/extension/server-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/extension/server-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1653403126,formattedLastUpdatedAt:"5/24/2022",sidebar:"guides",previous:{title:"Error Guide",permalink:"/docs/guides/extension/error-guide"},next:{title:"Storage Guide",permalink:"/docs/guides/extension/storage-guide"}},u=[{value:"Server Example",id:"server-example",children:[]}],p={toc:u};function l(e){var r=e.components,t=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Server concept is quite simple. A server needs to have a two functions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"server.start")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"server.stop"))),Object(o.b)("h2",{id:"server-example"},"Server Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Server\n\nclass ApiServer(Server):\n\n    # Start\n\n    def start(self, *, port):\n        app = create_api()\n        # This function create a Flask app\n        server = create_server(app, port=port)\n        # This functio runs it\n        server.run()\n")))}l.isMDXComponent=!0},161:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var r=i.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},f=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=n,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||o;return t?i.a.createElement(m,c(c({ref:r},u),{},{components:t})):i.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);