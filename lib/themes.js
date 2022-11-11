window.themeSwitcher = {
    get theme() {
        return window.localStorage["theme"] || "light"
    },
    set theme(value) {
        window.localStorage["theme"] = value
        document.body.setAttribute("theme", value)
        setTimeout(()=> {
            let header = document.querySelector("header.main-menu-stripe")
            let color = window.getComputedStyle(header, null).backgroundColor
            document.querySelectorAll("meta[role='topbar-color']")
            .forEach(meta => {
                meta.content = color
            })
        }, 100)
    }, 
    init() {
        this.theme = this.theme
        document.getElementById("theme-switch").onclick = () => {
            this.theme = (this.theme == "light") ? "dark" : "light"
        }
    }
}

document.onreadystatechange = function() {
    if (document.readyState == "complete") { 
        window.themeSwitcher.init()
    }
    else {
        window.onload = function() { window.themeSwitcher.init() }
    }
}
