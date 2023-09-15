//controller(i/o)+events+talk to service


import{noteOperations}from '../services/note-sevice.js';
window.addEventListener('load',init);
function init(){
showCounts();
bindEvents();
disableButton();
}
function bindEvents(){
  document.querySelector('#add').addEventListener('click',addNote);
  document.querySelector('#delete').addEventListener('click',deleteMarked);
  document.querySelector('#sort').addEventListener('click',);

}
function showCounts(){
  noteOperations.marktotal()>0?enableButton():disableButton();
  document.querySelector('#total').innerText=noteOperations.total();
  document.querySelector('#marktotal').innerText=noteOperations.marktotal();
  document.querySelector('#unmarktotal').innerText=noteOperations.unmarktotal();
}

function addNote(){
    //read id,title,desc,date of completion,importance,
    //DOM
 const fields=['id','title','desc','cdate','importance'];
 
 const noteObject={}; //object literal
  for(let field of fields){

    noteObject[field]=document.querySelector(`#${field}`).value.trim();
 }
 noteOperations.add(noteObject);
 printNote(noteObject);
 showCounts();
 
}
const disableButton=()=>{
  document.querySelector('#delete').disabled=true;
}
  const enableButton=()=>{
  document.querySelector('#delete').disabled=false;
  }
function printIcon(myClassName=`trash`,fn,id){
  const iTag= document.createElement(`i`);
  iTag.setAttribute('note-id',id);
  iTag.className=`fa-solid fa-${myClassName} me-2 hand`;
  iTag.addEventListener('click',fn);
  return iTag;
}
function toggleMark(){
//console.log('Toggle Mark....',this);
const icon=this;
const id=this.getAttribute('note-id');
noteOperations.toggleMark(id);
const tr=icon.parentNode.parentNode;
//tr.className=('table-danger');
tr.classList.toggle('table-danger');
showCounts();
}
function deleteMarked(){
noteOperations.remove();
printNotes(noteOperations.getNotes());
}
function edit(){
  console.log('Edit...');
}
function sort(){
  noteOperations.sort();
  printNotes(noteOperations.getNotes());
}
function printNotes(notes){
const tbody=document.querySelector('#notes');
tbody.innerHTML='';
notes.forEach(note=>printNote(note));
showCounts();
}
//const id=document.querySelector('#id').value;
//const title=document.querySelector('#title').value;
function printNote(noteObject){
  const tbody=document.querySelector('#notes');
  const row=tbody.insertRow();
  for(let key in noteObject){
    if(key=='isMarked'){
        continue;
    }
    const td=row.insertCell();
    td.innerText=noteObject[key];
  }
  const td=row.insertCell();
  td.appendChild(printIcon('trash',toggleMark,noteObject.id));
  td.appendChild(printIcon('user-pen',edit,noteObject.id));
}
