var game = {
    wins: 0,
    losses: 0,
    numbersPicked: false,
    randWinNum: Math.floor((Math.random() * 102) + 19),
    crys1: Math.floor((Math.random() * 12) + 1),
    crys2: Math.floor((Math.random() * 12) + 1),
    crys3: Math.floor((Math.random() * 12) + 1),
    crys4: Math.floor((Math.random() * 12) + 1),
    crysNumTracker: [],
    winNumTracker: [],
    gameStart: function () {
        if (game.numbersPicked === false) {
            $(".randomNumber").text(game.randWinNum);
            $('.crystal').on('click', function () {
                game.winNumTracker.push(game.randWinNum);

                console.log("this is the win num: " + game.randWinNum);

            })
        }
    }
}
game.gameStart();
console.log(game.randWinNum);
console.log(game.randCrysNum);
