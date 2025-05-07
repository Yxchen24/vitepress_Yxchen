

#  <a id="Maven">Maven 安装</a>

## 要求

- 提前安装 `Java` 并且配置 `JAVA_HOME` 

- Maven 文件

下载地址：

- 官方：https://maven.apache.org/download.cgi
- 百度网盘：链接: https://pan.baidu.com/s/1NNi7NK1uP3gx4R9fzQrkRA 提取码: mk6m

解压，可以解压到 `C:\Program Files`

![image-20240827181020405](public\jIaRat0bGpmcnwpT.webp)

## 设置环境变量

![image-20240827181137899](public\qnUeATexvH7arc2a.png)

- MAVEN_HOME
- C:\Program Files\apache-maven-3.9.9

> 就是安装之后的根目录，把 Mavne 下载到哪里就选着哪里

![image.png](public\meOJ2hc2hKEOzyaB.webp)

找到 `系统环境变量` 里面的 `Path` 点击 `编辑` 之后我们就添加 `%MAVEN_HOME%\bin`

## 检查是否配置成功

Win + R 输入 `cmd` 调出黑窗口

只要有下面的输出就算安装成功！！

![image-20240827181536735](public\dn7xNAFS4I52oYPM.webp)

## 添加阿里云镜像

修改 `C:\Program Files\apache-maven-3.9.9\conf\settings.xml` （自己根目录下的 conf 文件夹里面的 `settings.xml`）

找 `mirrors` 标签找到不到的话，用快捷键 Ctrl + F

添加下面的部分

```xml
▼text复制代码<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror> 
```

最后，修改完成之后的情况:

![image-20240827184800731](public\QpQHM0JpcAFIiSCI.png)

> 注意：
>
> mirrors 标签里面配置 mirror 标签，不要改到最后就剩 mirror 标签了

# Idea Maven 配置

![image-20240827191449438](public\SulypTuvzDyRc00v.webp)

> 一定要确保 Use setting from .mvc/maven.conf 这个是非选择的状态！

![image-20240827190507612](public\ry0ztOEtMMTUfUf6.webp)

> 第二个 config file 选着自己安装好的目录下的 conf/setting.xml （需要配置好镜像，要不速度比较慢）

![image-20240827191602720](public\1WeQvfsS0e1LlmV5.webp)

> Local repository 也可以覆写，这个默认配置的是下载依赖的路径 C 盘，随着时间累计后面可能会比较大