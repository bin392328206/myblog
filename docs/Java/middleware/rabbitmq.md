# 看的一本书 Rabbitmq实战 消息队列 分布式消息队列
# 消息通信
  什么是消息 包括2个部分 一个是有效载荷 另外一个是标签 有效载荷就是你要传输的数据  标签用来决定谁来获取消息的拷贝 
   整个过程其实很简单 生产者创建消息 消费者接收消息 b不过再此之前 先建立信道channel 
    为什么要有信道  信道是再tcp连接的虚拟连接 因为tcp连接的创建和销毁是很耗开销的 如果用他直接发送amqp命令 那么很快就会到性能瓶颈
    我们把amqp连接看成光缆 信道看成是里面的光束  
    AMQP 看成是加强版的传输层   使用信道 可以尽可能的创建传输层 
  
  
 ## AMQP 分为三部分 交换器 队列 和绑定
 
 想要真正的了解Rabbit有些名词是你必须知道的。
 
 包括：ConnectionFactory（连接管理器）、Channel（信道）、Exchange（交换器）、Queue（队列）、RoutingKey（路由键）、BindingKey（绑定键）。
 
 ConnectionFactory（连接管理器）：应用程序与Rabbit之间建立连接的管理器，程序代码中使用；
 
 Channel（信道）：消息推送使用的通道；
 
 Exchange（交换器）：用于接受、分配消息；
 
 Queue（队列）：用于存储生产者的消息；
 
 RoutingKey（路由键）：用于把生成者的数据分配到交换器上；
 
 BindingKey（绑定键）：用于把交换器的消息绑定到队列上；
 

[交换器分类](https://www.cnblogs.com/vipstone/p/9295625.html)
RabbitMQ的Exchange（交换器）分为四类：

direct（默认）
headers 
fanout
topic



非事务模式的性能是事务模式的性能高149倍

Confirm的三种实现方式：  将信道设置成confirm模式

方式一：channel.waitForConfirms()普通发送方确认模式；

方式二：channel.waitForConfirmsOrDie()批量确认模式；

方式三：channel.addConfirmListener()异步监听发送方确认模式；  这种方式就是执行效率高 
看代码可以知道，我们只需要在推送消息之前，channel.confirmSelect()声明开启发送方确认模式，再使用channel.waitForConfirms()等待消息被服务器确认即可。
综合总体测试情况来看：Confirm批量确定和Confirm异步模式性能相差不大，Confirm模式要比事务快10倍左右。

rabbitmq  他是由erlang 语言编写的 erlang 语言天生支持分布式 他能够让他的节点进行本地通信 不管他们是否真的再同一台服务器上       
