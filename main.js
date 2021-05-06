var canvas = new fabric.Canvas("canvas_is_mine");
Block_image_width = 30;
Block_image_heigh = 30;
Player_x = 10;
Player_y = 10;

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object= Img;
        player_object=scaleToWidth(150);
        player_object=scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });

        canvas.add(player_object);
    });
}

function new_image(get_image){
   fabric.Image.fromURL(get_image,function(Img){
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,left:player_x   
    });
});
}

window.addEventListener("keydown",My_Keydown);

function My_Keydown(e){
    KeyPressed = e.keyCode;
    console.log("KeyPressed");

    if(e.shiftKey == true && KeyPressed == '80'){
     console.log("p and shift pressed together");
     Block_image_width = Block_image_width + 10;
     Block_image_heigh = Block_image_heigh + 10;
    document.getElementById("current_height").innerHTML = Block_image_heigh;
    document.getElementById("current_width").innerHTML = Block_image_width ;}

    if(e.shiftKey == true && KeyPressed == '77'){
        console.log("p and shift pressed together");
        Block_image_width = Block_image_width - 10;
        Block_image_heigh = Block_image_heigh - 10;
       document.getElementById("current_height").innerHTML = Block_image_heigh;
       document.getElementById("curren_width").innerHTML = Block_image_width ;
    }}

    if(KeyPressed == '70'){
        new_image("ironman_face (1).png");
        console.log("f");
    }

    if(KeyPressed == '66'){
        new_image("spiderman_body (1).png");
        console.log("b");
    }

    if(KeyPressed == '76'){
        new_image("hulk_legs (1).png");
        console.log("l");
    }

    if(KeyPressed == '82'){
        new_image("thor_right_hand (1).png");
        console.log("r");
    }

    if(KeyPressed == '72'){
        new_image("captain_america_left_hand (1).png");
        console.log("h");
    }