let curDate = new Date();
let curTime = curDate.toLocaleTimeString();
document.getElementById("date-time").innerHTML = curTime;
let sb = document.getElementById('save-button');
let nameElem = document.getElementById('name');
let msgElem = document.getElementById('message');
let listElem = document.getElementById('mylist');
let selElem = document.getElementById('select'); 


sb.onclick = saveJournal ; 
// nameElem.onchange = 
function emotionHandler(){
    let textval = "" ;  
    if(selElem.value === 'happy'){
        textval += "😃     "
    }
    else if(selElem.value === 'excited'){
        textval += "😎     "
    }
    else if(selElem.value == 'bored'){
        textval += "🙄     "
    }
    else{
        textval += "😞     "        
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
    console.log(nameElem.value);
    if(nameElem.value === "" ) return ; 
    createList(nameElem.value ,msgElem.value) ; 
    clearText() ; 
    console.log('saving') ; 
}