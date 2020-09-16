var canvas, backgroundImage;
var car1,car2,car3,car4,cars;
var imgc1,imgc2,imgc3,imgc4;
var track;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function preload(){
  imgc1=loadImage("images/car1.png");
  imgc2=loadImage("images/car2.png");
  imgc3=loadImage("images/car3.png");
  imgc4=loadImage("images/car4.png");
  track=loadImage("images/track.jpg");

}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight); 
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
