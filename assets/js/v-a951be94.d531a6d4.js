"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5065],{8007:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-a951be94",path:"/reference/cli.html",title:"Command Line Interface",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"dev",slug:"dev",children:[]},{level:2,title:"build",slug:"build",children:[]},{level:2,title:"info",slug:"info",children:[]}],filePathRelative:"reference/cli.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[e,a]of n)s[e]=a;return s}},8221:(s,n,e)=>{e.r(n),e.d(n,{default:()=>_});var a=e(6252);const l=(0,a._)("h1",{id:"command-line-interface",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#command-line-interface","aria-hidden":"true"},"#"),(0,a.Uk)(" Command Line Interface")],-1),p=(0,a.Uk)("VuePress CLI is provided by "),r={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("@vuepress/cli"),c=(0,a.Uk)(" package. It is a dependency of the "),o={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("vuepress"),u=(0,a.Uk)(" package, and you can also install it separately."),b=(0,a.uE)('<p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress &lt;command&gt; [options]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Commands:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  dev [sourceDir]    Start development server</span></span>\n<span class="line"><span style="color:#D4D4D4;">  build [sourceDir]  Build to static site</span></span>\n<span class="line"><span style="color:#D4D4D4;">  info               Display environment information</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">For more info, run any </span><span style="color:#DCDCAA;">command</span><span style="color:#D4D4D4;"> with the </span><span style="color:#CE9178;">`--help`</span><span style="color:#D4D4D4;"> flag:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress dev --help</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress build --help</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress info --help</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Options:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  -v, --version  Display version number </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -h, --help     Display this message </span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',2),d={class:"custom-container tip"},D=(0,a._)("p",{class:"custom-container-title"},"提示",-1),m=(0,a.Uk)("VuePress is using "),h={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("debug"),f=(0,a.Uk)(" module."),v=(0,a._)("p",null,[(0,a.Uk)("Set environment variable "),(0,a._)("code",null,"DEBUG=vuepress*"),(0,a.Uk)(" to enable debug logs.")],-1),g=(0,a.uE)('<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress dev [sourceDir]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Options:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  -c, --config &lt;config&gt;  Set path to config file </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -p, --port &lt;port&gt;      Use specified port (default: 8080) </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --host &lt;host&gt;          Use specified host (default: 0.0.0.0) </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --cache &lt;cache&gt;        Set the directory of the cache files </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --clean-temp           Clean the temporary files before dev </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --clean-cache          Clean the cache files before dev </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --open                 Open browser when ready </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --debug                Enable debug mode </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --no-watch             Disable watching page and config files (default: true)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  -v, --version          Display version number </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -h, --help             Display this message</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2>',5),k=(0,a.Uk)("Build your VuePress site to static files, which are ready for "),w=(0,a.Uk)("deployment"),U=(0,a.Uk)("."),C=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress build [sourceDir]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Options:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  -c, --config &lt;config&gt;  Set path to config file </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -d, --dest &lt;dest&gt;      Set the directory build output (default: .vuepress/dist) </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --cache &lt;cache&gt;        Set the directory of the cache files </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --clean-temp           Clean the temporary files before build </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --clean-cache          Clean the cache files before build </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --debug                Enable debug mode </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -v, --version          Display version number </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -h, --help             Display this message</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>',5),E={},_=(0,e(3744).Z)(E,[["render",function(s,n){const e=(0,a.up)("NpmBadge"),E=(0,a.up)("OutboundLink"),_=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a.Wm)(e,{package:"@vuepress/cli"}),(0,a._)("p",null,[p,(0,a._)("a",r,[i,(0,a.Wm)(E)]),c,(0,a._)("a",o,[t,(0,a.Wm)(E)]),u]),b,(0,a._)("div",d,[D,(0,a._)("p",null,[m,(0,a._)("a",h,[y,(0,a.Wm)(E)]),f]),v]),g,(0,a._)("p",null,[k,(0,a.Wm)(_,{to:"/guide/deployment.html"},{default:(0,a.w5)((()=>[w])),_:1}),U]),C],64)}]])}}]);