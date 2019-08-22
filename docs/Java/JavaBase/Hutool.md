# 简介
[Hutool](https://www.hutool.club/docs/#/core/IO/IO%E5%B7%A5%E5%85%B7%E7%B1%BB-IoUtil)
Hutool是一个Java工具包，也只是一个工具包，它帮助我们简化每一行代码，减少每一个方法，让Java语言也可以“甜甜的”。它最初是作者项目中“util”包的一个整理，后来慢慢积累并加入更多非业务相关功能，并广泛学习其它开源项目精髓，经过自己整理修改，最终形成丰富的开源工具集。
Hutool是Hu + tool的自造词，谐音“糊涂”，寓意，追求“万事都作糊涂观，无所谓失，无所谓得”的境界。

## Convert类
    Convert类可以说是一个工具方法类，里面封装了针对Java常见类型的转换，用于简化类型转换。Convert类中大部分方法为toXXX，参数为Object，可以实现将任意可能的类型转换为指定类型。同时支持第二个参数defaultValue用于在转换失败时返回一个默认值。
- 转换为字符串
- 数组之间的转换等


##  日期时间工具-DateUtil
- Date、long、Calendar之间的相互转换

## IO工具类-IoUtil
- IO工具类-IoUtil
- 文件工具类-FileUtil
- 文件类型判断-FileTypeUtil 在文件上传时，有时候我们需要判断文件类型。但是又不能简单的通过扩展名来判断（防止恶意脚本等通过上传到服务器上），于是我们需要在服务端通过读取文件的首部几个二进制位来判断常用的文件类型。
                      
## 常用工具类
### 字符串工具-StrUtil
常用方法 sub 里面的异常做好了 方法越界之类的 全帮你处理了
   format方法 这个方法用来 代替字符串拼接
### 16进制工具-HexUtil
      生成16进制的东西
      
### 对象工具-ObjectUtil
- 几个比较常用的方法  
- ObjectUtil.equal 
- ObjectUtil.length
- ObjectUtil.contains
- 
### 反射工具-ReflectUtil
- 获取构造的对象
- 获取某个类的所有方法 方法的决定路径
- 获取某个类指定的方法
### 泛型类型工具-TypeUtil
- 获取Type对应的原始类
- 获取方法参数的泛型类型
- 获取泛型类子类中泛型的填充类型
### 数字工具-NumberUtil
以上四种运算都会将double转为BigDecimal后计算，解决float和double类型无法进行精确计算的问题。这些方法常用于商业计算。

### 唯一ID工具-IdUtil
UUID
UUID全称通用唯一识别码（universally unique identifier），JDK通过java.util.UUID提供了 Leach-Salz 变体的封装。在Hutool中，生成一个UUID字符串方法如下：
//生成的UUID是带-的字符串，类似于：a5c8a5e8-df2b-4706-bea4-08d0939410e3
String uuid = IdUtil.randomUUID();

//生成的是不带-的字符串，类似于：b17f24ff026d40949c85a24f4f375d42
String simpleUUID = IdUtil.simpleUUID();

ObjectId
ObjectId是MongoDB数据库的一种唯一ID生成策略，是UUID version1的变种，详细介绍可见：服务化框架－分布式Unique ID的生成方法一览。
//生成类似：5b9e306a4df4f8c54a39fb0c

String id = ObjectId.next();

//方法2：从Hutool-4.1.14开始提供
String id2 = IdUtil.objectId();

Snowflake
分布式系统中，有一些需要使用全局唯一ID的场景，有些时候我们希望能使用一种简单一些的ID，并且希望ID能够按照时间有序生成。Twitter的Snowflake 算法就是这种生成器。
//参数1为终端ID
//参数2为数据中心ID
Snowflake snowflake = IdUtil.createSnowflake(1, 1);
long id = snowflake.nextId();

### 压缩工具-ZipUtil
ZipUtil.zip 方法提供一系列的重载方法，满足不同需求的压缩需求，这包括：
ZipUtil.unzip 解压。同样提供几个重载，满足不同需求。


### 正则工具-ReUtil

### 字符串格式化-StrFormatter
//通常使用
String result1 = StrFormatter.format("this is {} for {}", "a", "b");
Assert.assertEquals("this is a for b", result1);

//转义{}
String result2 = StrFormatter.format("this is \\{} for {}", "a", "b");
Assert.assertEquals("this is {} for a", result2);

//转义\
String result3 = StrFormatter.format("this is \\\\{} for {}", "a", "b");
Assert.assertEquals("this is \\a for 
### 集合工具-CollUtil
1. join 方法
将集合转换为字符串，这个方法还是挺常用，是StrUtil.split的反方法。这个方法的参数支持各种类型对象的集合，最后连接每个对象时候调用其toString()方法。栗子如下\
sortPageAll、sortPageAll2方法
这个是用于多个集合 合并之后然后再比较再取到符合的再放到一个集合里面

2.字符串切割-StrSpliter
String str1 = "a, ,efedsfs,   ddf";
//参数：被切分字符串，分隔符逗号，0表示无限制分片数，去除两边空格，忽略空白项
List<String> split = StrSpliter.split(str1, ',', 0, true, true);


