"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5370],{2917:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-7ab4099e",path:"/reference/plugin/pwa.html",title:"pwa",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install",slug:"install",children:[]},{level:2,title:"Web App Manifests",slug:"web-app-manifests",children:[]},{level:2,title:"Options",slug:"options",children:[{level:3,title:"serviceWorkerFilename",slug:"serviceworkerfilename",children:[]}]},{level:2,title:"Composition API",slug:"composition-api",children:[{level:3,title:"usePwaEvent",slug:"usepwaevent",children:[]},{level:3,title:"useSkipWaiting",slug:"useskipwaiting",children:[]}]}],filePathRelative:"reference/plugin/pwa.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,e]of n)s[a]=e;return s}},5241:(s,n,a)=>{a.r(n),a.d(n,{default:()=>qs});var e=a(6252);const l=(0,e._)("h1",{id:"pwa",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#pwa","aria-hidden":"true"},"#"),(0,e.Uk)(" pwa")],-1),p=(0,e.Uk)("Make your VuePress site a "),o={href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("Progressive Web Application (PWA)"),t=(0,e.Uk)("."),c=(0,e.Uk)("This plugin uses "),i={href:"https://developers.google.com/web/tools/workbox/modules/workbox-build",target:"_blank",rel:"noopener noreferrer"},D=(0,e.Uk)("workbox-build"),u=(0,e.Uk)(" to generate service worker file, and uses "),y={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("register-service-worker"),d=(0,e.Uk)(" to register service worker."),m=(0,e.uE)('<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-pwa@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="web-app-manifests" tabindex="-1"><a class="header-anchor" href="#web-app-manifests" aria-hidden="true">#</a> Web App Manifests</h2>',3),h=(0,e.Uk)("To make your website fully compliant with PWA, you need to create a "),C={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("Web app manifests"),g=(0,e.Uk)(" file and set the icons, colors, etc. for your PWA."),v=(0,e.Uk)("You need to put your manifest file and icons into the "),f=(0,e.Uk)("public files directory"),E=(0,e.Uk)(". In the following example, we assume that you are using the default public directory "),_=(0,e._)("code",null,".vuepress/public",-1),w=(0,e.Uk)("."),q=(0,e.uE)('<ol><li>Create manifest file</li></ol><p>Typically <code>.vuepress/public/manifest.webmanifest</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;short_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;description&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Vue-powered Static Site Generator&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/index.html&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;display&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;standalone&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;background_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#fff&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;theme_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#3eaf7c&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;icons&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-192x192.png&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;192x192&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-384x384.png&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;384x384&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="2"><li>Generate PWA icons</li></ol><p>To make your PWA more accessible, you need to generate some icons, and put them inside the public directory.</p><p>Make sure the path of icons matches the <code>icons</code> field in your manifest file:</p><ul><li><code>.vuepress/public/images/icons/android-chrome-192x192.png</code></li><li><code>.vuepress/public/images/icons/android-chrome-384x384.png</code></li></ul>',7),U={class:"custom-container tip"},F=(0,e._)("p",{class:"custom-container-title"},"提示",-1),W=(0,e.Uk)("Some tools can help to do that. For example, "),x={href:"https://realfavicongenerator.net/",target:"_blank",rel:"noopener noreferrer"},A=(0,e.Uk)("Favicon Generator"),P=(0,e.Uk)(" would help you to generate icons together with a sample manifest file."),S=(0,e._)("ol",{start:"3"},[(0,e._)("li",null,"Set tags in head")],-1),T=(0,e.Uk)("You also need to set some tags via "),z=(0,e.Uk)("head"),j=(0,e.Uk)(" option to "),I={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag",target:"_blank",rel:"noopener noreferrer"},B=(0,e.Uk)("deploy the manifest"),M=(0,e.Uk)(":"),G=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">head:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;link&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">rel:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;manifest&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">href:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;/manifest.webmanifest&#39;</span><span style="color:#D4D4D4;"> }],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;meta&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;theme-color&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#3eaf7c&#39;</span><span style="color:#D4D4D4;"> }],</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...other tags</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',2),R=(0,e.Uk)("This plugin accepts all parameters of workbox-build's "),V={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},Y=(0,e.Uk)("generateSW method"),O=(0,e.Uk)(" in its options, except "),L=(0,e._)("code",null,"globDirectory",-1),N=(0,e.Uk)(" and "),Z=(0,e._)("code",null,"swDest",-1),H=(0,e.Uk)("."),J=(0,e.uE)('<p>For example, you can set <code>skipWaiting: true</code> to auto activate the new service worker once it is ready:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/pwa&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">skipWaiting:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>But if you omit <code>skipWaiting</code> or set it to <code>false</code>, you have to activate the new service worker manually:</p>',3),K=(0,e.Uk)("For users, you can use our "),Q=(0,e.Uk)("pwa-popup"),X=(0,e.Uk)(" plugin together."),$=(0,e._)("li",null,[(0,e.Uk)("For developers, you can use our "),(0,e._)("a",{href:"#composition-api"},"composition API"),(0,e.Uk)(" to take control of the service worker behavior.")],-1),ss=(0,e._)("h3",{id:"serviceworkerfilename",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#serviceworkerfilename","aria-hidden":"true"},"#"),(0,e.Uk)(" serviceWorkerFilename")],-1),ns=(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("Type: "),(0,e._)("code",null,"string")])],-1),as=(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("Default: "),(0,e._)("code",null,"'service-worker.js'")])],-1),es=(0,e._)("p",null,"Details:",-1),ls=(0,e.Uk)("File path of the generated service worker file, which is relative to the "),ps=(0,e.Uk)("dest"),os=(0,e.Uk)(" directory."),rs=(0,e._)("p",null,[(0,e.Uk)("The service worker file will only be generated in "),(0,e._)("code",null,"build"),(0,e.Uk)(" mode.")],-1),ts=(0,e._)("h2",{id:"composition-api",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#composition-api","aria-hidden":"true"},"#"),(0,e.Uk)(" Composition API")],-1),cs=(0,e._)("h3",{id:"usepwaevent",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#usepwaevent","aria-hidden":"true"},"#"),(0,e.Uk)(" usePwaEvent")],-1),is=(0,e._)("p",null,"Details:",-1),Ds=(0,e._)("p",null,"Returns the event emitter of this plugin.",-1),us=(0,e.Uk)("You can add listener function to events that provided by "),ys={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},bs=(0,e.Uk)("register-service-worker"),ds=(0,e.Uk)("."),ms=(0,e._)("li",null,[(0,e._)("p",null,"Example:")],-1),hs=(0,e.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/lib/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;ready&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Service worker is active.&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    })</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="useskipwaiting" tabindex="-1"><a class="header-anchor" href="#useskipwaiting" aria-hidden="true">#</a> useSkipWaiting</h3><ul><li>Parameters:</li></ul><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>registration</td><td><code>ServiceWorkerRegistration</code></td><td>The registration of the service worker you want activate</td></tr></tbody></table>',4),Cs=(0,e._)("p",null,"Details:",-1),ks=(0,e.Uk)("Call "),gs={href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting",target:"_blank",rel:"noopener noreferrer"},vs=(0,e.Uk)("skipWaiting()"),fs=(0,e.Uk)(" to activate the waiting service worker."),Es=(0,e._)("li",null,[(0,e._)("p",null,"Example:")],-1),_s=(0,e.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">useSkipWaiting</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/lib/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;updated&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;The waiting service worker is available.&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// activate the waiting service worker</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">useSkipWaiting</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    })</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',1),ws={},qs=(0,a(3744).Z)(ws,[["render",function(s,n){const a=(0,e.up)("NpmBadge"),ws=(0,e.up)("OutboundLink"),qs=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e.Wm)(a,{package:"@vuepress/plugin-pwa"}),(0,e._)("p",null,[p,(0,e._)("a",o,[r,(0,e.Wm)(ws)]),t]),(0,e._)("p",null,[c,(0,e._)("a",i,[D,(0,e.Wm)(ws)]),u,(0,e._)("a",y,[b,(0,e.Wm)(ws)]),d]),m,(0,e._)("p",null,[h,(0,e._)("a",C,[k,(0,e.Wm)(ws)]),g]),(0,e._)("p",null,[v,(0,e.Wm)(qs,{to:"/guide/assets.html#public-files"},{default:(0,e.w5)((()=>[f])),_:1}),E,_,w]),q,(0,e._)("div",U,[F,(0,e._)("p",null,[W,(0,e._)("a",x,[A,(0,e.Wm)(ws)]),P])]),S,(0,e._)("p",null,[T,(0,e.Wm)(qs,{to:"/reference/config.html#head"},{default:(0,e.w5)((()=>[z])),_:1}),j,(0,e._)("a",I,[B,(0,e.Wm)(ws)]),M]),G,(0,e._)("p",null,[R,(0,e._)("a",V,[Y,(0,e.Wm)(ws)]),O,L,N,Z,H]),J,(0,e._)("ul",null,[(0,e._)("li",null,[K,(0,e.Wm)(qs,{to:"/reference/plugin/pwa-popup.html"},{default:(0,e.w5)((()=>[Q])),_:1}),X]),$]),ss,(0,e._)("ul",null,[ns,as,(0,e._)("li",null,[es,(0,e._)("p",null,[ls,(0,e.Wm)(qs,{to:"/reference/config.html#dest"},{default:(0,e.w5)((()=>[ps])),_:1}),os]),rs])]),ts,cs,(0,e._)("ul",null,[(0,e._)("li",null,[is,Ds,(0,e._)("p",null,[us,(0,e._)("a",ys,[bs,(0,e.Wm)(ws)]),ds])]),ms]),hs,(0,e._)("ul",null,[(0,e._)("li",null,[Cs,(0,e._)("p",null,[ks,(0,e._)("a",gs,[vs,(0,e.Wm)(ws)]),fs])]),Es]),_s],64)}]])}}]);