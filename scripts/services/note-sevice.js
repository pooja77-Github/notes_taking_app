//crud
 import Note from '../models/note.js';
export const noteOperations={
    notes:[],
    add(noteObject){
      const note=new Note(noteObject);
      this.notes.push(note);
    },
    searchById(id){
       return this.notes.find(note=>note.id==id);
    },
    toggleMark(id){
        this.searchById(id).toggleMark();
      //const noteObject=  this.searchById(id);
      //noteObject.isMarked=!noteObject.isMarked;
    },
    total(){
        return this.notes.length;
    },
    marktotal(){
      
      return  this.notes.filter(note=>note.isMarked).length;
    },
    unmarktotal(){
     return this.total()-this.marktotal();
    },
getNotes(){
  return this.notes;
},
    
    remove(){
        this.notes=this.notes.filter(note=>!note.isMarked );
    },
    search(){

    },
    sort(){
      return this.notes.find(note=>note.id==id );
      
    },
    save(){

    },


 }
   

    
 
 