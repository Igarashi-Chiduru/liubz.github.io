"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8017],{5337:(s,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l={key:"v-744e6dd4",path:"/web/",title:"前端安全",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"XSS",slug:"xss",children:[{level:3,title:"如何攻击",slug:"如何攻击",children:[]},{level:3,title:"如何防御",slug:"如何防御",children:[]},{level:3,title:"CSP",slug:"csp",children:[]}]},{level:2,title:"CSRF",slug:"csrf",children:[{level:3,title:"如何攻击",slug:"如何攻击-1",children:[]},{level:3,title:"如何防御",slug:"如何防御-1",children:[]}]},{level:2,title:"密码安全",slug:"密码安全",children:[{level:3,title:"加盐",slug:"加盐",children:[]}]}],filePathRelative:"web/README.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,a)=>{a.Z=(s,a)=>{for(const[n,l]of a)s[n]=l;return s}},2691:(s,a,n)=>{n.r(a),n.d(a,{default:()=>I});var l=n(6252);const e=(0,l._)("h1",{id:"前端安全",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#前端安全","aria-hidden":"true"},"#"),(0,l.Uk)(" 前端安全")],-1),p=(0,l._)("strong",null,"Table of Contents",-1),o=(0,l.Uk)(),r=(0,l.Uk)("generated with "),t={href:"https://github.com/thlorenz/doctoc",target:"_blank",rel:"noopener noreferrer"},c=(0,l.Uk)("DocToc"),D=(0,l.uE)('<ul><li><a href="#xss">XSS</a><ul><li><a href="#%E5%A6%82%E4%BD%95%E6%94%BB%E5%87%BB">如何攻击</a></li><li><a href="#%E5%A6%82%E4%BD%95%E9%98%B2%E5%BE%A1">如何防御</a></li><li><a href="#csp">CSP</a></li></ul></li><li><a href="#csrf">CSRF</a><ul><li><a href="#%E5%A6%82%E4%BD%95%E6%94%BB%E5%87%BB-1">如何攻击</a></li><li><a href="#%E5%A6%82%E4%BD%95%E9%98%B2%E5%BE%A1-1">如何防御</a><ul><li><a href="#samesite">SameSite</a></li><li><a href="#%E9%AA%8C%E8%AF%81-referer">验证 Referer</a></li><li><a href="#token">Token</a></li></ul></li></ul></li><li><a href="#%E5%AF%86%E7%A0%81%E5%AE%89%E5%85%A8">密码安全</a><ul><li><a href="#%E5%8A%A0%E7%9B%90">加盐</a></li></ul></li></ul><h2 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h2>',2),i=(0,l._)("strong",null,"跨网站指令码",-1),y=(0,l.Uk)("（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程式的安全漏洞攻击，是"),d={href:"https://www.wikiwand.com/zh-hans/%E4%BB%A3%E7%A2%BC%E6%B3%A8%E5%85%A5",target:"_blank",rel:"noopener noreferrer"},u=(0,l.Uk)("代码注入"),C=(0,l.Uk)("的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。"),h=(0,l.uE)('<p>XSS 分为三种：反射型，存储型和 DOM-based</p><h3 id="如何攻击" tabindex="-1"><a class="header-anchor" href="#如何攻击" aria-hidden="true">#</a> 如何攻击</h3><p>XSS 通过修改 HTML 节点或者执行 JS 代码来攻击网站。</p><p>例如通过 URL 获取某些参数</p><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">&lt;!-- http://www.domain.com?name=&lt;script&gt;alert(1)&lt;/script&gt; --&gt;</span></span>\n<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{{name}}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">                                                  </span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上述 URL 输入可能会将 HTML 改为 <code>&lt;div&gt;&lt;script&gt;alert(1)&lt;/script&gt;&lt;/div&gt;</code> ，这样页面中就凭空多了一段可执行脚本。这种攻击类型是反射型攻击，也可以说是 DOM-based 攻击。</p><p>也有另一种场景，比如写了一篇包含攻击代码 <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> 的文章，那么可能浏览文章的用户都会被攻击到。这种攻击类型是存储型攻击，也可以说是 DOM-based 攻击，并且这种攻击打击面更广。</p><h3 id="如何防御" tabindex="-1"><a class="header-anchor" href="#如何防御" aria-hidden="true">#</a> 如何防御</h3><p>最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">escape</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">\t</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/&amp;/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;&amp;amp;&quot;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">\t</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/&lt;/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;&amp;lt;&quot;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">\t</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/&gt;/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;&amp;gt;&quot;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">\t</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/&quot;/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;&amp;quto;&quot;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">\t</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/&#39;/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;&amp;#39;&quot;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">\t</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/`/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;&amp;#96;&quot;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/</span><span style="color:#D7BA7D;">\\/</span><span style="color:#D16969;">/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;&amp;#x2F;&quot;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">str</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>通过转义可以将攻击代码 <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> 变成</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// -&gt; &amp;lt;script&amp;gt;alert(1)&amp;lt;&amp;#x2F;script&amp;gt;</span></span>\n<span class="line"><span style="color:#DCDCAA;">escape</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;&lt;script&gt;alert(1)&lt;/script&gt;&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">xss</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;xss&quot;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">html</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">xss</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;&lt;h1 id=&quot;title&quot;&gt;XSS Demo&lt;/h1&gt;&lt;script&gt;alert(&quot;xss&quot;);&lt;/script&gt;&#39;</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"><span style="color:#6A9955;">// -&gt; &lt;h1&gt;XSS Demo&lt;/h1&gt;&amp;lt;script&amp;gt;alert(&quot;xss&quot;);&amp;lt;/script&amp;gt;</span></span>\n<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">html</span><span style="color:#D4D4D4;">);</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>以上示例使用了 <code>js-xss</code> 来实现。可以看到在输出中保留了 <code>h1</code> 标签且过滤了 <code>script</code> 标签</p><h3 id="csp" tabindex="-1"><a class="header-anchor" href="#csp" aria-hidden="true">#</a> CSP</h3>',16),m=(0,l.Uk)("内容安全策略 ("),E={href:"https://developer.mozilla.org/en-US/docs/Glossary/CSP",target:"_blank",rel:"noopener noreferrer"},b=(0,l.Uk)("CSP"),g=(0,l.Uk)(") 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 ("),k={href:"https://developer.mozilla.org/en-US/docs/Glossary/XSS",target:"_blank",rel:"noopener noreferrer"},v=(0,l.Uk)("XSS"),A=(0,l.Uk)(") 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。"),f=(0,l.uE)('<p>我们可以通过 CSP 来尽量减少 XSS 攻击。CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的代码。</p><p>通常可以通过 HTTP Header 中的 <code>Content-Security-Policy</code> 来开启 CSP</p><ul><li><p>只允许加载本站资源</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Content-Security-Policy: default-src ‘self’\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>只允许加载 HTTPS 协议图片</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Content-Security-Policy: img-src https://*\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>允许加载任何来源框架</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Content-Security-Policy: child-src &#39;none&#39;\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul>',3),S=(0,l.Uk)("更多属性可以查看 "),x={href:"https://content-security-policy.com/",target:"_blank",rel:"noopener noreferrer"},F=(0,l.Uk)("这里"),q=(0,l._)("h2",{id:"csrf",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#csrf","aria-hidden":"true"},"#"),(0,l.Uk)(" CSRF")],-1),_=(0,l._)("strong",null,"跨站请求伪造",-1),B=(0,l.Uk)("（英语：Cross-site request forgery），也被称为 "),w=(0,l._)("strong",null,"one-click attack",-1),U=(0,l.Uk)(" 或者 "),R=(0,l._)("strong",null,"session riding",-1),P=(0,l.Uk)("，通常缩写为 "),T=(0,l._)("strong",null,"CSRF",-1),X=(0,l.Uk)(" 或者 "),j=(0,l._)("strong",null,"XSRF",-1),z=(0,l.Uk)("， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。["),W={href:"https://www.wikiwand.com/zh/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0#citenoteRistic1",target:"_blank",rel:"noopener noreferrer"},H=(0,l.Uk)("1]"),M=(0,l.Uk)(" 跟"),L={href:"https://www.wikiwand.com/zh/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"},G=(0,l.Uk)("跨網站指令碼"),O=(0,l.Uk)("（XSS）相比，"),Z=(0,l._)("strong",null,"XSS",-1),J=(0,l.Uk)(" 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。"),N=(0,l.uE)('<p>简单点说，CSRF 就是利用用户的登录态发起恶意请求。</p><h3 id="如何攻击-1" tabindex="-1"><a class="header-anchor" href="#如何攻击-1" aria-hidden="true">#</a> 如何攻击</h3><p>假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口</p><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">img</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;http://www.domain.com/xxx?comment=&#39;attack&#39;&quot;</span><span style="color:#808080;">/&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果接口是 Post 提交的，就相对麻烦点，需要用表单来提交接口</p><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">form</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">action</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;http://www.domain.com/xxx&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;CSRF&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">method</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;post&quot;</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">input</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;comment&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;attack&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">type</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;hidden&quot;</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">form</span><span style="color:#808080;">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="如何防御-1" tabindex="-1"><a class="header-anchor" href="#如何防御-1" aria-hidden="true">#</a> 如何防御</h3><p>防范 CSRF 可以遵循以下几种规则：</p><ol><li>Get 请求不对数据进行修改</li><li>不让第三方网站访问到用户 Cookie</li><li>阻止第三方网站请求接口</li><li>请求时附带验证信息，比如验证码或者 token</li></ol><h4 id="samesite" tabindex="-1"><a class="header-anchor" href="#samesite" aria-hidden="true">#</a> SameSite</h4><p>可以对 Cookie 设置 <code>SameSite</code> 属性。该属性设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。</p><h4 id="验证-referer" tabindex="-1"><a class="header-anchor" href="#验证-referer" aria-hidden="true">#</a> 验证 Referer</h4><p>对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。</p><h4 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h4><p>服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。</p><h2 id="密码安全" tabindex="-1"><a class="header-anchor" href="#密码安全" aria-hidden="true">#</a> 密码安全</h2><p>密码安全虽然大多是后端的事情，但是作为一名优秀的前端程序员也需要熟悉这方面的知识。</p><h3 id="加盐" tabindex="-1"><a class="header-anchor" href="#加盐" aria-hidden="true">#</a> 加盐</h3><p>对于密码存储来说，必然是不能明文存储在数据库中的，否则一旦数据库泄露，会对用户造成很大的损失。并且不建议只对密码单纯通过加密算法加密，因为存在彩虹表的关系。</p><p>通常需要对密码加盐，然后进行几次不同加密算法的加密。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// 加盐也就是给原密码添加字符串，增加原密码长度</span></span>\n<span class="line"><span style="color:#DCDCAA;">sha256</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">sha1</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">md5</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">salt</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">password</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">salt</span><span style="color:#D4D4D4;">)))</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但是加盐并不能阻止别人盗取账号，只能确保即使数据库泄露，也不会暴露用户的真实密码。一旦攻击者得到了用户的账号，可以通过暴力破解的方式破解密码。对于这种情况，通常使用验证码增加延时或者限制尝试次数的方式。并且一旦用户输入了错误的密码，也不能直接提示用户输错密码，而应该提示账号或密码错误。</p>',22),Y={},I=(0,n(3744).Z)(Y,[["render",function(s,a){const n=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e,(0,l._)("p",null,[p,o,(0,l._)("em",null,[r,(0,l._)("a",t,[c,(0,l.Wm)(n)])])]),D,(0,l._)("blockquote",null,[(0,l._)("p",null,[i,y,(0,l._)("a",d,[u,(0,l.Wm)(n)]),C])]),h,(0,l._)("blockquote",null,[(0,l._)("p",null,[m,(0,l._)("a",E,[b,(0,l.Wm)(n)]),g,(0,l._)("a",k,[v,(0,l.Wm)(n)]),A])]),f,(0,l._)("p",null,[S,(0,l._)("a",x,[F,(0,l.Wm)(n)])]),q,(0,l._)("blockquote",null,[(0,l._)("p",null,[_,B,w,U,R,P,T,X,j,z,(0,l._)("a",W,[H,(0,l.Wm)(n)]),M,(0,l._)("a",L,[G,(0,l.Wm)(n)]),O,Z,J])]),N],64)}]])}}]);