"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7891],{966:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-5db38d17",path:"/web/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96.html",title:"前端工程化",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"技术选型",slug:"技术选型",children:[]},{level:2,title:"统一规范",slug:"统一规范",children:[]},{level:2,title:"监控",slug:"监控",children:[{level:3,title:"性能监控",slug:"性能监控",children:[]}]}],filePathRelative:"web/前端工程化.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},8344:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const l=(0,a(6252).uE)('<h1 id="前端工程化" tabindex="-1"><a class="header-anchor" href="#前端工程化" aria-hidden="true">#</a> 前端工程化</h1><p>https://juejin.cn/post/6892003555818143752#heading-20</p><ul><li><a href="#%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B">技术选型</a></li><li><a href="#%E7%BB%9F%E4%B8%80%E8%A7%84%E8%8C%83">统一规范</a></li><li><a href="#%E6%B5%8B%E8%AF%95">测试</a></li><li><a href="#%E9%83%A8%E7%BD%B2">部署</a></li><li><a href="#%E7%9B%91%E6%8E%A7">监控</a></li><li><a href="#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">性能优化</a></li><li><a href="#%E9%87%8D%E6%9E%84">重构</a></li></ul><h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型" aria-hidden="true">#</a> 技术选型</h2><ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul><h2 id="统一规范" tabindex="-1"><a class="header-anchor" href="#统一规范" aria-hidden="true">#</a> 统一规范</h2><ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul><h2 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h2><p>监控，又分性能监控和错误监控，它的作用是预警和追踪定位问题。</p><h3 id="性能监控" tabindex="-1"><a class="header-anchor" href="#性能监控" aria-hidden="true">#</a> 性能监控</h3><p>性能监控一般利用 window.performance 来进行数据采集。</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Performance 接口可以获取到当前页面中与性能相关的信息，它是 High Resolution Time API 的一部分，同时也融合了 Performance Timeline API、Navigation \n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这个 API 的属性 timing，包含了页面加载各个阶段的起始及结束时间。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// 重定向耗时</span></span>\n<span class="line"><span style="color:#C8C8C8;">redirect</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">redirectEnd</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">redirectStart</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#6A9955;">// DOM 渲染耗时</span></span>\n<span class="line"><span style="color:#C8C8C8;">dom</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">domComplete</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">domLoading</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#6A9955;">// 页面加载耗时</span></span>\n<span class="line"><span style="color:#C8C8C8;">load</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">loadEventEnd</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">navigationStart</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#6A9955;">// 页面卸载耗时</span></span>\n<span class="line"><span style="color:#C8C8C8;">unload</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">unloadEventEnd</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">unloadEventStart</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#6A9955;">// 请求耗时</span></span>\n<span class="line"><span style="color:#C8C8C8;">request</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">responseEnd</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">timing</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">requestStart</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#6A9955;">// 获取性能信息时当前时间</span></span>\n<span class="line"><span style="color:#C8C8C8;">time</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Date</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">getTime</span><span style="color:#D4D4D4;">(),</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',14),e={},p=(0,a(3744).Z)(e,[["render",function(s,n){return l}]])}}]);