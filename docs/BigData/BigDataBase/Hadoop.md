# 什么是Hadoop 
Hadoop是由java语言编写的，在分布式服务器集群上存储海量数据并运行分布式分析应用的开源框架 **允许是呀简单的编程模型再大量计算机集群中对大型的数据进行分布式采集处理**
### 适用场景
 - 大规模数据
 - 流式数据（写一次 读多次）
### Hadoop的架构
- HDFS:分布式文件存储 解决海量的数据存储
- YARN:分布式资源管理 解决资源任务的调度和资源的管理
- MapReduce：分布式计算 解决海量的数据计算
- Others: 利用YARN的资源管理功能实现其他数据的处理方式
### Hadoop发展历史
它是Lucene 创始人 DOUG Cutting 创建 源于Nutch 是lucene的子项目 开始

### 优缺点
1.扩容能力 分布式集群 横向扩展 
2.成本低
3.高效率 并发处理数据 分散存储 分散计算 
4.可靠性 能自动维护数据多份复制 能重新部署 高度的容错性
## Hadoop集群
搭建2个集群 HDFS集群和YARN集群 二者逻辑上分离 但是物理上是常常在一起

HDFS集群负责海量数据的存储，集群的角色主要有 NameNode , DataNode ,SecondaryNameNode


YARN集群 负责海量数据运算时的资源调度，集群在的角色主要有 ResourceManager,NodeManager


mapreduce 是一个实时计算的框架 是属于代码层面 类似于我们的Spring 


## HDFS 介绍
分布式文件系统（解决文件系统的大数据存储） 是Hadoop的核心组件 作为最底层的分布式存储服务而存在的

### HDFS的重要特性
- 首先它是一个文件系统，用于存储文件，通过统一的命名空间目录树来定位文件
- 其次它是分布式的，由很多服务器联合起来实现其功能
- 它是主从模式 Namenode 是主节点 DataNode 是从节点
- 分块存储 再物理上是分块存储 128M 
- 名字空间 NameNode负责文件系统的名字空间 HDFS会给客户端提供一个统一的抽象的目录树 客户端通过路径来访问文件
- 一次写入 多次读书 不支持修改 不适用做网盘 因为修改不方便 延迟大


### NameNode 概述
- NameNode是HDFS的核心 是主节点
- NameNode 仅仅存储HDFS的元数据：也就是文件系统的所有文件的目录数，并跟踪整个集群中的文件
- NameNode 不存储数据或者数据集 数据的本身全部存储在DataNode中
- NameNode 知道HDFS中任何给定文件的块位置 和列表
- NameNode并不持久化存储每个文件中各个块所在的DataNode的位置信息，这些信息会在系统启动时从数据节点重建 是从节点告诉主节点 来形成一个文件目录
- NameNode时HDFS中的单点故障 当它挂掉的时候HDFS无法访问
- NameNode所在的机器通常会配置大量的内存

### DataNode 概述
- DataNode 负责将实际数据存储
- 是从节点 和NameNode 通信 
- 当DataNode 启动的时候 它将自己发布到NameNode 
- 当某个DataNode 关闭的时候 不会影响数据 集群的可用性 
- DataNode 配置大量的硬盘空间
- DataNode 会定期向NameNode定期发送心跳 如果NameNode长时间没有接受到DateNode发送的心跳，NmmeNode就会DataNode失效了,默认3秒


## HDFS的工作机制
    NameNode负责管理整个文件系统的元数据，DataNode负责管理具体文件的数据块存储 Secondary NameNode 负责元数据的备份 防止单点故障
    
    HDFS的内部工作机制对客户端保持透明，客户端请求访问HDFS都是通过向NameNode申请来进行的

### HDFS写数据的流程
- 客户端发起文件上传请求，通过RPC与NameNode建立通讯 NameNode检查目标文件是否存在，父类名是否存在，返回是否可以上传
