# elastic技术栈 学习 包括 ELK  和EFk

### 部署注意事项
- 必须不能使用 root  账户去部署它 这是它的一种保护机制
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
