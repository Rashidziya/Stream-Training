/**
 *  if we convert the ts to js it will transpile the code by default in vanilla javascript
 * 
 *  but there in js in vanilla there is no concept of class
 *  so the class in ts will get transpiled in js (closure fucntion)
 * 
 *  to transpile the ts in js with class (availabel in es6) onward version
 * to do so we have to transpile like this -> tsc Classdemo.ts -t es6 --watch
 
 * 
 */

type Humanobj ={
    fname : string,
    lname: string,
}

class Human {
   private fname : string;
   private lname : string;
   private _age : number;
   private loc : number 

   constructor (f_name,l_name,age,loc){
        this.fname = f_name;
        this.lname = l_name;
        this._age = age;
        this.loc = loc;
   }
}