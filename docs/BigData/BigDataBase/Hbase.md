# Hbase 分布式数据库
[Hbase搭建](https://blog.csdn.net/qq_33857413/article/details/82868411)


## 对于Habse的 数据结构的理解
[Hbase表结构](https://www.w3cschool.cn/hbase_doc/hbase_doc-oky12ls4.html)



## Hbase的表结构

1.Row Key 用来检索的主键 可以通过单个访问数据

2.列族  每个列都属于列族的一部分 列族是表的一部分 要再创建表的时候就定义    

3. 时间戳 也是用来确定的一个唯一单元 
4. cell 用来存储 Row key +列 所确定的唯一单元 用于存放唯一数据 全部用字节码存储 

## 总结 
基于列存储的数据库 嗯 还行吧 可以减少许多的多表查询  再我看来 一个列族就是以前的mysql的一个表  如果一个用户有多种用途 那么他就可以要多表查询 但是再hbase里面是不需要的
他只要设计多个列族 并且列族的新增也是非常容易拓展 然后 hbase对于 亿级数据的效率 很高 没有达到这种层段的数据是没有必要用hbse的



# Sqoop工具
是一款Hadoop和关系型数据库之间数据导入导出的工具 
[安装和简单的使用](https://www.jianshu.com/p/df1ec86c9563)  
