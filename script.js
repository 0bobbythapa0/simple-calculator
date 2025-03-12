const display=document.getElementById("display");

const list=document.querySelectorAll(".cal-btn");
list.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.innerHTML=='0' || btn.innerHTML=='/' || btn.innerHTML=='*' || btn.innerHTML=='-' || btn.innerHTML=='+'){
            let value=display.innerHTML;
            if(value!='0' && value.at(value.length-1)!='/' && value.at(value.length-1)!='*' && value.at(value.length-1)!='-' && value.at(value.length-1)!='+'){
                display.innerHTML=display.innerHTML+btn.innerHTML;
            }
        }else{
            if(display.innerHTML!='0'){
                display.innerHTML=display.innerHTML+btn.innerHTML;
            }else{
                display.innerHTML=btn.innerHTML;
            }
        }
    })
})

const clear=document.getElementById("clear");
clear.addEventListener("click",()=>{
    display.innerHTML='0';
})

const operation=document.getElementById("operation");
operation.addEventListener("click",()=>{
    console.log(display.innerHTML);
})



