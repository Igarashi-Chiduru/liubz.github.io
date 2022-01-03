"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6403],{6418:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-4b8f1400",path:"/zh/guide/i18n.html",title:"多语言支持",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"站点多语言配置",slug:"站点多语言配置",children:[]},{level:2,title:"主题多语言配置",slug:"主题多语言配置",children:[]}],filePathRelative:"zh/guide/i18n.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},5218:(s,n,a)=>{a.r(n),a.d(n,{default:()=>f});var l=a(6252);const e=(0,l.uE)('<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h1><h2 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置" aria-hidden="true">#</a> 站点多语言配置</h2><p>要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构：</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">docs\n├─ README.md\n├─ foo.md\n├─ nested\n│  └─ README.md\n└─ zh\n   ├─ README.md\n   ├─ foo.md\n   └─ nested\n      └─ README.md\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',4),p=(0,l.Uk)("然后，在你的 "),o=(0,l.Uk)("配置文件"),r=(0,l.Uk)(" 中设置 "),c=(0,l._)("code",null,"locales",-1),D=(0,l.Uk)(" 选项："),t=(0,l.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 键名是该语言所属的子路径</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Vue-powered Static Site Generator&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Vue 驱动的静态网站生成器&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    },</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>如果一个语言没有声明 <code>lang</code>, <code>title</code>, <code>description</code> 或者 <code>head</code> ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。</p>',2),i={class:"custom-container tip"},u=(0,l._)("p",{class:"custom-container-title"},"提示",-1),b=(0,l.Uk)("配置参考： "),y=(0,l.Uk)("locales"),d=(0,l.uE)('<h2 id="主题多语言配置" tabindex="-1"><a class="header-anchor" href="#主题多语言配置" aria-hidden="true">#</a> 主题多语言配置</h2><p>VuePress 没有限制主题如何提供多语言支持，因此每个主题可能会有不同的多语言配置方式，而且部分主题可能不会提供多语言支持。建议你查看主题本身的文档来获取更详细的指引。</p><p>如果你使用的是默认主题，那么它提供多语言支持的方式和上述是一致的：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">themeConfig:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">selectLanguageName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;English&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">selectLanguageName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;简体中文&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    },</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',4),m={class:"custom-container tip"},E=(0,l._)("p",{class:"custom-container-title"},"提示",-1),C=(0,l.Uk)("配置参考： "),h=(0,l.Uk)("默认主题 > locales"),g={},f=(0,a(3744).Z)(g,[["render",function(s,n){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e,(0,l._)("p",null,[p,(0,l.Wm)(a,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:(0,l.w5)((()=>[o])),_:1}),r,c,D]),t,(0,l._)("div",i,[u,(0,l._)("p",null,[b,(0,l.Wm)(a,{to:"/zh/reference/config.html#locales"},{default:(0,l.w5)((()=>[y])),_:1})])]),d,(0,l._)("div",m,[E,(0,l._)("p",null,[C,(0,l.Wm)(a,{to:"/zh/reference/default-theme/config.html#locales"},{default:(0,l.w5)((()=>[h])),_:1})])])],64)}]])}}]);