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
            {text: '随笔', link: '/Thought/'},
            // 多项，下拉形式
            {
                text: '其他学习文档',
                items: [
                    // link：指向链接也可以是外网链接
                    {text: 'Java学习博客', link: 'http://www.wangbin.shop:8080'},
                ]
            },
        ],

        sidebar: {
            '/blog/': [
                ['/Java/', 'Java'],
                ['/H5/', '前端'],
                ['/Thought/', '个人随笔'],

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
                        ['/', '首页'],
                        ['/Java/JavaBase/JavaFist.md', '了解Java'], // '/FAQ/DigestionHeap/Digested.md'文件
                        ['/Java/JavaBase/Java流程控制语句.md', '流程控制语句'],
                        ['/Java/JavaBase/数组.md', '数组'],
                        ['/Java/JavaBase/二维数组与方法.md', '二维数组与方法'],
                        ['/Java/JavaBase/IO流1.md', 'IO流1'],
                        ['/Java/JavaBase/IO流2.md', 'IO流2'],
                        ['/Java/JavaBase/IO流3.md', 'IO流3'],
                        ['/Java/JavaBase/JsonAndXML.md', 'JsonAndXML'],
                        ['/Java/JavaBase/异常.md', '异常'],
                    ]
                },
                {
                    title: 'JavaWep',
                    children: [
                        ['/Java/Console/A001', '#A001_VuePress'],
                        ['/Java/Console/A002', '#A002_插件清单']
                    ]
                },
                {
                    title: 'Java框架',
                    children: [
                        ['/Java/Console/A001', '#A001_VuePress'],
                        ['/Java/Console/A002', '#A002_插件清单']
                    ]
                },
                {
                    title: '分布式',
                    children: [
                        ['/Java/Console/A001', '#A001_VuePress'],
                        ['/Java/Console/A002', '#A002_插件清单']
                    ]
                },
                {
                    title: '数据库',
                    children: [
                        ['/Java/Console/A001', '#A001_VuePress'],
                        ['/Java/Console/A002', '#A002_插件清单']
                    ]
                },
                {
                    title: '中间件',
                    children: [
                        ['/Java/Console/A001', '#A001_VuePress'],
                        ['/Java/Console/A002', '#A002_插件清单']
                    ]
                },
                {
                    title: 'Linux 和 容器',
                    children: [
                        ['/Java/Console/A001', '#A001_VuePress'],
                        ['/Java/Console/A002', '#A002_插件清单']
                    ]
                },

                {
                    title: '服务网格',
                    children: [
                        ['/Java/Console/A001', '#A001_VuePress'],
                        ['/Java/Console/A002', '#A002_插件清单']
                    ]
                },

            ],
            // 打开Thought主页链接时生成下面这个菜单
            '/Thought/': [
                ['/Thought/', '随笔首页'],
                {
                    title: '游记',
                    children: [
                        ['/Thought/Travels/beiPing', '北平游记'],
                    ]
                },
                {
                    title: '年终回顾',
                    children: [
                        ['/Thought/YearReview/2018', '2018年'],
                        ['/Thought/YearReview/2019', '2019年']
                    ]
                },
            ],
            // 打开Store主页链接时生成下面这个菜单
            '/Store/': [
                ['', '仓库首页'],
                {
                    title: '应用',
                    children: [
                        ['/Store/Apps/DownDoors', '下载门户'],
                        ['/Store/Apps/OwnTest', '博主测评']
                    ]
                },
                {
                    title: '电影',
                    children: [
                        ['/Store/Films/', '收藏级电影']
                    ]
                },
                {
                    title: '动画',
                    children: [
                        ['/Store/Anime/', '收藏级动画']
                    ]
                },
            ]
        },
    }
}

