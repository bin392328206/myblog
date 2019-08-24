# Zookeeper
#### 一、什么是zookeeper，有什么用
　ZooKeeper是一个分布式的，开放源码的分布式应用程序协调服务，是Google的Chubby一个开源的实现，它是集群的管理者，监视着集群中各个节点的状态根据节点提交的反馈进行下一步合理操作。最终，将简单易用的接口和性能高效、功能稳定的系统提供给用户（来自百度百科）。
　　其主要的功能有
1.命名服务   2.配置管理   3.集群管理   4.分布式锁  5.队列管理

#### 二、zookeeper的单机部署
1.下载并解压 zookeeper-3.4.10.tar.gz  

　　2.将conf目录下zoo_sample.cfg配置文件修改为zoo.cfg。

　　3.修改zoo.cfg。
```  
# The number of milliseconds of each tick
tickTime=2000
# The number of ticks that the initial 
# synchronization phase can take
initLimit=10
# The number of ticks that can pass between 
# sending a request and getting an acknowledgement
syncLimit=5
# the directory where the snapshot is stored.
# do not use /tmp for storage, /tmp here is just 
# example sakes.
#数据存放的位置(自主配置)
dataDir=/tmp/zookeeper/data
#日志存放的位置（新加的配置，默认在zookeeper的bin目录下的zookeeper.out）
dataLogDir=/tmp/zookeeper/logs
# the port at which the clients will connect
clientPort=2181
# the maximum number of client connections.
# increase this if you need to handle more clients
#maxClientCnxns=60
#
# Be sure to read the maintenance section of the 
# administrator guide before turning on autopurge.
#
# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance
#
# The number of snapshots to retain in dataDir
#autopurge.snapRetainCount=3
# Purge task interval in hours
# Set to "0" to disable auto purge feature
#autopurge.purgeInterval=1
~
```





