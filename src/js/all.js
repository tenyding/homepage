const ejs = require('ejs')
let title = "细粒丁"
let cssLink = [
    "assets/css/main.css",
    "https://at.alicdn.com/t/font_1625701_q2422cy34wn.css"
]
let left_info = {
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

let html = ejs.render(
`
<!DOCTYPE html>
<!--
 * Tenyding's Page
 * Last Update: 2024-10-12
 * GitHub: https://github.com/li1055107552/
 * Made with love by AyagawaSeirin [https://owomoe.net/]
 * UI 参考 AyagawaSeirin，如果你也想使用，在她的公开仓库内即可找到源码。您可以任意修改，但请注明原作者。指路：[https://github.com/AyagawaSeirin/homepage]
-->

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%=title%></title>
    <%_ cssLink.forEach(function(link){ -%>
    <link rel="stylesheet" href="<%=link%>">
    <%_ }) -%>
</head>

<body>
    <div class="background"></div>
    <div class="main">
        <div class="container">
            <div class="left-container col">
                <div class="card">
                    <avatar><img src="<%=left_info.avatar%>" alt=""></avatar>
                    <div class="left-info">
                        <div class="title"><%=left_info.title%></div>
                        <div class="title2"><%=left_info.title2%></div>
                        <div class="solgan">
                            <%_ left_info.solgan.forEach(function(solgan){ -%>
                            <span><%=solgan%></span><br>
                            <%_ }) -%>
                        </div>
                    </div>
                    <div class="btn_s">
                        <%_ left_info_btns.forEach(function(info){ -%>
                        <a target="_blank" class="a_btn" href="<%=info.href%>"><span class="<%=info.iconClass%>"><%=info.name%></span></a>
                        <%_ }) -%>
                    </div>
                </div>
            </div>
            <div class="right-container col">
                <div class="card">
                    <div class="part">
                        <div id="introduce">
                            <p>感谢每一位关注我的路人！Thanks♪(･ω･)ﾉ我会努力变越得越好的！</p>
                            <p>我不是什么大佬，也称不上技术宅。</p>
                            <p>总之，大家一起进步，拜托啦~</p>
                        </div>
                    </div>
                    <div class="part">
                        <div class="part-title">战斗力</div>
                        <div id="fighting">
                            <div class="progress">
                                <div class="progress-title">HTML/CSS</div>
                                <div class="progress-bg">
                                    <div class="progress-determinate" style="
                                    width: 40%;
                                    animation: '{from{width: 0;} to{width: 40%}}' 1s forwards;
                                    "></div>
                                </div>
                                <div class="progress-tooltip">写网页的能力：能看就行</div>
                            </div>
                            <div class="progress">
                                <div class="progress-title">JavaScript</div>
                                <div class="progress-bg">
                                    <div class="progress-determinate" style="width: 45%;"></div>
                                </div>
                                <div class="progress-tooltip">写脚本的能力：能跑就别动</div>
                            </div>
                            <div class="progress">
                                <div class="progress-title">服务器</div>
                                <div class="progress-bg">
                                    <div class="progress-determinate" style="width: 30%;"></div>
                                </div>
                                <div class="progress-tooltip">折腾的能力：有手也不行</div>
                            </div>
                            <div class="progress">
                                <div class="progress-title">中二病</div>
                                <div class="progress-bg">
                                    <div class="progress-determinate" style="width: 50%;"></div>
                                </div>
                                <div class="progress-tooltip">就算中二病也要谈恋爱</div>
                            </div>
                            <div class="progress">
                                <div class="progress-title">搞事情</div>
                                <div class="progress-bg">
                                    <div class="progress-determinate" style="width: 35%;"></div>
                                </div>
                                <div class="progress-tooltip">思想的巨人，行动的矮子</div>
                            </div>
                            <div class="progress">
                                <div class="progress-title">情感</div>
                                <div class="progress-bg">
                                    <div class="progress-determinate" style="width: 65%;"></div>
                                </div>
                                <div class="progress-tooltip">纯爱战神：意满离</div>
                            </div>
                            <div class="progress">
                                <div class="progress-title">社交</div>
                                <div class="progress-bg">
                                    <div class="progress-determinate" style="width: 35%;"></div>
                                </div>
                                <div class="progress-tooltip">社恐在外 唯唯诺诺</div>
                            </div>
                            <div class="progress">
                                <div class="progress-title">耐心</div>
                                <div class="progress-bg">
                                    <div class="progress-determinate" style="width: 75%;"></div>
                                </div>
                                <div class="progress-tooltip">佛性</div>
                            </div>
                            <div class="progress">
                                <div class="progress-title">世界</div>
                                <div class="progress-bg">
                                    <div class="progress-determinate" style="width: 25%;"></div>
                                </div>
                                <div class="progress-tooltip">就此离开</div>
                            </div>
                        </div>
                    </div>
                    <div class="part">
                        <div class="part-title">出没地点</div>
                        <div id="contact">
                            <div class="contact_btn">
                                <a target="_blank" class="a_btn" href="https://space.bilibili.com/279753317"><span
                                        class="iconbilibili">BiliBili</span></a>
                                <a target="_blank" class="a_btn" href="https://x.com/home"><span
                                        class="icontwitter-fill">Twitter</span></a>
                                <a target="_blank" class="a_btn" href="https://telegram.org/"><span
                                        class="icontelegram">Telegram</span></a>
                                <a target="_blank" class="a_btn" href="https://github.com/li1055107552"><span class="icongithub">Github</span></a>
                                <a target="_blank" class="a_btn" href="https://blog.csdn.net/li1055107552"><span class="iconfont icon-csdn">CSDN</span></a>
                                <a target="_blank" class="a_btn" href="mailto:li1055107552@163.com"><span class="iconmail_fill">Mail</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="part">
                        <div class="part-title">文章</div>
                        <div id="article">
                            <a target="_blank" class="a_container" href="https://tenyding.cn/_posts/%E6%8A%80%E6%9C%AF/TCP%E6%89%93%E6%B4%9E%EF%BC%8C%E5%AE%9E%E7%8E%B0P2P%EF%BC%88%E9%99%84Node%E6%BA%90%E7%A0%81%EF%BC%89/">
                                <div class="a_item">
                                    <div class="article-title">TCP 打洞，实现 P2P（NAT3 - NAT3 ）</div>
                                    <div class="article-content">
                                        TCP 与 UDP 打洞，最大的不同在于 TCP 是有连接，UDP 是无连接。这就决定了，UDP 可以一边打洞一边监听端口 而 TCP 不行。其次就是，UDP 打洞成功就能进行通信，TCP 是要想办法达成握手，三次握手成了才可以通信。
                                    </div>
                                </div>
                            </a>
                            <a target="_blank" class="a_container" href="https://tenyding.cn/_posts/study/%E5%89%8D%E7%AB%AF/Browser-Chrome/">
                                <div class="a_item">
                                    <div class="article-title">浏览器 - Chrome</div>
                                    <div class="article-content">
                                        本来是单纯想写写 <span style="background-color: #1b1f230d; color: #f47466;">事件循环机制</span> 的，然后写着写着就越写越多了... <br>
                                        写都写了，那就再扯多点出来吧
                                    </div>
                                </div>
                            </a>
                            <a target="_blank" class="a_container" href="https://tenyding.cn/_posts/%E6%8A%80%E6%9C%AF/%E8%83%BD%E4%B8%80%E9%94%AE%E5%A4%87%E4%BB%BD%E7%9A%84%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F/">
                                <div class="a_item">
                                    <div class="article-title">能一键备份的快捷方式</div>
                                    <div class="article-content">
                                        简单描述一下就是，在桌面生成一个 bash 命令的快捷方式，当拖动文件在这个快捷方式上打开时，就会自动将这个文件保存到你本地的 MongoDB 中。我搞来就是想写东西的时候，保存顺便备份。。。
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="part">
                        <div class="part-title">
                            <span><a href="#works">作品</a></span>
                            <a href="">更多作品</a>
                        </div>
                        <div id="works">
                            <a target="_blank" class="a_container" href="">
                                <div class="a_item">
                                    <div class="works-title article-title">小鹅通视频下载并解码のdemo</div>
                                    <div class="works-content article-content">
                                        言简意赅，就是下载小鹅通视频的
                                    </div>
                                </div>
                            </a>
                            <a target="_blank" class="a_container" href="https://github.com/UncAnnyZ/MiniProgram-HotUpdate">
                                <div class="a_item">
                                    <div class="works-title article-title">小程序热更新方案</div>
                                    <div class="works-content article-content">小程序热更新方案，可以随时修改 js, wxml, wxss代码进行热更新<br>
                                    其实就是将他们转为 AST，然后再用一个 JS 写的 JS 解释器去执行这串 AST
                                    </div>
                                </div>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
`, { title,cssLink,left_info,left_info_btns }
)
console.log(html)