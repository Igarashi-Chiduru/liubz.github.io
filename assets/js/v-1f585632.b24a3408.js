"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2006],{8214:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-1f585632",path:"/web/vue.html",title:"Vue",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"虚拟 DOM 和 diff 算法",slug:"虚拟-dom-和-diff-算法",children:[{level:3,title:"虚拟 DOM",slug:"虚拟-dom",children:[]},{level:3,title:"diff 算法",slug:"diff-算法",children:[]}]},{level:2,title:"作真实 DOM Virtual DOM",slug:"作真实-dom-virtual-dom",children:[{level:3,title:"1. 原生 DOM 操作 vs. 通过框架封装操作。",slug:"_1-原生-dom-操作-vs-通过框架封装操作。",children:[]},{level:3,title:"2. 对 React 的 Virtual DOM 的误解。",slug:"_2-对-react-的-virtual-dom-的误解。",children:[]},{level:3,title:"3. MVVM vs. Virtual DOM",slug:"_3-mvvm-vs-virtual-dom",children:[]},{level:3,title:"Vue 如何监听数组的变化",slug:"vue-如何监听数组的变化",children:[]}]}],filePathRelative:"web/vue.md",git:{updatedTime:1639057966e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1},{name:"liubz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},3728:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});const l=(0,a(6252).uE)('<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><h2 id="虚拟-dom-和-diff-算法" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-和-diff-算法" aria-hidden="true">#</a> 虚拟 DOM 和 diff 算法</h2><h3 id="虚拟-dom" tabindex="-1"><a class="header-anchor" href="#虚拟-dom" aria-hidden="true">#</a> 虚拟 DOM</h3><ol><li>什么是虚拟DOM</li></ol><ul><li>虚拟DOM是采用JavaScript对象（抽象语法数）的形式来描述DOM结构，</li></ul><ol start="2"><li>为什么需要使用虚拟DOM</li></ol><ul><li>如果状态改变都需要更改DOM那就会有大量的DOM操作，任何状态改变都直接操作DOM会比较消耗性能，虚拟DOM可以找点需要改变的节点一次性进行更改</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">VNode</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">VNodeData</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">: ?</span><span style="color:#4EC9B0;">Array</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">VNode</span><span style="color:#D4D4D4;">&gt;;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">elm</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Node</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">ns</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Component</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// rendered in this component&#39;s scope</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">componentOptions</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">VNodeComponentOptions</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">componentInstance</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Component</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// component instance</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">parent</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">VNode</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// component placeholder node</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// strictly internal</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">raw</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// contains raw HTML? (server only)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">isStatic</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// hoisted static node</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">isRootInsert</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// necessary for enter transition check</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">isComment</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// empty comment placeholder?</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">isCloned</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// is a cloned node?</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">isOnce</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// is a v-once node?</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">asyncFactory</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Function</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// async component factory function</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">asyncMeta</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Object</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">isAsyncPlaceholder</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">ssrContext</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Object</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">fnContext</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Component</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// real context vm for functional nodes</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">fnOptions</span><span style="color:#D4D4D4;">: ?</span><span style="color:#4EC9B0;">ComponentOptions</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// for SSR caching</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">devtoolsMeta</span><span style="color:#D4D4D4;">: ?</span><span style="color:#4EC9B0;">Object</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// used to store functional render context for devtools</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">fnScopeId</span><span style="color:#D4D4D4;">: ?</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// functional scope id support</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">constructor</span><span style="color:#D4D4D4;">(</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">VNodeData</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">?: ?</span><span style="color:#4EC9B0;">Array</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">VNode</span><span style="color:#D4D4D4;">&gt;,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">elm</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Node</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Component</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">componentOptions</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">VNodeComponentOptions</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">asyncFactory</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Function</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">elm</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">elm</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">ns</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">fnContext</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">fnOptions</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">fnScopeId</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">componentOptions</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">componentOptions</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">componentInstance</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">parent</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">raw</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isStatic</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isRootInsert</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isComment</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCloned</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isOnce</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">asyncFactory</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">asyncFactory</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">asyncMeta</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isAsyncPlaceholder</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// DEPRECATED: alias for componentInstance for backwards compat.</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* istanbul ignore next */</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">get</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">child</span><span style="color:#D4D4D4;">(): </span><span style="color:#4EC9B0;">Component</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">void</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">componentInstance</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h3 id="diff-算法" tabindex="-1"><a class="header-anchor" href="#diff-算法" aria-hidden="true">#</a> diff 算法</h3><ol><li>diff算法的对比过程</li></ol><h2 id="作真实-dom-virtual-dom" tabindex="-1"><a class="header-anchor" href="#作真实-dom-virtual-dom" aria-hidden="true">#</a> 作真实 DOM Virtual DOM</h2><h3 id="_1-原生-dom-操作-vs-通过框架封装操作。" tabindex="-1"><a class="header-anchor" href="#_1-原生-dom-操作-vs-通过框架封装操作。" aria-hidden="true">#</a> 1. 原生 DOM 操作 vs. 通过框架封装操作。</h3><p>这是一个性能 vs. 可维护性的取舍。框架的意义在于为你掩盖底层的 DOM 操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。针对任何一个 benchmark，我都可以写出比任何框架更快的手动优化，但是那有什么意义呢？在构建一个实际应用的时候，你难道为每一个地方都去做手动优化吗？出于可维护性的考虑，这显然不可能。框架给你的保证是，你在不需要手动优化的情况下，我依然可以给你提供过得去的性能。</p><h3 id="_2-对-react-的-virtual-dom-的误解。" tabindex="-1"><a class="header-anchor" href="#_2-对-react-的-virtual-dom-的误解。" aria-hidden="true">#</a> 2. 对 React 的 Virtual DOM 的误解。</h3><p>React 从来没有说过 “React 比原生操作 DOM 快”。React 的基本思维模式是每次有变动就整个重新渲染整个应用。如果没有 Virtual DOM，简单来想就是直接重置 innerHTML。很多人都没有意识到，在一个大型列表所有数据都变了的情况下，重置 innerHTML 其实是一个还算合理的操作... 真正的问题是在 “全部重新渲染” 的思维模式下，即使只有一行数据变了，它也需要重置整个 innerHTML，这时候显然就有大量的浪费。我们可以比较一下 innerHTML vs. Virtual DOM 的重绘性能消耗：innerHTML: render html string O(template size) + 重新创建所有 DOM 元素 O(DOM size)Virtual DOM: render Virtual DOM + diff O(template size) + 必要的 DOM 更新 O(DOM change)</p><p>Virtual DOM render + diff 显然比渲染 html 字符串要慢，但是！它依然是纯 js 层面的计算，比起后面的 DOM 操作来说，依然便宜了太多。可以看到，innerHTML 的总计算量不管是 js 计算还是 DOM 操作都是和整个界面的大小相关，但 Virtual DOM 的计算量里面，只有 js 计算和界面大小相关，DOM 操作是和数据的变动量相关的。前面说了，和 DOM 操作比起来，js 计算是极其便宜的。这才是为什么要有 Virtual DOM：它保证了 1）不管你的数据变化多少，每次重绘的性能都可以接受；2) 你依然可以用类似 innerHTML 的思路去写你的应用</p><h3 id="_3-mvvm-vs-virtual-dom" tabindex="-1"><a class="header-anchor" href="#_3-mvvm-vs-virtual-dom" aria-hidden="true">#</a> 3. MVVM vs. Virtual DOM</h3><p>相比起 React，其他 MVVM 系框架比如 Angular, Knockout 以及 Vue、Avalon 采用的都是数据绑定：通过 Directive/Binding 对象，观察数据变化并保留对实际 DOM 元素的引用，当有数据变化时进行对应的操作。MVVM 的变化检查是数据层面的，而 React 的检查是 DOM 结构层面的。MVVM 的性能也根据变动检测的实现原理有所不同：Angular 的脏检查使得任何变动都有固定的 O(watcher count) 的代价；Knockout/Vue/Avalon 都采用了依赖收集，在 js 和 DOM 层面都是 O(change)：</p><p>脏检查：scope digest O(watcher count) + 必要 DOM 更新 O(DOM change) 依赖收集：重新收集依赖 O(data change) + 必要 DOM 更新 O(DOM change)</p><p>可以看到，Angular 最不效率的地方在于任何小变动都有的和 watcher 数量相关的性能代价。但是！当所有数据都变了的时候，Angular 其实并不吃亏。依赖收集在初始化和数据变化的时候都需要重新收集依赖，这个代价在小量更新的时候几乎可以忽略，但在数据量庞大的时候也会产生一定的消耗。</p><p>MVVM 渲染列表的时候，由于每一行都有自己的数据作用域，所以通常都是每一行有一个对应的 ViewModel 实例，或者是一个稍微轻量一些的利用原型继承的 &quot;scope&quot; 对象，但也有一定的代价。所以，MVVM 列表渲染的初始化几乎一定比 React 慢，因为创建 ViewModel / scope 实例比起 Virtual DOM 来说要昂贵很多。这里所有 MVVM 实现的一个共同问题就是在列表渲染的数据源变动时，尤其是当数据是全新的对象时，如何有效地复用已经创建的 ViewModel 实例和 DOM 元素。假如没有任何复用方面的优化，由于数据是 “全新” 的，MVVM 实际上需要销毁之前的所有实例，重新创建所有实例，最后再进行一次渲染！这就是为什么题目里链接的 angular/knockout 实现都相对比较慢。相比之下，React 的变动检查由于是 DOM 结构层面的，即使是全新的数据，只要最后渲染结果没变，那么就不需要做无用功。</p><p>Angular 和 Vue 都提供了列表重绘的优化机制，也就是 “提示” 框架如何有效地复用实例和 DOM 元素。比如数据库里的同一个对象，在两次前端 API 调用里面会成为不同的对象，但是它们依然有一样的 uid。这时候你就可以提示 track by uid 来让 Angular 知道，这两个对象其实是同一份数据。那么原来这份数据对应的实例和 DOM 元素都可以复用，只需要更新变动了的部分。或者，你也可以直接 track by $index 来进行 “原地复用”：直接根据在数组里的位置进行复用。在题目给出的例子里，如果 angular 实现加上 track by $index 的话，后续重绘是不会比 React 慢多少的。甚至在 dbmonster 测试中，Angular 和 Vue 用了 track by $index 以后都比 React 快: dbmon (注意 Angular 默认版本无优化，优化过的在下面）</p><p>顺道说一句，React 渲染列表的时候也需要提供 key 这个特殊 prop，本质上和 track-by 是一回事。</p><p>作者：尤雨溪 链接：https://www.zhihu.com/question/31809713/answer/53544875 来源：知乎 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p><h3 id="vue-如何监听数组的变化" tabindex="-1"><a class="header-anchor" href="#vue-如何监听数组的变化" aria-hidden="true">#</a> Vue 如何监听数组的变化</h3>',25),p={},o=(0,a(3744).Z)(p,[["render",function(s,n){return l}]])}}]);