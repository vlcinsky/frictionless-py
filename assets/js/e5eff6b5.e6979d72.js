(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(161)),i=["components"],l={title:"Report Guide"},s={unversionedId:"guides/framework/report-guide",id:"guides/framework/report-guide",isDocsHomePage:!1,title:"Report Guide",description:"Validation Report",source:"@site/../docs/guides/framework/report-guide.md",slug:"/guides/framework/report-guide",permalink:"/docs/guides/framework/report-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/framework/report-guide.md",version:"current",lastUpdatedBy:"Edgar Z. Alvarenga",lastUpdatedAt:1654751964,formattedLastUpdatedAt:"6/9/2022",sidebar:"guides",previous:{title:"Inquiry Guide",permalink:"/docs/guides/framework/inquiry-guide"},next:{title:"Pipeline Guide",permalink:"/docs/guides/framework/pipeline-guide"}},p=[{value:"Validation Report",id:"validation-report",children:[]},{value:"Validation Errors",id:"validation-errors",children:[]}],c={toc:p};function d(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"validation-report"},"Validation Report"),Object(o.b)("p",null,"All the ",Object(o.b)("inlineCode",{parentName:"p"},"validate")," functions return the Validation Report. It's an unified object containing information about a validation: source details, found error, etc. Let's explore a report:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import validate\n\nreport = validate('data/capital-invalid.csv', pick_errors=['duplicate-label'])\npprint(report)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{'errors': [],\n 'stats': {'errors': 1, 'tasks': 1},\n 'tasks': [{'errors': [{'code': 'duplicate-label',\n                        'description': 'Two columns in the header row have the '\n                                       'same value. Column names should be '\n                                       'unique.',\n                        'fieldName': 'name2',\n                        'fieldNumber': 3,\n                        'fieldPosition': 3,\n                        'label': 'name',\n                        'labels': ['id', 'name', 'name'],\n                        'message': 'Label \"name\" in the header at position \"3\" '\n                                   'is duplicated to a label: at position \"2\"',\n                        'name': 'Duplicate Label',\n                        'note': 'at position \"2\"',\n                        'rowPositions': [1],\n                        'tags': ['#table', '#header', '#label']}],\n            'partial': False,\n            'resource': {'encoding': 'utf-8',\n                         'format': 'csv',\n                         'hashing': 'md5',\n                         'name': 'capital-invalid',\n                         'path': 'data/capital-invalid.csv',\n                         'profile': 'tabular-data-resource',\n                         'schema': {'fields': [{'name': 'id',\n                                                'type': 'integer'},\n                                               {'name': 'name',\n                                                'type': 'string'},\n                                               {'name': 'name2',\n                                                'type': 'string'}]},\n                         'scheme': 'file',\n                         'stats': {'bytes': 171,\n                                   'fields': 3,\n                                   'hash': 'dcdeae358cfd50860c18d953e021f836',\n                                   'rows': 11}},\n            'scope': ['duplicate-label'],\n            'stats': {'errors': 1},\n            'time': 0.026,\n            'valid': False}],\n 'time': 0.026,\n 'valid': False,\n 'version': '4.1.0'}\n")),Object(o.b)("p",null,'As we can see, there are a lot of information; you can find its details description in "API Reference". Errors are grouped by tables; for some validation there are can be dozens of tables. Let\'s use the ',Object(o.b)("inlineCode",{parentName:"p"},"report.flatten")," function to simplify errors representation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import validate\n\nreport = validate('data/capital-invalid.csv', pick_errors=['duplicate-label'])\npprint(report.flatten(['rowPosition', 'fieldPosition', 'code', 'message']))\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[[None,\n  3,\n  'duplicate-label',\n  'Label \"name\" in the header at position \"3\" is duplicated to a label: at '\n  'position \"2\"']]\n")),Object(o.b)("p",null,"In some situation, an error can't be associated with a table; then it goes to the top-level ",Object(o.b)("inlineCode",{parentName:"p"},"report.errors")," property:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import validate_schema\n\nreport = validate_schema('bad.json')\npprint(report)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{'errors': [{'code': 'schema-error',\n             'description': 'Provided schema is not valid.',\n             'message': 'Schema is not valid: cannot extract metadata '\n                        '\"bad.json\" because \"[Errno 2] No such file or '\n                        'directory: \\'bad.json\\'\"',\n             'name': 'Schema Error',\n             'note': 'cannot extract metadata \"bad.json\" because \"[Errno 2] No '\n                     'such file or directory: \\'bad.json\\'\"',\n             'tags': []}],\n 'stats': {'errors': 1, 'tasks': 0},\n 'tasks': [],\n 'time': 0.0,\n 'valid': False,\n 'version': '4.1.0'}\n")),Object(o.b)("h2",{id:"validation-errors"},"Validation Errors"),Object(o.b)("p",null,"The Error object is at the heart of the validation process. The Report has ",Object(o.b)("inlineCode",{parentName:"p"},"report.errors")," and ",Object(o.b)("inlineCode",{parentName:"p"},"report.tables[].errors")," properties that can contain the Error object. Let's explore it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import validate\n\nreport = validate('data/capital-invalid.csv', pick_errors=['duplicate-label'])\nerror = report.task.error # it's only available for 1 table / 1 error sitution\nprint(f'Code: \"{error.code}\"')\nprint(f'Name: \"{error.name}\"')\nprint(f'Tags: \"{error.tags}\"')\nprint(f'Note: \"{error.note}\"')\nprint(f'Message: \"{error.message}\"')\nprint(f'Description: \"{error.description}\"')\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'Code: "duplicate-label"\nName: "Duplicate Label"\nTags: "[\'#table\', \'#header\', \'#label\']"\nNote: "at position "2""\nMessage: "Label "name" in the header at position "3" is duplicated to a label: at position "2""\nDescription: "Two columns in the header row have the same value. Column names should be unique."\n')),Object(o.b)("p",null,"Above, we have listed universal error properties. Depending on the type of an error there can be additional ones. For example, for our ",Object(o.b)("inlineCode",{parentName:"p"},"duplicate-label")," error:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import validate\n\nreport = validate('data/capital-invalid.csv', pick_errors=['duplicate-label'])\nerror = report.task.error # it's only available for 1 table / 1 error sitution\npprint(error)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{'code': 'duplicate-label',\n 'description': 'Two columns in the header row have the same value. Column '\n                'names should be unique.',\n 'fieldName': 'name2',\n 'fieldNumber': 3,\n 'fieldPosition': 3,\n 'label': 'name',\n 'labels': ['id', 'name', 'name'],\n 'message': 'Label \"name\" in the header at position \"3\" is duplicated to a '\n            'label: at position \"2\"',\n 'name': 'Duplicate Label',\n 'note': 'at position \"2\"',\n 'rowPositions': [1],\n 'tags': ['#table', '#header', '#label']}\n")),Object(o.b)("p",null,'Please explore "Errors Reference" to learn about all the available errors and their properties.'))}d.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);