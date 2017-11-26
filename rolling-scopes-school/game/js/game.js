    let example = document.getElementById("example");
    let ctx = example.getContext('2d');

    let livesTag = document.getElementById('lives');
    let lives = 3;
    livesTag.innerHTML = lives;

    let scoreTag = document.getElementById('score');
    let score = 0;
    scoreTag.innerHTML = score;

    let recordTag = document.getElementById('record');
    let record = +localStorage.getItem("recordScore");
    recordTag.innerHTML = record;

    let gold = new createCoin(275, -92, 100, 'images/gold.png');
    let silver = new createCoin(125, -184, 100, 'images/silver.png');
    let cooper = new createCoin(425, -138, 100, 'images/cooper.png');
    let goldOneMore = new createCoin(275, -506, 100, 'images/gold.png');
    let silverOneMore = new createCoin(125, -322, 100, 'images/silver.png');
    let cooperOneMore = new createCoin(425, -414, 100, 'images/cooper.png');


    let white = new createEnemy(485, -310, 250, 'images/white.png');
    let red = new createEnemy(185, -160, 250, 'images/red.png');
    let gray = new createEnemy(35, -460, 250, 'images/gray.png');
    let retro = new createEnemy(335, -760, 250, 'images/retro.png');
    let orange = new createEnemy(185, -1060, 250, 'images/orange.png');

    let spriteX = 0;
    let oldX = 0;
    let oldY = 0;
       

    let then = Date.now();
//the main game loop
    let play = function play() {
        let now = Date.now();
        let delta = now - then;
        move(delta / 800);
        then = now;
        ctx.clearRect(oldX, oldY, 75, 130);
        ctx.drawImage(player, spriteX, 0, 80, 163, playerData.x, playerData.y, 75, 130);
        white.moveEnemy(delta / 1000);
        gray.moveEnemy(delta / 1000);
        red.moveEnemy(delta / 1000);
        retro.moveEnemy(delta / 1000);
        orange.moveEnemy(delta / 1000);
        gold.moveCoin(delta / 1000);
        silver.moveCoin(delta / 1000);
        cooper.moveCoin(delta / 1000);
        goldOneMore.moveCoin(delta / 1000);
        silverOneMore.moveCoin(delta / 1000);
        cooperOneMore.moveCoin(delta / 1000);
        if(mX <= 446){
            mX =  mX + 44.6;
        }
        else {
            mX = 0
        }
        if(lives !==0){
            requestAnimationFrame(play);
        }
    };








