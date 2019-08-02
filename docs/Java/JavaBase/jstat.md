# jstat相关命令

## jstat -gcutil pid
通过 jstat -gcutil pid 命令，我们可以对gc信息进行统计。
[root@xttblog ~]# jstat -gcutil 5801
  S0     S1     E      O      P     YGC     YGCT    FGC    FGCT     GCT
  0.00  97.37   5.54  53.37  69.83     21    0.366     1    0.480    0.846

## jstat -gc pid
这个命令看起来显示的信息比上一个命令还多。jstat -gc pid 可以显示gc的信息，查看gc的次数，及时间。其中最后五项，
分别是young gc的次数，young gc的时间，full gc的次数，full gc的时间，gc的总时间。
[root@xttblog ~]# jstat -gc 5801
 S0C    S1C    S0U    S1U      EC       EU        OC         OU       PC     PU    YGC     YGCT    FGC    FGCT     GCT
15360.0 12288.0  0.0   11964.6 298496.0 16530.5   67072.0    35793.4   83968.0 58633.2     21    0.366   1      0.480    0.846
## jstat -gccapacity pid
jstat -gccapacity pid 命令可以显示：VM内存中三代（young,old,perm）对象的使用和占用大小。如：PGCMN显示的是最小perm的内存使用量，PGCMX显示的是perm的内存最大使用量，
PGC是当前新生成的perm内存占用量，PC是但前perm内存占用量。其他的可以根据这个类推， OC是old内纯的占用量。


![参考博客](https://www.xttblog.com/?p=3175)
