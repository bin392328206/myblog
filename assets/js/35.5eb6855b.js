(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{181:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("h2",{attrs:{id:"sonar安装参考文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sonar安装参考文档","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://blog.csdn.net/BeauXie/article/details/81157330",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sonar安装参考文档"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("坑也是很多的 比如 文件的权限 比如 不能用root用户  用mysql做数据库等等 项目是java写的 所以还要装java噢")]),t._v(" "),r("p",[t._v("装好后主要是集成jenkins 这样 每次做ci cd 的时候 就会生成一份代码的报告 可以让我们自己更好的规范代码")]),t._v(" "),r("h2",{attrs:{id:"集成jenkins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集成jenkins","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://blog.csdn.net/songer_xing/article/details/76691438",target:"_blank",rel:"noopener noreferrer"}},[t._v("集成Jenkins"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("遇到的坑 比如说 插件的安装 CMS没有选择ture 然后jenkins里面的工作空间等等")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("下载运行就可以使用\nwget https://alibaba.github.io/arthas/arthas-boot.jar\njava -jar arthas-boot.jar")]),t._v(" "),r("p",[t._v("#直接下载可执行文件\ncurl -L https://alibaba.github.io/arthas/install.sh | sh")]),t._v(" "),r("p",[t._v("采坑记录 他不能直接同ctrl+c 退出  不然 你下次进去 进程选项的时候 他会默认进入到上一次进程的地方 要用shutdown命令 下次就可以重新选择了")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"刚好公司需要-所以搭建一个sonar-jenkins-做一个自动化代码的检查-下面是自己的一些采坑经验-记录一下玩玩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刚好公司需要-所以搭建一个sonar-jenkins-做一个自动化代码的检查-下面是自己的一些采坑经验-记录一下玩玩","aria-hidden":"true"}},[this._v("#")]),this._v(" 刚好公司需要 所以搭建一个sonar + jenkins 做一个自动化代码的检查 下面是自己的一些采坑经验 记录一下玩玩")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"sonar-是一个代码检查工具-他可以和jenkins-集成-也可以集成在开发人员的idea中-做到一个代码的审查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sonar-是一个代码检查工具-他可以和jenkins-集成-也可以集成在开发人员的idea中-做到一个代码的审查","aria-hidden":"true"}},[this._v("#")]),this._v(" sonar 是一个代码检查工具 他可以和jenkins 集成  也可以集成在开发人员的idea中 做到一个代码的审查")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"安装文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装文档","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装文档")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"总结一下-工具还是可以的-搭建起来-也简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结一下-工具还是可以的-搭建起来-也简单","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结一下 工具还是可以的 搭建起来 也简单")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"arthas（阿尔萨斯）-阿里的一个线上bug调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arthas（阿尔萨斯）-阿里的一个线上bug调试","aria-hidden":"true"}},[this._v("#")]),this._v(" Arthas（阿尔萨斯） 阿里的一个线上bug调试")])}],!1,null,null,null);a.default=s.exports}}]);