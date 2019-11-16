#Spark 
spark是基于内存的分布式，迭代计算框架，可以基于内存也可以基于磁盘迭代计算
- Apache Spark是一种包含流处理能力的下一代批处理框架。与Hadoop的MapReduce引擎基于各种相同原则开发而来的Spark主要侧重于通过完善的内存计算和处理优化机制加快批处理工作负载的运行速度
- Spark可作为独立集群部署（需要相应存储层的配合），或可与Hadoop集成并取代MapReduce引擎
- 与MapReduce不同，Spark的数据处理工作全部在内存中进行，只在一开始将数据读入内存，以及将最终结果持久存储时需要与存储层交互。所有中间态的处理结果均存储在内存中
- 除了引擎自身的能力外，围绕Spark还建立了包含各种库的生态系统，可为机器学习、交互式查询等任务提供更好的支持。相比MapReduce，Spark任务易于编写
- Spark的另一个重要优势在于多样性。该产品可作为独立集群部署，或与现有Hadoop集群集成。该产品可运行批处理和流处理，运行一个集群即可处理不同类型的任务
## 根据apche Spark 比mapreduce 快100倍以上
[spark环境搭建](https://www.jianshu.com/p/91a98fd882e7)

## spark的核心组件
- spark core: 实现spark的基本功能
        任务调度,内存管理,错误恢复,与存储系统交互等模块
        
        RDD:[弹性分布式数据集]API定义
  
- spark sql:  spark操作结构化数据的程序包
     
        通过sparkSql可以使用sql或者hsql查询数据
        
        sparksql支持多种数据源
        
        
- spark  streaming: 实时流计算组件

        提供操作数据流的API           
- MLlib:机器学习库,丰富强大


- Graphx:图计算,图像算法

- 集群管理器:(类似于Hadoop的Yarn) Mesos
# RDD的实现
RDD称为弹性分布式数据集 是spark运行时的内核实现

## RDD的基础概念
- Spark 中的 RDD 就是一个不可变的分布式对象集合
- 每个RDD都被分为多个分区,这些分区运行在集群中的不同节点上
- RDD 可以包含 Python、Java、Scala 中任意类型的对象
- 创建RDD的方式: [两种]
        第一种:读取一个外部的数据集(就是我们之前读取文本文件作为RDD的案例)
        sparkContext.textFile("/usr/local/data").cache();
        第二种:在驱动器程序中分发驱动器程序中的集合
        
- 操作RDD的方式: [两种]
    - 第一种: 转化操作
    - 第二种: 行动操作

## 数据源
Spark处理的数据可以是HDFS Hive HBase S3 MySQL Oracle 等 

## 调度器
YARN Mesos AWS 
- Spark 在操作过程中会缓存中间步骤的数据
- 如果 Spark应用中的某个计算步骤非常耗时，则会缓存该步骤
- 若计算步骤很长，则会增加缓存计算结果的频次
- 从一个作业切换到下一个作业时 将发生一次checkpoint操作 在此之前会缓存上一个作业的中间结果，checkpoint操作会将数据放置在磁盘文件系统中

## spark 教程
[史上最简单的spark分布式计算教程](https://blog.csdn.net/youbitch1/article/details/89925790)


##Spark SQL的本质是将应用层提供的SQL语句翻译为计算框架的job代码 并将其Job提交到集群执行的一种查询机制

## Spark-SQL
- 啥子是Spark-SQL?
- 这个就比较厉害了,这是一个用来操作结构化,半结构化数据的接口
    - 结构化数据指的是任何有结构信息的数据,
    - 所谓的结构数据,就是每条记录共用的已知的字段集合
    - 如果你的数据是这个样子,那么sparkSQL绝对是你的开发首选
    - sparkSQL查询这些数据会更加的简单高效

## RDD  DataSet DataFrame 的相关解析
- RDD
    - RDD是Spark提供的最重要的抽象的概念，弹性的分布式数据集，它是一种有容错机制的特殊集合，可以分布在集群的节点上，
    以函数式编操作集合的方式，进行各种并行操作。Spark的RDD内置了各种函数操作，举个例子，我们编写wordcount案例，
    如果使用mapreduce进行编程，还是很复杂的，如果用RDD的话代码量大大的减少（scala编程一句话搞定），所以相对mapreduce来说单从编程上就简化了很多。
    但是同时也出现了一个问题，学习Scala、python、java语言，那么这个使用的成本以及门槛就会很高了对于不太懂开发的人（DBA）想要使用spark是比较困难的。

- [异同](https://blog.csdn.net/weixin_38613375/article/details/89500160)

## spark的整个运行流程进行总结
- 把我们编写的spark应用编译打包
- 通过spark-submit 脚本提交我们的程序
- spark-submit脚本启动驱动器程序,调用main()
- 驱动器与集群管理器通信,申请资源启动执行器节点
- 集群管理器为驱动器启动执行器节点
- 驱动器把任务task发送到执行器,执行器创建executor负责任务的具体执行
- 任务执行完成保存结果
- 如果main()退出或者执行sparkContext.stop().那么驱动器会终止执行器,并且通过集群管理器释放资源


## 让我们先了解一下sparkStreaming的基本概念
- 在很多的应用中,我们需要即时处理收到的数据,比如实时的交易额,成交量,实时安全检测,安全报警,总之就是需要实时处理的数据
- sparkstreaming就是spark为这些应用而设计的模型
- sparkstreaming是弹性的,高吞吐,高容错的实时数据流处理框架
- 它提供给我们一套和批处理非常相似的Api编写流式计算程序
- sparkstreaming的数据源:
    - kafka
    - elasticsearch
    - habse
    - flume
    - HDFS
- 也可以通过window,map等高级函数组成的复杂算法处理
- 最终处理完的数据可以输出到文件系统,或者数据库等


## sparkStreaming基本概念
- streaming使用的是微批次的架构,这个在第一章我们也简单的了解过
- 你可以这么理解,streaming是一系列连续的小规模批处理
- streaming从各种数据源读取数据,并且把数据分为小的批次
- 新的批次按照均匀的时间间隔创建出来
- 每个时间区间开始的时候,一个新的批次就被创建出来,在该区间内收到的数据都会被添加到这个批次中,时间区间结束的时候,批次停止增长
- 时间区间是由批次间隔这个参数设置的,就是我们上一章节中的Durations.seconds(1) 这个参数
- 批次间隔一般都是设置在毫秒级或者几秒之间,这个参数是由我们开发者根据实际的需求配置的
- 每次传输的批次我们都可以理解为RDDs,Dstream只不过是基于RDD的一层抽象而已,所以我们才可以使用filter等其他函数操作Dstream
- sparkStreaming的抽象就是离散化流,也就是我们说的Dstream,它本质上其实还是一个RDD

