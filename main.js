var canvas = new fabric.Canvas('myCanvas')
    
imageHeight = 30
imageWidth = 30

playerX = 10
playerY = 10

playerObject = ""
imageObject = ""

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top:playerX,
            left:playerY
        });
        canvas.add(playerObject)
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        imageObject = Img
        imageObject.scaleToWidth(imageWidth)
        imageObject.scaleToHeight(imageHeight)
        imageObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(imageObject)
    })
}
window.addEventListener("keydown", myKeyDown)
function myKeyDown(e){
    var keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '88'){
        console.log("Width and Height increased by 10.")
        imageHeight +=10;
        imageWidth +=10;
        document.getElementById("currentHeight").innerHTML = imageHeight
        document.getElementById("currentWidth").innerHTML = imageWidth
       
    }
    if(e.shiftKey == true && keypressed == '77'){
        console.log("Width and Height Decreased by 10")
        imageHeight -=10;
        imageWidth -=10;
    document.getElementById("currentHeight").innerHTML = imageHeight
    document.getElementById("currentWidth").innerHTML = imageWidth

    }

    if(keypressed == '38'){
        up();
        console.log("up")
    }
    if(keypressed == '40'){
        down();
        console.log("down")
    }
    if(keypressed == '37'){
    left();
    console.log("left")
    }
    if(keypressed == '39'){
        right();
        console.log("right")
    }
    
if(keypressed == '70'){
    console.log("f")
    new_image("ironman_face.png")
}
if(keypressed == '66')
{
    console.log("b")
    new_image("spiderman_body.png")
}

if(keypressed == '76'){

console.log("l")
new_image("spiderman_legs.png")
}
if(keypressed == '82'){
    
    console.log("r")
    new_image("thor_right_hand.png")
}
if(keypressed == '72'){
   
    console.log("h")
    new_image("captain_america_left_hand.png"); 
}

}
function up(){
    if(playerY >=0){
        playerY = playerY -= imageHeight;
        console.log("image height: " + imageHeight)
        console.log("when up arrow is pressed: X = " + playerX + " and Y = " + playerY)
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function down(){
    if(playerY <=500){
        playerY = playerY += imageHeight;
        console.log("new  image height: " + imageHeight)
        console.log("when up arrow is pressed: X = " + playerX + " and Y = " + playerY)
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function left(){
    if(playerX <=500){
        playerX = playerX += imageHeight;
        console.log("new  image height: " + imageHeight)
        console.log("when up arrow is pressed: X = " + playerX + " and Y = " + playerY)
        canvas.remove(playerObject)
        playerUpdate()
    }
}
    function right(){
        if(playerX >=0){
            playerX = playerX -= imageHeight;
            console.log("new  image height: " + imageHeight)
            console.log("when up arrow is pressed: X = " + playerX + " and Y = " + playerY)
            canvas.remove(playerObject)
            playerUpdate()
        } 
    }