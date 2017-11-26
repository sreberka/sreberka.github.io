//enemy car
function money() {
    let audio = new Audio();
    audio.src = 'audio/coin.mp3';
    audio.autoplay = true;
}

let mX = 0;
let mY = 0;
let scoreCount = 0;

let createCoin = function createEnemy(x, y, speed, src) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.src = src;
    this.coin = new Image();
    this.coin.src = this.src;
    ctx.drawImage(this.coin, mX, mY, 44.6, 46, this.x, this.y, 44.6, 46);
};

createCoin.prototype.moveCoin = function (timing) {
        let posX = [125, 275, 425];
        let posY = [-92, -138, -184, -230, -322, -414, -506];
        let coinsArr = ['images/gold.png', 'images/silver.png', 'images/cooper.png'];
        if(this.y < 600){
        this.y += this.speed*timing;
        ctx.clearRect(this.x, this.y - this.speed*timing, 44.6, 46);
        ctx.drawImage(this.coin, mX, mY, 44.6, 46, this.x, this.y, 44.6, 46);
        }
        else{
            let randCoin = Math.floor(Math.random() * (coinsArr.length));
            let randX = Math.floor(Math.random() * (posX.length));
            let randY = Math.floor(Math.random() * (posY.length));
            this.coin.src = coinsArr[randCoin];
            this.y = posY[randY];
            this.x = posX[randX];
        }

    if(playerData.x <= (this.x + 44.6) && this.x <= (playerData.x + 75) && playerData.y <= (this.y + 46) && this.y <= (playerData.y + 130)){
        money();
        if(this.coin.src.match(/images\/gold.png/) !== null){
            scoreCount = 30;
        }
        else if(this.coin.src.match(/images\/silver.png/) !== null){
            scoreCount = 20;
        }
        else if(this.coin.src.match(/images\/cooper.png/) !== null){
            scoreCount = 10;
        }
        score += scoreCount;
        ctx.clearRect(this.x, this.y, 44.6, 46);
        let randCoin = Math.floor(Math.random() * (coinsArr.length));
        let randX = Math.floor(Math.random() * (posX.length));
        let randY = Math.floor(Math.random() * (posY.length));
        this.coin.src = coinsArr[randCoin];
        this.y = posY[randY];
        this.x = posX[randX];
        scoreTag.innerHTML = score;
        if(score > 500 && score < 1000){
            red.speed = white.speed = gray.speed = retro.speed = orange.speed = 350;
            let road = document.getElementById('example');
            road.classList.remove('slow');
            road.classList.add('fast');
        }
        else if(score > 1000){
            red.speed = white.speed = gray.speed = retro.speed = orange.speed = 500;
            let road = document.getElementById('example');
            road.classList.remove('fast');
            road.classList.add('very-fast');
        }
    }


    if(gold.x <= (silver.x + 46) &&
        silver.x <= (gold.x + 46) &&
        gold.y <= (white.y + 46) &&
        silver.y <= (gold.y + 46) ||
        gold.x <= (cooper.x + 46) &&
        cooper.x <= (gold.x + 46) &&
        gold.y <= (cooper.y + 46) &&
        cooper.y <= (gold.y + 46) ||
        gold.x <= (goldOneMore.x + 46) &&
        goldOneMore.x <= (gold.x + 46) &&
        gold.y <= (goldOneMore.y + 46) &&
        goldOneMore.y <= (gold.y + 46) ||
        gold.x <= (silverOneMore.x + 46) &&
        silverOneMore.x <= (gold.x + 46) &&
        gold.y <= (silverOneMore.y + 46) &&
        silverOneMore.y <= (gold.y + 46) ||
        gold.x <= (cooperOneMore.x + 46) &&
        cooperOneMore.x <= (gold.x + 46) &&
        gold.y <= (cooperOneMore.y + 46) &&
        cooperOneMore.y <= (gold.y + 46)){
        ctx.clearRect(gold.x, gold.y, 44.6, 46);
        gold.y -= 138;
    }

    if(silver.x <= (gold.x + 44.6) &&
        gold.x <= (silver.x + 44.6) &&
        silver.y <= (gold.y + 46) &&
        gold.y <= (silver.y + 46) ||
        silver.x <= (cooper.x + 44.6) &&
        cooper.x <= (silver.x + 44.6) &&
        silver.y <= (cooper.y + 46) &&
        cooper.y <= (silver.y + 46) ||
        silver.x <= (goldOneMore.x + 44.6) &&
        goldOneMore.x <= (silver.x + 44.6) &&
        silver.y <= (goldOneMore.y + 46) &&
        goldOneMore.y <= (silver.y + 46) ||
        silver.x <= (silverOneMore.x + 44.6) &&
        silverOneMore.x <= (silver.x + 44.6) &&
        silver.y <= (silverOneMore.y + 46) &&
        silverOneMore.y <= (silver.y + 46) ||
        silver.x <= (cooperOneMore.x + 44.6) &&
        cooperOneMore.x <= (silver.x + 44.6) &&
        silver.y <= (cooperOneMore.y + 46) &&
        cooperOneMore.y <= (silver.y + 46)){
        ctx.clearRect(silver.x, silver.y, 44.6, 46);
        silver.y -= 138;
    }

    if(cooper.x <= (silver.x + 44.6) &&
        silver.x <= (cooper.x + 44.6) &&
        cooper.y <= (silver.y + 46) &&
        silver.y <= (cooper.y + 46) ||
        cooper.x <= (gold.x + 44.6) &&
        gold.x <= (cooper.x + 44.6) &&
        cooper.y <= (gold.y + 46) &&
        gold.y <= (cooper.y + 46) ||
        cooper.x <= (goldOneMore.x + 44.6) &&
        goldOneMore.x <= (cooper.x + 44.6) &&
        cooper.y <= (goldOneMore.y + 46) &&
        goldOneMore.y <= (cooper.y + 46) ||
        cooper.x <= (silverOneMore.x + 44.6) &&
        silverOneMore.x <= (cooper.x + 44.6) &&
        cooper.y <= (silverOneMore.y + 46) &&
        silverOneMore.y <= (cooper.y + 46) ||
        cooper.x <= (cooperOneMore.x + 44.6) &&
        cooperOneMore.x <= (cooper.x + 44.6) &&
        cooper.y <= (cooperOneMore.y + 46) &&
        cooperOneMore.y <= (cooper.y + 46)){
        ctx.clearRect(cooper.x, cooper.y, 44.6, 46);
        cooper.y -= 138;
    }

    if(goldOneMore.x <= (silver.x + 44.6) &&
        silver.x <= (goldOneMore.x + 44.6) &&
        goldOneMore.y <= (silver.y + 46) &&
        silver.y <= (goldOneMore.y + 46) ||
        goldOneMore.x <= (cooper.x + 44.6) &&
        cooper.x <= (goldOneMore.x + 44.6) &&
        goldOneMore.y <= (cooper.y + 46) &&
        cooper.y <= (goldOneMore.y + 46) ||
        goldOneMore.x <= (gold.x + 44.6) &&
        gold.x <= (goldOneMore.x + 44.6) &&
        goldOneMore.y <= (gold.y + 46) &&
        gold.y <= (goldOneMore.y + 46) ||
        goldOneMore.x <= (silverOneMore.x + 44.6) &&
        silverOneMore.x <= (goldOneMore.x + 44.6) &&
        goldOneMore.y <= (silverOneMore.y + 46) &&
        silverOneMore.y <= (goldOneMore.y + 46) ||
        goldOneMore.x <= (cooperOneMore.x + 44.6) &&
        cooperOneMore.x <= (goldOneMore.x + 44.6) &&
        goldOneMore.y <= (cooperOneMore.y + 46) &&
        cooperOneMore.y <= (goldOneMore.y + 46)){
        ctx.clearRect(goldOneMore.x, goldOneMore.y, 44.6, 46);
        goldOneMore.y -= 138;
    }

    if(silverOneMore.x <= (silver.x + 44.6) &&
        silver.x <= (silverOneMore.x + 44.6) &&
        silverOneMore.y <= (silver.y + 46) &&
        silver.y <= (silverOneMore.y + 46) ||
        silverOneMore.x <= (cooper.x + 44.6) &&
        cooper.x <= (silverOneMore.x + 44.6) &&
        silverOneMore.y <= (cooper.y + 46) &&
        cooper.y <= (silverOneMore.y + 46) ||
        silverOneMore.x <= (gold.x + 44.6) &&
        gold.x <= (silverOneMore.x + 44.6) &&
        silverOneMore.y <= (gold.y + 46) &&
        gold.y <= (silverOneMore.y + 46) ||
        silverOneMore.x <= (goldOneMore.x + 44.6) &&
        goldOneMore.x <= (silverOneMore.x + 44.6) &&
        silverOneMore.y <= (goldOneMore.y + 46) &&
        goldOneMore.y <= (silverOneMore.y + 46) ||
        silverOneMore.x <= (cooperOneMore.x + 46) &&
        cooperOneMore.x <= (silverOneMore.x + 44.6) &&
        silverOneMore.y <= (cooperOneMore.y + 46) &&
        cooperOneMore.y <= (silverOneMore.y + 46)){
        ctx.clearRect(silverOneMore.x, silverOneMore.y, 44.6, 46);
        silverOneMore.y -= 138;
    }

    if(cooperOneMore.x <= (silver.x + 44.6) &&
        silver.x <= (cooperOneMore.x + 44.6) &&
        cooperOneMore.y <= (silver.y + 46) &&
        silver.y <= (cooperOneMore.y + 46) ||
        cooperOneMore.x <= (cooper.x + 44.6) &&
        cooper.x <= (cooperOneMore.x + 44.6) &&
        cooperOneMore.y <= (cooper.y + 46) &&
        cooper.y <= (cooperOneMore.y + 46) ||
        cooperOneMore.x <= (gold.x + 44.6) &&
        gold.x <= (cooperOneMore.x + 44.6) &&
        cooperOneMore.y <= (gold.y + 46) &&
        gold.y <= (cooperOneMore.y + 46) ||
        cooperOneMore.x <= (goldOneMore.x + 44.6) &&
        goldOneMore.x <= (cooperOneMore.x + 44.6) &&
        cooperOneMore.y <= (goldOneMore.y + 46) &&
        goldOneMore.y <= (cooperOneMore.y + 46) ||
        cooperOneMore.x <= (silverOneMore.x + 44.6) &&
        silverOneMore.x <= (cooperOneMore.x + 44.6) &&
        cooperOneMore.y <= (silverOneMore.y + 46) &&
        silverOneMore.y <= (cooperOneMore.y + 46)){
        ctx.clearRect(cooperOneMore.x, cooperOneMore.y, 44.6, 46);
        cooperOneMore.y -= 138;
    }

};
