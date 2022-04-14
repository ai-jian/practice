// light / dark mode
const checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
    }
});

let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};

//custom cursor
const cursor = document.querySelector(".app__cursor")
const follower = document.querySelector(".cursor-follower")
const cursorScale = document.querySelectorAll(".app__cursor-scale")

gsap.set('.app__cursor', { xPercent: -50, yPercent: -50 })
gsap.set('.cursor-follower', { xPercent: -50, yPercent: -50 })

window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY })
    gsap.to(follower, 0.9, { x: e.clientX, y: e.clientY })
})

// cursorScale.classList.add('cursor-grow')

cursorScale.forEach(link => {
    link.addEventListener('mousemove', () => {
        link.classList.contains('cursor-small') ?
            cursor.classList.add('grow-small') :
            cursor.classList.add('cursor-grow')

    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-grow')
        cursor.classList.remove('grow-small')
    })
})