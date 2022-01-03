"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1428],{7476:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-e8a66a70",path:"/guide/deployment.html",title:"Deployment",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"GitHub Pages",slug:"github-pages",children:[]},{level:2,title:"GitLab Pages",slug:"gitlab-pages",children:[]},{level:2,title:"Google Firebase",slug:"google-firebase",children:[]},{level:2,title:"Heroku",slug:"heroku",children:[]},{level:2,title:"Netlify",slug:"netlify",children:[]},{level:2,title:"Vercel",slug:"vercel",children:[]}],filePathRelative:"guide/deployment.md",git:{updatedTime:1636880153e3,contributors:[{name:"lbz",email:"905808069@qq.com",commits:1}]}}},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}},6974:(s,n,a)=>{a.r(n),a.d(n,{default:()=>Ss});var l=a(6252);const e=(0,l._)("h1",{id:"deployment",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#deployment","aria-hidden":"true"},"#"),(0,l.Uk)(" Deployment")],-1),p=(0,l._)("p",null,"The following guides are based on some shared assumptions:",-1),o=(0,l._)("li",null,[(0,l.Uk)("You are placing your Markdown source files inside the "),(0,l._)("code",null,"docs"),(0,l.Uk)(" directory of your project;")],-1),r=(0,l._)("li",null,[(0,l.Uk)("You are using the default build output location ("),(0,l._)("code",null,".vuepress/dist"),(0,l.Uk)(");")],-1),c=(0,l.Uk)("You are using "),t={href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"},i=(0,l.Uk)("yarn classic"),D=(0,l.Uk)(" as package manager, while npm is also supported;"),u=(0,l._)("li",null,[(0,l.Uk)("VuePress is installed as a local dependency in your project, and you have setup the following script in "),(0,l._)("code",null,"package.json"),(0,l.Uk)(":")],-1),b=(0,l.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>',2),y=(0,l.Uk)("Set the correct "),d=(0,l.Uk)("base"),m=(0,l.Uk)(" config."),h=(0,l.uE)("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/</code>, you can omit this step as <code>base</code> defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),g=(0,l.Uk)("Choose your preferred CI tools. Here we take "),k={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},f=(0,l.Uk)("GitHub Actions"),_=(0,l.Uk)(" as an example."),C=(0,l._)("p",null,[(0,l.Uk)("Create "),(0,l._)("code",null,".github/workflows/docs.yml"),(0,l.Uk)(" to set up the workflow.")],-1),E=(0,l.uE)('<details class="custom-container details"><summary>Click to expand sample config</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># trigger deployment on every push to main branch</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">push</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">branches</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">main</span><span style="color:#D4D4D4;">]</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># trigger deployment manually</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">workflow_dispatch</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">jobs</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">docs</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">runs-on</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ubuntu-latest</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">steps</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/checkout@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># fetch all commits to get last updated time or other git log info</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">fetch-depth</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Setup Node.js</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/setup-node@v1</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># choose node.js version to use</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">node-version</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;14&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># cache node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Cache dependencies</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/cache@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn-cache</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>\n<span class="line"><span style="color:#CE9178;">            **/node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">${{ runner.os }}-yarn-${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">restore-keys</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>\n<span class="line"><span style="color:#CE9178;">            ${{ runner.os }}-yarn-</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># install dependencies if the cache did not hit</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Install dependencies</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">if</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># run build script</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Build VuePress site</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn docs:build</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># please check out the docs of the workflow for more details</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Deploy to GitHub Pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">crazy-max/ghaction-github-pages@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># deploy to gh-pages branch</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">target_branch</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">gh-pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># deploy the default output dir of VuePress</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">build_dir</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs/.vuepress/dist</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">env</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">GITHUB_TOKEN</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">${{ secrets.GITHUB_TOKEN }}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div></details>',1),U={class:"custom-container tip"},v=(0,l._)("p",{class:"custom-container-title"},"提示",-1),w=(0,l.Uk)("Please refer to "),q={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},A=(0,l.Uk)("GitHub Pages official guide"),j=(0,l.Uk)(" for more details."),x=(0,l._)("h2",{id:"gitlab-pages",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),(0,l.Uk)(" GitLab Pages")],-1),P=(0,l.Uk)("Set the correct "),R=(0,l.Uk)("base"),H=(0,l.Uk)(" config."),I=(0,l.uE)("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/</code>, you can omit <code>base</code> as it defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),N=(0,l.Uk)("Create "),W=(0,l._)("code",null,".gitlab-ci.yml",-1),G=(0,l.Uk)(" to set up "),F={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},O=(0,l.Uk)("GitLab CI"),S=(0,l.Uk)(" workflow."),L=(0,l.uE)('<details class="custom-container details"><summary>Click to expand sample config</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># choose a docker image to use</span></span>\n<span class="line"><span style="color:#569CD6;">image</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">node:14-buster</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">pages</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># trigger deployment on every push to main branch</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">only</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">main</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># cache node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">cache</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">node_modules/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># install dependencies and run build script</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn docs:build --dest public</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">artifacts</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">public</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details>',1),M={class:"custom-container tip"},V=(0,l._)("p",{class:"custom-container-title"},"提示",-1),T=(0,l.Uk)("Please refer to "),z={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},B=(0,l.Uk)("GitLab Pages official guide"),Y=(0,l.Uk)(" for more details."),$=(0,l._)("h2",{id:"google-firebase",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),(0,l.Uk)(" Google Firebase")],-1),K=(0,l.Uk)("Make sure you have "),Z={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},J=(0,l.Uk)("firebase-tools"),Q=(0,l.Uk)(" installed."),X=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Create "),(0,l._)("code",null,"firebase.json"),(0,l.Uk)(" and "),(0,l._)("code",null,".firebaserc"),(0,l.Uk)(" at the root of your project with the following content:")])],-1),ss=(0,l.uE)('<p><code>firebase.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;hosting&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;public&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;ignore&quot;</span><span style="color:#D4D4D4;">: []</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>.firebaserc</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;projects&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;default&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>After running <code>yarn docs:build</code>, deploy using the command <code>firebase deploy</code>.</li></ol>',5),ns={class:"custom-container tip"},as=(0,l._)("p",{class:"custom-container-title"},"提示",-1),ls=(0,l.Uk)("Please refer to "),es={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},ps=(0,l.Uk)("Firebase CLI official guide"),os=(0,l.Uk)(" for more details."),rs=(0,l._)("h2",{id:"heroku",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),(0,l.Uk)(" Heroku")],-1),cs=(0,l.Uk)("Install "),ts={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},is=(0,l.Uk)("Heroku CLI"),Ds=(0,l.Uk)("."),us=(0,l.Uk)("Create a Heroku account by "),bs={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},ys=(0,l.Uk)("signing up"),ds=(0,l.Uk)("."),ms=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Run "),(0,l._)("code",null,"heroku login"),(0,l.Uk)(" and fill in your Heroku credentials:")])],-1),hs=(0,l.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">heroku login</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Create a file called <code>static.json</code> in the root of your project with the below content:</li></ol><p><code>static.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;root&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',4),gs=(0,l.Uk)("This is the configuration of your site; read more at "),ks={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},fs=(0,l.Uk)("heroku-buildpack-static"),_s=(0,l.Uk)("."),Cs=(0,l._)("h2",{id:"netlify",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),(0,l.Uk)(" Netlify")],-1),Es=(0,l.Uk)("On "),Us={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},vs=(0,l.Uk)("Netlify"),ws=(0,l.Uk)(", set up a new project from GitHub with the following settings:"),qs=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("strong",null,"Build Command:"),(0,l.Uk)(),(0,l._)("code",null,"yarn docs:build")]),(0,l._)("li",null,[(0,l._)("strong",null,"Publish directory:"),(0,l.Uk)(),(0,l._)("code",null,"docs/.vuepress/dist")])],-1),As=(0,l.Uk)("Set "),js={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},xs=(0,l.Uk)("Environment variables"),Ps=(0,l.Uk)(" to choose node version:"),Rs=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("code",null,"NODE_VERSION"),(0,l.Uk)(": 14")])],-1),Hs=(0,l._)("li",null,[(0,l._)("p",null,"Hit the deploy button.")],-1),Is=(0,l._)("h2",{id:"vercel",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),(0,l.Uk)(" Vercel")],-1),Ns=(0,l.Uk)("See "),Ws={href:"https://vercel.com/guides/deploying-vuepress-to-vercel",target:"_blank",rel:"noopener noreferrer"},Gs=(0,l.Uk)("Creating and Deploying a VuePress App with Vercel"),Fs=(0,l.Uk)("."),Os={},Ss=(0,a(3744).Z)(Os,[["render",function(s,n){const a=(0,l.up)("OutboundLink"),Os=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e,p,(0,l._)("ul",null,[o,r,(0,l._)("li",null,[c,(0,l._)("a",t,[i,(0,l.Wm)(a)]),D]),u]),b,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[y,(0,l.Wm)(Os,{to:"/reference/config.html#base"},{default:(0,l.w5)((()=>[d])),_:1}),m]),h]),(0,l._)("li",null,[(0,l._)("p",null,[g,(0,l._)("a",k,[f,(0,l.Wm)(a)]),_]),C])]),E,(0,l._)("div",U,[v,(0,l._)("p",null,[w,(0,l._)("a",q,[A,(0,l.Wm)(a)]),j])]),x,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[P,(0,l.Wm)(Os,{to:"/reference/config.html#base"},{default:(0,l.w5)((()=>[R])),_:1}),H]),I]),(0,l._)("li",null,[(0,l._)("p",null,[N,W,G,(0,l._)("a",F,[O,(0,l.Wm)(a)]),S])])]),L,(0,l._)("div",M,[V,(0,l._)("p",null,[T,(0,l._)("a",z,[B,(0,l.Wm)(a)]),Y])]),$,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[K,(0,l._)("a",Z,[J,(0,l.Wm)(a)]),Q])]),X]),ss,(0,l._)("div",ns,[as,(0,l._)("p",null,[ls,(0,l._)("a",es,[ps,(0,l.Wm)(a)]),os])]),rs,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[cs,(0,l._)("a",ts,[is,(0,l.Wm)(a)]),Ds])]),(0,l._)("li",null,[(0,l._)("p",null,[us,(0,l._)("a",bs,[ys,(0,l.Wm)(a)]),ds])]),ms]),hs,(0,l._)("p",null,[gs,(0,l._)("a",ks,[fs,(0,l.Wm)(a)]),_s]),Cs,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[Es,(0,l._)("a",Us,[vs,(0,l.Wm)(a)]),ws]),qs]),(0,l._)("li",null,[(0,l._)("p",null,[As,(0,l._)("a",js,[xs,(0,l.Wm)(a)]),Ps]),Rs]),Hs]),Is,(0,l._)("p",null,[Ns,(0,l._)("a",Ws,[Gs,(0,l.Wm)(a)]),Fs])],64)}]])}}]);