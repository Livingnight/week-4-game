var game = {
    wins: 0,
    losses: 0,
    numbersPicked: false,
    pictureMaker: ['assets/images/blue_crystal.jpg', 'assets/images/green_crystal.jpg', 'assets/images/pink_crystal.jpg','assets/images/purple_crystal.jpg' ],
    crysNumTracker: 0,
    winNumTracker: [],
    gameStart: function () {
        if (this.numbersPicked === false) {
            this.winNumTracker.push(Math.floor(Math.random()*(121-19)+19));
            console.log("this is the winning random number: " + this.winNumTracker);
            $(".randomNumber").text(this.winNumTracker);
            $(".totalScore").text(this.crysNumTracker);
            for(var i=0;i<this.pictureMaker.length;i++){
                var randNum = Math.floor(Math.random()*(13-1)+1);
                $('#box').append(
                    $('<img>')
                        // .css("margin-right: 10px")
                        // var randNum = Math.floor(Math.random()*(13-1)+1)
                        .attr('src', this.pictureMaker[i])
                        // .attr('value', randNum)
                        .attr('data-value', randNum)
                        // console.log($('<img>').val());
                        .addClass("crystal")
                )
            }
        }


                // console.log("this is the value of each img element: "+ $("<img>").davalue);

            // console.log("this is the value of each img elemenet: "+ $("<img>").data());
            $('.crystal').on('click', function () {
                var scoreValue = ($(this).attr('data-value'));
                console.log(scoreValue);
                game.crysNumTracker += parseInt(scoreValue);
                // game.score = game.score + scoreValue;
                $('.totalScore').text(game.crysNumTracker);


            })

        if(this.crysNumTracker === parseInt("this.")){}

    }
}

console.log(game.pictureMaker);
game.gameStart();
