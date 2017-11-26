//Player
let player = new Image();
player.src = 'images/player.png';
let playerData = {
    x: 340,
    y: 460,
    speed: 200
};


let keysDown = {};
window.addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);
window.addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

//move the car
let move = function move(modifire) {
    oldX = playerData.x;
    oldY = playerData.y;
    if (38 in keysDown && playerData.y > 0) { //up
        playerData.y -= playerData.speed*modifire;
    }
    if (40 in keysDown && (playerData.y + 130) < 600) { //down
        playerData.y += playerData.speed*modifire;
    }
    if (37 in keysDown && playerData.x > 0) { //left
        playerData.x -= playerData.speed*modifire;
    }
    if (39 in keysDown && (playerData.x + 75) < 600) { //right
        playerData.x += playerData.speed*modifire;
    }
};