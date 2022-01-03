"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6329],{4917:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-147dc3d3",path:"/web/PWA.html",title:"PWA",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"注册 service worker",slug:"注册-service-worker",children:[]},{level:2,title:"卸载 service worker",slug:"卸载-service-worker",children:[]}],filePathRelative:"web/PWA.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},1473:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const l=(0,a(6252).uE)('<h1 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h1><h2 id="注册-service-worker" tabindex="-1"><a class="header-anchor" href="#注册-service-worker" aria-hidden="true">#</a> 注册 service worker</h2><ol><li>scriptURL:Service Worker 的文件地址。</li><li>options</li></ol><ul><li>scope 表示定义 Service Worker 注册的可控制的 URL 范围。通常是相对 URL 的。默认值是当前的 location。</li><li>updateViaCache 用于定义注册的 Service Worker 文件是否通过 HTTP 缓存的策略。有以下值： <ol><li>updateViaCache 用于定义注册的 Service Worker 文件是否通过 HTTP 缓存的策略。有以下值：</li><li>all：所有 serviceWorker 文件都经过 HTTP 缓存。</li><li>none：所有 serviceWorker 文件都不经过 HTTP 缓存。</li></ol></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// navigator.serviceWorker.register(scriptUrl, options)</span></span>\n<span class="line"><span style="color:#9CDCFE;">navigator</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">serviceWorker</span></span>\n<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">register</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;sw.js&#39;</span><span style="color:#D4D4D4;">, {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">scope:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">pdateViaCache:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;none&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  })</span></span>\n<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;注册成功&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  })</span></span>\n<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">catch</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;注册失败&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  })</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="卸载-service-worker" tabindex="-1"><a class="header-anchor" href="#卸载-service-worker" aria-hidden="true">#</a> 卸载 service worker</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">navigator</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">serviceWorker</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getRegistration</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">swReg</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">swReg</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">swReg</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">unregister</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',7),e={},p=(0,a(3744).Z)(e,[["render",function(s,n){return l}]])}}]);