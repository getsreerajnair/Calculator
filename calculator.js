let currentTotal= 0;

let buffer ="0";

let previousOperator;

let screen = document.querySelector('.cal-console');

 

function buttonClick(value){

    if(isNaN(parseInt(value)))

    {

        handleSymbol(value);

    }

    else{

        handleNumber(value);

    }

    rerender();

 

}

 

function handleNumber(value)

{

    if (buffer === "0")

    {

        buffer=value;

    }

    else{

        buffer +=value;

    }

    rerender();

}

 

function handleSymbol(value){

switch(value){

     case 'C':

     buffer="0";

     currentTotal=0;

     previousOperator=null;

    break;

    

    case '←':

    if(buffer.length===1){

        buffer="0";

    }

    else{

        buffer=buffer.substring(0,buffer.length-1);

    }

    break;

    

    case '=':

 

    if(previousOperator===null){

        return;

    }

    else{

        doOperation(parseInt(buffer));

        previousOperator=null;

        buffer = "" + currentTotal;

        
 

    }

    break;

    

    default:

    handleMath(value);

    break;

}

 

}

 

function doOperation(intBuffer){


    if(previousOperator==="+"){

        currentTotal += intBuffer;

    }

    else if(previousOperator==="-"){

        currentTotal -= intBuffer;

    }

    else if(previousOperator==="x"){

        currentTotal *= intBuffer;

    }

    else {

        newFunction(intBuffer);

        

    }

 

}

 

function newFunction(intBuffer) {

    currentTotal /= intBuffer;

}

 

function handleMath(value){

    const intBuffer= parseInt(buffer)

    if(currentTotal === 0 )

    {

        currentTotal=intBuffer;

        console.log(currentTotal);

    }

    else{

        doOperation(intBuffer);

        console.log(currentTotal);

 

    }

 

    previousOperator=value;

 

    buffer="0";

}




function rerender(){

    screen.innerText=buffer;

}




document.querySelector('.cal-btnwrp').addEventListener('click' , function(){

    

    buttonClick(event.target.innerText);

}

 

)
function callAjax(){
for(let i=0;i<10;i++)
{
const API_URL ="https://dog.ceo/api/breeds/image/random";

const promising = fetch(API_URL);
const doggos = document.querySelector('.dog-img');

promising.then(function(response){
    const processingPromise= response.json();
    console.log(processingPromise);
    return processingPromise;
    
})


.then(function(processedResponse){
    console.log(processedResponse);
    const img= document.createElement("img");
    img.src= processedResponse.message;
    img.alt ="DOG IMAGE";
    doggos.appendChild(img);
})
}
}

document.querySelector('.add-img').addEventListener('click',callAjax);



