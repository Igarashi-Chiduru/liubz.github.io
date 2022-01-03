"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9676],{5482:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-07ca2692",path:"/zh/reference/plugin/google-analytics.html",title:"google-analytics",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"上报事件",slug:"上报事件",children:[]},{level:2,title:"配置项",slug:"配置项",children:[{level:3,title:"id",slug:"id",children:[]}]}],filePathRelative:"zh/reference/plugin/google-analytics.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(e,n)=>{n.Z=(e,n)=>{for(const[s,a]of n)e[s]=a;return e}},7032:(e,n,s)=>{s.r(n),s.d(n,{default:()=>R});var a=s(6252);const l=(0,a._)("h1",{id:"google-analytics",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#google-analytics","aria-hidden":"true"},"#"),(0,a.Uk)(" google-analytics")],-1),r=(0,a.Uk)("将 "),o={href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("Google Analytics"),t=(0,a.Uk)(" 集成到 VuePress 中。"),i=(0,a.Uk)("该插件会通过引入 "),c={href:"https://developers.google.com/analytics/devguides/collection/gtagjs",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("gtag.js"),d=(0,a.Uk)(" 来启用 "),g={href:"https://support.google.com/analytics/answer/10089681",target:"_blank",rel:"noopener noreferrer"},D=(0,a.Uk)("Google Analytics 4"),h=(0,a.Uk)(" 。"),k=(0,a.uE)('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-google-analytics@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="上报事件" tabindex="-1"><a class="header-anchor" href="#上报事件" aria-hidden="true">#</a> 上报事件</h2>',3),m=(0,a.Uk)("Google Analytics 会 "),y={href:"https://support.google.com/analytics/answer/9234069",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("自动收集部分事件"),_=(0,a.Uk)(" ，比如 "),U=(0,a._)("code",null,"page_view",-1),f=(0,a.Uk)(", "),v=(0,a._)("code",null,"first_visit",-1),E=(0,a.Uk)(" 等。"),C=(0,a._)("p",null,[(0,a.Uk)("因此，如果你只是想收集站点的一些基础数据，你只需要正确设置 "),(0,a._)("a",{href:"#id"},"Measurement ID"),(0,a.Uk)(" ，不需要再额外做其他事情。")],-1),x=(0,a.Uk)("在引入该插件之后，一个全局的 "),X=(0,a._)("code",null,"gtag()",-1),w=(0,a.Uk)(" 函数会被挂载到 "),G=(0,a._)("code",null,"window",-1),A=(0,a.Uk)(" 对象上，你可以使用它进行 "),I={href:"https://developers.google.com/analytics/devguides/collection/ga4/events",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("自定义事件的上报"),j=(0,a.Uk)(" 。"),z=(0,a._)("h2",{id:"配置项",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#"),(0,a.Uk)(" 配置项")],-1),M=(0,a._)("h3",{id:"id",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#id","aria-hidden":"true"},"#"),(0,a.Uk)(" id")],-1),B=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("类型： "),(0,a._)("code",null,"string")])],-1),q=(0,a._)("p",null,"详情：",-1),F=(0,a._)("p",null,[(0,a.Uk)("Google Analytics 4 的 Measurement ID ，应以 "),(0,a._)("code",null,"'G-'"),(0,a.Uk)(" 开头。")],-1),N=(0,a.Uk)("你可以通过 "),P={href:"https://support.google.com/analytics/answer/9539598",target:"_blank",rel:"noopener noreferrer"},T=(0,a.Uk)("这里"),Z=(0,a.Uk)(' 的指引来找到你的 Measurement ID 。注意区分 Google Analytics 4 的 Measurement ID （即 "G-" 开头的 ID） 和 Universal Analytics 的 Tracking ID （即 "UA-" 开头的 ID）。'),H=(0,a._)("li",null,[(0,a._)("p",null,"示例：")],-1),L=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/plugin-google-analytics&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;G-XXXXXXXXXX&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',1),O={},R=(0,s(3744).Z)(O,[["render",function(e,n){const s=(0,a.up)("NpmBadge"),O=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a.Wm)(s,{package:"@vuepress/plugin-google-analytics"}),(0,a._)("p",null,[r,(0,a._)("a",o,[p,(0,a.Wm)(O)]),t]),(0,a._)("p",null,[i,(0,a._)("a",c,[u,(0,a.Wm)(O)]),d,(0,a._)("a",g,[D,(0,a.Wm)(O)]),h]),k,(0,a._)("p",null,[m,(0,a._)("a",y,[b,(0,a.Wm)(O)]),_,U,f,v,E]),C,(0,a._)("p",null,[x,X,w,G,A,(0,a._)("a",I,[W,(0,a.Wm)(O)]),j]),z,M,(0,a._)("ul",null,[B,(0,a._)("li",null,[q,F,(0,a._)("p",null,[N,(0,a._)("a",P,[T,(0,a.Wm)(O)]),Z])]),H]),L],64)}]])}}]);