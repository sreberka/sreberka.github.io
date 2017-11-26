//enemy car
function bang() {
    let audio = new Audio();
    audio.src = 'audio/bang.mp3';
    audio.autoplay = true;
}

let createEnemy = function createEnemy(x, y, speed, src) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.src = src;
    this.car = new Image();
    this.car.src = this.src;
    ctx.drawImage(this.car, this.x, this.y, 75, 130);
};

createEnemy.prototype.moveEnemy = function (timing) {
    let posX = [35, 185, 335, 485];
    let posY = [-160, -310, -460, -610, -760, -910, -1060];
    if(this.y < 600){
        this.y += this.speed*timing;
        ctx.clearRect(this.x, this.y - this.speed*timing, 75, 130);
        ctx.drawImage(this.car, this.x, this.y, 75, 130);
    }
    else{
        let carArray = ['images/red.png', 'images/white.png', 'images/gray.png',
                        'images/retro.png', 'images/dark-gray.png', 'images/ferrary.png',
                        'images/orange.png', 'images/police.png', 'images/red-2.png',
                        'images/green-1.png', 'images/green-2.png', 'images/blue.png'];
        let randCar = Math.floor(Math.random() * (carArray.length));
        let randX = Math.floor(Math.random() * (posX.length));
        let randY = Math.floor(Math.random() * (posY.length));
        this.car.src = carArray[randCar];
        this.x = posX[randX];
        this.y = posY[randY];
    }
    if(playerData.x <= (this.x + 75) &&
                this.x <= (playerData.x + 75) &&
                playerData.y <= (this.y + 130) &&
                this.y <= (playerData.y + 130)){
                    lives--;
                    ctx.clearRect(this.x, this.y, 75, 130);
                    let randY = Math.floor(Math.random() * (posY.length));
                    this.y = posY[randY];
                    livesTag.innerHTML = lives;
                    if(lives === 2){
                        bang();
                        spriteX = 80
                    }
                    else if(lives === 1){
                        bang();
                        spriteX = 160
                    }
                    else if(lives === 0){
                        bang();
                        let game = document.querySelector('.game-over');
                        game.classList.add('seen');
                        let coins = document.querySelector('.coins');
                        coins.classList.add('hidden');
                        let finalScore = document.getElementById('final-score');
                        finalScore.innerHTML = score;
                        if(score > record) {
                            record = score;
                            recordTag.innerHTML = record;
                        }
                        let recordString = JSON.stringify(record);
                        localStorage.clear();
                        localStorage.setItem("recordScore", recordString);
                        let finalRecord = document.getElementById('final-record');
                        finalRecord.innerHTML = record;
                    }
            }

    if(red.x <= (white.x + 75) &&
        white.x <= (red.x + 75) &&
        red.y <= (white.y + 130) &&
        white.y <= (red.y + 130) ||
        red.x <= (gray.x + 75) &&
        gray.x <= (red.x + 75) &&
        red.y <= (gray.y + 130) &&
        gray.y <= (red.y + 130) ||
        red.x <= (retro.x + 75) &&
        retro.x <= (red.x + 75) &&
        red.y <= (retro.y + 130) &&
        retro.y <= (red.y + 130) ||
        red.x <= (orange.x + 75) &&
        orange.x <= (red.x + 75) &&
        red.y <= (orange.y + 130) &&
        orange.y <= (red.y + 130)){
        ctx.clearRect(red.x, red.y, 75, 130);
        red.y -= 310;
    }

    if(white.x <= (red.x + 75) &&
        red.x <= (white.x + 75) &&
        white.y <= (red.y + 130) &&
        red.y <= (white.y + 130) ||
        white.x <= (gray.x + 75) &&
        gray.x <= (white.x + 75) &&
        white.y <= (gray.y + 130) &&
        gray.y <= (white.y + 130) ||
        white.x <= (retro.x + 75) &&
        retro.x <= (white.x + 75) &&
        white.y <= (retro.y + 130) &&
        retro.y <= (white.y + 130) ||
        white.x <= (orange.x + 75) &&
        orange.x <= (white.x + 75) &&
        white.y <= (orange.y + 130) &&
        orange.y <= (white.y + 130)){
        ctx.clearRect(white.x, white.y, 75, 130);
        white.y -= 310;
    }

    if(gray.x <= (white.x + 75) &&
        white.x <= (gray.x + 75) &&
        gray.y <= (white.y + 130) &&
        white.y <= (gray.y + 130) ||
        gray.x <= (red.x + 75) &&
        red.x <= (gray.x + 75) &&
        gray.y <= (red.y + 130) &&
        red.y <= (gray.y + 130) ||
        gray.x <= (retro.x + 75) &&
        retro.x <= (gray.x + 75) &&
        gray.y <= (retro.y + 130) &&
        retro.y <= (gray.y + 130) ||
        gray.x <= (orange.x + 75) &&
        orange.x <= (gray.x + 75) &&
        gray.y <= (orange.y + 130) &&
        orange.y <= (gray.y + 130)){
        ctx.clearRect(gray.x, gray.y, 75, 130);
        gray.y -= 310;
    }

    if(retro.x <= (white.x + 75) &&
        white.x <= (retro.x + 75) &&
        retro.y <= (white.y + 130) &&
        white.y <= (retro.y + 130) ||
        retro.x <= (gray.x + 75) &&
        gray.x <= (retro.x + 75) &&
        retro.y <= (gray.y + 130) &&
        gray.y <= (retro.y + 130) ||
        retro.x <= (red.x + 75) &&
        red.x <= (retro.x + 75) &&
        retro.y <= (red.y + 130) &&
        red.y <= (retro.y + 130) ||
        retro.x <= (orange.x + 75) &&
        orange.x <= (retro.x + 75) &&
        retro.y <= (orange.y + 130) &&
        orange.y <= (retro.y + 130)){
        ctx.clearRect(retro.x, retro.y, 75, 130);
        retro.y -= 310;
    }

    if(orange.x <= (white.x + 75) &&
        white.x <= (orange.x + 75) &&
        orange.y <= (white.y + 130) &&
        white.y <= (orange.y + 130) ||
        orange.x <= (gray.x + 75) &&
        gray.x <= (orange.x + 75) &&
        orange.y <= (gray.y + 130) &&
        gray.y <= (orange.y + 130) ||
        orange.x <= (red.x + 75) &&
        red.x <= (orange.x + 75) &&
        orange.y <= (red.y + 130) &&
        red.y <= (orange.y + 130) ||
        retro.x <= (orange.x + 75) &&
        orange.x <= (retro.x + 75) &&
        retro.y <= (orange.y + 130) &&
        orange.y <= (retro.y + 130)){
        ctx.clearRect(orange.x, orange.y, 75, 130);
        orange.y -= 310;
    }

    if(red.y - white.y <= 130 && red.y - gray.y <= 130 && red.y - retro.y <= 130 && red.y - orange.y <= 130){
        red.y -= 610;
    }
};
