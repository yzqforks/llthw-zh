import{_ as l,r as o,o as c,c as p,a as s,b as a,F as t,e as r,d as n}from"./app.91d0dc40.js";const i={},b=r('<h1 id="\u7EC3\u4E60-4-bash-\u5904\u7406\u6587\u4EF6-pwd-ls-cp-mv-rm-touch" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E60-4-bash-\u5904\u7406\u6587\u4EF6-pwd-ls-cp-mv-rm-touch" aria-hidden="true">#</a> \u7EC3\u4E60 4\uFF1ABash\uFF1A\u5904\u7406\u6587\u4EF6\uFF0C<code>pwd</code>\uFF0C<code>ls</code>\uFF0C<code>cp</code>\uFF0C<code>mv</code>\uFF0C<code>rm</code>\uFF0C<code>touch</code></h1>',1),u=n("\u539F\u6587\uFF1A"),d={href:"https://archive.fo/xb8YB",target:"_blank",rel:"noopener noreferrer"},m=n("Exercise 4. Bash: working with files, pwd, ls, cp, mv, rm, touch"),h=n("\u8BD1\u8005\uFF1A"),_={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},k=n("\u98DE\u9F99"),f=n("\u534F\u8BAE\uFF1A"),v={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},y=n("CC BY-NC-SA 4.0"),w=n("\u81EA\u8C6A\u5730\u91C7\u7528"),x={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},g=n("\u8C37\u6B4C\u7FFB\u8BD1"),J=n("\u5728 Linux \u4E2D\uFF0C\u4E00\u5207\u90FD\u662F\u6587\u4EF6\u3002\u4F46\u662F\u4EC0\u4E48\u662F\u6587\u4EF6\uFF1F\u73B0\u5728\u5B8C\u5168\u53EF\u4EE5\u8BF4\uFF0C\u5B83\u662F\u4E00\u4E2A\u5305\u542B\u4E00\u4E9B\u4FE1\u606F\u7684\u5BF9\u8C61\u3002\u5B83\u901A\u5E38"),$={href:"http://en.wikipedia.org/wiki/Computer_file",target:"_blank",rel:"noopener noreferrer"},B=n("\u5B9A\u4E49"),I=n("\u5982\u4E0B\uFF1A"),q=r(`<blockquote><p>\u8BA1\u7B97\u673A\u6587\u4EF6\u662F\u7528\u4E8E\u5B58\u50A8\u4FE1\u606F\u7684\uFF0C\u4EFB\u610F\u7684\u4FE1\u606F\u5757\u6216\u8D44\u6E90\u3002\u5B83\u53EF\u7528\u4E8E\u8BA1\u7B97\u673A\u7A0B\u5E8F\uFF0C\u5E76\u4E14\u901A\u5E38\u57FA\u4E8E\u67D0\u79CD\u6301\u4E45\u7684\u5B58\u50A8\u5668\u3002\u6587\u4EF6\u662F\u6301\u4E45\u7684\uFF0C\u56E0\u4E3A\u5B83\u5728\u5F53\u524D\u7A0B\u5E8F\u5B8C\u6210\u540E\uFF0C\u4ECD\u7136\u53EF\u7528\u4E8E\u5176\u5B83\u7A0B\u5E8F\u3002\u8BA1\u7B97\u673A\u6587\u4EF6\u53EF\u4EE5\u8BA4\u4E3A\u662F\u7EB8\u8D28\u6587\u6863\u7684\u73B0\u4EE3\u5BF9\u5E94\u7269\uFF0C\u5B83\u4EEC\u901A\u5E38\u4FDD\u5B58\u4E8E\u529E\u516C\u5BA4\u548C\u56FE\u4E66\u9986\u7684\u6587\u4EF6\u4E2D\uFF0C\u8FD9\u662F\u8BE5\u672F\u8BED\u7684\u6765\u6E90\u3002</p></blockquote><p>\u4F46\u8FD9\u4E2A\u5B9A\u4E49\u592A\u7B3C\u7EDF\u4E86\uFF0C\u6240\u4EE5\u8BA9\u6211\u4EEC\u66F4\u5177\u4F53\u4E00\u4E9B\u3002<code>man stat</code>\u544A\u8BC9\u6211\u4EEC\uFF0C\u6587\u4EF6\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">stat</span> <span class="token punctuation">{</span>
   <span class="token class-name">dev_t</span>     st_dev<span class="token punctuation">;</span>     <span class="token comment">/* ID of device containing file */</span>
   <span class="token class-name">ino_t</span>     st_ino<span class="token punctuation">;</span>     <span class="token comment">/* inode number */</span>
   <span class="token class-name">mode_t</span>    st_mode<span class="token punctuation">;</span>    <span class="token comment">/* protection */</span>
   <span class="token class-name">nlink_t</span>   st_nlink<span class="token punctuation">;</span>   <span class="token comment">/* number of hard links */</span>
   <span class="token class-name">uid_t</span>     st_uid<span class="token punctuation">;</span>     <span class="token comment">/* user ID of owner */</span>
   <span class="token class-name">gid_t</span>     st_gid<span class="token punctuation">;</span>     <span class="token comment">/* group ID of owner */</span>
   <span class="token class-name">dev_t</span>     st_rdev<span class="token punctuation">;</span>    <span class="token comment">/* device ID (if special file) */</span>
   <span class="token class-name">off_t</span>     st_size<span class="token punctuation">;</span>    <span class="token comment">/* total size, in bytes */</span>
   <span class="token class-name">blksize_t</span> st_blksize<span class="token punctuation">;</span> <span class="token comment">/* blocksize for file system I/O */</span>
   <span class="token class-name">blkcnt_t</span>  st_blocks<span class="token punctuation">;</span>  <span class="token comment">/* number of 512B blocks allocated */</span>
   <span class="token class-name">time_t</span>    st_atime<span class="token punctuation">;</span>   <span class="token comment">/* time of last access */</span>
   <span class="token class-name">time_t</span>    st_mtime<span class="token punctuation">;</span>   <span class="token comment">/* time of last modification */</span>
   <span class="token class-name">time_t</span>    st_ctime<span class="token punctuation">;</span>   <span class="token comment">/* time of last status change */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4E0D\u8981\u5BB3\u6015\uFF0C\u53EA\u8981\u8BB0\u4F4F\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p><ul><li>\u5927\u5C0F\uFF0C\u8FD9\u6B63\u597D\u662F\u5B83\u6240\u8BF4\u7684\u3002</li><li>\u4E0A\u6B21\u8BBF\u95EE\u7684\u65F6\u95F4\uFF0C\u5F53\u4F60\u67E5\u770B\u6587\u4EF6\u65F6\u66F4\u65B0\u3002</li><li>\u4E0A\u6B21\u4FEE\u6539\u7684\u65F6\u95F4\uFF0C\u5F53\u4F60\u66F4\u6539\u6587\u4EF6\u65F6\u66F4\u65B0\u3002</li></ul><p>\u73B0\u5728\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u6253\u5370\u5F53\u524D\u76EE\u5F55\uFF0C\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\uFF0C\u590D\u5236\u548C\u79FB\u52A8\u6587\u4EF6\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: pwd
 2: ls
 3: ls -a
 4: ls -al
 5: ls -altr
 6: cp -v .bash_history{,1}
 7: cp -v .bash_history1 .bash_history2
 8: mv -v .bash_history1 .bash_history2
 9: rm -v .bash_history2
10: touch .bashrc
11: ls -al
12: ls .*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4F60\u5E94\u8BE5\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u5E94\u8BE5\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u5E94\u8BE5\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Hello, user1!
user1@vm1:~$ pwd
/home/user1
user1@vm1:~$ ls
user1@vm1:~$ ls -a
.  ..  .bash_history  .bash_history1  .bash_logout  .bashrc  .lesshst  .profile  .profile.bak  .profile.bak1
user1@vm1:~$ ls -al
total 40
drwxr-xr-x 2 user1 user1 4096 Jun  7 13:30 .
drwxr-xr-x 3 root  root  4096 Jun  6 21:49 ..
-rw------- 1 user1 user1  853 Jun  7 15:03 .bash_history
-rw------- 1 user1 user1  308 Jun  7 13:14 .bash_history1
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .bash_logout
-rw-r--r-- 1 user1 user1 3184 Jun  6 21:48 .bashrc
-rw------- 1 user1 user1   45 Jun  7 13:31 .lesshst
-rw-r--r-- 1 user1 user1  697 Jun  7 12:25 .profile
-rw-r--r-- 1 user1 user1  741 Jun  7 12:19 .profile.bak
-rw-r--r-- 1 user1 user1  741 Jun  7 13:12 .profile.bak1
user1@vm1:~$ ls -altr
total 40
-rw-r--r-- 1 user1 user1 3184 Jun  6 21:48 .bashrc
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .bash_logout
drwxr-xr-x 3 root  root  4096 Jun  6 21:49 ..
-rw-r--r-- 1 user1 user1  741 Jun  7 12:19 .profile.bak
-rw-r--r-- 1 user1 user1  697 Jun  7 12:25 .profile
-rw-r--r-- 1 user1 user1  741 Jun  7 13:12 .profile.bak1
-rw------- 1 user1 user1  308 Jun  7 13:14 .bash_history1
drwxr-xr-x 2 user1 user1 4096 Jun  7 13:30 .
-rw------- 1 user1 user1   45 Jun  7 13:31 .lesshst
-rw------- 1 user1 user1  853 Jun  7 15:03 .bash_history
user1@vm1:~$ cp -v .bash_history{,1}
\`.bash_history&#39; -&gt; \`.bash_history1&#39;
user1@vm1:~$ cp -v .bash_history1 .bash_history2
\`.bash_history1&#39; -&gt; \`.bash_history2&#39;
user1@vm1:~$ mv -v .bash_history1 .bash_history2
\`.bash_history1&#39; -&gt; \`.bash_history2&#39;
user1@vm1:~$ rm -v .bash_history2
removed \`.bash_history2&#39;
user1@vm1:~$ touch .bashrc
user1@vm1:~$ ls -al
total 36
drwxr-xr-x 2 user1 user1 4096 Jun 14 12:23 .
drwxr-xr-x 3 root  root  4096 Jun  6 21:49 ..
-rw------- 1 user1 user1  853 Jun  7 15:03 .bash_history
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .bash_logout
-rw-r--r-- 1 user1 user1 3184 Jun 14 12:24 .bashrc
-rw------- 1 user1 user1   45 Jun  7 13:31 .lesshst
-rw-r--r-- 1 user1 user1  697 Jun  7 12:25 .profile
-rw-r--r-- 1 user1 user1  741 Jun  7 12:19 .profile.bak
-rw-r--r-- 1 user1 user1  741 Jun  7 13:12 .profile.bak1
user1@vm1:~$
user1@vm1:~$ ls .*
.bash_history  .bash_logout  .bashrc  .lesshst  .profile  .profile.bak  .profile.bak1
 
.:
ls.out
 
..:
user1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li><p>\u6253\u5370\u4F60\u5F53\u524D\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u8FD9\u662F\u4F60\u7684\u4E3B\u76EE\u5F55\u3002\u8BF7\u6CE8\u610F\u5B83\u4E3A\u4F55\u4E0D\u540C\u4E8E<code>user1@vm1:~</code>\u4E2D\u7684<code>~</code>\uFF0C\u8FD9\u4E5F\u8868\u793A\uFF0C\u4F60\u5728\u4F60\u7684<code>home</code>\u76EE\u5F55\u4E2D\u3002\u8FD9\u662F\u56E0\u4E3A<code>~</code>\u662F\u4F60\u7684\u4E3B\u76EE\u5F55\u7684\u7F29\u5199\u3002</p></li><li><p>\u8FD9\u91CC\u6CA1\u6709\u4EFB\u4F55\u4E1C\u897F\uFF0C\u56E0\u4E3A\u4F60\u7684\u4E3B\u76EE\u5F55\u4E2D\u53EA\u6709\u9690\u85CF\u7684\u6587\u4EF6\u3002\u8BB0\u4F4F\uFF0C\u9690\u85CF\u7684\u6587\u4EF6\u662F\u4EE5\u70B9\u5F00\u5934\u7684\u540D\u79F0\u3002</p></li><li><p>\u6253\u5370\u4E3B\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u56E0\u4E3A<code>-a</code>\u53C2\u6570\u8BA9<code>ls</code>\u663E\u793A\u6240\u6709\u6587\u4EF6\uFF0C\u5305\u62EC\u9690\u85CF\u6587\u4EF6\u3002</p></li><li><p>\u4EE5\u957F\u683C\u5F0F\u6253\u5370\u4E3B\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6\uFF1A\u6743\u9650\uFF0C\u6240\u6709\u8005\uFF0C\u7EC4\uFF0C\u5927\u5C0F\uFF0C\u65F6\u95F4\u6233\uFF08\u901A\u5E38\u662F\u4FEE\u6539\u65F6\u95F4\uFF09\u548C\u6587\u4EF6\u540D\u3002</p></li><li><p>\u6CE8\u610F\u6587\u4EF6\u5982\u4F55\u6309\u65E5\u671F\u5B89\u6392\uFF0C\u6700\u65B0\u7684\u6587\u4EF6\u662F\u6700\u540E\u4E00\u4E2A\u3002<code>-t</code>\u544A\u8BC9<code>ls</code>\u6309\u65F6\u95F4\u6392\u5E8F\uFF0C<code>-r</code>\u544A\u8BC9<code>ls</code>\u53CD\u8F6C\u6392\u5E8F\u3002</p></li><li><p>\u5C06<code>.bash_history</code>\u590D\u5236\u5230<code>.bash_history1</code>\u3002\u8FD9\u4F3C\u4E4E\u5BF9\u4F60\u6765\u8BF4\u5F88\u795E\u79D8\uFF0C\u4F46\u89E3\u91CA\u771F\u7684\u5F88\u7B80\u5355\u3002Bash \u6709\u4E00\u4E2A\u79F0\u4E3A\u82B1\u62EC\u53F7\u6269\u5C55\u7684\u529F\u80FD\uFF0C\u5B83\u6709\u4E00\u7EC4\u89C4\u5219\uFF0C\u5B9A\u4E49\u4E86\u5982\u4F55 \u5904\u7406\u50CF<code>{1,2,3}</code>\u4E4B\u7C7B\u7684\u7ED3\u6784\u3002\u5728\u6211\u4EEC\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>.bash_history{,1}</code> \u6269\u5C55\u4E3A\u4E24\u4E2A\u53C2\u6570\uFF0C\u5373<code>.bash_history</code>\u548C<code>.bash_history1</code>\u3002Bash \u4EC5\u4EC5\u63A5\u53D7\u82B1\u62EC\u53F7\u524D\u7684\u4E00\u4E2A\u53C2\u6570\uFF0C\u5728\u6211\u4EEC\u7684\u4F8B\u5B50\u4E2D\u662F<code>.bash_history</code>\uFF0C\u5E76\u5411\u53C2\u6570\u6DFB\u52A0\u82B1\u62EC\u53F7\u91CC\u7684\u6240\u6709\u4E1C\u897F\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\uFF0C\u5E76\u4EE5\u6B64\u4F5C\u4E3A\u53C2\u6570\u3002\u7B2C\u4E00\u4E2A\u6DFB\u52A0\u53EA\u662F\u53D8\u6210<code>.bash_history</code>\uFF0C\u56E0\u4E3A\u82B1\u62EC\u53F7\u4E2D\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u7A7A\u7684\uFF0C\u6CA1\u6709\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002\u63A5\u4E0B\u6765\uFF0CBash \u6DFB\u52A0\u4E86<code>1</code>\uFF0C\u56E0\u4E3A\u8FD9\u662F\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5C31\u662F\u8FD9\u6837\u3002\u6269\u5C55\u540E\u4F20\u9012\u7ED9<code>cp</code>\u7684 \u7ED3\u679C\u53C2\u6570\u4E3A<code>-v .bash_history1 .bash_history2</code>\u3002</p></li><li><p>\u8FD9\u53EF\u80FD\u5BF9\u4F60\u6765\u8BF4\u5F88\u660E\u663E\u3002\u5C06\u6700\u8FD1\u521B\u5EFA\u7684<code>.bash_history1</code>\u590D\u5236\u5230<code>.bash_history2</code>\u3002</p></li><li><p>\u5411<code>.bash_history1</code>\u79FB\u52A8\u5230<code>.bash_history2</code>\u3002\u8BF7\u6CE8\u610F\uFF0C\u5B83\u4F1A\u8986\u76D6\u76EE\u6807\u6587\u4EF6\u800C\u4E0D\u8BE2\u95EE\uFF0C\u6240\u4EE5\u4E0D\u518D\u6709<code>.bash_history2</code>\uFF0C\u6CA1\u6709\u4E86\uFF01</p></li><li><p>\u5C06<code>.bashrc</code>\u65F6\u95F4\u6233\u66F4\u65B0\u4E3A\u5F53\u524D\u65E5\u671F\u548C\u65F6\u95F4\u3002\u8FD9\u610F\u5473\u7740<code>.bashrc</code>\u7684\u6240\u6709\u65F6\u95F4\u5C5E\u6027\uFF0C<code>st_atime</code>\uFF0C<code>st_mtime</code>\u548C<code>st_ctime</code>\u90FD\u8BBE\u7F6E\u4E3A\u5F53\u524D\u65E5\u671F\u548C\u65F6\u95F4\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u8F93\u5165<code>stat .bashrc</code>\u6765\u786E\u5B9A\u5B83\u3002</p></li><li><p>\u5220\u9664<code>.bash_history2</code>\u3002\u8FD9\u91CC\u6CA1\u6709\u8B66\u544A\uFF0C\u8BF7\u5C0F\u5FC3\u3002\u53E6\u5916\uFF0C\u603B\u662F\u7528<code>-v</code>\u9009\u9879\u3002</p></li><li><p>\u518D\u6B21\u4EE5\u957F\u683C\u5F0F\u6253\u5370\u6240\u6709\u6587\u4EF6\u3002\u8BF7\u6CE8\u610F<code>.bashrc</code>\u7684\u65F6\u95F4\u6233\u66F4\u6539\u3002</p></li><li><p>\u5728\u4F60\u7684\u4E3B\u76EE\u5F55\u4E2D\u4EE5\u77ED\u683C\u5F0F\u6253\u5370\u6587\u4EF6\u3002\u8BF7\u6CE8\u610F\uFF0C\u4F60\u4E0D\u4EC5\u53EF\u4EE5\u5217\u51FA<code>/home/user1</code>\u76EE\u5F55\uFF0C\u8FD8\u53EF\u4EE5\u5217\u51FA<code>/home</code>\u76EE\u5F55\u672C\u8EAB\u3002\u4E0D\u8981\u548C\u4EFB\u4F55\u547D\u4EE4\u4E00\u8D77\u4F7F\u7528\u8FD9\u4E2A\u7ED3\u6784\uFF0C\u7279\u522B\u662F <code>rm</code>\uFF0C\u6C38\u8FDC\u4E0D\u8981\uFF01\u6216\u8BB8\uFF0C\u4F60\u4F1A\u610F\u5916\u5730\u901A\u8FC7\u5220\u9664\u9519\u8BEF\u7684\u6587\u4EF6\u6216\u66F4\u6539\u6743\u9650\uFF0C\u6765\u4F7F\u7CFB\u7EDF\u5D29\u6E83\u3002</p></li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2><p>\u73A9\u8F6C bash \u82B1\u62EC\u53F7\u6269\u5C55\u3002\u4ECE<code>echo test{1,2,foo,bar}</code>\u5F00\u59CB\u3002\u5C1D\u8BD5\u4F7F\u7528\u82B1\u62EC\u53F7\u952E\u5165\u51E0\u4E2A\u5355\u72EC\u7684\u53C2\u6570\u3002</p><p>\u4F7F\u7528 Google \u641C\u7D22 bash \u82B1\u62EC\u53F7\u6269\u5C55\uFF0C\u4ECE\u641C\u7D22\u7ED3\u679C\u4E2D\u6253\u5F00\u201CBash \u53C2\u8003\u624B\u518C\u201D\uFF0C\u5E76\u9605\u8BFB\u76F8\u5E94\u7684\u90E8\u5206\u3002</p><p>\u5C1D\u8BD5\u5F04\u6E05\u695A<code>ls .*</code>\u5982\u4F55\u548C\u4E3A\u4EC0\u4E48\u5DE5\u4F5C\u3002</p><p>\u5BF9\u81EA\u5DF1\u8BF410\u6B21\uFF1A\u201C\u6211\u4F1A\u4E00\u76F4\u4F7F\u7528 verbose \u9009\u9879\u3002verbose \u9009\u9879\u901A\u5E38\u7528\u4F5C<code>-v</code>\u53C2\u6570\u201D\u3002</p><p>\u5BF9\u81EA\u5DF1\u8BF410\u6B21\uFF1A\u201C\u6211\u4F1A\u6C38\u8FDC\u7528<code>ls</code>\u68C0\u67E5\u4EFB\u4F55\u5371\u9669\u7684\u547D\u4EE4\u201D\u3002</p>`,18);function z(C,N){const e=o("ExternalLinkIcon");return c(),p(t,null,[b,s("blockquote",null,[s("p",null,[u,s("a",d,[m,a(e)])])]),s("blockquote",null,[s("p",null,[h,s("a",_,[k,a(e)])])]),s("blockquote",null,[s("p",null,[f,s("a",v,[y,a(e)])])]),s("blockquote",null,[s("p",null,[w,s("a",x,[g,a(e)])])]),s("p",null,[J,s("a",$,[B,a(e)]),I]),q],64)}var E=l(i,[["render",z]]);export{E as default};