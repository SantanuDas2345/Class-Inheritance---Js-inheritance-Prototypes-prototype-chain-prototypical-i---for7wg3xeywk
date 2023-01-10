// import using require

// declare class


// export class using module.exports
var Shape = require('./shape'); 
  
 // declare class 
 class Circle extends Shape{ 
     constructor(name){ 
         super(name); 
  
     } 
  
     calculateArea(radius){ 
         return Math.PI * Math.pow(radius,2); 
     } 
      
 } 
  
 module.exports=Circle; 
