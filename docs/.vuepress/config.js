module.exports = {
    base: "/myblog/",
    title: 'jimmy',
    description: '种一棵树最好的时候是十年前',

    // 这是博客的头部导航栏
    themeConfig: {

        sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/bin392328206/myblog.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            // 单项 text：显示文字，link：指向链接
            // 这里的'/' 指的是 docs文件夹路径
            // [以 '/' 结尾的默认指向该路径下README.md文件]
            {text: 'Java', link: '/Java/'},
            {text: '前端', link: '/H5/'},
            {text: 'Go', link: '/go/'},
            {text: '大数据', link: '/BigData/'},
            {text: '随笔', link: '/Thought/'},
            // 多项，下拉形式
            {
                text: '其他学习文档',
                items: [
                    // link：指向链接也可以是外网链接
                    {text: '王斌学习博客', link: 'http://www.wangbin.shop:8080'},
                    {text: 'Linux命令学习', link: 'https://wangchujiang.com/linux-command/'},
                    {text: 'DD博客', link: 'http://blog.didispace.com/'},
                    {text: 'Java成神之路', link: 'https://www.hollischuang.com/archives/3280'},

                ]
            },
            {
                text: '在线工具',
                items: [
                    // link：指向链接也可以是外网链接
                    {text: 'PDF转换器', link: 'https://smallpdf.com/cn/pdf-to-word'},
                    {text: 'JSON编辑器', link: 'https://www.json.cn/'},
                    {
                        text: 'MD表格生成',
                        link: 'https://tableconvert.com/?output=text&data=id%2C%20name%2C%20age%2C%20gender%0A1%2C%20Lawrence%2C%2039%2C%20M%0A2%2C%20Oliver%2C%2025%2C%20M%0A3%2C%20Roberta%2C%2017%2C%20F%0A4%2C%20Bamboo%2C%2070%2C%20F%0A'
                    },
                    {text: 'CRON表达式', link: 'http://cron.qqe2.com/'},
                    {text: '代码格式化', link: 'http://tool.oschina.net/codeformat/html'},
                    {text: 'YAML->properties', link: 'https://www.toyaml.com/index.html'},
                ]
            },
        ],

        sidebar: {
            '/blog/': [
                ['/Java/', 'Java'],
                ['/H5/', '前端'],
                ['/go/', 'GO'],
                ['/BigData/', '大数据'],
                ['/Thought/', '个人随笔'],
                ['/blog/学习文档随笔', '学习文档随笔'],

            ],


            // 打开FAQ主页链接时生成下面这个菜单
            '/Java/': [
                //多级菜单形式
                {
                    // 菜单名
                    title: 'Java基础',
                    // 子菜单
                    children: [
                        // ['','']=>[路径,标题]
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件
                        ['/Java/JavaBase/JavaFist.md', '了解Java'], // '/FAQ/DigestionHeap/Digested.md'文件
                        ['/Java/JavaBase/Java流程控制语句.md', '流程控制语句'],
                        ['/Java/JavaBase/数组.md', '数组'],
                        ['/Java/JavaBase/二维数组与方法.md', '二维数组与方法'],
                        ['/Java/JavaBase/IO流1.md', 'IO流1'],
                        ['/Java/JavaBase/IO流2.md', 'IO流2'],
                        ['/Java/JavaBase/IO流3.md', 'IO流3'],
                        ['/Java/JavaBase/JsonAndXML.md', 'JsonAndXML'],
                        ['/Java/JavaBase/异常.md', '异常'],
                        ['/Java/JavaBase/网络基础.md', '网络基础'],
                    ]
                },
                {
                    title: 'JavaWep',
                    children: [
                        ['/Java/JavaWep/annotation.md', '自定义注解加切面'],
                    ]
                },
                {
                    title: 'Java框架',
                    children: []
                },
                {
                    title: '分布式',
                    children: []
                },
                {
                    title: '数据库',
                    children: []
                },
                {
                    title: '中间件',
                    children: [
                        ['/Java/middleware/canalAndOtter.md', 'Otter技术栈'],
                        ['/Java/middleware/skywalking.md', 'SkyWalking链路追踪'],
                        ['/Java/middleware/sonar.md', 'sonar代码审查'],
                    ]
                },
                {
                    title: 'Linux 和 容器',
                    children: []
                },

                {
                    title: '服务网格',
                    children: [
                        ['/Java/serverMash/servermash.md', '服务网格介绍'],
                        ['/Java/serverMash/elastic.md', 'elastic技术栈'],
                        ['/Java/serverMash/k8s.md', 'k8s技术栈']
                    ]
                },

            ],
            // 打开Thought主页链接时生成下面这个菜单
            '/Thought/': [
                ['/Thought/', '随笔首页'],
                {
                    title: '技术书籍所感',
                    children: [
                        ['/Thought/亿级流量架构核心技术.md', '亿级流量架构核心技术'],
                        ['/Thought/2019AugustBlog.md', '2019AugustBlog'],
                        ['/Thought/Java并发编程的艺术.md', 'Java并发编程的艺术'],
                        ['/Thought/Mybatis从入门到精通.md', 'Mybatis从入门到精通'],
                        ['/Thought/实战Java高并发编程.md', '实战Java高并发编程'],
                        ['/Thought/数据机构和算法.md', '数据机构和算法'],
                        ['/Thought/深入了解Java虚拟机.md', '深入了解Java虚拟机'],
                        ['/Thought/深入理解计算机系统.md', '深入理解计算机系统']
                    ]
                },
                {
                    title: '年终回顾',
                    children: []
                },
            ],
            // 打开Store主页链接时生成下面这个菜单
            '/H5/': [
                {
                    title: '前端基础',
                    children: []
                },
                {
                    title: 'Vue',
                    children: [
                        ['/H5/Vue/VueIntroduce.md', '了解Vue']
                    ]
                },
                {
                    title: '其他',
                    children: []
                },
            ],

            '/BigData/': [
                {
                    title: '大数据基础组件',
                    children: [
                        ['/BigData/BigDataBase/Flume.md', 'Flume'],
                        ['/BigData/BigDataBase/zookeeper.md', 'zookeeper'],
                        ['/BigData/BigDataBase/Hadoop.md', 'Hadoop'],
                        ['/BigData/BigDataBase/Hbase.md', 'Hbase'],
                        ['/BigData/BigDataBase/Hive.md', 'Hive'],
                        ['/BigData/BigDataBase/spark.md', 'Spark']
                    ]
                },
                {
                    title: '其他',
                    children: []
                },
            ]
        },
    }
}

