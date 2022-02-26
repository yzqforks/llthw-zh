import{_ as r,r as o,o as l,c as t,a as e,b as a,F as c,d as n,e as i}from"./app.91d0dc40.js";const d={},h=e("h1",{id:"\u7EC3\u4E60-10-bash-\u7A0B\u5E8F\u9000\u51FA\u4EE3\u7801-\u8FD4\u56DE\u72B6\u6001",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7EC3\u4E60-10-bash-\u7A0B\u5E8F\u9000\u51FA\u4EE3\u7801-\u8FD4\u56DE\u72B6\u6001","aria-hidden":"true"},"#"),n(" \u7EC3\u4E60 10\uFF1ABash\uFF1A\u7A0B\u5E8F\u9000\u51FA\u4EE3\u7801\uFF08\u8FD4\u56DE\u72B6\u6001\uFF09")],-1),p=n("\u539F\u6587\uFF1A"),u={href:"https://archive.fo/ygzso",target:"_blank",rel:"noopener noreferrer"},_=n("Exercise 10. Bash: program exit code (return status)"),b=n("\u8BD1\u8005\uFF1A"),m={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},x=n("\u98DE\u9F99"),g=n("\u534F\u8BAE\uFF1A"),f={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},v=n("CC BY-NC-SA 4.0"),k=n("\u81EA\u8C6A\u5730\u91C7\u7528"),B={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},$=n("\u8C37\u6B4C\u7FFB\u8BD1"),N=e("p",null,[n("\u8BA9\u6211\u4EEC\u5047\u8BBE\u4F60\u8981\u590D\u5236\u4E00\u4E2A\u76EE\u5F55\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u952E\u5165"),e("code",null,"cp -vR /old/dir/path /new/dir/path"),n("\u6765\u6267\u884C\u6B64\u64CD\u4F5C\u3002\u53D1\u51FA\u6B64\u547D\u4EE4\u540E\uFF0C\u4F60\u53EF\u80FD\u60F3\u77E5\u9053\u5982\u4F55\u8FDB\u884C\u3002\u76EE\u5F55\u662F\u5426\u88AB\u590D\u5236\uFF1F\u8FD8\u662F\u51FA\u73B0\u4E86\u4E00\u4E9B\u9519\u8BEF\uFF0C\u56E0\u4E3A\u76EE\u6807\u76EE\u5F55\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u6216\u5176\u4ED6\u51FA\u73B0\u9519\u8BEF\u7684\u4E1C\u897F\uFF1F")],-1),E=e("p",null,[n("\u4E3A\u4E86\u7406\u89E3\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF0C\u4F60\u5FC5\u987B\u4E86\u89E3\u4E24\u4E2A\u7A0B\u5E8F\u5982\u4F55\u901A\u4FE1\u3002\u6211\u4EEC\u5148\u8FD9\u6837\u8BF4\uFF0Cbash \u53EA\u662F\u53E6\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u6240\u4EE5\u4E00\u822C\u6765\u8BF4\uFF0C\u5F53\u4F60\u53D1\u51FA\u4E0A\u8FF0\u7684"),e("code",null,"cp"),n("\u547D\u4EE4\u65F6\uFF0C\u4E00\u4E2A\u7A0B\u5E8F\uFF08bash\uFF0C\u5B83\u662F\u7236\u8FDB\u7A0B\uFF09\u8C03\u7528\u4E86\u53E6\u4E00\u4E2A\u7A0B\u5E8F\uFF08"),e("code",null,"cp"),n("\uFF0C\u5B83\u662F\u5B50\u8FDB\u7A0B\uFF09\u3002")],-1),q=n("\u5728 Linux \u4E2D\uFF0C\u6709\u4E00\u4E2A\u6807\u51C6\u673A\u5236\uFF0C\u7528\u4E8E\u83B7\u53D6\u4ECE\u5B50\u8FDB\u7A0B\u5230\u7236\u8FDB\u7A0B\u7684\u4FE1\u606F\uFF0C\u8FD9\u4E2A\u673A\u5236\u79F0\u4E3A"),w={href:"http://en.wikipedia.org/wiki/Exit_status",target:"_blank",rel:"noopener noreferrer"},C=n("\u9000\u51FA\u72B6\u6001\u6216\u8FD4\u56DE\u4EE3\u7801"),V=n("\u3002\u901A\u8FC7\u4F7F\u7528\u8FD9\u79CD\u673A\u5236\uFF0C\u5F53\u5B50\u8FDB\u7A0B\u5B8C\u6210\u5176\u5DE5\u4F5C\u65F6\uFF0C\u4E00\u4E2A\u5C0F\u7684\u6570\u5B57\u4ECE\u5B50\u8FDB\u7A0B\uFF08\u6216\u88AB\u8C03\u7528\u8005\uFF0C\u8FD9\u91CC\u662F"),y=e("code",null,"cp",-1),L=n("\uFF09\u4F20\u9012\u7ED9\u7236\u8FDB\u7A0B\uFF08\u6216\u8C03\u7528\u8005\uFF0C\u8FD9\u91CC\u662F bash\uFF09\u3002\u5F53\u7A0B\u5E8F\u5728\u6267\u884C\u671F\u95F4\u6CA1\u9047\u5230\u9519\u8BEF\u65F6\uFF0C\u5B83\u8FD4\u56DE"),z=e("code",null,"0",-1),F=n("\uFF0C\u5982\u679C\u53D1\u751F\u67D0\u4E9B\u9519\u8BEF\uFF0C\u5219\u6B64\u4EE3\u7801\u4E0D\u4E3A\u96F6\u3002\u5C31\u662F\u8FD9\u4E48\u7B80\u5355\u3002Bash \u4E2D\u7684\u8FD9\u4E2A\u9000\u51FA\u4EE3\u7801\u4FDD\u5B58\u5230"),I=e("code",null,"?",-1),S=n("\u73AF\u5883\u53D8\u91CF\uFF0C\u4F60\u73B0\u5728\u77E5\u9053\u4E86\uFF0C\u53EF\u4EE5\u4F7F\u7528"),A=e("code",null,"$?",-1),R=n("\u6765\u8BBF\u95EE\u3002"),T=i(`<p>\u8BA9\u6211\u518D\u6B21\u91CD\u590D\u4E00\u4E0B\u6211\u73B0\u5728\u6240\u8BF4\u7684\u8BDD\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Bash \u7B49\u5F85\u4F60\u7684\u8F93\u5165
Bash \u89E3\u6790\u4F60\u7684\u8F93\u5165
Bash \u4E3A\u4F60\u542F\u52A8\u7A0B\u5E8F\uFF0C\u5E76\u7B49\u5F85\u8FD9\u4E2A\u7A0B\u5E8F\u9000\u51FA
    \u7A0B\u5E8F\u542F\u52A8
    \u7A0B\u5E8F\u505A\u4F60\u8BA9\u4ED6\u505A\u7684\u4E8B\u60C5
    \u7A0B\u5E8F\u751F\u6210\u4E86\u9000\u51FA\u4EE3\u7801
    \u7A0B\u5E8F\u9000\u51FA\u5E76\u4E14\u5C06\u9000\u51FA\u4EE3\u7801\u8FD4\u56DE\u7ED9 Bash
Bash \u5C06\u8FD9\u4E2A\u9000\u51FA\u4EE3\u7801\u8D4B\u7ED9\u53D8\u91CF ?
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u73B0\u5728\u4F60\u5B66\u5230\u4E86\u5982\u4F55\u6253\u5370\u51FA\u4F60\u7684\u7A0B\u5E8F\u7684\u9000\u51FA\u72B6\u6001\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1: ls
2: echo $?
3: ls /no/such/dir
4: echo $?
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ ls
hello.txt  ls.out
user1@vm1:~$ echo $?
0
user1@vm1:~$ ls /no/such/dir
ls: cannot access /no/such/dir: No such file or directory
user1@vm1:~$ echo $?
2
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ul><li>\u6253\u5370\u51FA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u6210\u529F\u3002</li><li>\u6253\u5370\u51FA<code>ls</code>\u7684\u9000\u51FA\u4EE3\u7801\uFF0C\u5B83\u662F<code>0</code>\uFF0C\u8FD9\u610F\u5473\u7740<code>ls</code>\u6CA1\u6709\u9047\u5230\u4EFB\u4F55\u9519\u8BEF\u3002</li><li>\u5C1D\u8BD5\u6253\u5370\u51FA\u4E0D\u5B58\u5728\u7684\u76EE\u5F55\uFF0C\u5F53\u7136\u5931\u8D25\u3002</li><li>\u6253\u5370<code>ls /no/such/dir</code>\u7684\u9000\u51FA\u4EE3\u7801\uFF0C\u5B83\u786E\u5B9E\u662F\u975E\u96F6\u3002</li></ul><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2><p>\u9605\u8BFB<code>man ls</code>\u7684\u9000\u51FA\u4EE3\u7801\u90E8\u5206\u3002</p>`,11);function Y(j,D){const s=o("ExternalLinkIcon");return l(),t(c,null,[h,e("blockquote",null,[e("p",null,[p,e("a",u,[_,a(s)])])]),e("blockquote",null,[e("p",null,[b,e("a",m,[x,a(s)])])]),e("blockquote",null,[e("p",null,[g,e("a",f,[v,a(s)])])]),e("blockquote",null,[e("p",null,[k,e("a",B,[$,a(s)])])]),N,E,e("p",null,[q,e("a",w,[C,a(s)]),V,y,L,z,F,I,S,A,R]),T],64)}var H=r(d,[["render",Y]]);export{H as default};