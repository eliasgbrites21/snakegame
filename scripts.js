let y=1;
let x=1;
let ancho=10;
let alto=10;
//Una función constructora (setup)
//Se ejecuta una sola vez
//Cuando se ejecuta script.js
function setup() {
    createCanvas(800,800);

  }
  // draw se ejecuta por siempre
 function draw() {
    background(230,100,0);
    rect(200,200,ancho,alto);
    ancho=ancho<150 ? ancho+1:20;
    alto=alto<120 ? alto+1:20;
    
  } 
  function draw() {
    background(230,100,0);
    rect(x,y,ancho,alto);
    ancho=ancho<170 ? ancho+1:10;
    alto=alto<200 ? alto+1:10;
    x=x<700? x+1:50;
    y=y<800? y+1:30;
  } 