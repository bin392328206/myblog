# Flume
Flume是Cloudera提供的一个分布式、可靠、和高可用的海量日志采集、聚合和传输的日志收集系统，支持在日志系统中定制各类数据发送方，用于收集数据;同时，Flume提供对数据进行简单处理，并写到各种数据接受方(可定制)的能力。
[官方文档](https://github.com/apache/flume)



## 自己的理解 就是 把数据从日志收集 然后存储 最后再转发出去的一个东西  主要有 三个核心组件 第一个是 source 就是对数据做拿来的 可以拦截到 第二个组件 channal的数据
最后channl 做不同方式的存储 本地磁盘 或者内存方式的 第三个就是把这些数据推送到其他的消费端 所有 flume 可以做kafka的生产者

[Apache Flume1.8.0用户手册官方文档理解](https://blog.csdn.net/weixin_40483882/article/details/81227952)

[Storm之——Storm+Kafka+Flume+Zookeeper+MySQL实现数据实时分析(环境搭建篇)](https://blog.csdn.net/l1028386804/article/details/79440511)


[flume安装](https://www.cnblogs.com/zgaspnet/p/9101357.html)
