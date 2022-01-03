"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[849],{7116:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-2efcb26a",path:"/zh/guide/theme.html",title:"主题",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"社区主题",slug:"社区主题",children:[]},{level:2,title:"本地主题",slug:"本地主题",children:[]}],filePathRelative:"zh/guide/theme.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(e,s)=>{s.Z=(e,s)=>{for(const[n,a]of s)e[n]=a;return e}},6001:(e,s,n)=>{n.r(s),n.d(s,{default:()=>A});var a=n(6252);const l=(0,a._)("h1",{id:"主题",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#主题","aria-hidden":"true"},"#"),(0,a.Uk)(" 主题")],-1),t=(0,a._)("p",null,"VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。",-1),r=(0,a.Uk)("VuePress 有一个开箱即用的默认主题，正使用在你当前正在浏览的文档网站上。默认主题为文档网站提供了基础且实用的功能，你可以前往 "),p=(0,a.Uk)("默认主题配置参考"),o=(0,a.Uk)(" 获取全部的配置列表。"),c=(0,a._)("p",null,[(0,a.Uk)("然而，你可能觉得默认主题不够出色。或者你想要搭建一个其他类型的网站而不是文档，比如博客。此时，你可以尝试 "),(0,a._)("a",{href:"#%E7%A4%BE%E5%8C%BA%E4%B8%BB%E9%A2%98"},"使用社区主题"),(0,a.Uk)(" 或者 "),(0,a._)("a",{href:"#%E6%9C%AC%E5%9C%B0%E4%B8%BB%E9%A2%98"},"创建本地主题"),(0,a.Uk)("。")],-1),d=(0,a._)("h2",{id:"社区主题",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#社区主题","aria-hidden":"true"},"#"),(0,a.Uk)(" 社区主题")],-1),i=(0,a.Uk)("社区用户创建了很多主题，并将它们发布到了 "),u={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("NPM"),m=(0,a.Uk)(" 上。查看主题本身的文档可以获取更详细的指引。"),D=(0,a.Uk)("一般而言，你需要在 "),b=(0,a.Uk)("theme"),k=(0,a.Uk)(" 配置项中设置你要使用的主题名称："),E=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">theme:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>你可以使用主题名称或者它的简称：</p><table><thead><tr><th>主题名称</th><th>简称</th></tr></thead><tbody><tr><td><code>vuepress-theme-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-theme-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/theme-default</code></td><td><code>@vuepress/default</code></td></tr></tbody></table><h2 id="本地主题" tabindex="-1"><a class="header-anchor" href="#本地主题" aria-hidden="true">#</a> 本地主题</h2><p>如果你想要使用自己的自定义主题，但是又不想发布它，你可以创建一个本地主题。</p><p>首先，创建本地主题目录，一般是 <code>.vuepress/theme</code> ：</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">└─ docs\n   ├─ .vuepress\n   │  ├─ theme\n   │  │  └─ index.js\n   │  └─ config.js\n   └─ README.md\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',7),f=(0,a.Uk)("然后，将 "),y=(0,a.Uk)("theme"),v=(0,a.Uk)(" 配置项设置为 "),g=(0,a.Uk)("主题入口"),C=(0,a.Uk)(" 的绝对路径来使用它："),U=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">theme:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/docs/.vuepress/theme/index.js&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),_=(0,a.Uk)("接下来，前往 "),B=(0,a.Uk)("深入 > 开发主题"),w=(0,a.Uk)(" 学习如何开发你自己的主题。"),x={},A=(0,n(3744).Z)(x,[["render",function(e,s){const n=(0,a.up)("RouterLink"),x=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,t,(0,a._)("p",null,[r,(0,a.Wm)(n,{to:"/zh/reference/default-theme/config.html"},{default:(0,a.w5)((()=>[p])),_:1}),o]),c,d,(0,a._)("p",null,[i,(0,a._)("a",u,[h,(0,a.Wm)(x)]),m]),(0,a._)("p",null,[D,(0,a.Wm)(n,{to:"/zh/reference/config.html#theme"},{default:(0,a.w5)((()=>[b])),_:1}),k]),E,(0,a._)("p",null,[f,(0,a.Wm)(n,{to:"/zh/reference/config.html#theme"},{default:(0,a.w5)((()=>[y])),_:1}),v,(0,a.Wm)(n,{to:"/zh/advanced/theme.html#%E4%B8%BB%E9%A2%98%E5%85%A5%E5%8F%A3"},{default:(0,a.w5)((()=>[g])),_:1}),C]),U,(0,a._)("p",null,[_,(0,a.Wm)(n,{to:"/zh/advanced/theme.html"},{default:(0,a.w5)((()=>[B])),_:1}),w])],64)}]])}}]);