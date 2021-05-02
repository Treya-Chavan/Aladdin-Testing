var aladdin, carpet, aladdinIMG, carpetIMG;
var edges;
var invisble_ground;

function preload(){
    aladdinIMG = loadImage("images/Aladdin.png")
    carpetIMG = loadImage("images/Carpet.png")
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    edges = createEdgeSprites()

    aladdin = createSprite(windowWidth/2-650, height-50)
    aladdin.addImage(aladdinIMG)
    aladdin.scale = 0.5

    carpet = createSprite(windowWidth/2-550, height-50)
    carpet.addImage(carpetIMG)
    carpet.scale = 0.6
    carpet.debug = true;
}

function draw(){
    background("black");

    invisble_ground = createSprite(width/2, height-30, width, 30)

    if(keyDown(UP_ARROW)){ 
        aladdin.velocityY = -10; 
        carpet.velocityY = -10;
    }
    if(keyDown(LEFT_ARROW)){ 
        aladdin.x -= 5; 
        carpet.x -= 5;
    }
    if(keyDown(RIGHT_ARROW)){ 
        aladdin.x += 5; 
        carpet.x += 5;
    }

    aladdin.collide(carpet)
    carpet.collide(edges)
    aladdin.collide(edges)

    drawSprites()
}