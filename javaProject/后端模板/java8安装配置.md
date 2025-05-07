# <a id="Java8">Java8安装配置</a>

下载地址：

- oracle 官网 ：https://www.oracle.com/java/technologies/downloads/?er=221886#java8-windows
- 百度网盘：链接: https://pan.baidu.com/s/1CkInO6Ir_qo_sf44Glasug 提取码: h4s9

拿到安装包之后直接执行 exe 程序直接下一步就行

![image-20240827160838034](..\..\public\6hS7UmlQqEBbYiJW.webp)![image-20240827160915156](..\..\public\Co1J1izZ0VzRIO6i.png)![image-20240827160941160](https://pic.code-nav.cn/post_picture/1608460212774109186/udOBpgYcMz93d1Jy.webp)![image-20240827161025126](https://pic.code-nav.cn/post_picture/1608460212774109186/znw1RHrmDjgS7rpg.png)

按照上面的步骤安装成功之后的路径在 `C:\Program Files\Java`

![image-20240827161736722](https://pic.code-nav.cn/post_picture/1608460212774109186/aep37URxyjpF9lJr.webp)

## 配置环境变量

> 系统 -> 关于 -> 高级系统设置

![image-20240827161317743](https://pic.code-nav.cn/post_picture/1608460212774109186/Bw5FDtGEuAFagS2s.webp)![image-20240827161642883](..\..\public\YmGoX5PTzRjc6K6Y.png)![image-20240827181954037](..\..\public\7p50ZOgeduusinyu.webp)

- JAVA_HOME
- C:\Program Files\Java\jdk-1.8
- 具体看自己安装到的目录，每个人都不一样

![image-20240827182224789](..\..\public\xEojTyFPp2FgAHHv.webp)

- %JAVA_HOME%\bin

![image-20240827171947322](..\..\public\aY5oX9Mih2XIHYXg.png)

> 最后设置好之后，一路点击确认就好了

## 测试是否安装成功

WIN + R 输入 cmd 回车 调出黑窗口

![image-20240827172135593](..\..\public\hZ3w7JOYf5usnx2S.png)

1、输入

```ebnf
▼text

复制代码java
```

![image-20240827172225442](..\..\public\jQtwCiADyZmT0Eve.webp)

2、输入

```applescript
▼text

复制代码java -version
```

![image-20240827172259906](..\..\public\OxHW8zBvHXh4ACV0.png)

3、输入

```ebnf
▼text

复制代码javac
```

![image-20240827175633521](..\..\public\cJJ33s8gtpTfuFki.webp)