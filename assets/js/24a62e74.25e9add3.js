(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?i.a.createElement(f,p(p({ref:t},s),{},{components:n})):i.a.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(161)),o=["components"],p={title:"Pipeline Guide"},c={unversionedId:"guides/framework/pipeline-guide",id:"guides/framework/pipeline-guide",isDocsHomePage:!1,title:"Pipeline Guide",description:"A pipeline is a metadata object having one of these types:",source:"@site/../docs/guides/framework/pipeline-guide.md",slug:"/guides/framework/pipeline-guide",permalink:"/docs/guides/framework/pipeline-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/framework/pipeline-guide.md",version:"current",lastUpdatedBy:"Shashi Gharti",lastUpdatedAt:1655807701,formattedLastUpdatedAt:"6/21/2022",sidebar:"guides",previous:{title:"Report Guide",permalink:"/docs/guides/framework/report-guide"},next:{title:"Status Guide",permalink:"/docs/guides/framework/status-guide"}},s=[{value:"Creating Pipeline",id:"creating-pipeline",children:[]},{value:"Running Pipeline",id:"running-pipeline",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A pipeline is a metadata object having one of these types:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"resource"),Object(a.b)("li",{parentName:"ul"},"package"),Object(a.b)("li",{parentName:"ul"},"others (depending on custom plugins you use)")),Object(a.b)("h2",{id:"creating-pipeline"},"Creating Pipeline"),Object(a.b)("p",null,"For resource and package types it's basically the same functionality as we have seen above but written declaratively. So let's just run the same resource transformation as we did in the ",Object(a.b)("inlineCode",{parentName:"p"},"Tranforming Resource")," section:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Pipeline, transform, steps\n\npipeline = Pipeline({\n    'tasks': [\n        {\n            'type': 'resource',\n            'source': {'path': 'data/transform.csv'},\n            'steps': [\n                {'code': 'table-normalize'},\n                {'code': 'table-melt', 'fieldName': 'name'}\n            ]\n        }\n    ]\n})\n")),Object(a.b)("h2",{id:"running-pipeline"},"Running Pipeline"),Object(a.b)("p",null,"Let's run this pipeline:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"status = transform(pipeline)\nprint(status.task.target.schema)\nprint(status.task.target.to_view())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'fields': [{'name': 'name', 'type': 'string'},\n            {'name': 'variable'},\n            {'name': 'value'}]}\n+----+-----------+------------+------+\n| id | name      | population | cars |\n+====+===========+============+======+\n|  1 | 'germany' |         83 |  166 |\n+----+-----------+------------+------+\n|  2 | 'france'  |         66 |  132 |\n+----+-----------+------------+------+\n|  3 | 'spain'   |         47 |   94 |\n+----+-----------+------------+------+\n")))}u.isMDXComponent=!0}}]);