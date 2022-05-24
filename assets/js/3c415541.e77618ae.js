(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(161)),c=["components"],o={title:"Detector Guide"},s={unversionedId:"guides/framework/detector-guide",id:"guides/framework/detector-guide",isDocsHomePage:!1,title:"Detector Guide",description:"The Detector object can be used in various places within the Framework. The main purpose of this class is to tweak how different aspects of metadata are detected.",source:"@site/../docs/guides/framework/detector-guide.md",slug:"/guides/framework/detector-guide",permalink:"/docs/guides/framework/detector-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/framework/detector-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1653403126,formattedLastUpdatedAt:"5/24/2022",sidebar:"guides",previous:{title:"Layout Guide",permalink:"/docs/guides/framework/layout-guide"},next:{title:"Inquiry Guide",permalink:"/docs/guides/framework/inquiry-guide"}},l=[{value:"Detector Usage",id:"detector-usage",children:[]},{value:"Detector Options",id:"detector-options",children:[{value:"Buffer Size",id:"buffer-size",children:[]},{value:"Sample Size",id:"sample-size",children:[]},{value:"Encoding Function",id:"encoding-function",children:[]},{value:"Field Type",id:"field-type",children:[]},{value:"Field Names",id:"field-names",children:[]},{value:"Field Confidence",id:"field-confidence",children:[]},{value:"Field Float Numbers",id:"field-float-numbers",children:[]},{value:"Field Missing Values",id:"field-missing-values",children:[]},{value:"Schema Sync",id:"schema-sync",children:[]},{value:"Schema Patch",id:"schema-patch",children:[]}]}],d={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Detector object can be used in various places within the Framework. The main purpose of this class is to tweak how different aspects of metadata are detected."),Object(a.b)("p",null,"Here is a quick example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Detector, Resource\n\ndetector = Detector(field_missing_values=['na'])\nresource = Resource('data/table.csv', detector=detector)\n")),Object(a.b)("p",null,"It's also possible to pass it to the CLI, for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless validate data/table.csv --field-missing-values na1,na2\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"# -----\n# valid: data/table.csv\n# -----\n")),Object(a.b)("p",null,"All the options below have their CLI equivalent. Please consult with the CLI help."),Object(a.b)("h2",{id:"detector-usage"},"Detector Usage"),Object(a.b)("p",null,"The detector class instance are accepted by many classes and functions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Package"),Object(a.b)("li",{parentName:"ul"},"Resource"),Object(a.b)("li",{parentName:"ul"},"describe"),Object(a.b)("li",{parentName:"ul"},"extract"),Object(a.b)("li",{parentName:"ul"},"validate"),Object(a.b)("li",{parentName:"ul"},"and more")),Object(a.b)("p",null,"You just need to create a Detector instance using desired options and pass to the classed and function from above."),Object(a.b)("h2",{id:"detector-options"},"Detector Options"),Object(a.b)("p",null,"Let's list all the available Detector options with simple usage examples:"),Object(a.b)("h3",{id:"buffer-size"},"Buffer Size"),Object(a.b)("p",null,"By default, Frictionless will use the first 10000 bytes to detect encoding. The following code will be slower but the encoding detection will be mroe accurate:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Detector, describe\n\ndetector = Detector(buffer_size=100000)\nresource = describe("data/country-1.csv", detector=detector)\n')),Object(a.b)("h3",{id:"sample-size"},"Sample Size"),Object(a.b)("p",null,"By default, Frictionless will use the first 100 rows to detect field types. This can be customized. The following code will be slower but the result can be more accurate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Detector, describe\n\ndetector = Detector(sample_size=1000)\nresource = describe("data/country-1.csv", detector=detector)\n')),Object(a.b)("h3",{id:"encoding-function"},"Encoding Function"),Object(a.b)("p",null,"By default, Frictionless encoding_function is None and user can use built in encoding functions. But user has option to implement their own encoding using this feature. The following example simply returns utf-8 encoding but user can add more complex logic to the encoding function."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Detector\nfrom frictionless import Resource\n\ndetector = Detector(encoding_function=lambda sample: "utf-8")\nwith Resource("data/table.csv", detector=detector) as resource:\n  assert resource.encoding == "utf-8"\n  assert resource.sample == [["id", "name"], ["1", "english"], ["2", "\u4e2d\u56fd\u4eba"]]\n  assert resource.fragment == [["1", "english"], ["2", "\u4e2d\u56fd\u4eba"]]\n  assert resource.header == ["id", "name"]\n')),Object(a.b)("h3",{id:"field-type"},"Field Type"),Object(a.b)("p",null,"This option allows manually setting all the field types to a given type. It's useful when you need to skip data casting (setting ",Object(a.b)("inlineCode",{parentName:"p"},"any")," type) or have everything as a string (setting ",Object(a.b)("inlineCode",{parentName:"p"},"string")," type):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Detector, describe\n\ndetector = Detector(field_type='string')\nresource = describe(\"data/country-1.csv\", detector=detector)\nprint(resource.schema.fields)\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[{'name': 'id', 'type': 'string'}, {'name': 'neighbor_id', 'type': 'string'}, {'name': 'name', 'type': 'string'}, {'name': 'population', 'type': 'string'}]\n")),Object(a.b)("h3",{id:"field-names"},"Field Names"),Object(a.b)("p",null,"Sometimes you don't want to use existent header row to compose field names. It's possible to provide custom names:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Detector, describe\n\ndetector = Detector(field_names=["f1", "f2", "f3", "f4"])\nresource = describe("data/country-1.csv", detector=detector)\nprint(resource.schema.field_names)\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"['f1', 'f2', 'f3', 'f4']\n")),Object(a.b)("h3",{id:"field-confidence"},"Field Confidence"),Object(a.b)("p",null,"By default, Frictionless uses 0.9 (90%) confidence level for data types detection. It means that it there are 9 integers in a field and one string it will be inferred as an integer. If you want a guarantee that an inferred schema will conform to the data you can set it to 1 (100%):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Detector, describe\n\ndetector = Detector(field_confidence=1)\nresource = describe("data/country-1.csv", detector=detector)\n')),Object(a.b)("h3",{id:"field-float-numbers"},"Field Float Numbers"),Object(a.b)("p",null,"By default, Frictionless will consider that all non integer numbers are decimals. It's possible to make them float which is a faster data type:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Detector, describe\n\ndetector = Detector(field_float_numbers=True)\nresource = describe("data/country-1.csv", detector=detector)\n')),Object(a.b)("h3",{id:"field-missing-values"},"Field Missing Values"),Object(a.b)("p",null,"Missing Values is an important concept in data description. It provides information about what cell values should be considered as nulls. We can customize the defaults:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Detector, describe\n\ndetector = Detector(field_missing_values=["", "67"])\nresource = describe("data/country-1.csv", detector=detector)\nprint(resource.schema.missing_values)\nprint(resource.to_view())\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"['', '67']\n+----+-------------+-----------+------------+\n| id | neighbor_id | name      | population |\n+====+=============+===========+============+\n|  1 | None        | 'Britain' | None       |\n+----+-------------+-----------+------------+\n|  2 |           3 | 'France'  | None       |\n+----+-------------+-----------+------------+\n|  3 |           2 | 'Germany' |         83 |\n+----+-------------+-----------+------------+\n|  4 |           5 | 'Italy'   |         60 |\n+----+-------------+-----------+------------+\n|  5 |           4 | 'Spain'   |         47 |\n+----+-------------+-----------+------------+\n")),Object(a.b)("p",null,"As we can see, the textual values equal to \"67\" are now considered nulls. Usually, it's handy when you have data with values like: '-', 'n/a', and similar."),Object(a.b)("h3",{id:"schema-sync"},"Schema Sync"),Object(a.b)("p",null,"There is a way to sync provided schema based on a header row's field order. It's very useful when you have a schema that describes a subset or a superset of the resource's fields:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Detector, Resource, Schema, Field\n\n# Note the order of the fields\ndetector = Detector(schema_sync=True)\nschema = Schema(fields=[Field(name='name', type='string'), Field(name='id', type='string')])\nwith Resource('data/capital-3.csv', schema=schema, detector=detector) as resource:\n    print(resource.schema)\n    print(resource.read_rows())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'fields': [{'name': 'id', 'type': 'string'},\n            {'name': 'name', 'type': 'string'}]}\n+-----+----------+\n| id  | name     |\n+=====+==========+\n| '1' | 'London' |\n+-----+----------+\n| '2' | 'Berlin' |\n+-----+----------+\n| '3' | 'Paris'  |\n+-----+----------+\n| '4' | 'Madrid' |\n+-----+----------+\n| '5' | 'Rome'   |\n+-----+----------+\n")),Object(a.b)("h3",{id:"schema-patch"},"Schema Patch"),Object(a.b)("p",null,"Sometimes we just want to update only a few fields or some schema's properties without providing a brand new schema. For example, the two examples above can be simplified as:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Detector, Resource\n\ndetector = Detector(schema_patch={'fields': {'id': {'type': 'string'}}})\nwith Resource('data/capital-3.csv', detector=detector) as resource:\n    print(resource.schema)\n    print(resource.to_view())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'fields': [{'name': 'id', 'type': 'string'},\n            {'name': 'name', 'type': 'string'}]}\n+-----+----------+\n| id  | name     |\n+=====+==========+\n| '1' | 'London' |\n+-----+----------+\n| '2' | 'Berlin' |\n+-----+----------+\n| '3' | 'Paris'  |\n+-----+----------+\n| '4' | 'Madrid' |\n+-----+----------+\n| '5' | 'Rome'   |\n+-----+----------+\n")))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||a;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);