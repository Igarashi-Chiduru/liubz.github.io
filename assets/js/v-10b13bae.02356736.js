"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8752],{8538:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-10b13bae",path:"/zh/advanced/cookbook/passing-data-to-client-code.html",title:"向客户端代码传递数据",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用 define Hook",slug:"使用-define-hook",children:[]},{level:2,title:"写入并加载临时文件",slug:"写入并加载临时文件",children:[]}],filePathRelative:"zh/advanced/cookbook/passing-data-to-client-code.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},6805:(s,n,a)=>{a.r(n),a.d(n,{default:()=>E});var l=a(6252);const p=(0,l._)("h1",{id:"向客户端代码传递数据",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#向客户端代码传递数据","aria-hidden":"true"},"#"),(0,l.Uk)(" 向客户端代码传递数据")],-1),e=(0,l._)("p",null,"我们知道，VuePress 插件入口和主题入口是在 Node 端处理的，但有时候你可能需要向客户端动态传递数据。例如，你希望在用户传入不同的选项时生成不同的数据。",-1),o=(0,l._)("h2",{id:"使用-define-hook",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#使用-define-hook","aria-hidden":"true"},"#"),(0,l.Uk)(" 使用 "),(0,l._)("code",null,"define"),(0,l.Uk)(" Hook")],-1),r=(0,l.Uk)("插件 API 提供了一个 "),c=(0,l.Uk)("define"),D=(0,l.Uk)(" Hook 来定义客户端代码中的全局常量。你可以利用它来向客户端传递数据。"),t=(0,l.uE)('<p>首先，通过 <code>define</code> Hook 定义一些常量：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">define:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__FOO__:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> || </span><span style="color:#CE9178;">&#39;str&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__OBJ__:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bar:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> || </span><span style="color:#B5CEA8;">123</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    },</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>然后，在客户端代码中直接使用它们：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__FOO__</span></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">obj</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__OBJ__</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些全局常量的类型：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__FOO__</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#569CD6;">declare</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__OBJ__</span><span style="color:#D4D4D4;">: { </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;"> }</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="写入并加载临时文件" tabindex="-1"><a class="header-anchor" href="#写入并加载临时文件" aria-hidden="true">#</a> 写入并加载临时文件</h2><p>如果你需要实现一些更复杂的功能，你可以写入临时文件，并在客户端代码中动态加载它们。</p>',8),i=(0,l.Uk)("首先，写入一个名为 "),y=(0,l._)("code",null,"foo.js",-1),d=(0,l.Uk)(" 的临时文件，它将会生成在 "),C=(0,l.Uk)("temp"),u=(0,l.Uk)(" 目录中："),b=(0,l.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">onPrepared</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 写入临时文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">writeTemp</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;foo.js&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">`export const foo = </span><span style="color:#569CD6;">${</span><span style="color:#4EC9B0;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">stringify</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">`</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>然后，在客户端代码中通过 <code>@temp</code> 别名来加载临时文件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@temp/foo&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些临时模块的类型：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">module</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@temp/foo&#39;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">foo</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),m={},E=(0,a(3744).Z)(m,[["render",function(s,n){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[p,e,o,(0,l._)("p",null,[r,(0,l.Wm)(a,{to:"/zh/reference/plugin-api.html#define"},{default:(0,l.w5)((()=>[c])),_:1}),D]),t,(0,l._)("p",null,[i,y,d,(0,l.Wm)(a,{to:"/zh/reference/config.html#temp"},{default:(0,l.w5)((()=>[C])),_:1}),u]),b],64)}]])}}]);