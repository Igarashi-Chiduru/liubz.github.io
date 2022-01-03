"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1260],{5752:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-6df47ee0",path:"/zh/reference/plugin/pwa-popup.html",title:"pwa-popup",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"配置项",slug:"配置项",children:[{level:3,title:"locales",slug:"locales",children:[]}]},{level:2,title:"样式",slug:"样式",children:[]}],filePathRelative:"zh/reference/plugin/pwa-popup.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},8224:(s,n,a)=>{a.r(n),a.d(n,{default:()=>h});var l=a(6252);const p=(0,l._)("h1",{id:"pwa-popup",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#pwa-popup","aria-hidden":"true"},"#"),(0,l.Uk)(" pwa-popup")],-1),e=(0,l._)("p",null,"提供一个弹窗组件，允许用户手动刷新 PWA Service Worker 。",-1),o=(0,l.Uk)("该插件必须和 "),r=(0,l.Uk)("pwa 插件"),c=(0,l.Uk)(" 一起使用，并且 "),D=(0,l._)("code",null,"skipWaiting",-1),t=(0,l.Uk)(" 配置项不能设置为 "),i=(0,l._)("code",null,"true",-1),u=(0,l.Uk)(" 。"),y=(0,l.uE)('<p>当新的 Service Worker 就绪时，会在页面右下角出现一个弹窗，询问用户是否需要激活处于 Waiting 状态的 Service Worker 。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-pwa-popup@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型： <code>Record&lt;string, { message: string, buttonText: string }&gt;</code></p></li><li><p>详情：</p><p>弹窗在不同 locales 下的信息。</p><p>如果没有指定该配置项，它会降级使用默认信息。</p></li><li><p>示例：</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa&#39;</span><span style="color:#D4D4D4;">],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa-popup&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">message:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;New content is available.&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">buttonText:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Refresh&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">          },</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">message:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;发现新内容可用&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">buttonText:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;刷新&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">          },</span></span>\n<span class="line"><span style="color:#D4D4D4;">        },</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',7),b=(0,l.Uk)("参考： "),d=(0,l.Uk)("指南 > 多语言支持"),m=(0,l.uE)('<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>你可以通过 CSS 变量来自定义弹窗的样式：</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">10</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-text-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#2c3e50</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-border-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#3eaf7c</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-shadow</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">4px</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">16px</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">var</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">--pwa-popup-border-color</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-btn-text-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-btn-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#3eaf7c</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-btn-hover-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#4abf8a</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',3),C={},h=(0,a(3744).Z)(C,[["render",function(s,n){const a=(0,l.up)("NpmBadge"),C=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[p,(0,l.Wm)(a,{package:"@vuepress/plugin-pwa-popup"}),e,(0,l._)("p",null,[o,(0,l.Wm)(C,{to:"/zh/reference/plugin/pwa.html"},{default:(0,l.w5)((()=>[r])),_:1}),c,D,t,i,u]),y,(0,l._)("ul",null,[(0,l._)("li",null,[b,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(C,{to:"/zh/guide/i18n.html"},{default:(0,l.w5)((()=>[d])),_:1})])])])]),m],64)}]])}}]);