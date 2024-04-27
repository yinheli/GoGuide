import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as i,c as o,a as e,e as a,f as r,b as l}from"./app-BSiqoa40.js";const p={},d=e("h2",{id:"introduction-to-gorm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction-to-gorm"},[e("span",null,"Introduction to GORM")])],-1),c={href:"https://gorm.io",target:"_blank",rel:"noopener noreferrer"},u=l(`<ul><li>Full-featured ORM</li><li>Associations (Has One, Has Many, Belongs To, Many To Many, Polymorphism, Single Table Inheritance)</li><li>Hooks for Create, Save, Update, Delete, and Find operations</li><li>Support for preloading with Preload and Joins</li><li>Transactions, nested transactions, Save Points, and Rollback To Saved Point</li><li>Context, precompiled mode, and DryRun mode</li><li>Batch inserts, FindInBatches, Find/Create with Map, CRUD using SQL expressions and Context Valuer</li><li>SQL builder, Upsert, database locks, Optimizer/Index/Comment Hint, named parameters, subqueries</li><li>Composite primary keys, indexes, constraints</li><li>Automatic migrations</li><li>Custom logger</li><li>Flexible and extensible plugin API: Database Resolver (for multiple databases and read-write separation), Prometheus, and more</li><li>Rigorously tested for each feature</li><li>Developer-friendly</li></ul><div class="hint-container tip"><p class="hint-container-title">Pros and Cons</p><p><strong>Pros</strong>:</p><ul><li><strong>Powerful Features</strong>: GORM provides extensive functionality, such as chainable queries, preloading, transactions, and model associations.</li><li><strong>Ease of Use</strong>: GORM&#39;s API design is very developer-friendly, allowing developers to quickly get started.</li><li><strong>Flexibility</strong>: GORM offers numerous configuration options to tailor it to specific needs.</li></ul><p><strong>Cons</strong>:</p><ul><li><strong>Performance</strong>: Due to heavy use of reflection, GORM&#39;s performance can be lower.</li><li><strong>Not as Convenient</strong>: GORM&#39;s API, while similar to writing raw SQL, doesn&#39;t significantly reduce the workload. Queries and updates still require struct definitions, and handling null values can be cumbersome.</li></ul></div><h2 id="examples-of-using-gorm" tabindex="-1"><a class="header-anchor" href="#examples-of-using-gorm"><span>Examples of Using GORM</span></a></h2><h3 id="creating-data" tabindex="-1"><a class="header-anchor" href="#creating-data"><span>Creating Data</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;Jinzhu&quot;</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="updating-data" tabindex="-1"><a class="header-anchor" href="#updating-data"><span>Updating Data</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">&quot;Age&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="querying-data" tabindex="-1"><a class="header-anchor" href="#querying-data"><span>Querying Data</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// Retrieve user with ID 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="deleting-data" tabindex="-1"><a class="header-anchor" href="#deleting-data"><span>Deleting Data</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function g(m,h){const n=s("ExternalLinkIcon");return i(),o("div",null,[d,e("p",null,[e("a",c,[a("GORM"),r(n)]),a(" is a powerful ORM library that is highly popular. It offers a wide range of features, including chainable queries, preloading, transactions, and model associations.")]),u])}const y=t(p,[["render",g],["__file","2-gorm.html.vue"]]),k=JSON.parse('{"path":"/en/guide/library/ORM/2-gorm.html","title":"GORM","lang":"en-US","frontmatter":{"order":2,"title":"GORM","icon":"material-symbols:database-outline","description":"Introduction to GORM GORM is a powerful ORM library that is highly popular. It offers a wide range of features, including chainable queries, preloading, transactions, and model ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/library/ORM/2-gorm.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/library/ORM/2-gorm.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"GORM"}],["meta",{"property":"og:description","content":"Introduction to GORM GORM is a powerful ORM library that is highly popular. It offers a wide range of features, including chainable queries, preloading, transactions, and model ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T01:19:58.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-27T01:19:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GORM\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-27T01:19:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"Introduction to GORM","slug":"introduction-to-gorm","link":"#introduction-to-gorm","children":[]},{"level":2,"title":"Examples of Using GORM","slug":"examples-of-using-gorm","link":"#examples-of-using-gorm","children":[{"level":3,"title":"Creating Data","slug":"creating-data","link":"#creating-data","children":[]},{"level":3,"title":"Updating Data","slug":"updating-data","link":"#updating-data","children":[]},{"level":3,"title":"Querying Data","slug":"querying-data","link":"#querying-data","children":[]},{"level":3,"title":"Deleting Data","slug":"deleting-data","link":"#deleting-data","children":[]}]}],"git":{"createdTime":1714180748000,"updatedTime":1714180798000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":0.92,"words":277},"filePathRelative":"en/guide/library/ORM/2-gorm.md","localizedDate":"April 27, 2024","autoDesc":true,"excerpt":"<h2>Introduction to GORM</h2>\\n<p><a href=\\"https://gorm.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">GORM</a> is a powerful ORM library that is highly popular. It offers a wide range of features, including chainable queries, preloading, transactions, and model associations.</p>\\n<ul>\\n<li>Full-featured ORM</li>\\n<li>Associations (Has One, Has Many, Belongs To, Many To Many, Polymorphism, Single Table Inheritance)</li>\\n<li>Hooks for Create, Save, Update, Delete, and Find operations</li>\\n<li>Support for preloading with Preload and Joins</li>\\n<li>Transactions, nested transactions, Save Points, and Rollback To Saved Point</li>\\n<li>Context, precompiled mode, and DryRun mode</li>\\n<li>Batch inserts, FindInBatches, Find/Create with Map, CRUD using SQL expressions and Context Valuer</li>\\n<li>SQL builder, Upsert, database locks, Optimizer/Index/Comment Hint, named parameters, subqueries</li>\\n<li>Composite primary keys, indexes, constraints</li>\\n<li>Automatic migrations</li>\\n<li>Custom logger</li>\\n<li>Flexible and extensible plugin API: Database Resolver (for multiple databases and read-write separation), Prometheus, and more</li>\\n<li>Rigorously tested for each feature</li>\\n<li>Developer-friendly</li>\\n</ul>"}');export{y as comp,k as data};
