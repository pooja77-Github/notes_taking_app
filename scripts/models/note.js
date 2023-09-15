 export class Note{ //es6 import nd export modules.
    constructor(noteObject){
        for(let key in noteObject){
            this[key]=noteObject[key];
        }
        this.isMarked=false;
    }
    toggleMark(){
    this.isMarked=!this.isMarked;
    }
}
export default Note;