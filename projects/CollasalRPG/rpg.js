var readlineSync = require('readline-sync');
var gameOver = false;
var currentEnemy;
var player = {
    name: "",
    health: 7,

}

function enemyAttack() {
    var chance = Math.floor(Math.random() * 3);
    switch (chance) {
        case 0:
            currentEnemy = new EnemyGenerator(enemy1[0], enemy1[1]);
            break;
        case 1:
            currentEnemy = new EnemyGenerator(enemy2[0], enemy2[1]);
            break;
        case 2:
            currentEnemy = new EnemyGenerator(enemy3[0], enemy3[1]);
            break;
    }
    return currentEnemy;
}

function walk() {
    enemyAttack();
    var chance = Math.floor(Math.random() * 4);
    if (chance === 0) {
        enemyAttack();
        console.log("Enemy " + currentEnemy.name + " apeared ");
        battleMode();
    }
}

function battleMode() {
    var userAttackOptions = ["Attack", "Run"];
    while (player.health >= 0 && currentEnemy.health >= 0) {
        var index = readlineSync.keyInSelect(userAttackOptions, "Press 1 to attack, 2 to run");
        if (index === 0) {
            playerAttack();
        }
    }
}

function playerAttack() {
    var playerAttackPower = Math.floor(Math.random() * 3);
    currentEnemy.health -= playerAttackPower;
    console.log(player.name + " hit " + currentEnemy.name + " for " + playerAttackPower);
    var enemyAttackPower = currentEnemy.attack();
    player.health -= enemyAttackPower;
    console.log(player.name + " was hit by " + currentEnemy.name + " for " + enemyAttackPower);
}


function EnemyGenerator(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = function () {
        var attackPower = Math.floor(Math.random() * 2);
        return attackPower;
    }

}

function playerDefeatedEnemy(){
    var giveLife = Math.floor(Math.random() * 3 + 1);
    player.health += giveLife;
    console.log(player.name + " gained " + giveLife + " Quzrat");

}
var enemy1 = ["Lahoo", 3];
var enemy2 = ["Manjo", 4];
var enemy3 = ["Zacha", 2];

player.name = readlineSync.question('May I have your name, Please? ');
console.log('Hi ' + player.name + '!');
while (!gameOver) {
    var userChoice = ["walk"];
    var index = readlineSync.keyInSelect(userChoice, "Press 1 to walk");

    if (index === 0) {
        walk();
        if (player.health > 0 && currentEnemy.health <= 0){
            console.log("Hey Congrats you won!");
        }
    }
    if (index === -1) {
        console.log("You can't cancel; Sorry");
    }

}
