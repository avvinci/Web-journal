let sb = document.getElementById('save-button');
let nameElem = document.getElementById('name');
let msgElem = document.getElementById('message');
let listElem = document.getElementById('mylist');
let selElem = document.getElementById('select'); 


sb.onclick = saveJournal ; 

function getJoke(){
    var request = new XMLHttpRequest();
    request.open('GET','https://api.icndb.com/jokes/random',true);
    let joke = "" ; 
    request.onload = function (){
        var data  = JSON.parse(this.response);
        // console.log(data.value.joke) ; 
        joke =  data.value.joke;  
        displayJoke(joke); 

    }
    request.send() ; 
}

flag  = 0 ; 
function displayJoke(joke){
    let jdiv = document.getElementById('joke-id') ; 
    jdiv.classList.add('joke-display');
    let newelem = document.createElement('label') ; 
    let title = '' ; 
    if(flag === 0  ) {
        title = 'Hey why sad ??<br> Read a joke 😃 <br><br>' ; 
        flag  = 1;
    }

    newelem.innerHTML  = title + joke + '<br><br> '; 
    jdiv.appendChild(newelem); 
}


function emotionHandler(){
    let textval = "" ;  
    if(selElem.value === 'happy'){
        textval += "😃     ";
    }
    else if(selElem.value === 'excited'){
        textval += "😎     ";
    }
    else if(selElem.value == 'bored'){
        textval += "🙄     ";
    }
    else  if(selElem.value == 'sad'){
        textval += "😞     ";
        getJoke() ; 
    }
    return textval ; 
}

function createList(val,msgval){
    let newelem = document.createElement('li');
    let textval = emotionHandler() ; 
    textval +=  val+ ': '+ msgval ;
    var text = document.createTextNode(textval);
    newelem.appendChild(text);
    listElem.appendChild(newelem) ; 
}

function clearText(){
    msgElem.value ="" ; 
    nameElem.value ="" ;
}

function saveJournal(){
    // if(nameElem.value === "" ) return ; 
    createList(nameElem.value ,msgElem.value) ; 
    clearText() ; 
    // console.log('saving') ; 
}

function getTime() {
    let curDate = new Date();
    let curTime = curDate.toLocaleTimeString();
    // let curDay = curDate.toLocaleDateString()
    document.getElementById("date-time").innerHTML =  curTime;
}

getTime();
window.setInterval(getTime, 1000);