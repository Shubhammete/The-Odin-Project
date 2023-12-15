let icons = document.getElementsByClassName('icon')
let status = document.querySelector('.status')
let result
let value
let comp
for(let i = 0;i<icons.length;i++){
icons[i].addEventListener('click',(e)=>{
    
     value = e.target.alt
     comp = getComputerResponse(value)
    if(value === comp.name){
        result+=`Match Tied`
    }else {
        switch(comp.name){
            case 'Stone':
                if(value === 'Paper'){
                    result=`You Win`
                }else{
                    result=`Match Lose`
                }
                break;
            case 'Paper':
                if(value === 'Scissor'){
                    result=`You Win`
                }else{
                    result=`Match Lose`
                }
                break;
            case 'Scissor':
                if(value === 'Stone'){
                    result=`You Win`
                }else{
                    result=`Match Lose`
                }
                break;
        }
    }
    status.innerHTML = `<div>
    <h3>Computer's Choice</h3>
    <img src=${comp.img} height="150px" alt="scissor">
    <h3>${comp.name}</h3>
    </div>
    <h3>${result}</h3>
    <div>
    <h3>Your's Choice</h3>
    <img src=${e.target.src} height="150px" alt="scissor">
    <h3>${value}</h3>
    </div>`
    result=""
})
}

function getComputerResponse(value){
    
    let imgvalues = ["./images/granite.png","./images/paper-plane.png","./images/scissor.png"]
    let name = ["Stone","Paper","Scissor"]
    let val = Math.floor(Math.random()*imgvalues.length)
    
    
    return {name: name[val], img:imgvalues[val]}
}