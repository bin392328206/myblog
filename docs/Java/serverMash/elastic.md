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
