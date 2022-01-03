"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5159],{515:(e,l,t)=>{t.r(l),t.d(l,{data:()=>i});const i={key:"v-b4ed4f1c",path:"/advanced/architecture.html",title:"Architecture",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[]},{level:2,title:"Core Process and Hooks",slug:"core-process-and-hooks",children:[]}],filePathRelative:"advanced/architecture.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(e,l)=>{l.Z=(e,l)=>{for(const[t,i]of l)e[t]=i;return e}},5970:(e,l,t)=>{t.r(l),t.d(l,{default:()=>N});var i=t(6252);const r=(0,i.uE)('<h1 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture" aria-hidden="true">#</a> Architecture</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p><img src="/images/guide/vuepress-architecture-overview.png" alt="vuepress-architecture-overview"></p><p>The above figure shows a brief overview of the VuePress architecture:</p><ul><li>Node App will generate temp files, including the layouts, pages, routes, etc.</li><li>Bundler will handle Client App together with the temp files, just like a common Vue SPA.</li></ul><p>As a developer, you must be aware of that VuePress has two main parts: <strong>Node App</strong> and <strong>Client App</strong>, which is important when developing plugins and themes:</p><ul><li>The entry file of a plugin or a theme will be loaded in Node App. So you need to use CommonJS format for them.</li><li>Client files will be loaded in Client App, which will be handled by bundler. For example, layouts, components, app setup files, app enhance files, etc. You&#39;d better use ESM format for them.</li></ul><h2 id="core-process-and-hooks" tabindex="-1"><a class="header-anchor" href="#core-process-and-hooks" aria-hidden="true">#</a> Core Process and Hooks</h2><p><img src="/images/guide/vuepress-core-process.png" alt="vuepress-core-process"></p>',9),a=(0,i.Uk)("The above figure shows the core process of VuePress Node App and the hooks of "),o=(0,i.Uk)("Plugin API"),n=(0,i.Uk)(":"),s=(0,i.Uk)("In the "),u=(0,i._)("strong",null,"init",-1),d=(0,i.Uk)(" stage: "),h=(0,i._)("li",null,"Theme and plugins will be loaded. That means all the plugins should be used before initialization.",-1),p=(0,i.Uk)("As we are using markdown-it to parse the markdown file, the "),c=(0,i.Uk)("extendsMarkdown"),g=(0,i.Uk)(" hook will be processed before loading page files."),f=(0,i.Uk)("Page files will be loaded: "),m=(0,i.Uk)("extendsPageOptions"),k=(0,i.Uk)(" hook will be processed to create pages."),w=(0,i.Uk)("extendsPageData"),v=(0,i.Uk)(" hook will be processed to generate data of pages."),b=(0,i._)("li",null,[(0,i.Uk)("In the "),(0,i._)("strong",null,"prepare"),(0,i.Uk)(" stage: "),(0,i._)("ul",null,[(0,i._)("li",null,"Temp files will be generated, so all hooks related to client files will be processed here.")])],-1),_=(0,i.Uk)("In the "),U=(0,i._)("strong",null,"dev / build",-1),A=(0,i.Uk)(" stage: "),P=(0,i.Uk)("Bundler will be resolved. The "),x=(0,i.Uk)("alias"),C=(0,i.Uk)(" and "),y=(0,i.Uk)("define"),T=(0,i.Uk)(" hooks depend on bundler configuration, so they will be processed here."),W={},N=(0,t(3744).Z)(W,[["render",function(e,l){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("p",null,[a,(0,i.Wm)(t,{to:"/reference/plugin-api.html"},{default:(0,i.w5)((()=>[o])),_:1}),n]),(0,i._)("ul",null,[(0,i._)("li",null,[s,u,d,(0,i._)("ul",null,[h,(0,i._)("li",null,[p,(0,i.Wm)(t,{to:"/reference/plugin-api.html#extendsmarkdown"},{default:(0,i.w5)((()=>[c])),_:1}),g]),(0,i._)("li",null,[f,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(t,{to:"/reference/plugin-api.html#extendspageoptions"},{default:(0,i.w5)((()=>[m])),_:1}),k]),(0,i._)("li",null,[(0,i.Wm)(t,{to:"/reference/plugin-api.html#extendspagedata"},{default:(0,i.w5)((()=>[w])),_:1}),v])])])])]),b,(0,i._)("li",null,[_,U,A,(0,i._)("ul",null,[(0,i._)("li",null,[P,(0,i.Wm)(t,{to:"/reference/plugin-api.html#alias"},{default:(0,i.w5)((()=>[x])),_:1}),C,(0,i.Wm)(t,{to:"/reference/plugin-api.html#define"},{default:(0,i.w5)((()=>[y])),_:1}),T])])])])],64)}]])}}]);