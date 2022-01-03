"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5175],{8325:(s,e,a)=>{a.r(e),a.d(e,{data:()=>n});const n={key:"v-3c32c2ca",path:"/guide/assets.html",title:"Assets",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Relative URLs",slug:"relative-urls",children:[]},{level:2,title:"Public Files",slug:"public-files",children:[{level:3,title:"Base Helper",slug:"base-helper",children:[]}]},{level:2,title:"Packages and Path Aliases",slug:"packages-and-path-aliases",children:[]}],filePathRelative:"guide/assets.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,e)=>{e.Z=(s,e)=>{for(const[a,n]of e)s[a]=n;return s}},1797:(s,e,a)=>{a.r(e),a.d(e,{default:()=>P});var n=a(6252);const l=(0,n.uE)('<h1 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h1><h2 id="relative-urls" tabindex="-1"><a class="header-anchor" href="#relative-urls" aria-hidden="true">#</a> Relative URLs</h2><p>You can reference any assets using relative URLs in your Markdown content:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">An image</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">./image.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This is generally the suggested way to import images, as users usually place images near the Markdown file that references them.</p><h2 id="public-files" tabindex="-1"><a class="header-anchor" href="#public-files" aria-hidden="true">#</a> Public Files</h2><p>You can put some static assets inside public directory, and they will be copied to the root of the generated directory.</p><p>The default public directory is <code>.vuepress/public</code>, which can be changed in config.</p><p>It would be useful in some cases:</p><ul><li>You may need to provide static assets that are not directly referenced in any of your Markdown files, for example, favicon and PWA icons.</li><li>You may need to serve some shared static assets, which may even be referenced outside your site, for example, logo images.</li><li>You may want to reference images using absolute URLs in your Markdown content.</li></ul><p>Take our documentation source files as an example, we are putting the logo of VuePress inside the public directory:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">└─ docs</span></span>\n<span class="line"><span style="color:#D4D4D4;">   ├─ .vuepress</span></span>\n<span class="line"><span style="color:#D4D4D4;">   |  └─ public</span></span>\n<span class="line"><span style="color:#D4D4D4;">   |     └─ images</span></span>\n<span class="line"><span style="color:#D4D4D4;">   |        └─ hero.png  </span><span style="color:#6A9955;"># &lt;- Logo file</span></span>\n<span class="line"><span style="color:#D4D4D4;">   └─ guide</span></span>\n<span class="line"><span style="color:#D4D4D4;">      └─ assets.md       </span><span style="color:#6A9955;"># &lt;- Here we are</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>We can reference our logo in current page like this:</p><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Output</strong></p><p><img src="/images/hero.png" alt="VuePress Logo"></p>',17),o={class:"custom-container tip"},r=(0,n._)("p",{class:"custom-container-title"},"提示",-1),p=(0,n.Uk)("Config reference: "),i=(0,n.Uk)("public"),t=(0,n._)("h3",{id:"base-helper",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#base-helper","aria-hidden":"true"},"#"),(0,n.Uk)(" Base Helper")],-1),c=(0,n.Uk)("If your site is deployed to a non-root URL, i.e. the "),d=(0,n.Uk)("base"),u=(0,n.Uk)(" is not "),D=(0,n._)("code",null,'"/"',-1),m=(0,n.Uk)(", you will need to prepend the "),h=(0,n._)("code",null,"base",-1),b=(0,n.Uk)(" to the absolute URLs of your public files."),g=(0,n.uE)('<p>For example, if you plan to deploy your site to <code>https://foo.github.io/bar/</code>, then <code>base</code> should be set to <code>&quot;/bar/&quot;</code>, and you have to reference your public files in Markdown like this:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">/bar/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Obviously, it is brittle if you ever decide to change the <code>base</code>. This is the reason why we suggest to reference static assets using relative URLs.</p><p>To help with that, VuePress provides a built-in helper <code>$withBase</code> that generates the correct path:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;img :src=&quot;$withBase(&#39;/images/hero.png&#39;)&quot; alt=&quot;VuePress Logo&quot;&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The helper is verbose in Markdown. So it might be more helpful for theme and plugin authors.</p>',6),y={class:"custom-container tip"},f=(0,n._)("p",{class:"custom-container-title"},"提示",-1),v=(0,n.Uk)("Config reference: "),k=(0,n.Uk)("base"),E=(0,n.uE)('<h2 id="packages-and-path-aliases" tabindex="-1"><a class="header-anchor" href="#packages-and-path-aliases" aria-hidden="true">#</a> Packages and Path Aliases</h2><p>Although it is not a common usage, you can reference images from dependent packages:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm install -D package-name</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">Image from dependency</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">package-name/image.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The path aliases that set in config file are also supported:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alias:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/some/dir&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">Image from path alias</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">@alias/image.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',7),w={class:"custom-container tip"},x=(0,n._)("p",{class:"custom-container-title"},"提示",-1),C=(0,n.Uk)("Config reference: "),_=(0,n.Uk)("alias"),U={},P=(0,a(3744).Z)(U,[["render",function(s,e){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,(0,n._)("div",o,[r,(0,n._)("p",null,[p,(0,n.Wm)(a,{to:"/reference/config.html#public"},{default:(0,n.w5)((()=>[i])),_:1})])]),t,(0,n._)("p",null,[c,(0,n.Wm)(a,{to:"/reference/config.html#base"},{default:(0,n.w5)((()=>[d])),_:1}),u,D,m,h,b]),g,(0,n._)("div",y,[f,(0,n._)("p",null,[v,(0,n.Wm)(a,{to:"/reference/config.html#base"},{default:(0,n.w5)((()=>[k])),_:1})])]),E,(0,n._)("div",w,[x,(0,n._)("p",null,[C,(0,n.Wm)(a,{to:"/reference/config.html#alias"},{default:(0,n.w5)((()=>[_])),_:1})])])],64)}]])}}]);