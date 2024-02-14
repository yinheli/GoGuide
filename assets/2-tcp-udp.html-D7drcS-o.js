import{_ as e}from"./tcp-connect-CgdHBsV3.js";import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as i}from"./app-CQTJV0kQ.js";const s="/assets/image/article/network/tcp_en.png",r="/assets/image/article/network/tcp_state_en.png",o={},c=i('<h3 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp"><span>TCP</span></a></h3><p>Transmission Control Protocol (TCP) is a connection-oriented, reliable, byte-stream-based transport layer communication protocol.</p><h4 id="tcp-header-structure" tabindex="-1"><a class="header-anchor" href="#tcp-header-structure"><span>TCP Header Structure</span></a></h4><figure><img src="'+s+'" alt="tcp header" tabindex="0" loading="lazy"><figcaption>tcp header</figcaption></figure><table><thead><tr><th>TCP Header Field</th><th>Description</th></tr></thead><tbody><tr><td>Source Port</td><td>Sender&#39;s port number, range (0~65535)</td></tr><tr><td>Destination Port</td><td>Receiver&#39;s port number, range (0~65535)</td></tr><tr><td>Sequence Number</td><td>If the TCP data is too large (greater than the allowable degree of IP packet), it needs to be segmented. This sequence number records the sequence number of each packet, allowing the receiver to reassemble the TCP data. The value of the sequence number field refers to the sequence number of the first byte of data sent by this segment. Abbreviated as <code>seq</code></td></tr><tr><td>Acknowledgment Number</td><td>To confirm that the receiver has indeed received the packet data sent out by the sender, when the sender receives this acknowledgment code, it can confirm that the previous packet has been correctly received. This acknowledgment number is the sequence number of the first byte of data from the next segment expected to be received from the other party. Abbreviated as <code>ack</code></td></tr><tr><td>Header Length</td><td>Indicates the length of the TCP header, range (0~15), unit 32bit, for example, when the value is 5, it means that the header length is 20Byte(160bit), if the option field is empty, then the TCP header length is 20Byte, that is, the value is 5</td></tr><tr><td>URG</td><td><code>URG=1</code> indicates that there is urgent data, the last byte of the urgent data is pointed out by the urgent data pointer, generally less used</td></tr><tr><td>ACK</td><td><code>ACK=1</code> indicates that the value in the acknowledgment number field is valid, 0 indicates invalid</td></tr><tr><td>PSH</td><td><code>URG=1</code> indicates that the urgent pointer field is valid, representing that this packet is an urgent packet. It tells the system that there is urgent data in this segment and should be transmitted as soon as possible (equivalent to high-priority data)</td></tr><tr><td>RST</td><td><code>RSP=1</code> rebuilds the connection, if the RST bit is received, some errors usually occur</td></tr><tr><td>SYN</td><td><code>SYN=1</code> indicates that this is a connection request or connection acceptance message, generally used in the handshake stage</td></tr><tr><td>FIN</td><td><code>FIN=1</code> indicates that the data of the sender of this segment has been sent and requests to release the transport connection</td></tr><tr><td>Receive Window</td><td>Used for flow control, indicating the number of bytes the receiver is willing to receive, range <code>0~65535</code> bytes</td></tr><tr><td>Checksum</td><td>The checksum covers the entire TCP segment, i.e., the TCP header and TCP data. This is a mandatory field, it must be calculated and stored by the sender, and verified by the receiver</td></tr><tr><td>Urgent Data Pointer</td><td>When <code>URG=1</code> is valid, it is a positive offset, and the sum with the value in the sequence number represents the sequence number of the last byte of urgent data</td></tr><tr><td>Options</td><td>Used when the sender and receiver negotiate the maximum segment length (MSS) (only exists in SYN messages) or used as a window adjustment factor in high-speed network environments, can also store timestamp data</td></tr></tbody></table><h4 id="tcp-state-machine" tabindex="-1"><a class="header-anchor" href="#tcp-state-machine"><span>TCP State Machine</span></a></h4><figure><img src="'+r+'" alt="TCP Stateful" tabindex="0" loading="lazy"><figcaption>TCP Stateful</figcaption></figure><h4 id="tcp-three-way-handshake" tabindex="-1"><a class="header-anchor" href="#tcp-three-way-handshake"><span>TCP Three-Way Handshake</span></a></h4><figure><img src="'+e+'" alt="TCP Connection" tabindex="0" loading="lazy"><figcaption>TCP Connection</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">Three-Way Handshake Process</p><ol><li>The client sends <code>SYN=1</code>, and specifies the client&#39;s initial sequence number <code>ISN</code>, i.e., <code>x</code>.</li><li>The server sends its own <code>SYN</code> segment as an acknowledgment, also specifying its own <code>ISN</code>, i.e., <code>y</code>. To acknowledge the client&#39;s <code>SYN</code>, it sets <code>ACK</code> to <code>x+1</code>. In this way, each time a <code>SYN</code> is sent, the sequence number will increase by 1. If there is a loss, it will be retransmitted.</li><li>To acknowledge the server&#39;s <code>SYN</code>, the client sets <code>ACK</code> to <code>y+1</code> in the returned value.</li></ol></div><div class="hint-container tip"><p class="hint-container-title">TCP Four-Way Handshake</p><ol><li>The client sends <code>FIN=1</code>, and includes its current sequence number <code>x+2</code>. It also includes an <code>ACK=y+1</code> to acknowledge the data most recently received from the other side.</li><li>The server adds 1 to the value <code>x+2</code> as the <code>ACK</code> sequence number, indicating that the previous packet has been received. At this time, the upper-layer application will be notified that the other end has initiated a shutdown operation, which usually causes the application to initiate its own shutdown operation.</li><li>The server initiates its own <code>FIN=1</code>, <code>seq=y+1</code>.</li><li>The client acknowledges, sends <code>ACK=y+2</code> to the server.</li></ol></div><div class="hint-container warning"><p class="hint-container-title">Why is a three-way handshake needed? What is its purpose?</p><details class="hint-container details"><summary>Details</summary><p>The process of TCP establishing a connection is the process of synchronizing sequence numbers, SYN (Synchronize Sequence Numbers) is to synchronize sequence numbers. Therefore, the purpose of the three-way handshake is to allow the client (Client) and the server (Service) to obtain each other&#39;s sequence number.</p></details></div><div class="hint-container warning"><p class="hint-container-title">Why is a four-way handshake needed? What is its purpose?</p><details class="hint-container details"><summary>Details</summary><p>The reason why a four-way handshake is needed is because TCP is a <strong>full-duplex</strong> protocol, i.e., both the client and the server can actively send messages, so both ends need to send disconnect instructions after the transmission is completed, and need to send <code>FIN=1</code> separately to disconnect, and use <code>ACK</code> to determine whether the sending was successful.</p></details></div><div class="hint-container caution"><p class="hint-container-title">What happens if SYN times out during connection?</p><details class="hint-container details"><summary>Details</summary><p>If the client sends a <code>SYN</code> command, and drops the line before the server returns the <code>SYN</code> command, the server will try to resend the <code>SYN-ACK</code> command. Under Linux, the default is to retry 5 times, the interval time starts to double from 1s, i.e., <code>1s, 2s, 4s, 8s, 16s</code>, so the timeout time is <code>1s + 2s + 4s+ 8s+ 16s + 32s = 63s</code>. After the timeout, TCP will disconnect.</p></details></div>',14),d=[c];function h(l,p){return n(),a("div",null,d)}const y=t(o,[["render",h],["__file","2-tcp-udp.html.vue"]]),f=JSON.parse('{"path":"/en/guide/concepts/network/2-tcp-udp.html","title":"TCP/UDP","lang":"en-US","frontmatter":{"order":2,"title":"TCP/UDP","description":"TCP Transmission Control Protocol (TCP) is a connection-oriented, reliable, byte-stream-based transport layer communication protocol. TCP Header Structure tcp headertcp header T...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/concepts/network/2-tcp-udp.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/concepts/network/2-tcp-udp.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"TCP/UDP"}],["meta",{"property":"og:description","content":"TCP Transmission Control Protocol (TCP) is a connection-oriented, reliable, byte-stream-based transport layer communication protocol. TCP Header Structure tcp headertcp header T..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://goguide.ryansu.tech/assets/image/article/network/tcp_en.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-14T15:36:34.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"TCP/UDP"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-02-14T15:36:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP/UDP\\",\\"image\\":[\\"https://goguide.ryansu.tech/assets/image/article/network/tcp_en.png\\",\\"https://goguide.ryansu.tech/assets/image/article/network/tcp_state_en.png\\",\\"https://goguide.ryansu.tech/assets/image/article/network/tcp-connect.png\\"],\\"dateModified\\":\\"2024-02-14T15:36:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":3,"title":"TCP","slug":"tcp","link":"#tcp","children":[{"level":4,"title":"TCP Header Structure","slug":"tcp-header-structure","link":"#tcp-header-structure","children":[]},{"level":4,"title":"TCP State Machine","slug":"tcp-state-machine","link":"#tcp-state-machine","children":[]},{"level":4,"title":"TCP Three-Way Handshake","slug":"tcp-three-way-handshake","link":"#tcp-three-way-handshake","children":[]}]}],"git":{"createdTime":1707924994000,"updatedTime":1707924994000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":3.13,"words":938},"filePathRelative":"en/guide/concepts/network/2-tcp-udp.md","localizedDate":"February 14, 2024","autoDesc":true,"excerpt":"<h3>TCP</h3>\\n<p>Transmission Control Protocol (TCP) is a connection-oriented, reliable, byte-stream-based transport layer communication protocol.</p>\\n<h4>TCP Header Structure</h4>\\n<figure><img src=\\"/assets/image/article/network/tcp_en.png\\" alt=\\"tcp header\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>tcp header</figcaption></figure>"}');export{y as comp,f as data};
