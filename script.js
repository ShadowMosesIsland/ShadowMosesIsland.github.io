let panel = document.getElementById("panel");
let panel_opacity = 1;
let active = false;

let interval_input = document.getElementById("interval");
let timeout_input = document.getElementById("timeout");

let interval_time;
let timeout_time;

let soundInterval;
let startTimeout;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

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
        case "ArrowDown":
            timeout_input.focus()
            break;
        case "ArrowUp":
            interval_input.focus()
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
            activateDeactivate();
            break;
    }
}

const getInputs = () => {
    if(!isNaN(interval_input.value)) {
        interval_time = interval_input.value * 1000;
    } else {
        interval_time = 30 * 1000;
    }

    if(!isNaN(timeout_input.value)) {
        timeout_time = timeout_input.value * 1000;
    } else {
        timeout_time = 30 * 1000;
    }
    
    timeout_time = timeout_input * 1000;
}

const activateDeactivate = () => {
    active = !active;
    panel.style.display = (active ? "none" : "flex");
    if(active) {
        getInputs();
        startTimeout = setTimeout(startAction, parseInt(timeout_time))
    } else {
        clearTimeout(startTimeout);
        clearInterval(soundInterval);
    }
}

const startAction = () => {
    
    soundInterval = setInterval(playRandomSound, parseInt(interval_time))
}

const playRandomSound = () => {
    let random = getRandomInt(1,20);
    let audio = new Audio('./sounds/sound ('+random+').mp3');
    audio.play();
} 

addEventListener("keydown", onkey)

addEventListener("mousedown", ()=>{
    if(active) {
        playRandomSound();
    }
})

document.addEventListener('contextmenu', event => event.preventDefault());