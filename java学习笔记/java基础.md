<details> 
<summary><font size="4" color="orange">1. Java 中的序列化和反序列化是什么？</font></summary> <pre>
  <strong><text>(1)序列化是指将对象转换为字节流的过程，反序列化就是将字节流转化为对象
  (2)序列化和反序列化都是用于将对象保存或恢复的重要机制
  (3)主要用于对象持久化，网络传输，远程调用和分布式系统数据交换</text></strong>
  <ul><text>
<li><strong>应用场景</strong>：包括网络传输、远程调用、持久化存储（如保存到文件或数据库）、以及分布式系统中数据交换。</li>
<li><strong>Java 序列化关键类和接口</strong>：<code>ObjectOutputStream</code> 用于序列化，<code>ObjectInputStream</code> 用于反序列化。类必须实现 <code>Serializable</code> 接口才能被序列化。</li>
<li><strong>transient 关键字</strong>：在序列化过程中，有些字段不需要被序列化，例如敏感数据，可以使用 <code>transient</code> 关键字标记不需要序列化的字段。</li>
<li><strong>serialVersionUID</strong>：每个 <code>Serializable</code> 类都应该定义一个 <code>serialVersionUID</code>，用于在反序列化时验证版本一致性。如果没有明确指定，Java 会根据类的定义自动生成一个 UID，版本不匹配可能导致反序列化失败。</li>
<li><strong>序列化性能问题</strong>：Java 的默认序列化机制可能比较慢，尤其是对于大规模分布式系统，可能会选择更加高效的序列化框架（如 Protobuf、Kryo）。</li>
<li><strong>安全性</strong>：反序列化是一个潜在的安全风险，因为通过恶意构造的字节流，可能会加载不安全的类或执行不期望的代码。因此，反序列化过程需要进行输入验证，避免反序列化漏洞。</li>
</text></ul></pre></details>
<details> 
<summary><font size="4" color="orange">2. Java 的优势是什么？</font></summary> <pre>
  <text>1.跨平台（可移植性，通过jvm实现）-一次编写，处处运行 （JIT和AOT）
  2.垃圾回收-自动回收内存，提高内存管理效率
  3.相关生态-强大的类库和第三方组件
  4.面向对象-封装、继承、多态<br>
  补充：
  JIT （Just-In-Time，即时编译）编译器是一种<strong>在程序运行时将字节码转换为机器码的技术</strong>
  AOT（Ahead-Of-Time，预编译）是一种<strong>在程序运行之前将字节码直接编译为本地机器码的技术。</strong>
  <font size="4" color="red">提前编译的好处是减少运行时编译的开销，且减少程序启动所需的编译时间，提高启动速度。</font>
 </text></pre></details>

