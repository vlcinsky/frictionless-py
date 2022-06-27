(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(161)),a=["components"],c={title:"Type Guide"},s={unversionedId:"guides/extension/type-guide",id:"guides/extension/type-guide",isDocsHomePage:!1,title:"Type Guide",description:"Frictionless Framework support custom data types. A data type is an integer, float, or time. You can create your own time based on your domain model needs.",source:"@site/../docs/guides/extension/type-guide.md",slug:"/guides/extension/type-guide",permalink:"/docs/guides/extension/type-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/extension/type-guide.md",version:"current",lastUpdatedBy:"Shashi Gharti",lastUpdatedAt:1656317464,formattedLastUpdatedAt:"6/27/2022",sidebar:"guides",previous:{title:"Step Guide",permalink:"/docs/guides/extension/step-guide"},next:{title:"Error Guide",permalink:"/docs/guides/extension/error-guide"}},u=[{value:"Type Example",id:"type-example",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Frictionless Framework support custom data types. A data type is an integer, float, or time. You can create your own time based on your domain model needs."),Object(i.b)("h2",{id:"type-example"},"Type Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Type\n\nclass ObjectType(Type):\n    code = "object"\n    constraints = [\n        "required",\n        "minLength",\n        "maxLength",\n        "enum",\n    ]\n\n    # Read\n\n    def read_cell(self, cell):\n        if not isinstance(cell, dict):\n            if not isinstance(cell, str):\n                return None\n            try:\n                cell = json.loads(cell)\n            except Exception:\n                return None\n            if not isinstance(cell, dict):\n                return None\n        return cell\n\n    # Write\n\n    def write_cell(self, cell):\n        return json.dumps(cell)\n')))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);