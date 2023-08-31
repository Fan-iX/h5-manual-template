document.querySelectorAll(".closable>.titlebar").forEach(
    ele=>{
        ele.onclick=function(e){
            this.parentElement.classList.toggle("closed")
        }
    }
)