const fs = require('fs');
let ejs = require('ejs')

/*************** 数据部分 ***************/
let webSiteTitle = "细粒丁"
let scriptLink = [
    "assets/js/index.js",
]
let cssLink = [
    "assets/css/index.css",
    "https://at.alicdn.com/t/font_1625701_q2422cy34wn.css"
]
let info = {
    avatar: "./assets/img/head.png", // img.src
    title: "细粒丁",
    title2: "tenyding",
    solgan: ["认真的样子", "才吸引人"]
}
let left_info_btns = [
    { name: "Blog", iconClass: "iconBlog", href: "https://tenyding.cn" },
    { name: "Wiki", iconClass: "iconwiki", href: "https://tenyding.cn" },
    { name: "Diary", iconClass: "iconrizhi", href: "https://tenyding.cn/archives/" },
    { name: "Friends", iconClass: "iconfriend", href: "https://tenyding.cn/link/" },
    { name: "Discuss", iconClass: "iconCommentenable", href: "https://tenyding.cn/link/" },
    { name: "About", iconClass: "iconabout", href: "https://tenyding.cn/about/" },
]
let introduce = [
    "感谢每一位关注我的路人！Thanks♪(･ω･)ﾉ我会努力变越得越好的！",
    "我不是什么大佬，也称不上技术宅。",
    "总之，大家一起进步，拜托啦~"
]
let progress = [
    {
        title: "HTML/CSS",
        percent: "80%",
        bgColor: "wheat",    // "wheat",
        tooltip: "写网页的能力：能看就行"
    },
    {
        title: "JavaScript",
        percent: "45%",
        bgColor: "rgb(255 196 59)",// "rgb(241,224,90)",
        tooltip: "写脚本的能力：能跑就别动"
    },
    {
        title: "服务器",
        percent: "35%",
        bgColor: "rgb(209 137 213)", // "rgb(86,61,124)",
        tooltip: "折腾的能力：有手也不行"
    },
    {
        title: "中二病",
        percent: "50%",
        bgColor: "rgb(176,234,191)",
        tooltip: "就算中二病也要谈恋爱"
    },
    {
        title: "搞事情",
        percent: "35%",
        bgColor: "rgb(49,120,198)",
        tooltip: "思想的巨人，行动的矮子"
    },
    {
        title: "情感",
        percent: "65%",
        bgColor: "rgb(232,191,191)",
        tooltip: "纯爱战神：意满离"
    },
    {
        title: "社交",
        percent: "35%",
        bgColor: "rgb(38,185,112)", // "rgb(227,76,38)",
        tooltip: "社恐在外 唯唯诺诺"
    },
    {
        title: "耐心",
        percent: "75%",
        bgColor: "rgb(130,110,165)", // "rgb(53,114,165)",
        tooltip: "佛性"
    },
    {
        title: "世界",
        percent: "25%",
        bgColor: "rgb(120,160,172)",
        tooltip: "就此离开"
    },
]
let contact = [
    { name: "BiliBili", iconClass: "iconbilibili", href: "https://space.bilibili.com/279753317" },
    { name: "Twitter", iconClass: "icontwitter-fill", href: "https://x.com/home" },
    { name: "Telegram", iconClass: "iconbilibili", href: "https://telegram.org/" },
    { name: "Github", iconClass: "iconbilibili", href: "https://github.com/li1055107552" },
    { name: "CSDN", iconClass: "iconbilibili", href: "https://blog.csdn.net/li1055107552" },
    { name: "Mail", iconClass: "iconbilibili", href: "mailto:li1055107552@163.com" },
]
let articles = [
    {
        title: "TCP 打洞，实现 P2P（NAT3 - NAT3 ）",
        content: `TCP 与 UDP 打洞，最大的不同在于 TCP 是有连接，UDP 是无连接。这就决定了，UDP 可以一边打洞一边监听端口 而 TCP 不行。其次就是，UDP 打洞成功就能进行通信，TCP 是要想办法达成握手，三次握手成了才可以通信。`,
        href: "https://tenyding.cn/_posts/%E6%8A%80%E6%9C%AF/TCP%E6%89%93%E6%B4%9E%EF%BC%8C%E5%AE%9E%E7%8E%B0P2P%EF%BC%88%E9%99%84Node%E6%BA%90%E7%A0%81%EF%BC%89/"
    },
    {
        title: "浏览器 - Chrome",
        content: `本来是单纯想写写 <span style="background-color: #1b1f230d; color: #f47466;">事件循环机制</span> 的，然后写着写着就越写越多了... <br>
        写都写了，那就再扯多点出来吧`,
        href: "https://tenyding.cn/_posts/study/%E5%89%8D%E7%AB%AF/Browser-Chrome/"
    },
    {
        title: "能一键备份的快捷方式",
        content: `简单描述一下就是，在桌面生成一个 bash 命令的快捷方式，当拖动文件在这个快捷方式上打开时，就会自动将这个文件保存到你本地的 MongoDB 中。我搞来就是想写东西的时候，保存顺便备份。。。`,
        href: "https://tenyding.cn/_posts/%E6%8A%80%E6%9C%AF/%E8%83%BD%E4%B8%80%E9%94%AE%E5%A4%87%E4%BB%BD%E7%9A%84%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F/"
    },
]
let works = [
    {
        title: "小鹅通视频下载并解码のdemo",
        content: `言简意赅，就是下载小鹅通视频的`,
        href: "https://github.com/li1055107552/xiaoe-tech-decodeDemo"
    },
    {
        title: "小程序热更新方案",
        content: `小程序热更新方案，可以随时修改 js, wxml, wxss代码进行热更新<br>
        其实就是将他们转为 AST，然后再用一个 JS 写的 JS 解释器去执行这串 AST`,
        href: "https://github.com/UncAnnyZ/MiniProgram-HotUpdate"
    },
]
/*************** 数据部分 结束 ***************/


/*************** 各模板编译 ***************/
let _head = fs.readFileSync("./src/template/_head.ejs", "utf-8")
let _headHTML = ejs.render(_head, { title: webSiteTitle, scriptLink, cssLink })
// console.log(_headHTML)

let _info = fs.readFileSync("./src/template/_info.ejs", "utf-8")
let _infoHTML = ejs.render(_info, { info })
// console.log(_infoHTML)

let _leftBtn = fs.readFileSync("./src/template/_leftBtn.ejs", "utf-8")
let _leftBtnHTML = ejs.render(_leftBtn, { left_info_btns })
// console.log(_leftBtnHTML)

let $introduce = fs.readFileSync("./src/template/$introduce.ejs", "utf-8")
let $introduceHTML = ejs.render($introduce, { introduce })
// console.log($introduceHTML)

let $fighting = fs.readFileSync("./src/template/$fighting.ejs", "utf-8")
let $fightingHTML = ejs.render($fighting, { progress })
// console.log($fightingHTML)

let $contact = fs.readFileSync("./src/template/$contact.ejs", "utf-8")
let $contactHTML = ejs.render($contact, { contact })
// console.log($contactHTML)

let $article = fs.readFileSync("./src/template/$article.ejs", "utf-8")
let $articleHTML = ejs.render($article, { articles })
// console.log($articleHTML)

let $works = fs.readFileSync("./src/template/$works.ejs", "utf-8")
let $worksHTML = ejs.render($works, { works })
// console.log($worksHTML)

/*************** 各模板编译 结束 ***************/


/*************** 按模块编译 ***************/
let parts = [
    {
        title: {
            name: "",
            href: "",
            a_name: ""
        },
        id: "introduce",
        template: $introduceHTML,
    },
    {
        title: {
            name: "战斗力",
            href: "#fighting",
            a_name: ""
        },
        id: "fighting",
        template: $fightingHTML,
    },
    {
        title: {
            name: "出没地点",
            href: "#contact",
            a_name: ""
        },
        id: "contact",
        template: $contactHTML,
    },
    {
        title: {
            name: "文章",
            href: "https://tenyding.cn/archives/",
            a_name: "更多文章"
        },
        id: "article",
        template: $articleHTML,
    },
    {
        title: {
            name: "作品",
            href: "https://github.com/li1055107552",
            a_name: "更多作品"
        },
        id: "works",
        template: $worksHTML,
    },
]
let part = fs.readFileSync("./src/template/part.ejs", "utf-8")
let partsHTML = ejs.render(part, { parts })

let left_container = fs.readFileSync("./src/template/left_container.ejs", "utf-8")
let left_containerHTML = ejs.render(left_container, { _infoHTML, _leftBtnHTML })

let right_container = fs.readFileSync("./src/template/right_container.ejs", "utf-8")
let right_containerHTML = ejs.render(right_container, { partsHTML })
/*************** 按模块编译 结束 ***************/

/*************** 生成最终文件并写入 ***************/
let main = fs.readFileSync("./src/template/main.ejs", "utf-8")
let HTML = ejs.render(main, { _headHTML, left_containerHTML, right_containerHTML })
fs.writeFileSync("./public/index.html", HTML)

fs.cpSync('./src/js', './public/assets/js', { recursive: true, force: true });
fs.cpSync('./src/css', './public/assets/css', { recursive: true, force: true });

let css = fs.readFileSync("./src/css/index.css", "utf-8")
let percents = []
for (let i = 0; i < progress.length; i++) {
    const item = progress[i];
    const percent = item.percent.split("%")[0];
    if (percents.includes(percent)) continue;

    css = `@keyframes growWidth_${percent} {
        from {width: 0;}
        to {width: ${percent}%;}
    }
    .progress:hover .animation_growWidth_${percent} {
        animation: growWidth_${percent} 1s forwards;
    }
    `+ css
}
fs.writeFileSync("./public/assets/css/index.css", css, "utf-8")
