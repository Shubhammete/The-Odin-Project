let icons = document.getElementsByClassName('icon')
let status = document.querySelector('.status')

for(let i = 0;i<icons.length;i++){
icons[i].addEventListener('click',(e)=>{
    let value = e.target.alt
    let comp = getComputerResponse()
    if(value === comp){
        status.innerHTML+=`<h1>Match Tied</h1>`
    }else {
        switch(comp){
            case 'Stone':
                if(value === 'Paper'){
                    status.innerHTML+=`<h1>You Win</h1>`
                }else{
                    status.innerHTML+=`<h1>Match Lose</h1>`
                }
                break;
            case 'Paper':
                if(value === 'Scissor'){
                    status.innerHTML+=`<h1>You Win</h1>`
                }else{
                    status.innerHTML+=`<h1>Match Lose</h1>`
                }
                break;
            case 'Scissor':
                if(value === 'Stone'){
                    status.innerHTML+=`<h1>You Win</h1>`
                }else{
                    status.innerHTML+=`<h1>Match Lose</h1>`
                }
                break;
        }
    }
})
}

function getComputerResponse(){
    
    let imgvalues = ["./images/granite.png","./images/paper-plane.png","./images/scissor.png"]
    let name = ["Stone","Paper","Scissor"]
    let val = Math.floor(Math.random()*imgvalues.length)
    status.innerHTML = `<div>
    <img src=${imgvalues[val]} height="150px" alt="scissor">
    <p>${name[val]}</p>
    </div>`
    
    return name[val]
}