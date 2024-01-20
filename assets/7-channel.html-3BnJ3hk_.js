import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,d as e}from"./app-r5-DAWUb.js";const c={},t=e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>channel</code> 是一个信道，用于端到端数据的通信，常用于 <code>goroutine</code> 之间数据共享。</p><h2 id="创建-channel" tabindex="-1"><a class="header-anchor" href="#创建-channel" aria-hidden="true">#</a> 创建 channel</h2><p>我们使用 <code>make</code> 来创建 <code>channel</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> T<span class="token punctuation">)</span> <span class="token comment">// 无缓冲</span>

ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> T<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 带缓冲</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>T</code> 为数据类型。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>无缓冲区的信道会被阻塞直到数据被接收</li><li>有缓冲区的信道在发送的数据达到缓冲区大小后才会被阻塞</li></ul></div><h2 id="发送接收数据" tabindex="-1"><a class="header-anchor" href="#发送接收数据" aria-hidden="true">#</a> 发送接收数据</h2><p>使用 <code>&lt;-</code> 指向 channel 表示发送数据到该 channel, 如 <code>ch &lt;- 10</code></p><p>使用 <code>&lt;-</code> 在 channel 左侧表示接收数据，如 <code>&lt;-ch</code></p><h2 id="关闭-channel" tabindex="-1"><a class="header-anchor" href="#关闭-channel" aria-hidden="true">#</a> 关闭 channel</h2><p>使用 <code>close()</code> 关闭 <code>channel</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><p>如果往一个已经 <code>close()</code> 的 <code>channel</code> 发送消息，会产生 <code>panic</code></p></li><li><p>读取已关闭的 <code>channel</code> 可以获得零值, 若使用 <code>range</code> 读取 <code>channel</code>, 则 <code>close</code> 后会终止循环</p></li></ul><p>我们可以使用 <code>val, ok := &lt;- ch</code> 来判断是否是零值，若 <code>ok</code> 为 <code>false</code> 则信道已经 <code>close</code></p></div><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> Select</h2><p>通常我们会使用 <code>select</code> 来接收 <code>channel</code> 的数据, 还可以使用 <code>default</code> 设定默认执行的动作, <code>select</code> 可以同时接收多个 <code>channel</code> ，若多个 <code>channel</code> 同时发送过来数据，则会随机选择一个 <code>channel</code> 完成操作</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>  <span class="token comment">// 接收 ch1 的数据</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ch1&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch2<span class="token punctuation">:</span> <span class="token comment">// 接收 ch2 的数据</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ch2&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> val <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch3<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ch3<span class="token punctuation">)</span> <span class="token comment">//接收 ch3 的数据并打印</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><p>定时器就是通过 <code>channel</code> 实现了定时结果的返回</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span>t<span class="token punctuation">.</span>C
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;finish&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><ul><li>使用 <code>channel</code> 时要注意必须有接收数据端，注意避免死锁问题</li></ul>`,22),o=[t];function p(l,i){return a(),s("div",null,o)}const r=n(c,[["render",p],["__file","7-channel.html.vue"]]);export{r as default};
