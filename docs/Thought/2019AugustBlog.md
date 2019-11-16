# 19 年8月 读人家的博客记录 因为每天都会有阅读人家写的文章 简单的作个记录吧
## [Java8时间类](https://mp.weixin.qq.com/s/FNsyV4skO4NauynR2igp5A)
    LocalDate LocalTime LocalDateTime的用法（线程安全的 ）
     LocalDateTime localDate = LocalDateTime.now();
     DateTimeFormatter dtf3 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
      String format = localDate.format(dtf3);
      里面有很多增加一天 计算今天是星期几 是否是闰年的计算 判断日期的先后等
      //获取秒数
      Long second = LocalDateTime.now().toEpochSecond(ZoneOffset.of("+8"));
      //获取毫秒数
      Long milliSecond = LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli();
       
##[Spring WebClient vs. RestTemplate](https://mp.weixin.qq.com/s/nCi0VH0U1E20oky50CyH9A)
    一个是同步阻塞的 一个是一步非阻塞的
    
## [Spring Boot 面试的十个问题]（https://mp.weixin.qq.com/s/anKFLYurGuo_oJWcCIerCg）
    springBoot的十大面试问题
## [你java开发几年还是那么菜是因为你没有做到这些](https://mp.weixin.qq.com/s/qJW_mKkb3v6l2kk8l2FuNA)
    写的很好 不过1万小时理论 最好的实践就是多敲
##[一文学会Java死锁和CPU 100% 问题的排查技巧](https://mp.weixin.qq.com/s/1Sq3j2mkX72dwbPsa2vEbw)
    注：进程和线程都可以发生死锁，只要满足死锁的条件！
    （1）必须是两个或者两个以上进程（线程）
    （2）必须有竞争资源
    第一个姿势：使用 jps + jstack
    定位神器 arthas 
    
## [Elasticsearch如何做到亿级数据查询毫秒级返回？](https://mp.weixin.qq.com/s/AkmCPMujP5Kiw2ONgjYe9w)
    说明es的性能优化没有银弹
##[巧用这19条MySQL优化，效率至少提高3倍](https://mp.weixin.qq.com/s?__biz=MzI2OTQ4OTQ1NQ==&mid=2247486806&idx=1&sn=32beb45a00a045504071387b99280190&chksm=eadec916dda9400083d4e302dfa54530983aec3cd34979b5317b775da5a45aec33f0707d2046&token=827663039&lang=zh_CN&scene=21#wechat_redirect)


## [经常用 HashMap ？这 6 个问题回答下 ！](https://mp.weixin.qq.com/s/u-YpehrzfhShpPNnIjkicQ)
        深入理解hashmap
        红黑树的规则
        1 节点 要么是红色要么是黑色 
        2. 跟节点是黑色的
        3.叶子节点是黑色
        4 如果一个节点是红色的 的子节点必须是黑色
        5 从一个节点到每个叶子节点的 黑色的个数是相等的
        6.删除 和拆入 会改变红黑数的结构 左旋 右旋 或者是 变颜色

##[微信各种端的登陆关系](https://blog.csdn.net/lswnew/article/details/84103658)

## [泛型总结](https://www.cnblogs.com/ynyhl/p/9877842.html) 其实就是一个守门者
