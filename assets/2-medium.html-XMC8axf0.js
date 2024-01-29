import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as n,c as s,a as e,b as d,f as c,d as t}from"./app-01Vksbji.js";const i={},l=t('<h3 id="have-you-used-context-what-are-the-use-cases-for-context" tabindex="-1"><a class="header-anchor" href="#have-you-used-context-what-are-the-use-cases-for-context" aria-hidden="true">#</a> Have you used <code>context</code>? What are the use cases for <code>context</code>?</h3><details class="hint-container details"><summary>Answer</summary><table><thead><tr><th>Scenario</th><th>Introduction</th></tr></thead><tbody><tr><td>Timeout handling</td><td>By using <code>context</code>, you can easily set a timeout, and the coroutine will automatically terminate after the timeout</td></tr><tr><td>Terminate coroutine</td><td>By using the <code>cancel()</code> method, coroutines can be easily terminated</td></tr><tr><td>Data transfer</td><td>We can write data into <code>context</code> to transfer data between different coroutines</td></tr></tbody></table></details><h3 id="is-channel-thread-safe" tabindex="-1"><a class="header-anchor" href="#is-channel-thread-safe" aria-hidden="true">#</a> Is <code>channel</code> thread-safe?</h3><details class="hint-container details"><summary>Answer</summary><p><code>channel</code> is thread-safe, the reason is that <code>channel</code> has implemented a lock mechanism internally,</p></details><h3 id="is-the-traversal-of-a-map-using-range-ordered-or-unordered" tabindex="-1"><a class="header-anchor" href="#is-the-traversal-of-a-map-using-range-ordered-or-unordered" aria-hidden="true">#</a> Is the traversal of a Map using range ordered or unordered?</h3><details class="hint-container details"><summary>Answer</summary><p><strong>Unordered</strong></p><p>Internally, Map uses a hash algorithm to place elements. When it automatically expands, it recalculates the hash values, so the addresses of the elements keep changing. To prevent users from thinking that the arrangement of Map elements is ordered, it directly returns in a random order, so the traversal is unordered.</p></details><h3 id="is-map-concurrency-safe" tabindex="-1"><a class="header-anchor" href="#is-map-concurrency-safe" aria-hidden="true">#</a> Is Map concurrency-safe?</h3><details class="hint-container details"><summary>Answer</summary><p><strong>Map cannot guarantee concurrency safety</strong></p><p>To ensure concurrency safety, use the following methods:</p><ul><li>Manually add read-write locks</li><li>Use <code>sync.Map</code></li></ul></details><h3 id="will-the-memory-of-a-key-be-released-after-the-key-is-deleted-from-the-map" tabindex="-1"><a class="header-anchor" href="#will-the-memory-of-a-key-be-released-after-the-key-is-deleted-from-the-map" aria-hidden="true">#</a> Will the memory of a key be released after the key is deleted from the Map?</h3>',9),h={class:"hint-container details"},u=t("<summary>Answer</summary><p>If the value of the map is</p><ul><li><strong>Value type</strong> (<code>int</code> <code>uint</code> <code>float32</code> <code>string</code> <code>struct{}</code>...), then the value will not be garbage collected after the key is deleted</li><li><strong>Reference type</strong> (<code>map</code> <code>slices</code> <code>chan</code> ...), then the value will be garbage collected after the key is deleted</li></ul><blockquote><p>If we want to force garbage collection, how do we operate?</p></blockquote><ul><li>Set the map to nil</li><li>Place the values that need to be retained in a new map and assign it to the current map</li></ul>",5),m={class:"hint-container tip"},f=e("p",{class:"hint-container-title"},"Exclusive for members",-1),p={href:"https://articles.zsxq.com/id_4w1a11i6xrw0.html",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,":::",-1);function g(_,b){const a=o("ExternalLinkIcon");return n(),s("div",null,[l,e("details",h,[u,e("div",m,[f,e("p",null,[e("a",p,[d("Code combat analysis"),c(a)])])])]),y])}const k=r(i,[["render",g],["__file","2-medium.html.vue"]]);export{k as default};
