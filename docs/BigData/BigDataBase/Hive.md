# 数据仓库

 ## 主要特点
     面向主题
     集成性
     非易失性
     时变性
     
 
## 数据仓库的分层架构
    可以分为三层 源数据层 数据仓库 数据应用层  中间还有一个重要的概念就是 仓库元数据的管理

# Hive和Hadoop的关系
Hive利用HDFS存储数据，利用MapReduce分析数据


# 结论
hive 建立一张表 跟已经存在的结构化的数据文件产生映射关系  映射成功后 就可以通过写sql来分析这结构化的数据 避免了写mr程序的麻烦

数据库   建表的时候一定要根据结构化数据指定分割符 建表的字段个数和结构化数据一致


[Hive安装](https://www.cnblogs.com/dxxblog/p/8193967.html) 并不是再hive-site.xml 直接加属性  是本来就有默认的 修改属性
[启动问题遇到的keng](https://blog.csdn.net/wuliusir/article/details/49156943)



搞了好久 其实很简单的  本来是叫修改直接修改hive-default.xml  不是直接加 开始没发现 搞了好久  然后就是里面的

还有启动成功前要把配置文件里面的70% 什么全部替换掉 还有就是驱动记得下载 
[启动成功后要改的](https://blog.csdn.net/wodedipang_/article/details/72720257)
