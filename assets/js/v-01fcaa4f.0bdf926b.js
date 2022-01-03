"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9008],{532:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-01fcaa4f",path:"/zh/reference/plugin/pwa.html",title:"pwa",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"Web App Manifests",slug:"web-app-manifests",children:[]},{level:2,title:"配置项",slug:"配置项",children:[{level:3,title:"serviceWorkerFilename",slug:"serviceworkerfilename",children:[]}]},{level:2,title:"Composition API",slug:"composition-api",children:[{level:3,title:"usePwaEvent",slug:"usepwaevent",children:[]},{level:3,title:"useSkipWaiting",slug:"useskipwaiting",children:[]}]}],filePathRelative:"zh/reference/plugin/pwa.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},3198:(s,n,a)=>{a.r(n),a.d(n,{default:()=>qs});var l=a(6252);const e=(0,l._)("h1",{id:"pwa",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#pwa","aria-hidden":"true"},"#"),(0,l.Uk)(" pwa")],-1),p=(0,l.Uk)("使你的 VuePress 站点成为一个 "),o={href:"https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},r=(0,l.Uk)("渐进式 Web 应用 (PWA)"),t=(0,l.Uk)("."),c=(0,l.Uk)("该插件使用 "),D={href:"https://developers.google.com/web/tools/workbox/modules/workbox-build",target:"_blank",rel:"noopener noreferrer"},i=(0,l.Uk)("workbox-build"),u=(0,l.Uk)(" 来生成 Service Worker 文件，并通过 "),y={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},b=(0,l.Uk)("register-service-worker"),d=(0,l.Uk)(" 来注册 Service Worker 。"),m=(0,l.uE)('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-pwa@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="web-app-manifests" tabindex="-1"><a class="header-anchor" href="#web-app-manifests" aria-hidden="true">#</a> Web App Manifests</h2>',3),C=(0,l.Uk)("为了使你的网站符合 PWA 的要求，你需要创建一个 "),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"},h=(0,l.Uk)("Web app manifests"),g=(0,l.Uk)(" 文件，并且为你的 PWA 设置图标、颜色等信息。"),E=(0,l.Uk)("你需要将你的 Manifest 文件和图标放置在 "),v=(0,l.Uk)("Public 目录"),_=(0,l.Uk)(" 下。在下述的示例中，我们假设你正在使用默认的 Public 目录 "),f=(0,l._)("code",null,".vuepress/public",-1),w=(0,l.Uk)(" 。"),q=(0,l.uE)('<ol><li>创建 Manifest 文件</li></ol><p>通常是 <code>.vuepress/public/manifest.webmanifest</code> ：</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;short_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;description&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Vue-powered Static Site Generator&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/index.html&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;display&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;standalone&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;background_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#fff&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;theme_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#3eaf7c&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;icons&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-192x192.png&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;192x192&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-384x384.png&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;384x384&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="2"><li>生成 PWA 图标</li></ol><p>为了提高你的 PWA 的可用性，你需要生成一些图标，并将它们放置在 Public 目录下。</p><p>确保图标的路径匹配 Manifest 文件中的 <code>icons</code> 字段：</p><ul><li><code>.vuepress/public/images/icons/android-chrome-192x192.png</code></li><li><code>.vuepress/public/images/icons/android-chrome-384x384.png</code></li></ul>',7),W={class:"custom-container tip"},U=(0,l._)("p",{class:"custom-container-title"},"提示",-1),F=(0,l.Uk)("一些工具可以帮助你做这些事。比如 "),x={href:"https://realfavicongenerator.net/",target:"_blank",rel:"noopener noreferrer"},A=(0,l.Uk)("Favicon Generator"),S=(0,l.Uk)(" 可以帮助你生成图片以及一个 Manifest 文件样例。"),P=(0,l._)("ol",{start:"3"},[(0,l._)("li",null,"设置 Head 中的标签")],-1),z=(0,l.Uk)("你还需要通过 "),M=(0,l.Uk)("head"),B=(0,l.Uk)(" 配置项来设置一些标签，用来 "),j={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag",target:"_blank",rel:"noopener noreferrer"},I=(0,l.Uk)("部署你的 Manifest 文件"),N=(0,l.Uk)(" 。"),R=(0,l.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">head:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;link&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">rel:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;manifest&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">href:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;/manifest.webmanifest&#39;</span><span style="color:#D4D4D4;"> }],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;meta&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;theme-color&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#3eaf7c&#39;</span><span style="color:#D4D4D4;"> }],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...其他标签</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>',2),V=(0,l.Uk)("该插件的配置项可以接收 workbox-build 中 "),G={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},H=(0,l.Uk)("generateSW 方法"),L=(0,l.Uk)(" 除了 "),Z=(0,l._)("code",null,"globDirectory",-1),O=(0,l.Uk)(" 和 "),T=(0,l._)("code",null,"swDest",-1),Y=(0,l.Uk)(" 以外的所有参数。"),J=(0,l.uE)('<p>比如，你可以设置 <code>skipWaiting: true</code> ，这将在新的 Service Worker 就绪之后立即激活它：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/pwa&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">skipWaiting:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>但是如果你不设置 <code>skipWaiting</code> 或设置为 <code>false</code> ，你就需要手动激活新的 Service Worker 。</p>',3),K=(0,l.Uk)("对于用户，你可以配合我们提供的 "),Q=(0,l.Uk)("pwa-popup"),X=(0,l.Uk)(" 插件一起使用。"),$=(0,l._)("li",null,[(0,l.Uk)("对于开发者，你可以使用该插件提供的 "),(0,l._)("a",{href:"#composition-api"},"Composition API"),(0,l.Uk)(" 来控制 Service Worker 的行为。")],-1),ss=(0,l._)("h3",{id:"serviceworkerfilename",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#serviceworkerfilename","aria-hidden":"true"},"#"),(0,l.Uk)(" serviceWorkerFilename")],-1),ns=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("类型： "),(0,l._)("code",null,"string")])],-1),as=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("默认值： "),(0,l._)("code",null,"'service-worker.js'")])],-1),ls=(0,l._)("p",null,"详情：",-1),es=(0,l.Uk)("生成的 Service Worker 文件路径，该路径是 "),ps=(0,l.Uk)("dest"),os=(0,l.Uk)(" 目录的相对路径。"),rs=(0,l._)("p",null,[(0,l.Uk)("Service Worker 文件只会在 "),(0,l._)("code",null,"build"),(0,l.Uk)(" 模式下生成。")],-1),ts=(0,l._)("h2",{id:"composition-api",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#composition-api","aria-hidden":"true"},"#"),(0,l.Uk)(" Composition API")],-1),cs=(0,l._)("h3",{id:"usepwaevent",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#usepwaevent","aria-hidden":"true"},"#"),(0,l.Uk)(" usePwaEvent")],-1),Ds=(0,l._)("p",null,"详情：",-1),is=(0,l._)("p",null,"返回该插件的 Event Emitter 。",-1),us=(0,l.Uk)("你可以为 "),ys={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},bs=(0,l.Uk)("register-service-worker"),ds=(0,l.Uk)(" 提供的事件添加事件监听器。"),ms=(0,l._)("li",null,[(0,l._)("p",null,"示例：")],-1),Cs=(0,l.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/lib/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;ready&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Service worker 已经生效。&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    })</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="useskipwaiting" tabindex="-1"><a class="header-anchor" href="#useskipwaiting" aria-hidden="true">#</a> useSkipWaiting</h3><ul><li>参数：</li></ul><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>registration</td><td><code>ServiceWorkerRegistration</code></td><td>你想要激活的 Service Worker 的 Registration</td></tr></tbody></table>',4),ks=(0,l._)("p",null,"详情：",-1),hs=(0,l.Uk)("调用 "),gs={href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting",target:"_blank",rel:"noopener noreferrer"},Es=(0,l.Uk)("skipWaiting()"),vs=(0,l.Uk)(" 来激活处于 Waiting 状态的 Service Worker 。"),_s=(0,l._)("li",null,[(0,l._)("p",null,"示例：")],-1),fs=(0,l.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">useSkipWaiting</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/lib/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;updated&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;在 Waiting 状态的 Service Worker 已经就绪。&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 激活 Waiting 状态的 Service Worker</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">useSkipWaiting</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    })</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',1),ws={},qs=(0,a(3744).Z)(ws,[["render",function(s,n){const a=(0,l.up)("NpmBadge"),ws=(0,l.up)("OutboundLink"),qs=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e,(0,l.Wm)(a,{package:"@vuepress/plugin-pwa"}),(0,l._)("p",null,[p,(0,l._)("a",o,[r,(0,l.Wm)(ws)]),t]),(0,l._)("p",null,[c,(0,l._)("a",D,[i,(0,l.Wm)(ws)]),u,(0,l._)("a",y,[b,(0,l.Wm)(ws)]),d]),m,(0,l._)("p",null,[C,(0,l._)("a",k,[h,(0,l.Wm)(ws)]),g]),(0,l._)("p",null,[E,(0,l.Wm)(qs,{to:"/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6"},{default:(0,l.w5)((()=>[v])),_:1}),_,f,w]),q,(0,l._)("div",W,[U,(0,l._)("p",null,[F,(0,l._)("a",x,[A,(0,l.Wm)(ws)]),S])]),P,(0,l._)("p",null,[z,(0,l.Wm)(qs,{to:"/zh/reference/config.html#head"},{default:(0,l.w5)((()=>[M])),_:1}),B,(0,l._)("a",j,[I,(0,l.Wm)(ws)]),N]),R,(0,l._)("p",null,[V,(0,l._)("a",G,[H,(0,l.Wm)(ws)]),L,Z,O,T,Y]),J,(0,l._)("ul",null,[(0,l._)("li",null,[K,(0,l.Wm)(qs,{to:"/zh/reference/plugin/pwa-popup.html"},{default:(0,l.w5)((()=>[Q])),_:1}),X]),$]),ss,(0,l._)("ul",null,[ns,as,(0,l._)("li",null,[ls,(0,l._)("p",null,[es,(0,l.Wm)(qs,{to:"/zh/reference/config.html#dest"},{default:(0,l.w5)((()=>[ps])),_:1}),os]),rs])]),ts,cs,(0,l._)("ul",null,[(0,l._)("li",null,[Ds,is,(0,l._)("p",null,[us,(0,l._)("a",ys,[bs,(0,l.Wm)(ws)]),ds])]),ms]),Cs,(0,l._)("ul",null,[(0,l._)("li",null,[ks,(0,l._)("p",null,[hs,(0,l._)("a",gs,[Es,(0,l.Wm)(ws)]),vs])]),_s]),fs],64)}]])}}]);