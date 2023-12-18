// default colors
let DefaultColor = 'black'
let DefaultMode = 'color'
let DefaultSize = 16

// current colors
let currentColor = DefaultColor
let currentMode = DefaultMode
let currentSize = DefaultSize
// grid element i.e div inside grid
let gridElement

// functions to set color mode and size
function setColor(newColor){
    currentColor = newColor
}

function setMode(newMode){
    currentMode = newMode
    activatebutton()
}

function setSize(newSize){
    currentSize = newSize
    
    createGrid()
}

// selectin elements
let main = document.querySelector(".pixel-container")
let colorpicker = document.querySelector(".color-picker")
let sizeroller = document.querySelector(".size-btn")
let colorbtn = document.querySelector(".color-btn")
let rainbowbtn = document.querySelector(".rainbow-btn")
let eraserbtn = document.querySelector(".eraser-btn")
let clearbtn = document.querySelector(".clear-btn")

// event listeners actions 
colorpicker.oninput = (e)=>{setColor(e.target.value)}
sizeroller.onchange = (e)=>{setSize(e.target.value)}
colorbtn.onclick = ()=>{setMode('color')}
eraserbtn.onclick = ()=>{setMode('eraser')}
clearbtn.onclick = ()=>{setMode('clear')}



// create grid
function createGrid() {
    // main.innerHTML = ""; 
    // for (let j = 0; j < currentSize; j++) {
    //     let content = "";
    //     for (let i = 0; i < currentSize; i++) {
    //         content += `<div class="box"></div>`;
    //     }
    //     main.innerHTML += `<div>${content}</div>`;
    // }

    

    main.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    main.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`
    let squares = document.querySelectorAll("div")
    squares.forEach((div)=>div.remove)
    for (let i = 0; i < currentSize * currentSize; i++) {
        gridElement = document.createElement('div')
        gridElement.style.backgroundColor =  'white'
        gridElement.addEventListener('mouseover', (e)=>{e.target.style.backgroundColor = currentColor})
        gridElement.addEventListener('mousedown', (e)=>{e.target.style.backgroundColor = currentColor})
        main.appendChild(gridElement)
      }
      
}


function activatebutton(){
    if(currentMode === 'color'){
       currentColor = 'black '
    }else if(currentMode === 'eraser'){
       currentColor = 'white'
    }else if(currentMode === 'clear'){
        document.querySelectorAll('div').forEach(div=>div.style.backgroundColor = "white") 
    }
    
}
createGrid()
activatebutton()
