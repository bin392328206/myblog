# 自己学习K8s采坑

![Docker和K8s](https://www.funtl.com/assets1/clipart1469859.png)

## 什么是K8s
    Kubernetes 是容器集群管理系统，是一个开源的平台，可以实现容器集群的自动化部署、
    自动扩缩容、维护等功能。使用 Kubernetes 我们可以：
    1.快速部署应用
    2.快速扩展应用
    3.无缝对接新的应用功能
    4.节省资源，优化硬件资源的使用
    
    
## 特点
    可移植： 支持公有云，私有云，混合云，多重云（多个公共云）
    可扩展： 模块化，插件化，可挂载，可组合
    自动化： 自动部署，自动重启，自动复制，自动伸缩/扩展
    
    
## 为什么需要 Kubernetes
    多个进程协同工作
    存储系统挂载
    应用健康检查
    应用实例的复制
    自动伸缩/扩展
    注册与发现
    负载均衡
    滚动更新
    资源监控
    日志访问
    调试应用程序
    提供认证和授权
    
    
# Kubernetes 安装前的准备
    本次安装采用 Ubuntu Server X64 18.04 LTS 版本安装 kubernetes 集群环境，集群节点为 1 主 2 从模式，
    OS：Ubuntu Server X64 18.04 LTS（16.04 版本步骤相同，再之前则不同）
    CPU：最低要求，1 CPU 2 核
    内存：最低要求，2GB
    磁盘：最低要求，20GB
    Ubuntu Server 18.04 X64 Kubernetes Master
    Ubuntu Server 18.04 X64 Kubernetes Slave1
    Ubuntu Server 18.04 X64 Kubernetes Slave2
    关闭交换空间：sudo swapoff -a
    避免开机启动交换空间：注释 /etc/fstab 中的 swap
    关闭防火墙：ufw disable
# 使用 APT 安装 Docker

```
# 更新软件源
sudo apt-get update
# 安装所需依赖
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
# 安装 GPG 证书
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
# 新增软件源信息
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
# 再次更新软件源
sudo apt-get -y update
# 安装 Docker CE 版
sudo apt-get -y install docker-ce
```

# 配置加速器
```
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ]
}
```
# 修改主机名
```
# 查看当前主机名
hostnamectl
# 显示如下内容
   Static hostname: ubuntu
         Icon name: computer-vm
           Chassis: vm
        Machine ID: 33011e0a95094672b99a198eff07f652
           Boot ID: dc856039f0d24164a9f8a50c506be96d
    Virtualization: vmware
  Operating System: Ubuntu 18.04.2 LTS
            Kernel: Linux 4.15.0-48-generic
      Architecture: x86-64
```    
    
# 安装 kubeadm
    kubeadm 是 kubernetes 的集群安装工具，能够快速安装 kubernetes 集群。
    
# 配置软件源
    
    # 安装系统工具
    apt-get update && apt-get install -y apt-transport-https
    # 安装 GPG 证书
    curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add -
    # 写入软件源；注意：我们用系统代号为 bionic，但目前阿里云不支持，所以沿用 16.04 的 xenial
    cat << EOF >/etc/apt/sources.list.d/kubernetes.list
    > deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
    > EOF
    

# 安装 kubeadm，kubelet，kubectl
    
    # 安装
    apt-get update  
    apt-get install -y kubelet kubeadm kubectl
    
    # 安装过程如下，注意 kubeadm 的版本号
    Reading package lists... Done
    Building dependency tree       
    Reading state information... Done
    The following additional packages will be installed:
      conntrack cri-tools kubernetes-cni socat
    The following NEW packages will be installed:
      conntrack cri-tools kubeadm kubectl kubelet kubernetes-cni socat
    0 upgraded, 7 newly installed, 0 to remove and 96 not upgraded.
    Need to get 50.6 MB of archives.
    After this operation, 290 MB of additional disk space will be used.
    Get:1 http://mirrors.aliyun.com/ubuntu bionic/main amd64 conntrack amd64 1:1.4.4+snapshot20161117-6ubuntu2 [30.6 kB]
    Get:2 http://mirrors.aliyun.com/ubuntu bionic/main amd64 socat amd64 1.7.3.2-2ubuntu2 [342 kB]
    Get:3 https://mirrors.aliyun.com/kubernetes/apt kubernetes-xenial/main amd64 cri-tools amd64 1.12.0-00 [5,343 kB]
    Get:4 https://mirrors.aliyun.com/kubernetes/apt kubernetes-xenial/main amd64 kubernetes-cni amd64 0.7.5-00 [6,473 kB]
    Get:5 https://mirrors.aliyun.com/kubernetes/apt kubernetes-xenial/main amd64 kubelet amd64 1.14.1-00 [21.5 MB]
    Get:6 https://mirrors.aliyun.com/kubernetes/apt kubernetes-xenial/main amd64 kubectl amd64 1.14.1-00 [8,806 kB]
    Get:7 https://mirrors.aliyun.com/kubernetes/apt kubernetes-xenial/main amd64 kubeadm amd64 1.14.1-00 [8,150 kB]
    Fetched 50.6 MB in 5s (9,912 kB/s) 
    Selecting previously unselected package conntrack.
    (Reading database ... 67205 files and directories currently installed.)
    Preparing to unpack .../0-conntrack_1%3a1.4.4+snapshot20161117-6ubuntu2_amd64.deb ...
    Unpacking conntrack (1:1.4.4+snapshot20161117-6ubuntu2) ...
    Selecting previously unselected package cri-tools.
    Preparing to unpack .../1-cri-tools_1.12.0-00_amd64.deb ...
    Unpacking cri-tools (1.12.0-00) ...
    Selecting previously unselected package kubernetes-cni.
    Preparing to unpack .../2-kubernetes-cni_0.7.5-00_amd64.deb ...
    Unpacking kubernetes-cni (0.7.5-00) ...
    Selecting previously unselected package socat.
    Preparing to unpack .../3-socat_1.7.3.2-2ubuntu2_amd64.deb ...
    Unpacking socat (1.7.3.2-2ubuntu2) ...
    Selecting previously unselected package kubelet.
    Preparing to unpack .../4-kubelet_1.14.1-00_amd64.deb ...
    Unpacking kubelet (1.14.1-00) ...
    Selecting previously unselected package kubectl.
    Preparing to unpack .../5-kubectl_1.14.1-00_amd64.deb ...
    Unpacking kubectl (1.14.1-00) ...
    Selecting previously unselected package kubeadm.
    Preparing to unpack .../6-kubeadm_1.14.1-00_amd64.deb ...
    Unpacking kubeadm (1.14.1-00) ...
    Setting up conntrack (1:1.4.4+snapshot20161117-6ubuntu2) ...
    Setting up kubernetes-cni (0.7.5-00) ...
    Setting up cri-tools (1.12.0-00) ...
    Setting up socat (1.7.3.2-2ubuntu2) ...
    Setting up kubelet (1.14.1-00) ...
    Created symlink /etc/systemd/system/multi-user.target.wants/kubelet.service → /lib/systemd/system/kubelet.service.
    Setting up kubectl (1.14.1-00) ...
    Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
    # 注意这里的版本号，我们使用的是 kubernetes v1.14.1
    Setting up kubeadm (1.14.1-00) ...
    
    # 设置 kubelet 自启动，并启动 kubelet
    systemctl enable kubelet && systemctl start kubelet
  
# 配置 kubeadm
    安装 kubernetes 主要是安装它的各个镜像，而 kubeadm 已经为我们集成好了运行 kubernetes 所需的基本镜像。但由于国内的网络原因，在搭建环境时，无法拉取到这些镜像。此时我们只需要修改为阿里云提供的镜像服务即可解决该问题。
    
# 创建并修改配置
    # 导出配置文件
    kubeadm config print init-defaults --kubeconfig ClusterConfiguration > kubeadm.yml
    # 修改配置为如下内容
    apiVersion: kubeadm.k8s.io/v1beta1
    bootstrapTokens:
    - groups:
      - system:bootstrappers:kubeadm:default-node-token
      token: abcdef.0123456789abcdef
      ttl: 24h0m0s
      usages:
      - signing
      - authentication
    kind: InitConfiguration
    localAPIEndpoint:
      # 修改为主节点 IP
      advertiseAddress: 192.168.141.130
      bindPort: 6443
    nodeRegistration:
      criSocket: /var/run/dockershim.sock
      name: kubernetes-master
      taints:
      - effect: NoSchedule
        key: node-role.kubernetes.io/master
    ---
    apiServer:
      timeoutForControlPlane: 4m0s
    apiVersion: kubeadm.k8s.io/v1beta1
    certificatesDir: /etc/kubernetes/pki
    clusterName: kubernetes
    controlPlaneEndpoint: ""
    controllerManager: {}
    dns:
      type: CoreDNS
    etcd:
      local:
        dataDir: /var/lib/etcd
    # 国内不能访问 Google，修改为阿里云
    imageRepository: registry.aliyuncs.com/google_containers
    kind: ClusterConfiguration
    # 修改版本号
    kubernetesVersion: v1.14.1
    networking:
      dnsDomain: cluster.local
      # 配置成 Calico 的默认网段
      podSubnet: "192.168.0.0/16"
      serviceSubnet: 10.96.0.0/12
    scheduler: {}
    ---
    # 开启 IPVS 模式
    apiVersion: kubeproxy.config.k8s.io/v1alpha1
    kind: KubeProxyConfiguration
    featureGates:
      SupportIPVSProxyMode: true
    mode: ipvs
    
# 安装 kubernetes 主节点
    执行以下命令初始化主节点，该命令指定了初始化时需要使用的配置文件，其中添加 --experimental-upload-certs 参数可以在后续执行加入节点时自动分发证书文件。追加的 tee kubeadm-init.log 用以输出日志。
    kubeadm init --config=kubeadm.yml --experimental-upload-certs | tee kubeadm-init.log
    
    # 安装成功则会有如下输出
    [init] Using Kubernetes version: v1.14.1
    [preflight] Running pre-flight checks
            [WARNING IsDockerSystemdCheck]: detected "cgroupfs" as the Docker cgroup driver. The recommended driver is "systemd". Please follow the guide at https://kubernetes.io/docs/setup/cri/
    [preflight] Pulling images required for setting up a Kubernetes cluster
    [preflight] This might take a minute or two, depending on the speed of your internet connection
    [preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
    [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
    [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
    [kubelet-start] Activating the kubelet service
    [certs] Using certificateDir folder "/etc/kubernetes/pki"
    [certs] Generating "ca" certificate and key
    [certs] Generating "apiserver" certificate and key
    [certs] apiserver serving cert is signed for DNS names [kubernetes-master kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 192.168.141.130]
    [certs] Generating "apiserver-kubelet-client" certificate and key
    [certs] Generating "front-proxy-ca" certificate and key
    [certs] Generating "front-proxy-client" certificate and key
    [certs] Generating "etcd/ca" certificate and key
    [certs] Generating "etcd/peer" certificate and key
    [certs] etcd/peer serving cert is signed for DNS names [kubernetes-master localhost] and IPs [192.168.141.130 127.0.0.1 ::1]
    [certs] Generating "etcd/server" certificate and key
    [certs] etcd/server serving cert is signed for DNS names [kubernetes-master localhost] and IPs [192.168.141.130 127.0.0.1 ::1]
    [certs] Generating "etcd/healthcheck-client" certificate and key
    [certs] Generating "apiserver-etcd-client" certificate and key
    [certs] Generating "sa" key and public key
    [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
    [kubeconfig] Writing "admin.conf" kubeconfig file
    [kubeconfig] Writing "kubelet.conf" kubeconfig file
    [kubeconfig] Writing "controller-manager.conf" kubeconfig file
    [kubeconfig] Writing "scheduler.conf" kubeconfig file
    [control-plane] Using manifest folder "/etc/kubernetes/manifests"
    [control-plane] Creating static Pod manifest for "kube-apiserver"
    [control-plane] Creating static Pod manifest for "kube-controller-manager"
    [control-plane] Creating static Pod manifest for "kube-scheduler"
    [etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
    [wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
    [apiclient] All control plane components are healthy after 20.003326 seconds
    [upload-config] storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
    [kubelet] Creating a ConfigMap "kubelet-config-1.14" in namespace kube-system with the configuration for the kubelets in the cluster
    [upload-certs] Storing the certificates in ConfigMap "kubeadm-certs" in the "kube-system" Namespace
    [upload-certs] Using certificate key:
    2cd5b86c4905c54d68cc7dfecc2bf87195e9d5d90b4fff9832d9b22fc5e73f96
    [mark-control-plane] Marking the node kubernetes-master as control-plane by adding the label "node-role.kubernetes.io/master=''"
    [mark-control-plane] Marking the node kubernetes-master as control-plane by adding the taints [node-role.kubernetes.io/master:NoSchedule]
    [bootstrap-token] Using token: abcdef.0123456789abcdef
    [bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
    [bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
    [bootstrap-token] configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
    [bootstrap-token] configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
    [bootstrap-token] creating the "cluster-info" ConfigMap in the "kube-public" namespace
    [addons] Applied essential addon: CoreDNS
    [addons] Applied essential addon: kube-proxy
    
    Your Kubernetes control-plane has initialized successfully!
    
    To start using your cluster, you need to run the following as a regular user:
    
      mkdir -p $HOME/.kube
      sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
      sudo chown $(id -u):$(id -g) $HOME/.kube/config
    
    You should now deploy a pod network to the cluster.
    Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
      https://kubernetes.io/docs/concepts/cluster-administration/addons/
    
    Then you can join any number of worker nodes by running the following on each as root:
    
    # 后面子节点加入需要如下命令
    kubeadm join 192.168.141.130:6443 --token abcdef.0123456789abcdef \
        --discovery-token-ca-cert-hash sha256:cab7c86212535adde6b8d1c7415e81847715cfc8629bb1d270b601744d662515
# 配置 kubectl
    mkdir -p $HOME/.kube
    cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    
    # 非 ROOT 用户执行
    chown $(id -u):$(id -g) $HOME/.kube/config
    
# 验证是否成功
    kubectl get node
    
    # 能够打印出节点信息即表示成功
    NAME                STATUS     ROLES    AGE     VERSION
    kubernetes-master   NotReady   master   8m40s   v1.14.1
    
# kubeadm init 的执行过程
    init：指定版本进行初始化操作
    preflight：初始化前的检查和下载所需要的 Docker 镜像文件
    kubelet-start：生成 kubelet 的配置文件 var/lib/kubelet/config.yaml，没有这个文件 kubelet 无法启动，所以初始化之前的 kubelet 实际上启动不会成功
    certificates：生成 Kubernetes 使用的证书，存放在 /etc/kubernetes/pki 目录中
    kubeconfig：生成 KubeConfig 文件，存放在 /etc/kubernetes 目录中，组件之间通信需要使用对应文件
    control-plane：使用 /etc/kubernetes/manifest 目录下的 YAML 文件，安装 Master 组件
    etcd：使用 /etc/kubernetes/manifest/etcd.yaml 安装 Etcd 服务
    wait-control-plane：等待 control-plan 部署的 Master 组件启动
    apiclient：检查 Master 组件服务状态。
    uploadconfig：更新配置
    kubelet：使用 configMap 配置 kubelet
    patchnode：更新 CNI 信息到 Node 上，通过注释的方式记录
    mark-control-plane：为当前节点打标签，打了角色 Master，和不可调度标签，这样默认就不会使用 Master 节点来运行 Pod
    bootstrap-token：生成 token 记录下来，后边使用 kubeadm join 往集群中添加节点时会用到
    addons：安装附加组件 CoreDNS 和 kube-proxy
    
    
 # 使用 kubeadm 配置 slave 节点
   将 slave 节点加入到集群中很简单，只需要在 slave 服务器上安装 kubeadm，kubectl，kubelet 三个工具，然后使用 kubeadm join 命令加入即可。准备工作如下：
   修改主机名
   配置软件源
   安装三个工具
   由于之前章节已经说明了操作步骤，此处不再赘述。
# 将 slave 加入到集群
```
kubeadm join 192.168.141.130:6443 --token abcdef.0123456789abcdef --discovery-token-ca-cert-hash sha256:cab7c86212535adde6b8d1c7415e81847715cfc8629bb1d270b601744d662515

# 安装成功将看到如下信息
[preflight] Running pre-flight checks
        [WARNING IsDockerSystemdCheck]: detected "cgroupfs" as the Docker cgroup driver. The recommended driver is "systemd". Please follow the guide at https://kubernetes.io/docs/setup/cri/
[preflight] Reading configuration from the cluster...
[preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -oyaml'
[kubelet-start] Downloading configuration for the kubelet from the "kubelet-config-1.14" ConfigMap in the kube-system namespace
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Activating the kubelet service
[kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap...

This node has joined the cluster:
* Certificate signing request was sent to apiserver and a response was received.
* The Kubelet was informed of the new secure connection details.

Run 'kubectl get nodes' on the control-plane to see this node join the cluster.

```

    说明：
    
    token
    可以通过安装 master 时的日志查看 token 信息
    可以通过 kubeadm token list 命令打印出 token 信息
    如果 token 过期，可以使用 kubeadm token create 命令创建新的 token
    discovery-token-ca-cert-hash
    可以通过安装 master 时的日志查看 sha256 信息
    可以通过 openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | openssl dgst -sha256 -hex | sed 's/^.* //' 命令查看 sha256 信息


# 验证是否成功
    回到 master 服务器
    kubectl get nodes
    
    # 可以看到 slave 成功加入 master
    NAME                STATUS     ROLES    AGE   VERSION
    kubernetes-master   NotReady   master   9h    v1.14.1
    kubernetes-slave1   NotReady   <none>   22s   v1.14.1
