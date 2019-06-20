### 前言
    刚好公司随着业务 和开发进入了迭代 需要一个链路追踪的ARM工具 刚好有机会自己搭建一个 所有就记录一下啦
    
# 什么是SkyWalking
    目前主要的一些 APM 工具有: Cat、Zipkin、Pinpoint、
    SkyWalking；Apache SkyWalking 是观察性分析平台和应用性能管理系统。提供分布式追踪、服务网格遥测分析、度量聚合和可视化一体化解决方案。
![](https://www.funtl.com/assets1/Lusifer_2019011401370001.jpeg)
- Skywalking Agent： 使用 JavaAgent 做字节码植入，无侵入式的收集，并通过 HTTP 或者 gRPC 方式发送数据到 SkyWalking Collector。
- SkyWalking Collector： 链路数据收集器，对 agent 传过来的数据进行整合分析处理并落入相关的数据存储中。
- Storage： SkyWalking 的存储，时间更迭，SW 已经开发迭代到了 6.x 版本，在 6.x 版本中支持以 ElasticSearch(支持 6.x)、Mysql、TiDB、H2、作为存储介质进行数据存储。
- UI： Web 可视化平台，用来展示落地的数据。
## SkyWalking 功能特性
多种监控手段，语言探针和服务网格(Service Mesh)
多语言自动探针，Java，.NET Core 和 Node.JS
轻量高效，不需要大数据
模块化，UI、存储、集群管理多种机制可选
支持告警
优秀的可视化方案

## SkyWalking 服务端配置 我们使用es 作为SkyWalking 的数据库
- 装一个es 2进制 或者是 docker 随意 我们是直接用的阿里云(装es好多坑呀 比如说 最大的内存 文件没有权限 用户权限等)
- 下载并启动 SkyWalking 直接下载2进制文件 官方已经为我们准备好了编译过的服务端版本，下载地址为 http://skywalking.apache.org/downloads/，这里我们需要下载 6.x releases 版本
- 配置 SkyWalking 因为是java写的 所以要修改application.yml
![](https://www.funtl.com/assets1/Lusifer_20190114030006.png)
- 启动 SkyWalking
## SkyWalking 客户端配置
### Java Agent 服务器探针
IDEA 部署探针
Java 启动方式部署探针（我们是 Spring Boot 应用程序，需要使用 java -jar 的方式启动应用）
Docker 启动方式部署探针（需要做到一次构建到处运行的持续集成效果，本章节暂不提供解决方案，到后面的实战环节再实现）
### IDEA 部署探针
修改项目的 VM 运行参数，点击菜单栏中的 Run -> EditConfigurations...，此处我们以 nacos-provider 项目为例，修改参数如下
-javaagent:D:\Workspace\Others\hello-spring-cloud-alibaba\hello-spring-cloud-external-skywalking\agent\skywalking-agent.jar
-Dskywalking.agent.service_name=nacos-provider
-Dskywalking.collector.backend_service=localhost:11800

![](https://www.funtl.com/assets1/Lusifer_20190114034730.png)
-javaagent：用于指定探针路径
-Dskywalking.agent.service_name：用于重写 agent/config/agent.config 配置文件中的服务名
-Dskywalking.collector.backend_service：用于重写 agent/config/agent.config 配置文件中的服务地址

## Java 启动方式
java -javaagent:/path/to/skywalking-agent/skywalking-agent.jar -Dskywalking.agent.service_name=nacos-provider -Dskywalking.collector.backend_service=localhost:11800 -jar yourApp.jar

##  各种指标
Avg SLA： 服务可用性（主要是通过请求成功与失败次数来计算）
CPM： 每分钟调用次数
Avg Response Time： 平均响应时间
服务可用性指标 SLA
每分钟平均响应数
平均响应时间
服务进程 PID
服务所在物理机的 IP、Host、OS
运行时 CPU 使用率
运行时堆内存使用率
运行时非堆内存使用率
GC 情况


##  神坑 因为我们公司的服务比较多 然后我一个子把12个服务的探针全部接入到服务端  然后这些数据会写到
es中 导致我的数据是能跑几个小时 然后就挂了 但是 服务个数还嫩可以看到 但是实际是挂了 
最好去社区找资料才解决 因为此时sky用的人不是很多 资料也不是那么多  解决方案 修改es中 
thread_pool.index.queue_size: 500
thread_pool.write.queue_size: 500
