let panel = document.getElementById("panel");
let panel_opacity = 1;
let active = false;

const onkey = (event) => {
    console.log(event.key)
    switch(event.key) {
        case "ArrowRight":
            panel.style.right = "0px";
            panel.style.left = "auto";
            break;
        case "ArrowLeft":
            panel.style.right = "auto";
            panel.style.left = "0px";
            break;
        case "-":
            if(panel_opacity - 0.2 >= 0) {
                panel_opacity -= 0.2;
                panel.style.opacity = panel_opacity;
            }
            break;
        case "=":
            if(panel_opacity + 0.2 <= 1) {
                panel_opacity += 0.2;
                panel.style.opacity = panel_opacity;
            }
            break;
        case "Enter":
            active = !active;
            panel.style.display = (active ? "none" : "flex");
            break;
    }
}

addEventListener("keydown", onkey)

