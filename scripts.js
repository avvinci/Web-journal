let curDate = new Date();
let curTime = curDate.toLocaleTimeString();
document.getElementById("date-time").innerHTML = curTime;
let sb = document.getElementById('save-button');
let nameElem = document.getElementById('name');
let msgElem = document.getElementById('message');
let listElem = document.getElementById('mylist');


sb.onclick = saveJournal ; 
// nameElem.onchange = 

function createList(val,msgval){
    let newelem = document.createElement('li'); 
    var text = document.createTextNode(val+ ': '+ msgval);
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