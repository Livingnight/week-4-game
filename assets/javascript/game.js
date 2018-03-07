var game = {
    wins: 0,
    losses: 0,
    numbersPicked: false,
    pictureMaker: ['assets/images/blue_crystal.jpg', 'assets/images/green_crystal.jpg', 'assets/images/pink_crystal.jpg','assets/images/purple_crystal.jpg' ],
    crysNum: 0,
    winNum: 0,
    gameStart: function () {
        if (this.numbersPicked === false) {
            // function reset(){
            this.winNum = Math.floor(Math.random()*(121-19)+19);

            game.numbersPicked = true;
            console.log("this is the winning random number: " + this.winNum);
            $(".randomNumber").text(this.winNum);
            $(".totalScore").text(this.crysNum);
            $(".wins").text("Wins: "+this.wins);
            $(".losses").text("Losses: "+this.losses);
            for(var i=0;i<this.pictureMaker.length;i++){
                var randNum = Math.floor(Math.random()*(13-1)+1);
                $('#box').append(
                    $('<img>')
                        .attr('src', this.pictureMaker[i])
                        .attr('data-value', randNum)
                        .addClass("crystal")
                )
            }
        }
            $('.crystal').on('click', function () {
                var scoreValue = ($(this).attr('data-value'));
                console.log(scoreValue);
                game.crysNum += parseInt(scoreValue);
                // game.score = game.score + scoreValue;
                $('.totalScore').text(game.crysNum);

                console.log("this is the crystal number total: " + game.crysNum);
                console.log("this is the winning number: "+game.winNum);
                if(game.crysNum > game.winNum){
                    game.losses++;
                    $(".losses").text(game.losses);
                    game.crysNum = 0;
                    game.winNum = 0;
                    game.numbersPicked = false;

                }else if(game.crysNum === parseInt(game.winNum)){
                    // console.log()
                    game.wins++;
                    $('.wins').text(game.wins);
                    game.numbersPicked = false;

                }

            });




    }
};

console.log(game.pictureMaker);
game.gameStart();
