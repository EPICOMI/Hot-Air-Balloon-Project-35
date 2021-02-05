var balloon


function preload(){
  loadImage = image('background.png')
}



function setup() {
  createCanvas(500,500);
  var balloon = createSprite(400, 200, 50, 50);
  database = firebase.database();
  console.log(database);
}

function draw() {
  backgroundImg('background.png');  
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10
  }

  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10
  }

  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10
  }

  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10
  }
  
  drawSprites();
}