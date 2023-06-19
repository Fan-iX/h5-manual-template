document.querySelectorAll("pre.terminal-code details>summary").forEach(ele => {
    ele.onclick = (e) => { e.preventDefault() }
    ele.oncontextmenu = function () {
        this.parentElement.open ^= 1
    }
})
document.querySelectorAll("pre.terminal-code .ps1").forEach(ele => {
    let sp1 = document.createElement("span"),
        sp2 = document.createElement("span")
    sp1.innerText = "\u2061"
    sp2.innerText = "\u2063"
    ele.before(sp1)
    if (ele.nextElementSibling?.contentEditable != "true")
        ele.after(sp2)

    ele.oncopy = (e) => {
        e.preventDefault()
        e.clipboardData.setData('Text', window.getSelection().toString().replace(/^.*?\u2063|\u2061.*?\u2063|\u2061.*?$/gs, "").replace(/\n+$/, ""))
    }
})