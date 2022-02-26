import{_ as i,r as l,o as c,c as r,a as e,b as a,F as o,d as n,e as d}from"./app.91d0dc40.js";const p={},t=e("h1",{id:"\u7EC3\u4E60-14-\u5305\u7BA1\u7406-debian-\u5305\u7BA1\u7406\u5DE5\u5177aptitude",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7EC3\u4E60-14-\u5305\u7BA1\u7406-debian-\u5305\u7BA1\u7406\u5DE5\u5177aptitude","aria-hidden":"true"},"#"),n(" \u7EC3\u4E60 14\uFF1A\u5305\u7BA1\u7406\uFF1ADebian \u5305\u7BA1\u7406\u5DE5\u5177"),e("code",null,"aptitude")],-1),b=n("\u539F\u6587\uFF1A"),m={href:"https://archive.fo/NUuCN",target:"_blank",rel:"noopener noreferrer"},u=n("Exercise 14. Package management: Debian package management utility aptitude"),g=n("\u8BD1\u8005\uFF1A"),h={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},f=n("\u98DE\u9F99"),_=n("\u534F\u8BAE\uFF1A"),v={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},k=n("CC BY-NC-SA 4.0"),x=n("\u81EA\u8C6A\u5730\u91C7\u7528"),w={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},y=n("\u8C37\u6B4C\u7FFB\u8BD1"),D=d(`<p>\u73B0\u5728\u662F\u65F6\u5019\u83B7\u5F97\u4E00\u4E9B\u795E\u5723\u7684\u77E5\u8BC6\uFF0C\u5411 Linux \u7CFB\u7EDF\u6DFB\u52A0\u65B0\u7A0B\u5E8F\u4E86\u3002Linux \u4E2D\u7684\u7A0B\u5E8F\u79F0\u4E3A\u8F6F\u4EF6\u5305\uFF0C\u901A\u5E38\u901A\u8FC7\u79F0\u4F5C\u5305\u7BA1\u7406\u5668\u7684\u5DE5\u5177\uFF0C\u4ECE\u7F51\u7EDC\u4ED3\u5E93\u5B89\u88C5 \u3002</p><ul><li>\u8F6F\u4EF6\u5305\u901A\u5E38\u662F\u4E00\u4E2A\u538B\u7F29\u7684\u7A0B\u5E8F\uFF0C\u4F60\u53EF\u4EE5\u50CF\u8FD9\u6837\u5B89\u88C5\u8F6F\u4EF6\u5305\uFF1A<code>aptitude install program...</code>\u3002\u4E3A\u4E86\u907F\u514D\u5B89\u88C5\u6076\u610F\u7A0B\u5E8F\uFF0C\u6240\u6709\u8F6F\u4EF6\u5305\u90FD\u7531\u5176\u521B\u5EFA\u8005\u8FDB\u884C\u6570\u5B57\u7B7E\u540D\uFF0C\u8FD9\u610F\u5473\u7740\uFF0C\u5982\u679C\u8F6F\u4EF6\u5305\u5728\u521B\u5EFA\u540E\u4FEE\u6539\uFF0C\u5305\u7BA1\u7406\u5668\u4E0D\u5141\u8BB8\u4F60\u5B89\u88C5\u5B83\u3002</li><li>\u5305\u7BA1\u7406\u5668\u662F\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u5141\u8BB8\u4F60\u5B89\u88C5\u5176\u4ED6\u7A0B\u5E8F\u3002\u8BB8\u591A\u7A0B\u5E8F\u4F9D\u8D56\u4E8E\u5176\u4ED6\u7A0B\u5E8F\uFF0C\u4F8B\u5982\u4F7F\u7528\u5BF9\u8BDD\u7A97\u53E3\u7684\u7A0B\u5E8F\u901A\u5E38\u9700\u8981\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u5B83\u77E5\u9053\u5982\u4F55\u7ED8\u5236\u8FD9\u4E9B\u7A97\u53E3\u3002\u5305\u7BA1\u7406\u5668\u77E5\u9053\u8FD9\u4E9B\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5F53\u4F60\u8981\u6C42\u5B83\u5B89\u88C5\u4E00\u4E2A\u7279\u5B9A\u7684\u7A0B\u5E8F\u65F6\uFF0C\u5B83\u4F1A\u5B89\u88C5\u6240\u9700\u7684\u6240\u6709\u7A0B\u5E8F\uFF0C\u4F60\u8981\u6C42\u7684\u7A0B\u5E8F\u9700\u8981\u8FD9\u4E9B\u7A0B\u5E8F\u6765\u5DE5\u4F5C\u3002Debian \u5305\u7BA1\u7406\u5668\u79F0\u4E3A<code>aptitude</code>\u3002</li></ul><p>\u7F51\u7EDC\u4ED3\u5E93\u662F\u4E00\u4E2A\u5305\u542B\u8BB8\u591A\u8F6F\u4EF6\u5305\u7684\u7AD9\u70B9\uFF0C\u53EF\u4EE5\u968F\u65F6\u5B89\u88C5\u3002</p><p>\u8FD9\u662F\u7A0B\u5E8F\u5B89\u88C5\u7684\u5178\u578B\u6982\u8FF0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F60
   \u4F7F\u7528\u5305\u7BA1\u7406\u5668\u641C\u7D22\u53EF\u7528\u7684\u7A0B\u5E8F
   \u8BF7\u6C42\u5305\u7BA1\u7406\u5668\u5B89\u88C5\u7A0B\u5E8F
\u5305\u7BA1\u7406\u5668
    \u67E5\u627E\u5B89\u88C5\u5F53\u524D\u7A0B\u5E8F\u6240\u9700\u7684\u6240\u6709\u7A0B\u5E8F
    \u5728\u5305\u7BA1\u7406\u5668\u6570\u636E\u5E93\u4E2D\uFF0C\u4E3A\u5B89\u88C5\u6807\u8BB0\u5B83\u4EEC
    \u5B89\u88C5\u6240\u6709\u9700\u8981\u7684\u7A0B\u5E8F\uFF0C\u5305\u62EC\u4F60\u6240\u9700\u7684\u7A0B\u5E8F
        \u4E0B\u8F7D\u6240\u6709\u9700\u8981\u7684\u7A0B\u5E8F
        \u4ECE\u8FD9\u4E9B\u8F6F\u4EF6\u5305\u63D0\u53D6\u6587\u4EF6\uFF0C\u653E\u5230\u7531 FHS \u6807\u51C6\u5B9A\u4E49\u7684\uFF0C\u7CFB\u7EDF\u4E0A\u7684\u4F4D\u7F6E
            \u5BF9\u4E8E\u6BCF\u4E2A\u7A0B\u5E8F\uFF0C\u8FD0\u884C\u4E00\u4E2A\u7279\u6B8A\u7684\u5B89\u88C5\u811A\u672C\uFF0C\u5141\u8BB8\u5B83\u6267\u884C\u521D\u59CB\u64CD\u4F5C\uFF1A
                \u521B\u5EFA\u76EE\u5F55
                \u521B\u5EFA\u6570\u636E\u5E93
                \u751F\u6210\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6
                ...... 
    \u901A\u8FC7\u5C06\u5DF2\u5B89\u88C5\u7A0B\u5E8F\u7684\u72B6\u6001\u4FEE\u6539\u4E3A\u5DF2\u5B89\u88C5\uFF0C\u66F4\u65B0\u7CFB\u7EDF\u5305\u7684\u6570\u636E\u5E93
\u4F60
    \u80FD\u591F\u7ACB\u5373\u8FD0\u884C\u4F60\u65B0\u5B89\u88C5\u7684\u7A0B\u5E8F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u73B0\u5728\u662F\u65F6\u5019\u4E86\u89E3\u63D0\u53D6\u6587\u4EF6\u7684\u4F4D\u7F6E\u3002\u5728 Linux \u4E2D\uFF0C\u6240\u6709\u76F8\u540C\u7C7B\u578B\u7684\u6587\u4EF6\u90FD\u5B89\u88C5\u5728\u76F8\u540C\u7684\u4F4D\u7F6E\u3002\u4F8B\u5982\uFF0C\u6240\u6709\u7A0B\u5E8F\u7684\u53EF\u6267\u884C\u6587\u4EF6\u90FD\u5B89\u88C5\u5728<code>/usr/bin</code>\u4E2D\uFF0C\u7A0B\u5E8F\u7684\u6587\u6863\u5728<code>/usr/share/doc</code>\u4E2D\uFF0C\u4EE5\u53CA\u5176\u5B83\u3002\u8FD9\u53EF\u80FD\u542C\u8D77\u6765\u6709\u70B9\u51CC\u4E71\uFF0C\u4F46\u5B83\u662F\u975E\u5E38\u6709\u7528\u7684\u3002\u4E00\u4E2A\u540D\u4E3A FHS \u7684\u6807\u51C6\u6587\u4EF6\u5B9A\u4E49\u4E86\u54EA\u4E9B\u6587\u4EF6\u5728\u54EA\u91CC\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528<code>man 7 hier</code>\u6765\u67E5\u770B\u5B83 \u3002\u6211\u5C06\u5728\u4E0B\u9762\u5411\u4F60\u663E\u793A\u201C\u6587\u4EF6\u7CFB\u7EDF\u5C42\u6B21\u6807\u51C6\u201D\u7248\u672C 2.2 \u7684\u7F29\u7565\u7248\u672C\uFF1A</p><ul><li><code>/</code> - \u8FD9\u662F\u6839\u76EE\u5F55\u3002\u8FD9\u662F\u6574\u68F5\u6811\u5F00\u59CB\u7684\u5730\u65B9\u3002</li><li><code>/bin</code> - \u6B64\u76EE\u5F55\u5305\u542B\u5728\u5355\u7528\u6237\u6A21\u5F0F\u4E0B\u9700\u8981\u7684\u53EF\u6267\u884C\u7A0B\u5E8F\uFF0C\u5E76\u5C06\u5176\u5347\u7EA7\u6216\u4FEE\u590D\u3002</li><li><code>/boot</code> - \u5305\u542B\u7528\u4E8E\u5F15\u5BFC\u7A0B\u5E8F\u7684\u9759\u6001\u6587\u4EF6\u3002\u8BE5\u76EE\u5F55\u4EC5\u4FDD\u5B58\u5F15\u5BFC\u8FC7\u7A0B\u6240\u9700\u7684\u6587\u4EF6\u3002\u6620\u5C04\u5B89\u88C5\u7A0B\u5E8F\u548C\u914D\u7F6E\u6587\u4EF6\u5E94\u8BE5\u653E\u5728<code>/sbin</code>\u548C<code>/etc</code>\u3002</li><li><code>/dev</code> - \u7279\u6B8A\u6216\u8BBE\u5907\u6587\u4EF6\uFF0C\u6307\u7684\u662F\u7269\u7406\u8BBE\u5907\u3002\u89C1<code>mknod(1)</code>\u3002</li><li><code>/etc</code> - \u5305\u542B\u673A\u5668\u672C\u5730\u7684\u914D\u7F6E\u6587\u4EF6\u3002</li><li><code>/home</code> - \u5728\u5177\u6709\u7528\u6237\u4E3B\u76EE\u5F55\u7684\u673A\u5668\u4E0A\uFF0C\u8FD9\u4E9B\u901A\u5E38\u4F4D\u4E8E\u8BE5\u76EE\u5F55\u4E0B\u3002\u8BE5\u76EE\u5F55\u7684\u7ED3\u6784\u53D6\u51B3\u4E8E\u672C\u5730\u7BA1\u7406\u51B3\u7B56\u3002</li><li><code>/lib</code> - \u6B64\u76EE\u5F55\u5E94\u8BE5\u4FDD\u5B58\u5171\u4EAB\u5E93\uFF0C\u5B83\u4EEC\u662F\u542F\u52A8\u7CFB\u7EDF\u548C\u5728\u6839\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u8FD0\u884C\u547D\u4EE4\u6240\u5FC5\u9700\u7684\u3002</li><li><code>/media</code> - \u6B64\u76EE\u5F55\u5305\u542B\u53EF\u79FB\u52A8\u4ECB\u8D28\u7684\u6302\u8F7D\u70B9\uFF0C\u5982 CD \u548C DVD \u78C1\u76D8\u6216 USB \u8BB0\u5FC6\u68D2\u3002</li><li><code>/mnt</code> - \u6B64\u76EE\u5F55\u662F\u4E34\u65F6\u88C5\u8F7D\u7684\u6587\u4EF6\u7CFB\u7EDF\u7684\u6302\u8F7D\u70B9\u3002\u5728\u67D0\u4E9B\u53D1\u884C\u7248\u4E2D\uFF0C<code>/mnt</code>\u5305\u542B\u5B50\u76EE\u5F55\uFF0C\u7528\u4F5C\u591A\u4E2A\u4E34\u65F6\u6587\u4EF6\u7CFB\u7EDF\u7684\u6302\u8F7D\u70B9\u3002</li><li><code>/proc</code> - \u8FD9\u662F<code>proc</code>\u6587\u4EF6\u7CFB\u7EDF\u7684\u6302\u8F7D\u70B9\uFF0C\u5B83\u63D0\u4F9B\u8FD0\u884C\u8FDB\u7A0B\u548C\u5185\u6838\u7684\u4FE1\u606F\u3002\u8FD9\u4E2A\u4F2A\u6587\u4EF6\u7CFB\u7EDF\u5728<code>proc(5)</code>\u4E2D\u6709\u66F4\u8BE6\u7EC6\u7684\u63CF\u8FF0\u3002</li><li><code>/root</code> - \u6B64\u76EE\u5F55\u901A\u5E38\u662F<code>root</code>\u7528\u6237\u7684\u4E3B\u76EE\u5F55\uFF08\u53EF\u9009\uFF09\u3002</li><li><code>/sbin</code> - \u7C7B\u4F3C<code>/bin</code>\uFF0C\u6B64\u76EE\u5F55\u5305\u542B\u542F\u52A8\u7CFB\u7EDF\u6240\u9700\u7684\u547D\u4EE4\uFF0C\u4F46\u901A\u5E38\u4E0D\u4F1A\u7531\u666E\u901A\u7528\u6237\u6267\u884C\u3002</li><li><code>/srv</code> - \u6B64\u76EE\u5F55\u5305\u542B\u7531\u8BE5\u7CFB\u7EDF\u63D0\u4F9B\u7684\uFF0C\u7AD9\u70B9\u7279\u5B9A\u7684\u6570\u636E\u3002</li><li><code>/tmp</code> - \u6B64\u76EE\u5F55\u5305\u542B\u4E34\u65F6\u6587\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u5728\u6CA1\u6709\u901A\u77E5\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C\u5220\u9664\uFF0C\u4F8B\u5982\u901A\u8FC7\u666E\u901A\u4EFB\u52A1\u6216\u5728\u7CFB\u7EDF\u542F\u52A8\u65F6\u5220\u9664\u3002</li><li><code>/usr</code> - \u6B64\u76EE\u5F55\u901A\u5E38\u662F\u4ECE\u5355\u72EC\u7684\u5206\u533A\u6302\u8F7D\u7684\u3002\u5B83\u5E94\u8BE5\u53EA\u4FDD\u5B58\u53EF\u5171\u4EAB\u7684\u53EA\u8BFB\u6570\u636E\uFF0C\u4EE5\u4FBF\u5B83\u53EF\u4EE5\u7531\u8FD0\u884C Linux \u7684\u5404\u79CD\u673A\u5668\u6765\u6302\u8F7D\u3002</li><li><code>/usr/bin</code> - \u8FD9\u662F\u53EF\u6267\u884C\u7A0B\u5E8F\u7684\u4E3B\u76EE\u5F55\u3002\u666E\u901A\u7528\u6237\u6267\u884C\u7684\u5927\u591A\u6570\u7A0B\u5E8F\u4E0D\u9700\u8981\u542F\u52A8\u6216\u4FEE\u590D\u7CFB\u7EDF\uFF0C\u5B83\u4EEC\u4E0D\u5728\u672C\u5730\u5B89\u88C5\uFF0C\u5E76\u4E14\u5E94\u653E\u5728\u8BE5\u76EE\u5F55\u4E2D\u3002</li><li><code>/usr/local</code> - \u8FD9\u662F\u7AD9\u70B9\u672C\u5730\u7684\u7A0B\u5E8F\u7684\u901A\u5E38\u4F4D\u7F6E\u3002</li><li><code>/usr/share</code> - \u6B64\u76EE\u5F55\u5305\u542B\u5177\u6709\u7279\u5B9A\u5E94\u7528\u7A0B\u5E8F\u6570\u636E\u7684\u5B50\u76EE\u5F55\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4E0D\u540C\u67B6\u6784\u4E4B\u95F4\u5171\u4EAB\u3002\u901A\u5E38\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\uFF0C\u4EE5\u524D\u5B58\u5728\u4E8E<code>/usr/doc</code>\u6216<code>/usr/ lib</code>\u6216<code>/usr/man</code>\u4E2D\u7684\u4E1C\u897F\u3002</li><li><code>/usr/share/doc</code> - \u5DF2\u5B89\u88C5\u7A0B\u5E8F\u7684\u6587\u6863\u3002</li><li><code>/var</code> - \u6B64\u76EE\u5F55\u5305\u542B\u53EF\u80FD\u4F1A\u66F4\u6539\u5927\u5C0F\u7684\u6587\u4EF6\uFF0C\u5982\u5047\u8131\u673A\u548C\u65E5\u5FD7\u6587\u4EF6\u3002</li><li><code>/var/log</code> - \u5176\u4ED6\u65E5\u5FD7\u6587\u4EF6\u3002</li><li><code>/var/spool</code> - \u5404\u79CD\u7A0B\u5E8F\u7684\u5047\u8131\u673A\uFF08\u6216\u6392\u961F\uFF09\u6587\u4EF6\u3002</li><li><code>/var/tmp</code> - \u7C7B\u4F3C<code>/tmp</code>\uFF0C\u6B64\u76EE\u5F55\u4FDD\u5B58\u4E34\u65F6\u6587\u4EF6\uFF0C\u4E0D\u77E5\u9053\u5B58\u50A8\u591A\u957F\u65F6\u95F4\u3002</li></ul><p>\u771F\u7684\u5F88\u957F\uFF0C\u4F46\u662F\u4F60\u4E0D\u9700\u8981\u8BB0\u4F4F\u5B83\uFF0C<code>man hier 7</code>\u603B\u662F\u5728\u90A3\u91CC\u3002\u73B0\u5728\u4F60\u53EA\u9700\u8981\u77E5\u9053<code>/usr/bin</code>\uFF0C<code>/usr/share</code>\u548C<code>/var/log</code>\u3002</p><p>\u8BA9\u6211\u4EEC\u518D\u8C08\u8C08\u8F6F\u4EF6\u5305\u548C\u5305\u7BA1\u7406\u5668\u3002\u9996\u5148\u8BA9\u6211\u4EEC\u91CD\u590D\u4E00\u4E0B\uFF1A</p><ul><li>\u6BCF\u4E2A\u7A0B\u5E8F\u90FD\u53EB\u505A\u8F6F\u4EF6\u5305\u3002</li><li>\u5305\u7BA1\u7406\u5668\u7BA1\u7406\u6240\u6709\u8F6F\u4EF6\u5305\uFF0C\u5373\u5B89\u88C5\u6216\u5378\u8F7D\u5B83\u4EEC\u3002</li><li>\u4E3A\u6B64\uFF0C\u5305\u7BA1\u7406\u5668\u62E5\u6709\u4E00\u4E2A\u5DF2\u5B89\u88C5\u548C\u53EF\u7528\u8F6F\u4EF6\u5305\u7684\u6570\u636E\u5E93\u3002</li></ul><p>\u6B64\u6570\u636E\u5E93\u4E2D\u7684\u6BCF\u4E2A\u5305\u90FD\u5177\u6709\u72B6\u6001\uFF0C\u6307\u793A\u662F\u5426\u5B89\u88C5\u4E86\u8F6F\u4EF6\u5305\uFF0C\u8F6F\u4EF6\u5305\u662F\u5426\u53EF\u4EE5\u66F4\u65B0\uFF0C\u4EE5\u53CA\u5176\u5B83\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u952E\u5165<code>dpkg -l</code>\u6253\u5370\u5F53\u524D\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\u3002\u793A\u4F8B\u8F93\u51FA\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ dpkg -l | head | less -S
Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name                      Version                Description
+++-=====================-====================-========================================================
ii  acpi                  1.5-2                displays information on ACPI devices
ii  acpi-support-base     0.137-5              scripts for handling base ACPI  events such as the power
ii  acpid                 1:2.0.7-1squeeze4    Advanced Configuration and Power Interface event daemon
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E9B\u72B6\u6001\u663E\u793A\u5728\u524D\u4E09\u5217\u4E2D\u3002\u4ECE\u8FD9\u4E2A\u8F93\u51FA\u53EF\u4EE5\u770B\u51FA\uFF0C\u6240\u6709\u7684\u5305\u90FD\u9700\u8981\u5B89\u88C5\uFF0C\u6216\u8005\u786E\u5B9E\u5DF2\u5B89\u88C5\uFF0C\u6CA1\u6709\u9519\u8BEF\uFF0C\u56E0\u4E3A\u7B2C\u4E09\u5217\u662F\u7A7A\u7684\u3002\u4EE5\u4E0B\u662F\u6240\u6709\u53EF\u80FD\u7684\u5305\u72B6\u6001\u5217\u8868\u3002</p><p>\u7B2C\u4E00\u5217\u3002\u9884\u671F\u7684\u64CD\u4F5C\uFF0C\u6211\u4EEC\u60F3\u8981\u5BF9\u8F6F\u4EF6\u5305\u505A\u7684\u4E8B\u60C5\uFF1A</p><ul><li><code>u</code> = \u672A\u77E5\uFF08\u672A\u77E5\u72B6\u6001\uFF09</li><li><code>i</code> = \u5B89\u88C5\u3002\u9009\u62E9\u8BE5\u8F6F\u4EF6\u5305\u8FDB\u884C\u5B89\u88C5\u3002</li><li><code>r</code> = \u9009\u62E9\u8BE5\u8F6F\u4EF6\u5305\u8FDB\u884C\u5378\u8F7D\uFF08\u5373\u6211\u4EEC\u8981\u5220\u9664\u6240\u6709\u6587\u4EF6\uFF0C\u4F46\u914D\u7F6E\u6587\u4EF6\u9664\u5916\uFF09\u3002</li><li><code>p</code> = \u6E05\u7406 \u9009\u62E9\u8F6F\u4EF6\u5305\u8FDB\u884C\u6E05\u7406\uFF08\u5373\u6211\u4EEC\u8981\u4ECE\u7CFB\u7EDF\u76EE\u5F55\uFF0C\u751A\u81F3\u914D\u7F6E\u6587\u4EF6\u4E2D\u5220\u9664\u6240\u6709\u4E1C\u897F\uFF09\u3002</li><li><code>h</code> = \u6807\u8BB0\u4E3A\u4FDD\u7559\u7684\u5305\uFF0C\u4E0D\u7531<code>dpkg</code>\u5904\u7406\uFF0C\u9664\u975E\u5F3A\u5236\u4F7F\u7528\u9009\u9879<code>-force-hold</code>\u3002</li></ul><p>\u7B2C\u4E8C\u5217\u3002\u8F6F\u4EF6\u5305\u72B6\u6001\uFF0C\u8F6F\u4EF6\u5305\u76EE\u524D\u662F\u4EC0\u4E48\u72B6\u6001\uFF1A</p><ul><li><code>n</code> = \u672A\u5B89\u88C5\u3002\u8BE5\u8F6F\u4EF6\u5305\u672A\u5B89\u88C5\u5728\u4F60\u7684\u7CFB\u7EDF\u4E0A\u3002</li><li><code>c</code> = \u914D\u7F6E\u6587\u4EF6\u3002\u7CFB\u7EDF\u4E0A\u53EA\u5B58\u5728\u8BE5\u5305\u7684\u914D\u7F6E\u6587\u4EF6\u3002</li><li><code>H</code> = \u534A\u5B89\u88C5\u3002\u5305\u7684\u5B89\u88C5\u5DF2\u7ECF\u542F\u52A8\uFF0C\u4F46\u7531\u4E8E\u67D0\u79CD\u539F\u56E0\u672A\u5B8C\u6210\u3002</li><li><code>U</code> = \u5DF2\u89E3\u538B\u7F29\u3002\u8BE5\u8F6F\u4EF6\u5305\u5DF2\u89E3\u538B\u7F29\uFF0C\u4F46\u672A\u914D\u7F6E\u3002</li><li><code>F</code> = \u534A\u914D\u7F6E\u3002\u8F6F\u4EF6\u5305\u5DF2\u89E3\u538B\u7F29\uFF0C\u914D\u7F6E\u5DF2\u542F\u52A8\uFF0C\u4F46\u7531\u4E8E\u67D0\u4E9B\u539F\u56E0\u5C1A\u672A\u5B8C\u6210\u3002</li><li><code>W</code> = \u89E6\u53D1\u5668\u7B49\u5F85\u3002\u8F6F\u4EF6\u5305\u7B49\u5F85\u53E6\u4E00\u4E2A\u5305\u7684\u89E6\u53D1\u5668\u5904\u7406\u3002</li><li><code>t</code> = \u89E6\u53D1\u4E2D\u3002\u8F6F\u4EF6\u5305\u5DF2\u88AB\u89E6\u53D1\u3002</li><li><code>i</code> = \u5DF2\u5B89\u88C5.\u8BE5\u8F6F\u4EF6\u5305\u5DF2\u89E3\u538B\u7F29\u5E76\u914D\u7F6E\u597D\u3002</li></ul><p>\u7B2C\u4E09\u680F\u3002\u51FA\u9519\u7684\u4E1C\u897F\u3002</p><ul><li><code>R</code> = \u9700\u8981\u6062\u590D\u3002\u6807\u6709\u201C\u9700\u8981\u6062\u590D\u201D\u7684\u8F6F\u4EF6\u5305\u5DF2\u635F\u574F\uFF0C\u9700\u8981\u91CD\u65B0\u5B89\u88C5\u3002\u8FD9\u4E9B\u5305\u4E0D\u80FD\u88AB\u5220\u9664\uFF0C\u9664\u975E\u5F3A\u5236\u4F7F\u7528\u9009\u9879<code>-force-remove-reinstreq</code>\u3002</li></ul><p>\u540C\u6837\uFF0C\u4F60\u4E0D\u9700\u8981\u8BB0\u4F4F\u5B83\uFF0C\u53EA\u9700\u8BB0\u4F4F<code>info dpkg</code>\u547D\u4EE4\uFF0C\u5B83\u5C06\u663E\u793A\u8FD9\u4E9B\u4FE1\u606F\u3002\u73B0\u5728\u4E0D\u8981\u7EA0\u7ED3\u5305\u72B6\u6001\uFF0C\u53EA\u8981\u8BB0\u4F4F\uFF0C<code>ii</code>\u72B6\u6001\u610F\u5473\u7740\u8FD9\u4E2A\u5305\u4E00\u5207\u6B63\u5E38\u3002</p><p>\u597D\u4E86\uFF0C\u8BA9\u6211\u4EEC\u5B89\u88C5\u4E00\u4E2A\u540D\u4E3A<code>midnight commander</code>\u7684\u7A0B\u5E8F\uFF0C\u5B83\u662F\u4E00\u4E2A\u6587\u4EF6\u7BA1\u7406\u5668\uFF0C\u5B83\u5141\u8BB8\u4F60\u76F4\u89C2\u5730\u6D4F\u89C8\u7CFB\u7EDF\u4E0A\u7684\u76EE\u5F55\uFF0C\u5E76\u5BF9\u4F60\u7684\u6587\u4EF6\u6267\u884C\u590D\u5236\uFF0C\u91CD\u547D\u540D\u6216\u5220\u9664\u64CD\u4F5C\u3002</p><p>\u73B0\u5728\uFF0C\u4F60\u5C06\u4E86\u89E3\u5982\u4F55\u641C\u7D22\uFF0C\u5B89\u88C5\u548C\u5220\u9664\u8F6F\u4EF6\u5305\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1: aptitude search mc | grep -i &#39;midnight commander&#39;
2: sudo aptitude install mc
3: dpkg -L mc | grep &#39;/usr/bin&#39;
4: aptitude search mc | grep -i &#39;midnight commander&#39;
5: mc
6: &lt;F10&gt;&lt;ENTER&gt;
7: sudo aptitude remove mc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u4F60\u5E94\u8BE5\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u5E94\u8BE5\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u5E94\u8BE5\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ aptitude search mc | grep -i &#39;midnight commander&#39;
p   mc                              - Midnight Commander - a powerful file manag
p   mc-dbg                          - Midnight Commander - a powerful file manag
user1@vm1:/home/user1# sudo aptitude install mc
The following NEW packages will be installed:
  libglib2.0-0{a} libglib2.0-data{a} mc shared-mime-info{a}
0 packages upgraded, 4 newly installed, 0 to remove and 0 not upgraded.
Need to get 2,957 kB/5,157 kB of archives. After unpacking 17.0 MB will be used.
Do you want to continue? [Y/n/?] y
Get:1 http://mirror.yandex.ru/debian/ squeeze/main libglib2.0-0 amd64 2.24.2-1 [1,122 kB]
Get:2 http://mirror.yandex.ru/debian/ squeeze/main libglib2.0-data all 2.24.2-1 [994 kB]
Get:3 http://mirror.yandex.ru/debian/ squeeze/main shared-mime-info amd64 0.71-4 [841 kB]
Fetched 2,957 kB in 0s (4,010 kB/s)
Selecting previously deselected package libglib2.0-0.
(Reading database ... 24220 files and directories currently installed.)
Unpacking libglib2.0-0 (from .../libglib2.0-0_2.24.2-1_amd64.deb) ...
Selecting previously deselected package libglib2.0-data.
Unpacking libglib2.0-data (from .../libglib2.0-data_2.24.2-1_all.deb) ...
Selecting previously deselected package mc.
Unpacking mc (from .../mc_3%3a4.7.0.9-1_amd64.deb) ...
Selecting previously deselected package shared-mime-info.
Unpacking shared-mime-info (from .../shared-mime-info_0.71-4_amd64.deb) ...
Processing triggers for man-db ...
Setting up libglib2.0-0 (2.24.2-1) ...
Setting up libglib2.0-data (2.24.2-1) ...
Setting up mc (3:4.7.0.9-1) ...
Setting up shared-mime-info (0.71-4) ...
user1@vm1:~$ aptitude search mc | grep -i &#39;midnight commander&#39;
i   mc                              - Midnight Commander - a powerful file manag
p   mc-dbg                          - Midnight Commander - a powerful file manag
user1@vm1:~$ mc
  Left     File     Command     Options     Right
|&lt;  ~ ---------------------.[^]&gt;||&lt;  ~ ---------------------.[^]&gt;|
|&#39;n  Name    | Size |Modify time||&#39;n  Name    | Size |Modify time|
|/..         |P--DIR|un  6 21:49||/..         |P--DIR|un  6 21:49|
|/.aptitude  |  4096|un 25 18:34||/.aptitude  |  4096|un 25 18:34|
|/.mc        |  4096|un 25 18:41||/.mc        |  4096|un 25 18:41|
| .bash~story| 10149|un 21 12:01|| .bash~story| 10149|un 21 12:01|
| .bash~ogout|   220|un  6 21:48|| .bash~ogout|   220|un  6 21:48|
| .bashrc    |  3184|un 14 12:24|| .bashrc    |  3184|un 14 12:24|
| .lesshst   |   157|un 25 11:31|| .lesshst   |   157|un 25 11:31|
|----------------------------------------------------------------|
|UP--DIR                        --UP--DIR                        |
 ----------- 6367M/7508M (84%) -------------- 6367M/7508M (84%) -|
Hint: The homepage of GNU Midnight Commander: http://www.midnight-
user1@vm1:~$                                                   [^]
 1Help  2Menu  3View  4Edit  5Copy  6Re~ov 7Mkdir 8De~te 9Pu~Dn
user1@vm1:~$ sudo aptitude remove mc
The following packages will be REMOVED:
  libglib2.0-0{u} libglib2.0-data{u} mc shared-mime-info{u}
0 packages upgraded, 0 newly installed, 4 to remove and 0 not upgraded.
Need to get 0 B of archives. After unpacking 17.0 MB will be freed.
Do you want to continue? [Y/n/?] y
(Reading database ... 24637 files and directories currently installed.)
Removing shared-mime-info ...
Removing mc ...
Removing libglib2.0-data ...
Removing libglib2.0-0 ...
Processing triggers for man-db ...
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li>\u641C\u7D22\u5305\u542B<code>mc</code>\u7684\u5305\u540D\u79F0\uFF0C\u5E76\u5728\u63CF\u8FF0\u4E2D\u4EC5\u663E\u793A\u5305\u542B<code>midnight commander</code>\u7684\u5305\u3002<code>grep -i</code>\u610F\u5473\u7740\uFF0C<code>grep</code>\u5E94\u8BE5\u641C\u7D22\u5C0F\u5199\u548C\u5927\u5199\u5B57\u6BCD\uFF0C\u5982\u679C\u6CA1\u6709\u5B83\uFF0C<code>grep</code>\u4E0D\u4F1A\u663E\u793A\u5305\u542B<code>Midnight Commander</code>\u7684\u884C\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u3002\u8BF7\u6CE8\u610F\uFF0C<code>mc</code>\u72B6\u6001\u4E3A<code>p</code>\u72B6\u6001\uFF0C\u8FD9\u610F\u5473\u7740\u8FD9\u4E2A\u5305\u7684\u6240\u9700\u64CD\u4F5C\u662F\u6E05\u7406\uFF0C\u5E76\u4E14\u7531\u4E8E\u5176\u4ED6\u4E24\u4E2A\u72B6\u6001\u5217\u4E2D\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u7ED3\u8BBA\uFF0C\u8BE5\u5305\u672A\u5B89\u88C5\u3002\u4F60\u7684<code>man</code>\u6CE8\u610F\u5230\u4E86\uFF0C\u6700\u5F00\u59CB\u4F60\u6CA1\u6709\u5B89\u88C5\u8FD9\u4E2A\u5305\uFF0C\u4F46\u8FD9\u4E5F\u6CA1\u95EE\u9898\uFF0C\u56E0\u4E3A\u6CA1\u6709\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305 \u9ED8\u8BA4\u662F\u6E05\u9664\u72B6\u6001\u3002</li><li>\u5B89\u88C5\u8F6F\u4EF6\u5305<code>mc</code>\u3002\u56E0\u4E3A\u8FD9\u4E2A\u66F4\u6539\u662F\u7CFB\u7EDF\u8303\u56F4\u7684\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u547D\u4EE4\u9700\u8981\u4F7F\u7528\u8D85\u7EA7\u7528\u6237\uFF0C\u5B83\u80FD\u591F\u5199\u5165\u7CFB\u7EDF\u4E2D\u7684\u6240\u6709\u76EE\u5F55\u3002\u8FD8\u8981\u6CE8\u610F debian \u8F6F\u4EF6\u5305\u7BA1\u7406\u5668<code>aptitude</code>\u5982\u4F55\u81EA\u52A8\u5B89\u88C5<code>mc</code>\u6240\u9700\u7684<code>libglib2.0-0</code>\uFF0C<code>libglib2.0-data</code>\u548C<code>shared-mime-info</code>\u8F6F\u4EF6\u5305\u3002</li><li>\u663E\u793A\u4F60\u5B89\u88C5\u7684\u5305\u7684\u53EF\u6267\u884C\u6587\u4EF6\u3002\u5982\u4F60\u6240\u89C1\uFF0C\u4ED6\u4EEC\u653E\u5728<code>/usr/bin</code>\u4E2D\u3002</li><li>\u8C03\u7528<code>mc</code>\u3002</li><li>\u9000\u51FA<code>mc</code>\u3002</li><li>\u5220\u9664<code>mc</code>\u3002\u8BF7\u6CE8\u610F\uFF0C\u81EA\u52A8\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\u4E5F\u4F1A\u81EA\u52A8\u5220\u9664\u3002\u5982\u679C\u5728 \u5B89\u88C5<code>mc</code>\u4E4B\u540E\uFF0C\u4F60\u5B89\u88C5\u4E00\u4E9B\u9700\u8981\u8FD9\u4E9B\u8F6F\u4EF6\u5305\u7684\u4E1C\u897F\uFF0C<code>aptitude</code>\u5C06\u4FDD\u7559\u5B83\u4EEC\u3002</li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2>`,29),C=n("\u597D\u5427\uFF0C\u4E1C\u897F\u771F\u591A\u3002\u4F46\u8FD9\u91CC\u8FD8\u6709\u66F4\u591A\uFF1A \u952E\u5165"),S=e("code",null,"aptiutde search emacs",-1),M=n("\u3002\u5F04\u6E05\u695A"),R=e("code",null,"v",-1),N=n("\u7684\u610F\u601D\u662F\u4EC0\u4E48\u3002 \u9605\u8BFB\u6216\u6D4F\u89C8 Debian \u624B\u518C\u4E2D\u7684"),B={href:"http://www.debian.org/doc/manuals/debian-reference/ch02.en.html",target:"_blank",rel:"noopener noreferrer"},E=n("\u7B2C 2 \u7AE0 Debian \u8F6F\u4EF6\u5305\u7BA1\u7406"),P=n("\u3002");function U(I,q){const s=l("ExternalLinkIcon");return c(),r(o,null,[t,e("blockquote",null,[e("p",null,[b,e("a",m,[u,a(s)])])]),e("blockquote",null,[e("p",null,[g,e("a",h,[f,a(s)])])]),e("blockquote",null,[e("p",null,[_,e("a",v,[k,a(s)])])]),e("blockquote",null,[e("p",null,[x,e("a",w,[y,a(s)])])]),D,e("p",null,[C,S,M,R,N,e("a",B,[E,a(s)]),P])],64)}var L=i(p,[["render",U]]);export{L as default};