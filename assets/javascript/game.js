var game = {
    wins: 0,
    losses: 0,
    numbersPicked: false,
    pictureMaker: ['assets/images/blue_crystal.jpg', 'assets/images/green_crystal.jpg', 'assets/images/pink_crystal.jpg','assets/images/purple_crystal.jpg' ],
    crysNumTracker: [],
    winNumTracker: [],
    gameStart: function () {
        if (this.numbersPicked === false) {
            this.winNumTracker.push(Math.floor(Math.random()*(121-19)+19));
            console.log("this is the winning random number: " + this.winNumTracker);
            $(".randomNumber").text(this.winNumTracker);
            for(var i=0;i<this.pictureMaker.length;i++){
                $('#box').append(
                    $('<img>')
                        // .css("margin-right: 10px")
                        .attr('src', this.pictureMaker[i])
                        .val("Math.floor(Math.random()*(121-19)+19)")
                        // console.log($('<img>').val());
                        .addClass("crystal")


                );
                console.log($('<img>').val());
            }
            $('.crystal').on('click', function () {
                // this.winNumTracker.push(this.randWinNum);
                // if($('#crystal-1').)
                // console.log("this is the win num: " + this.randWinNum);

            })
        }
    }
}
console.log(game.pictureMaker);
game.gameStart();
