// screen of the calculator
const display=document.getElementById("display");

// putting all the button inside an array except = and AC
const list=document.querySelectorAll(".cal-btn");

// adding eventListener to all the button inside the array [buttons - 1,2,3,4,5,6,7,8,9,+,-,*,/]
list.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let value=display.innerHTML;
        let num=btn.innerHTML;

        // if the display value is 0
        if(value.length==1 && value=='0')
        {
            // only numbers from 1-9 can replace 0
            if(num!='+' && num!='-' && num!='/' && num!='*'){
                display.innerHTML=num;
            }else{ // if the value are +,-,/ and * then it can be added to end of the display except / to perfrom operation like 0+1,0-1 and 0*1
                if(num=='/'){
                    alert("Invalid");
                }else{
                    display.innerHTML=display.innerHTML+num;
                }
            }
        }
        else{
            // operators cannot be added again after an operator
            if(num=='+' || num=='-' || num=='/' || num=='*'){
                if(value[value.length-1]!='+' && value[value.length-1]!='-' && value[value.length-1]!='*' && value[value.length-1]!='/')
                {
                    display.innerHTML=display.innerHTML+num;
                }
            }else{ // 12/02 -> 12/2 by if case
                if(value[value.length-1]=='0' && (value[value.length-2]=='+' || value[value.length-2]=='-' || value[value.length-2]=='*' || value[value.length-2]=='/')){
                    display.innerHTML=value.substring(0,value.length-1)+num;
                }else{
                    // adds num after the end of the string
                    display.innerHTML=display.innerHTML+num;
                }
            }
        }
    })
})

// accessing "AC" button
const clear=document.getElementById("clear");
// adding eventListener to "AC" button 
clear.addEventListener("click",()=>{
    // when clicked everthing is cleared on the display and puts '0' on it
    display.innerHTML='0';
})

// accessing '=' button
const operation=document.getElementById("operation");
// adding eventListener to '=' button
operation.addEventListener("click",()=>{
    // when clicked get the string from the display
    let str=display.innerHTML;

    // separate operands and operators
    let res=[];
    let num=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='+' || str[i]=='*' || str[i]=='/' || str[i]=='-'){
            res.push(num);
            res.push(str[i]);
            num=0;
        }else{
            num=num*10+parseInt(str[i]);
        }
    }
    res.push(num);
    console.log(res);

    // first apply multiplication and division from left to right
    let i=0;
    while(i<res.length){
        if(res[i]=='*'){
            // using splice to replace (operand opertor operand) with result in the array
            res.splice(i-1,3,res[i-1]*res[i+1]);
        }else if(res[i]=='/'){
            res.splice(i-1,3,res[i-1]/res[i+1]);
        }
        else{
            // moving forward
            i++;
        }
    }
    console.log(res);

    // then apply addition and subtraction from left to right
    i=0;
    while(i<res.length)
        {
            if(res[i]=='+'){
                res.splice(i-1,3,res[i-1]+res[i+1]);
            }
            else if(res[i]=='-'){
                res.splice(i-1,3,res[i-1]-res[i+1]);
            }
            else{
                i++;
            }
        }
    console.log(res);

    // then place result on the display 
    display.innerHTML=res[0]
})



