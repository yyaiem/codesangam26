
const nameAnimateTl = gsap.timeline({ repeat: -1 });

nameAnimateTl
    .to('#eventNamep2', { delay: 0.1, fontFamily: "JetBrains Mono", ease: 'none' })
    .to('#eventNamep2', { delay: 0.9, fontFamily: "Samarkan", ease: 'none' })
    .to('#eventNamep2', { delay: 0.1, fontFamily: "JetBrains Mono", ease: 'none' })
    .to('#eventNamep2', { delay: 0.001, fontFamily: "Samarkan", ease: 'none' })
    .to('#eventNamep2', { delay: 0.001, fontFamily: "JetBrains Mono", ease: 'none' })
    .to('#eventNamep2', { delay: 3, fontFamily: "JetBrains Mono", color: 'crimson', ease: 'none' })
    .to('#eventNamep2', { delay: 0.1, fontFamily: "Samarkan", ease: 'none' })


const timeL1 = gsap.timeline({ repeat: -1 })

timeL1.to('#organizerTag', {
    delay: 2,
    display: 'none'
})
timeL1.to('#organizerName', {
    display: 'block'
})
timeL1.to('#organizerName', {
    display: 'none',
    delay: 2
})
timeL1.to('#organizerTag', {
    display: 'block'
})



const menuAnimation = gsap.timeline({ paused: true });
menuAnimation.to('#menu', {
    x: "-100dvw"
});
menuAnimation.to('#closemenu', {
    opacity: 1,
    duration: 0.02
});
menuAnimation.to("#navmenu li", {
    stagger: {
        from: 'end',
        each: 0.2
    },
    opacity: 1,
    y: 0,
    duration: 0.4
})

document.getElementById('menuBtn').addEventListener('click', e => {
    e.preventDefault();
    menuAnimation.play();
});
document.getElementById('closemenu').addEventListener('click', e => {
    e.preventDefault();
    menuAnimation.reverse();
});


function mobileAnimation() {
    gsap.to('#brandingWatermark div', {
        ease: 'none',
        y: "-54dvh",
        x: "-45dvw",
        repeat: -1,
        duration: "70",
    })

}

function desktopAnimation() {
    gsap.to('#brandingWatermark div', {
        ease: 'none',
        y: "-54dvh",
        x: "-20dvw",
        repeat: -1,
        duration: "70",
    })

}

if (window.innerWidth <= 768) {
    mobileAnimation()
} else {
    desktopAnimation();
}


function loading() {
    document.getElementById("loadingScr").style.display = 'block'
}
function noloading() {
    document.getElementById("loadingScr").style.display = 'none'
}

function msg(msg) {
    document.getElementById("msgBox").style.display = 'block'
    document.getElementById("msgBox").innerText = msg
}
function clsmsg() {
    document.getElementById("msgBox").innerText = ''
    document.getElementById("msgBox").style.display = 'none'
}

window.onload = e =>{
    clsmsg();
    noloading();
    document.getElementById("regform").reset()
}



document.addEventListener("DOMContentLoaded", () => {

    
});