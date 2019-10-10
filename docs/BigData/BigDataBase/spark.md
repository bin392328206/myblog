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

## 数据源
Spark处理的数据可以是HDFS Hive HBase S3 MySQL Oracle 等 

## 调度器
YARN Mesos AWS 
- Spark 在操作过程中会缓存中间步骤的数据
- 如果 Spark应用中的某个计算步骤非常耗时，则会缓存该步骤
- 若计算步骤很长，则会增加缓存计算结果的频次
- 从一个作业切换到下一个作业时 将发生一次checkpoint操作 在此之前会缓存上一个作业的中间结果，checkpoint操作会将数据放置在磁盘文件系统中

## spark 教程
[史上最简单的spark分布式计算教程](https://blog.csdn.net/youbitch1/article/details/88355111)
