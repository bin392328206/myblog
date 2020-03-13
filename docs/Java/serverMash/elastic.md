# elastic技术栈 学习 包括 ELK  和EFk

### 部署注意事项
- 必须不能使用 root  账户去部署它  
- 在/etc/sysctl.conf 里面加入 vm.max_map_count=262144 然后重启
- 采坑就是如果你在宿主机挂载了 数据卷 你就要给他权限 不然它没法启动 原因是会导致容器的数据不能加载

###  下面是是几篇学习文档
- [官方的镜像地址](https://www.docker.elastic.co/)
- [官方文档](https://www.elastic.co/cn/)
- [elk集成镜像](https://hub.docker.com/r/sebp/elk/)
- [安装文档elk集成方式](https://juejin.im/post/5ba4c8ef6fb9a05d082a1f53)

### docker-compose Es 和Kbana
    version: '2'
    services:
      elasticsearch:
        image: docker.elastic.co/elasticsearch/elasticsearch:6.5.4
        environment:
          - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
        volumes:
          - ./elasticsearch/data:/usr/share/elasticsearch/data
        hostname: elasticsearch
        restart: always
        ports:
          - "9200:9200"
          - "9300:9300"
      kibana:
        image: docker.elastic.co/kibana/kibana:6.5.4
        environment:
          - ELASTICSEARCH_URL=http://elasticsearch:9200 #elasticsearch查询接口地址
        hostname: kibana
        depends_on:
          - elasticsearch  #后于elasticsearch启动
        restart: always
        ports:
          - "5601:5601"



## Elasticsearch是什么:
- 分布式的Restful实时搜索和分析引擎
- 分布式的实时文件存储,每个字段都被索引并可被搜索
- 高扩展性,可扩展至上百台服务器,处理PB级结构化或非结构化数据
- Elasticsearch用于全文检索,结构化搜索,分析/合并使用

## Elasticsearch的特性:
- Elasticsearch没有典型意义的事务(无事务性)
- Elasticsearch是一种面向文档的数据库
- Elasticsearch没有提供授权和认证特性



### es 的基本用法
1.0 创建 索引 类似于 mysql 创建数据
2.0文档 存入索引库的原始数据 比如一个商品的 全部信息就是一个文档
3.0 字段 就是 文档里面具体的属性 和mysql 
4.0映射配置 用来定义文档中的属性是否被存储 是否索引 字段的类型等

es一些主要的字段的属性的 类型

1.type的分类
类似于 String 的 分为2种
        text:可分词，不可以参与聚合
        keyword: 不可分词 数据会作为完整的字段进行匹配 可以参与聚合
        
Numerical 分2类
        基本数据类型: long interger shortn byte doublle float half_float
        浮点数高精度类型 ：scaled_float        
Date 类
elasticsearch可以对日期格式化为字符串存储，但是建议我们存储为毫秒值，存储为long，节省空间
        
2.index 
   他可以影响字段是否被索引  true 可以被索引  就是可以用来被搜索  false相反  index的 默认值是true 所以我们需要将不需要被搜索的字段变成false
   
3.store
是否将数据进行额外存储。
在学习lucene和solr时，我们知道如果一个字段的store设置为false，那么在文档列表中就不会有这个字段的值，用户
的搜索结果中不会显示出来。
但是在Elasticsearch中，即便store设置为false，也可以搜索到结果。
原因是Elasticsearch在创建文档索引时，会将文档中的原始数据备份，保存到一个叫做_source的属性中。而且我
们可以通过过滤_source来选择哪些要显示，哪些不显示。
而如果设置store为true，就会在_source以外额外存储一份数据，多余，因此一般我们都会将store设置为false，事
实上，store的默认值就是false。


## 基本查询
GET /索引库名/_search 
{ "query":
{ "查询类型":
{ "查询条件":"查询条件值" }
 } 
 }                                                            
这里的query代表一个查询对象，里面可以有不同的查询属性查询类型：例如：match_all， match，term ， range 等等查询条件：
查询条件会根据类型的不同，写法也有差异，后面详细讲解
{
  "took" : 1,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : 2,
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "tecode",
        "_type" : "goods",
        "_id" : "5BVnzGsBCun8lUkrnfMz",
        "_score" : 1.0,
        "_source" : {
          "title" : "小王手机",
          "images" : "www.wangbin.ship:8080",
          "price" : "123"
        }
      },
      {
        "_index" : "tecode",
        "_type" : "goods",
        "_id" : "3",
        "_score" : 1.0,
        "_source" : {
          "title" : "超迷手机",
          "images" : "http//images",
          "price" : "122",
          "stock" : "22",
        }
      }
    ]
  }
}
took：查询花费时间，单位是毫秒time_out：是否超时_shards：分片信息hits：搜索结果总览对象total：搜索到的总条数max_score：所有结果中文档得分的hits：搜索结果的文档对象数组，每_index：索引库_type：文档类型_id：文档id_score：文档得分_source：文档的源数据



### 查询的几种方式
    match_all  查询所有
    match 匹配查询
    multi_match 多字段查询
    term 词条匹配 精确查询
    terms 多词条 精确查询 匹配
3.2.结果过滤
默认情况下，elasticsearch在搜索的结果中，会把文档中保存在_source的所有字段都返回。
如果我们只想获取其中的部分字段，我们可以添加_source的过滤
includes：来指定想要显示的字段excludes：来指定不想要显示的字

## 高级查询
- 布尔组合（bool)
bool把各种其它查询通过must（与）、must_not（非）、should（或）的方式进行组合
- 范围查询(range)
     有以下范围 gt 大于  gte大于等于  lt小于 lte小于等于
- 模糊查询(fuzzy)
        fuzzy 查询是 term 查询的模糊等价。它允许用户搜索词条与实际词条的拼写出现偏差，但是偏差的编辑距离不得
        超过2： GET /heima/_search { "query": { "fuzzy": { "title": "appla" } } } 这种类似
        
        
## 排序
sort 可以让我们按照不同的字段进行排序，并且通过order指定排序的方式
## 聚合aggregations
Elasticsearch中的聚合，包含多种类型，最常用的两种，一个叫桶，一个叫度量：   桶的概念 就是就我理解 就是 用来分组 的 他只管分组   度量 就是 计算 分完组了 当时要计算 然后把结果展示
综上所述，我们发现bucket aggregations 一种聚合：metrics aggregations即度量
 桶内度量 
 
 桶内嵌套套桶
### Elasticsearch致力于隐藏分布式系统的复杂性。以下这些操作都是在底层自动完成的 (天生的分布式集群)：

将你的文档分区到不同的容器或者分片(shards)中，它们可以存在于一个或多个节点中。
将分片均匀的分配到各个节点，对索引和搜索做负载均衡。
冗余每一个分片，防止硬件故障造成的数据丢失。
将集群中任意一个节点上的请求路由到相应数据所在的节点。
无论是增加节点，还是移除节点，分片都可以做到无缝的扩展和迁移。

Elasticsearch用于构建高可用和可扩展的系统。扩展的方式可以是购买更好的服务器(纵向扩展(vertical scale or scaling up))或者购买更多的服务器（横向扩展(horizontal scale or scaling out)）。
es的主从复制 数据同步 崩溃恢复
                                                                                                        
### es的分片
- 其实在es中 索引只是一个用来指向 一个或者多个分片 一个分片就是一个最小级别的工作单元 他只保存了索引中所有数据的一部分 分片就是一个lucene实例
- 分片是Elasticsearch在集群中分发数据的关键。把分片想象成数据的容器。文档存储在分片中，然后分片分配到你集群中的节点上。当你的集群扩容或缩小，Elasticsearch将会自动在你的节点间迁移分片，以使集群保持平衡
类似于 平衡2茶树
- 主分片 是可以用来做数据的操作的 当一个索引的所有主分片处于 gree状态 那么此时就可以提供服务了 复制分片 是用来分配到各个子节点
- 启动第二个节点 只要第二个节点与第一个节点有相同的cluster.name（请看./config/elasticsearch.yml文件），它就能自动发现并加入第一个节点所在的集群。如果没有，检查日志找出哪里出了问题。这可能是网络广播被禁用，或者防火墙阻止了节点通信。
- 对于搜索 如果请求发到了 主分片 那么主分片 会把请求 轮寻的发送给其他节点的复制分片 然后通过通过复制分片找到文档返回给主节点 主节点返回给请求对象
### 在集群系统中深度分页 
为了理解为什么深度分页是有问题的，让我们假设在一个有5个主分片的索引中搜索。当我们请求结果的第一页（结果1到10）时，每个分片产生自己最顶端10个结果然后返回它们给请求节点(requesting node)，它再排序这所有的50个结果以选出顶端的10个结果。
现在假设我们请求第1000页——结果10001到10010。工作方式都相同，不同的是每个分片都必须产生顶端的10010个结果。然后请求节点排序这50050个结果并丢弃50040个！
你可以看到在分布式系统中，排序结果的花费随着分页的深入而成倍增长。这也是为什么网络搜索引擎中任何语句不能返回多于1000个结果的原因。

es的查询方式 分为2种 一种是 查询字符串  另外一种是请求体 叫做结构化查询语句(DSL)

## es的数据类型我认为可以分为2类  确却值 和 全文文本 （非结构化数据）、
而对于全文数据的查询来说，却有些微妙。我们不会去询问这篇文档是否匹配查询要求？。 但是，我们会询问这篇文档和查询的匹配程度如何？。换句话说，对于查询条件，这篇文档的相关性有多高？

## es的倒排索引
我们把es的文档 把他们分词 然后把每个词都索引 当检索关键字的时候 就可以查询到他们的相关性 也就是说通过这种方式 加上相似度算法 
## es的分析器
一个分析器需要包括三个功能 
- 字符过滤器
- 分词器
- 标记过滤

### 相关性排序
默认情况下，结果集会按照相关性进行排序 -- 相关性越高，排名越靠前。 这一章我们会讲述相关性是什么以及它是如何计算的。 在此之前，我们先看一下sort参数的使用方法。

### 相关性简介
查询语句会为每个文档添加一个 _score 字段。评分的计算方式取决于不同的查询类型 -- 不同的查询语句用于不同的目的：fuzzy 查询会计算与关键词的拼写相似程度，terms查询会计算 找到的内容与关键词组成部分匹配的百分比，但是一般意义上我们说的全文本搜索是指计算内容与关键词的类似程度。
ElasticSearch的相似度算法被定义为 TF/IDF，即检索词频率/反向文档频率，包括一下内容：
- 检索词频率::检索词在该字段出现的频率？出现频率越高，相关性也越高。 字段中出现过5次要比只出现过1次的相关性高
- 反向文档频率::每个检索词在索引中出现的频率？频率越高，相关性越低。 检索词出现在多数文档中会比出现在少数文档中的权重更低， 即检验一个检索词在文档中的普遍重要性。
- 字段长度准则::字段的长度是多少？长度越长，相关性越低。 检索词出现在一个短的 title 要比同样的词出现在一个长的 content 字段。
- 我们可以在开发环境用explain参数来调试 当前查询为何会得到以下相关性数据
- 重要： ElasticSearch将所有字段数据加载到内存中并不是匹配到的那部分数据。 而是索引下所有文档中的值，包括所有类型。
### es分布式搜索的执行方式
由于不知道哪个文档会匹配查询（文档可能存放在集群中的任意分片上），所以搜索需要一个更复杂的模型。一个搜索不得不通过查询每一个我们感兴趣的索引的分片副本，来看是否含有任何匹配的文档。
但是，找到所有匹配的文档只完成了这件事的一半。在搜索（search）API返回一页结果前，来自多个分片的结果必须被组合放到一个有序列表中。因此，搜索的执行过程分两个阶段，称为查询然后取回（query then fetch）。
分布式搜索查询阶段
- 第一步是向索引里的每个节点的分片副本广播请求。就像document的GET请求一样，搜索请求可以被每个分片的原本或任意副本处理。这就是更多的副本（当结合更多的硬件时）如何提高搜索的吞吐量的方法。对于后续请求，协调节点会轮询所有的分片副本以分摊负载。
- 每一个分片在本地执行查询和建立一个长度为from+size的有序优先队列——这个长度意味着它自己的结果数量就足够满足全局的请求要求。分片返回一个轻量级的结果列表给协调节点。只包含documentID值和排序需要用到的值，例如_score。
- 整个过程类似于归并排序算法，先分组排序再归并到一起，对于这种分布式场景非常适用。  

## 搜索选项
些查询字符串（query-string）可选参数能够影响搜索过程。 preference（偏爱）

结果震荡（Bouncing Results）
想像一下，你正在按照timestamp字段来对你的结果排序，并且有两个document有相同的timestamp。由于搜索请求是在所有有效的分片副本间轮询的，这两个document可能在原始分片里是一种顺序，在副本分片里是另一种顺序。
这就是被称为结果震荡（bouncing results）的问题：用户每次刷新页面，结果顺序会发生变化。避免这个问题方法是对于同一个用户总是使用同一个分片。方法就是使用一个随机字符串例如用户的会话ID（session ID）来设置preference参数。
