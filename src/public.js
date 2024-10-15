const fs = require("fs")
let date = new Date()
let time = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
].join("-")
let appendStr = `\nconsole.log("\\n %c Last update time %c ${time} ${date.toLocaleTimeString()} ","color:#444;background:#eee;padding:5px 0;","color:#F8F8FF;background:rgb(250 200 100);padding:5px 0;");\n`
fs.appendFileSync("./public/assets/js/index.js", appendStr, "utf-8")