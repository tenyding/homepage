let ejs = require('ejs')

people = ['geddy', 'neil', 'alex']

html = ejs.render('<%= people.join(", "); %>', { people: people })

let left_info = {
    avatar: "./assets/img/head.png", // img.src
    title: "细粒丁",
    title2: "tenyding",
    solgan: ["认真的样子", "才吸引人"]
}
let HTML_left_info = ejs.render(
    `<% -%>
    <avatar><img src="<%=left_info.avatar%>" alt=""></avatar>
    <div class="left-info">
        <div class="title"><%=left_info.title%></div>
        <div class="title2"><%=left_info.title2%></div>
        <div class="solgan">
            <%_ left_info.solgan.forEach(function(solgan){ -%>
            <span><%=solgan%></span><br>
            <%_ }); -%>
        </div>
    </div>`, { left_info: left_info }
)
// console.log(HTML_left_info)

let left_info_btns = [
    { name: "Blog", iconClass: "iconBlog", href: "https://tenyding.cn" },
    { name: "Wiki", iconClass: "iconwiki", href: "https://tenyding.cn" },
    { name: "Diary", iconClass: "iconrizhi", href: "https://tenyding.cn/archives/" },
    { name: "Friends", iconClass: "iconfriend", href: "https://tenyding.cn/link/" },
    { name: "Discuss", iconClass: "iconCommentenable", href: "https://tenyding.cn/link/" },
    { name: "About", iconClass: "iconabout", href: "https://tenyding.cn/about/" },
]
let HTML_left_info_btns = ejs.render(
    `<%_ left_info_btns.forEach(function(info){ -%>
        <a target="_blank" class="a_btn" href="<%=info.href%>"><span class="<%=info.iconClass%>"><%=info.name%></span></a>
    <%_ }); %>`, { left_info_btns: left_info_btns }
)
// console.log(HTML_left_info_btns)

let left_card = ejs.render(
    `<div class="card">
    <%_ %><%-HTML_left_info%>
    <div class="btn_s">
<%_ %><%-HTML_left_info_btns%><% -%>
    </div>
<%_ %></div>`, { HTML_left_info: HTML_left_info, HTML_left_info_btns: HTML_left_info_btns }
)
// console.log(left_card)
const fs = require('fs');
// let h = fs.readFileSync("./src/template/_head.ejs")
let h = fs.readFileSync("./src/template/_head.ejs", "utf-8")

let title = "细粒丁"
let cssLink = [
    "assets/css/main.css",
    "https://at.alicdn.com/t/font_1625701_q2422cy34wn.css"
]
console.log(h == `${h}`)
console.log(h === `${h}`)
console.log(h,`${h}`)
let includeHTML = ejs.render(h, { title, cssLink })
// let includeHTML = ejs.render(`${h}`, { title, cssLink })
console.log(includeHTML)
