const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
// ctx.globalCompositeOperation = 'overlay'

const edge = 130
let drawing = false

const mouse = {
    x: null,
    y: null,
}

window.addEventListener('mousemove', function (e) {
    mouse.x = e.x
    mouse.y = e.y
})

class Root {
    constructor(x, y, color, centerX, centerY) {
        this.x = x;
        this.y = y;
        this.color = color
        this.speedX = 0;
        this.speedY = 0;
        this.centerX = centerX
        this.centerY = centerY
    }
    draw() {
        this.speedX += (Math.random() - 0.5) / 2;
        this.speedY += (Math.random() - 0.5) / 2;
        this.x += this.speedX
        this.y += this.speedY

        const distanceX = this.x - this.centerX
        const distanceY = this.y - this.centerY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        const radius = (-distance / edge + 1) * edge / 2;


        if (radius > 0) {
            requestAnimationFrame(this.draw.bind(this))
            ctx.beginPath();
            ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI)
            ctx.fillStyle = this.color
            ctx.fill()
            ctx.strokeStyle = 'pink'
            ctx.stroke()
        }
    }
}


function branchOut() {
    if (drawing) {
        const centerX = mouse.x
        const centerY = mouse.y
        for (let i = 0; i < 4; i++) {
            const root = new Root(mouse.x, mouse.y, 'yellow', centerX, centerY)
            root.draw()
        }
    }
}


window.addEventListener('resize', function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

window.addEventListener('mousemove', function () {
    ctx.fillStyle = 'rgba(0,255,255,0.02)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    branchOut()
})

window.addEventListener('mousedown', () => {
    drawing = true
})
window.addEventListener('mouseup', () => {
    drawing = false
})