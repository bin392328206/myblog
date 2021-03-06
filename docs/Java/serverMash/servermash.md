# 服务网格

## 简介
服务网格化

服务网格(Service Mesh)，最早使用由开发 Linkerd 的 Buoyant 公司提出，并在内部使用。2016 年 9 月 29 日第一次公开使用这个术语。2017 年的时候随着 Linkerd 的传入，Service Mesh 进入国内技术社区的视野。

服务网格是一个基础设施层，功能在于处理服务间通信，职责是负责实现请求的可靠传递。在实践中，服务网格通常实现为轻量级网络代理，通常与应用程序部署在一起，但是对应用程序透明。

服务网格称之为下一代微服务架构标准、通过Spring Cloud Alibaba 不难看出都是在使用各种组件组合成为我们期望的微服务架构的样子。这就直接导致了咱们目前使用的微服务架构模型都是七拼八凑的并没有一个有效的标准去界定这到底算不算微服务。

![](https://antcloud-cnhz02-athomeweb-01.oss-cn-hzfinance.aliyuncs.com/image/2019-06-13/3dadf8e4-b2bb-40e6-86f9-be3890179998.png)
- 为了解决单体的复杂度问题，我们引入微服务架构；
- 为了解决微服务架构下大量应用部署的问题，我们引入容器；
- 为了解决容器的管理和调度问题，我们引入 Kubernetes；
- 为了解决微服务框架的侵入性问题，我们引入 Service Mesh；
- 为了让 Service Mesh 有更好的底层支撑，我们又将 Service Mesh 运行在 k8s 上。

## 什么是云原生？
    云原生指 "原生为云设计"，具体说就是：应用原生被设计为在云上以最佳方式运行，充分发挥云的优势。
    
    
## Service Mesh 的核心价值

### 实现业务逻辑和非业务逻辑的分离
将非业务逻辑的功能实现，从客户端SDK中剥离出来，放到独立的 Proxy 进程中，这是 Service Mesh 在技术实现上走出的第一步，也是至关重要的第一步：因为这一步，实现了业务逻辑和非业务逻辑的分离，而且是最彻底的物理分离，哪怕需要为此付出一次远程调用的代价。

而这一步迈出之后，前面就是海阔天空：
业务逻辑和非业务逻辑分离之后，我们就可以将这些非业务逻辑继续下沉
下沉到基础设施，基础设施可以是基于VM的，可以是基于容器和k8s的；也可以是VM和容器混合
基础设施也可以以云的形式提供，可以是公有云、私有云，也可以是混合云、多云；
可以选择云上托管，完全托管也好，部分托管也好，产品形态可以很灵活
为下沉到基础设施提供可能
为上云提供可能
为应用轻量化提供可能
    
## Mesh化是云原生落地的关键步骤
![](https://antcloud-cnhz02-athomeweb-01.oss-cn-hzfinance.aliyuncs.com/image/2019-06-13/11cd626b-05fc-4c8d-aeae-45d438e0906b.png)
      如上图所示：
      最下方是云，基于k8s和容器打造，提供各种基础能力，这些能力有一部分来自传统中间件的下沉
      在云上是 Mesh 层，包含 Service Mesh 以及我们前面提到的各种扩展的 Mesh 模式，实现通信的标准化
      在通过 Mesh 剥离非业务功能并下沉之后，应用实现了轻量化，传统的 App 和新兴的微服务都可以受益于此
      更进一步，轻量化之后的业务应用，其工作负载在瘦身减负之后变得相当的干净，基本只剩业务逻辑，包括传统的 App，以 Container 形式运行的服务和新颖的 Function，这些负载在往 Serverless 形态转换时相对要轻松很多
        
        
![](https://antcloud-cnhz02-athomeweb-01.oss-cn-hzfinance.aliyuncs.com/image/2019-06-13/5de6141c-8d65-4953-b2da-05def5c028a1.png)

左边是传统的中间件形态，在云原生时代，我们希望将非业务功能从传统中间件的富客户端中剥离出来，然后将这些能力以及这些能力背后的中间件能力，下沉到基础设施，下沉到云。而中间件产品也会融入基础设施，如图中右边所示。未来的中间件将作为基础设施和云的一部分，而 Mesh 则成为连接应用和基础设施以及其他中间件产品的桥梁。
更重要的是：业务应用因此而实现轻量化，在剥离各种非业务功能之后，业务应用就实现了只关注业务逻辑的战略目标，从而实现从传统应用到云原生应用的转型。
总结：通过 Service Mesh 技术，我们实现了业务逻辑和非业务逻辑的分离，为应用的轻量化和云原生化提供可能；并通过将非业务逻辑的各种功能下沉到基础设施和云，极大的增强了基础设施和云的能力，为云原生的落地提供了极大助力。
因此，我们认为： Service Mesh 技术将在云原生落地中扮演了非常重要的作用，不可或缺。


#公司大佬写的博客
http://note.youdao.com/noteshare?id=e68a0032abb43dcbc3b82444ce8a2e6f
