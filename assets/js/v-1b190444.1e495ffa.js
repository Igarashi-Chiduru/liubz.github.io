"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8690],{1325:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-1b190444",path:"/web/DesignPatterns.html",title:"JavaScript设计模式",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"单利模式",slug:"单利模式",children:[]},{level:2,title:"观察者",slug:"观察者",children:[]},{level:2,title:"发布订阅模式（Publisher && Subscriber）",slug:"发布订阅模式-publisher-subscriber",children:[]}],filePathRelative:"web/DesignPatterns.md",git:{updatedTime:1639057966e3,contributors:[{name:"liubz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},2017:(s,n,a)=>{a.r(n),a.d(n,{default:()=>e});const l=(0,a(6252).uE)('<h1 id="javascript设计模式" tabindex="-1"><a class="header-anchor" href="#javascript设计模式" aria-hidden="true">#</a> JavaScript设计模式</h1><h2 id="单利模式" tabindex="-1"><a class="header-anchor" href="#单利模式" aria-hidden="true">#</a> 单利模式</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Sing</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">instace</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">any</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">constructor</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">nane</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">nane</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">getSing</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">instace</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">instace</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Sing</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">instace</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="观察者" tabindex="-1"><a class="header-anchor" href="#观察者" aria-hidden="true">#</a> 观察者</h2><ol><li>观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。</li><li>优点明显：降低耦合，两者都专注于自身功能；</li><li>缺点也很明显：所有观察者都能收到通知，无法过滤筛选；</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// 观察者</span></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Observer</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">constructor</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">name</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 通知发布</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">update</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">`目标者通知我更新了，我是：</span><span style="color:#569CD6;">${</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">`</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#6A9955;">// 观察对象</span></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Subject</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">constructor</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">observers</span><span style="color:#D4D4D4;"> = []</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 添加订阅者</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">add</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">observer</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">observers</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">observer</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 删除订阅者</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">remove</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">observer</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">observers</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">observers</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">filter</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;"> !== </span><span style="color:#9CDCFE;">observer</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 通知</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">notify</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">observers</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">forEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">update</span><span style="color:#D4D4D4;">())</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;">// 实例化目标者</span></span>\n<span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">subject</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Subject</span><span style="color:#D4D4D4;">();</span></span>\n<span class="line"><span style="color:#D4D4D4;"> </span></span>\n<span class="line"><span style="color:#6A9955;">// 实例化两个观察者</span></span>\n<span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">obs1</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Observer</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;前端&#39;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">obs2</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Observer</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;后端&#39;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;"> </span></span>\n<span class="line"><span style="color:#6A9955;">// 向目标者添加观察者</span></span>\n<span class="line"><span style="color:#9CDCFE;">subject</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">add</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obs1</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#9CDCFE;">subject</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">add</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obs2</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;"> </span></span>\n<span class="line"><span style="color:#9CDCFE;">subject</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">notify</span><span style="color:#D4D4D4;">();</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="发布订阅模式-publisher-subscriber" tabindex="-1"><a class="header-anchor" href="#发布订阅模式-publisher-subscriber" aria-hidden="true">#</a> 发布订阅模式（Publisher &amp;&amp; Subscriber）</h2><ol><li>发布订阅模式：基于一个事件（主题）通道，希望接收通知的对象 Subscriber 通过自定义事件订阅主题，被激活事件的对象 Publisher 通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// Vue eventBus 实现案例</span></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Bus</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">constructor</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;"> = {}</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 发布</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">emit</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">, ...</span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">]) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">].</span><span style="color:#DCDCAA;">forEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">cb</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">cb</span><span style="color:#D4D4D4;">(...</span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">      })</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 订阅</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">cb</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">]) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">] = []</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">].</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">cb</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 取消订阅</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">off</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">cb</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">]) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">cb</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">] = </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">].</span><span style="color:#DCDCAA;">filter</span><span style="color:#D4D4D4;">(</span></span>\n<span class="line"><span style="color:#D4D4D4;">          (</span><span style="color:#9CDCFE;">el</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">el</span><span style="color:#D4D4D4;"> !== </span><span style="color:#9CDCFE;">cb</span></span>\n<span class="line"><span style="color:#D4D4D4;">        )</span></span>\n<span class="line"><span style="color:#D4D4D4;">      } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#4EC9B0;">Reflect</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">deleteProperty</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">eventStack</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">eventName</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">      }</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>',9),p={},e=(0,a(3744).Z)(p,[["render",function(s,n){return l}]])}}]);