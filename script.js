console.log("connected")

const input= document.querySelector('#input-number')
const checkButton=document.querySelector('.button-submit')
const result=document.querySelector('.result');
const message=document.querySelector('.show-msg');
const btnYes=document.querySelector('.yes');
const btnNo=document.querySelector('.no');
const totalMsg=document.querySelector('.total');

var total=0;

checkButton.addEventListener('click',async (e)=>{
    e.preventDefault();
    const randomNumber=Math.floor(Math.random()*6+1);
    await check(randomNumber);
    input.value="";
})

async function check(randomNumber){
    const val=(input.value) ;
    const val_int=parseInt(val);
    //console.log(randomNumber+"  "+ val);
    
    let content=``;
    if(isNaN(val) || val===''){
        console.log("invalid input");
        content= `<h1>Invalid input</h1>`;
    }else if(val_int<1 || val_int>6){
        console.log("Out of Range");
        content= `<h1>Out of Range</h1>`;
    }else{
        if(randomNumber===val_int){
            content= `<h1>Yes, You got 5 points</h1>`;
            total+=5;
        }else if(Math.abs(randomNumber-val_int)==1){
            content= `<h1>Difference is 1, Two points</h1>`;
            total+=2;
        }
        else{
            content= `<h1>No, The numbers are not equal</h1>`;
            
        }
    }
    totalMsg.innerHTML=`<h2>TOTAL ${total}</h2>`
    result.style.display="block";
    result.innerHTML=content;
    show_message();
}

function show_message(){
    message.style.display="block";
}

btnYes.addEventListener("click", ()=>{
    total=0;
    totalMsg.innerHTML=`<h2>TOTAL ${total}</h2>`
    message.style.display="none";
    result.style.display="none";
})

