let button = document.querySelector('.buttons')
let output = document.querySelector('.output')

let value = []

button.addEventListener('click',e=>{
     if(e.target.innerText !== '=' && e.target.innerText !== 'AC'){
    output.innerText += e.target.innerText
    value.push(e.target.innerText)
    }
    else if(e.target.innerText === '='){
        let ans = eval(value.join("").toString())
        output.innerText = ans 
        value = []
        value.push(ans)
    }else if(e.target.innerText === 'AC'){
        value = []
        output.innerText = "" 
    }
    
})