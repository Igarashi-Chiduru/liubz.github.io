"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8965],{5653:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3df91977",path:"/reference/plugin/container.html",title:"container",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install",slug:"install",children:[]},{level:2,title:"Container Syntax",slug:"container-syntax",children:[]},{level:2,title:"Options",slug:"options",children:[{level:3,title:"type",slug:"type",children:[]},{level:3,title:"locales",slug:"locales",children:[]},{level:3,title:"before",slug:"before",children:[]},{level:3,title:"after",slug:"after",children:[]},{level:3,title:"render",slug:"render",children:[]},{level:3,title:"validate",slug:"validate",children:[]},{level:3,title:"marker",slug:"marker",children:[]}]}],filePathRelative:"reference/plugin/container.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}},4375:(n,s,a)=>{a.r(s),a.d(s,{default:()=>nn});var e=a(6252);const l=(0,e._)("h1",{id:"container",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#container","aria-hidden":"true"},"#"),(0,e.Uk)(" container")],-1),p=(0,e._)("p",null,"Register markdown custom containers in your VuePress site.",-1),o=(0,e.Uk)("This plugin simplifies the use of "),r={href:"https://github.com/markdown-it/markdown-it-container",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Uk)("markdown-it-container"),i=(0,e.Uk)(", but also retains its original capabilities."),c=(0,e.Uk)("The "),d=(0,e.Uk)("Custom Containers"),D=(0,e.Uk)(" of default theme is powered by this plugin."),u=(0,e.uE)('<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-container@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="container-syntax" tabindex="-1"><a class="header-anchor" href="#container-syntax" aria-hidden="true">#</a> Container Syntax</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: &lt;type&gt; </span><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">info</span><span style="color:#D4D4D4;">]</span></span>\n<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">content</span><span style="color:#D4D4D4;">]</span></span>\n<span class="line"><span style="color:#D4D4D4;">:::</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>The <code>type</code> is required and should be specified via <a href="#type">type</a> option.</li><li>The <code>info</code> is optional, and the default value can be specified via <code>defaultInfo</code> in <a href="#locales">locales</a> option.</li><li>The <code>content</code> can be any valid markdown content.</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>This plugin can be used multiple times to support different types of containers.</p></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>',8),y=(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("Type: "),(0,e._)("code",null,"string")])],-1),h=(0,e._)("p",null,"Details:",-1),f=(0,e._)("p",null,"The type of the container.",-1),b=(0,e.Uk)("It will be used as the "),m=(0,e._)("code",null,"name",-1),k=(0,e.Uk)(" param of "),g={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},C=(0,e.Uk)("markdown-it-container"),E=(0,e.Uk)("."),_=(0,e.uE)('<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { defaultInfo: string }&gt;</code></p></li><li><p>Details:</p><p>The default <code>info</code> of the container in different locales.</p><p>If this option is not specified, the default <code>info</code> will fallback to the uppercase of the <a href="#type">type</a> option.</p></li><li><p>Example:</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/container&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;tip&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">defaultInfo:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;TIP&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">          },</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">defaultInfo:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;提示&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">          },</span></span>\n<span class="line"><span style="color:#D4D4D4;">        },</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',3),v=(0,e.Uk)("Also see: "),U=(0,e.Uk)("Guide > I18n"),w=(0,e.uE)('<h3 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> before</h3><ul><li><p>Type: <code>(info: string) =&gt; string</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">info</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">`&lt;div class=&quot;custom-container </span><span style="color:#569CD6;">${</span><span style="color:#9CDCFE;">type</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">&quot;&gt;</span><span style="color:#569CD6;">${</span><span style="color:#9CDCFE;">info</span><span style="color:#D4D4D4;"> ? </span><span style="color:#CE9178;">`&lt;p class=&quot;custom-container-title&quot;&gt;</span><span style="color:#569CD6;">${</span><span style="color:#9CDCFE;">info</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">&lt;/p&gt;`</span><span style="color:#D4D4D4;"> : </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#569CD6;">}</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>Details:</p><p>A function to render the starting tag of the container.</p><p>The first param is the <code>info</code> part of <a href="#container-syntax">container syntax</a>.</p><p>This option will not take effect if you don&#39;t specify the <a href="#after">after</a> option.</p></li></ul><h3 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> after</h3><ul><li><p>Type: <code>(info: string) =&gt; string</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">(): </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;&lt;/div&gt;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>Details:</p><p>A function to render the ending tag of the container.</p><p>The first param is the <code>info</code> part of <a href="#container-syntax">container syntax</a>.</p><p>This option will not take effect if you don&#39;t specify the <a href="#before">before</a> option.</p></li></ul><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3><ul><li>Type:</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MarkdownItContainerRenderFunction</span><span style="color:#D4D4D4;"> = (</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">tokens</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Token</span><span style="color:#D4D4D4;">[],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">env</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">MarkdownEnv</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">self</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Renderer</span></span>\n<span class="line"><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',11),x=(0,e._)("p",null,"Details:",-1),T=(0,e.Uk)("The "),F=(0,e._)("code",null,"render",-1),B=(0,e.Uk)(" option of "),I={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},W=(0,e.Uk)("markdown-it-container"),q=(0,e.Uk)("."),R=(0,e._)("p",null,[(0,e.Uk)("This plugin uses a default "),(0,e._)("code",null,"render"),(0,e.Uk)(" function. If you specify this option, the default "),(0,e._)("code",null,"render"),(0,e.Uk)(" function will be replaced, and the "),(0,e._)("a",{href:"#locales"},"locales"),(0,e.Uk)(", "),(0,e._)("a",{href:"#before"},"before"),(0,e.Uk)(" and "),(0,e._)("a",{href:"#after"},"after"),(0,e.Uk)(" options will be ignored.")],-1),A=(0,e._)("h3",{id:"validate",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#validate","aria-hidden":"true"},"#"),(0,e.Uk)(" validate")],-1),z=(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("Type: "),(0,e._)("code",null,"(params: string) => boolean")])],-1),O=(0,e._)("p",null,"Details:",-1),P=(0,e.Uk)("The "),$=(0,e._)("code",null,"validate",-1),j=(0,e.Uk)(" option of "),L={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},M=(0,e.Uk)("markdown-it-container"),N=(0,e.Uk)("."),S=(0,e._)("h3",{id:"marker",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#marker","aria-hidden":"true"},"#"),(0,e.Uk)(" marker")],-1),Z=(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("Type: "),(0,e._)("code",null,"string")])],-1),G=(0,e._)("p",null,"Details:",-1),H=(0,e.Uk)("The "),V=(0,e._)("code",null,"marker",-1),Y=(0,e.Uk)(" option of "),J={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},K=(0,e.Uk)("markdown-it-container"),Q=(0,e.Uk)("."),X={},nn=(0,a(3744).Z)(X,[["render",function(n,s){const a=(0,e.up)("NpmBadge"),X=(0,e.up)("OutboundLink"),nn=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e.Wm)(a,{package:"@vuepress/plugin-container"}),p,(0,e._)("p",null,[o,(0,e._)("a",r,[t,(0,e.Wm)(X)]),i]),(0,e._)("p",null,[c,(0,e.Wm)(nn,{to:"/reference/default-theme/markdown.html#custom-containers"},{default:(0,e.w5)((()=>[d])),_:1}),D]),u,(0,e._)("ul",null,[y,(0,e._)("li",null,[h,f,(0,e._)("p",null,[b,m,k,(0,e._)("a",g,[C,(0,e.Wm)(X)]),E])])]),_,(0,e._)("ul",null,[(0,e._)("li",null,[v,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(nn,{to:"/guide/i18n.html"},{default:(0,e.w5)((()=>[U])),_:1})])])])]),w,(0,e._)("ul",null,[(0,e._)("li",null,[x,(0,e._)("p",null,[T,F,B,(0,e._)("a",I,[W,(0,e.Wm)(X)]),q]),R])]),A,(0,e._)("ul",null,[z,(0,e._)("li",null,[O,(0,e._)("p",null,[P,$,j,(0,e._)("a",L,[M,(0,e.Wm)(X)]),N])])]),S,(0,e._)("ul",null,[Z,(0,e._)("li",null,[G,(0,e._)("p",null,[H,V,Y,(0,e._)("a",J,[K,(0,e.Wm)(X)]),Q])])])],64)}]])}}]);