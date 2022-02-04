const container = document.getElementById('container')
const btnYellow = document.querySelector('.yellow')
const btnBlue = document.querySelector('.blue')
const btnRed = document.querySelector('.red')
const btnPink = document.querySelector('.pink')
const btnGreen = document.querySelector('.green')
const btnMix = document.querySelector('.mixed')
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
const colors = ['#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#808080', '#800000', '#808000', '#008000', '#800080', '#008080', '#000080', '#000']
const squares = 600;
const yellow = ['#FFFF00'];
const blue = ['#0000FF'];
const red = ['#FF0000'];
const pink = ['#FF00FF'];
const green = ['#00FF00'];

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}


for(let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    btnMix.addEventListener('click', () => {

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
})

        btnYellow.addEventListener('click', () => {

        square.addEventListener('mouseover', () => yellowColor(square))
        square.addEventListener('mouseout', () => removeColor(square))
    
        })

        btnBlue.addEventListener('click', () => {

            square.addEventListener('mouseover', () => blueColor(square))
            square.addEventListener('mouseout', () => removeColor(square))
        
            })
        
        btnRed.addEventListener('click', () => {

            square.addEventListener('mouseover', () => redColor(square))
            square.addEventListener('mouseout', () => removeColor(square))
            
            })   

        btnPink.addEventListener('click', () => {

            square.addEventListener('mouseover', () => pinkColor(square))
            square.addEventListener('mouseout', () => removeColor(square))
            
            })
        
        btnGreen.addEventListener('click', () => {

            square.addEventListener('mouseover', () => greenColor(square))
            square.addEventListener('mouseout', () => removeColor(square))
                
            })
    square


    container.appendChild(square)
}

//mixed colors
function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

//yellow
function yellowColor(element) {
    element.style.background =  yellow;
    // element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function blueColor(element) {
    element.style.background = blue;
}

function redColor(element) {
    element.style.background = red;
}

function pinkColor(element) {
    element.style.background = pink;
}

function greenColor(element) {
    element.style.background = green;
}