module.exports = {
    base: '/myblog/',
    title: '小王博客',
    description: '种一棵树最好的时候是十年前'
}
module.exports = {
    // 这是博客的头部导航栏
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/bin392328206/myblog.git',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客'],
            ['/blog/TwoBlog.md',"我的第二篇博客"]
        ]
    }
}
