"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6220],{6732:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-4e3c9b8c",path:"/advanced/cookbook/markdown-and-vue-sfc.html",title:"Markdown and Vue SFC",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"advanced/cookbook/markdown-and-vue-sfc.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},7080:(s,n,a)=>{a.r(n),a.d(n,{default:()=>r});var l=a(6252),p=a(3577);const e=(0,l.uE)('<h1 id="markdown-and-vue-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-and-vue-sfc" aria-hidden="true">#</a> Markdown and Vue SFC</h1><p>Each Markdown file is first compiled into HTML, and then converted to a Vue SFC. In other words, you can take Markdown as Vue SFC:</p><ul><li>Blocks <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> are treated as Vue SFC blocks as they are. In other words, they are hoisted from the <code>&lt;template&gt;</code> block to the top-level of SFC.</li><li>Everything outside <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> will be compiled into HTML, and be treated as Vue SFC <code>&lt;template&gt;</code> block.</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>As Vue SFC can contain only one <code>&lt;script&gt;</code> element, you should avoid using more than one <code>&lt;script&gt;</code> in VuePress markdown.</p></div><p>Here comes an example:</p><p><strong>Input</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">_Hello, {{ msg }}_</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;RedDiv&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">_Current count is: {{ count }}_</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;/RedDiv&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;button @click=&quot;count++&quot;&gt;Click Me!&lt;/button&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">h</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">RedDiv</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">_</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ctx</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">h</span><span style="color:#D4D4D4;">(</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&#39;div&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">class:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;red-div&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">ctx</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">slots</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">default</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">components:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">RedDiv</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">msg</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;Vue in Markdown&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">count</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">msg</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">count</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D7BA7D;">.red-div</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p><strong>Output</strong></p>',8);var o=a(2262);const c={components:{RedDiv:(s,n)=>(0,l.h)("div",{class:"red-div"},n.slots.default())},setup:()=>({msg:"Vue in Markdown",count:(0,o.iH)(0)})},r=(0,a(3744).Z)(c,[["render",function(s,n,a,o,c,r){const t=(0,l.up)("RedDiv");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e,(0,l._)("p",null,[(0,l._)("em",null,"Hello, "+(0,p.zw)(o.msg),1)]),(0,l.Wm)(t,null,{default:(0,l.w5)((()=>[(0,l._)("p",null,[(0,l._)("em",null,"Current count is: "+(0,p.zw)(o.count),1)])])),_:1}),(0,l._)("p",null,[(0,l._)("button",{onClick:n[0]||(n[0]=s=>o.count++)},"Click Me!")])],64)}]])}}]);