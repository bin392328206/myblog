# 刚好公司需要 所以搭建一个sonar + jenkins 做一个自动化代码的检查 下面是自己的一些采坑经验 记录一下玩玩
### sonar 是一个代码检查工具 他可以和jenkins 集成  也可以集成在开发人员的idea中 做到一个代码的审查
### 安装文档
## [Sonar安装参考文档](https://blog.csdn.net/BeauXie/article/details/81157330)
坑也是很多的 比如 文件的权限 比如 不能用root用户  用mysql做数据库等等 项目是java写的 所以还要装java噢

装好后主要是集成jenkins 这样 每次做ci cd 的时候 就会生成一份代码的报告 可以让我们自己更好的规范代码

## [集成Jenkins](https://blog.csdn.net/songer_xing/article/details/76691438)

遇到的坑 比如说 插件的安装 CMS没有选择ture 然后jenkins里面的工作空间等等 

## 总结一下 工具还是可以的 搭建起来 也简单 


## Arthas（阿尔萨斯） 阿里的一个线上bug调试
下载运行就可以使用
wget https://alibaba.github.io/arthas/arthas-boot.jar
java -jar arthas-boot.jar
