var game = {
    wins: 0,
    losses: 0,
    numbersPicked: false,
    picturemaker: ['assets/images/blue_crystal.jpg', '../images/green_crystal.jpg', '../images/pink_crystal.jpg','../images/purple_crystal.jpg' ],
    crysNumTracker: [],
    winNumTracker: [],
    gameStart: function () {
        if (this.numbersPicked === false) {
            this.winNumTracker.push(Math.floor(Math.random()*(121-19)+19));
            console.log("this is the winning random number: " + this.winNumTracker);
            $(".randomNumber").text(this.winNumTracker);
            for(i=0;i<this.picturemaker.length;i++){
                $('#box').append(
                    $('<img>')
                        .attr('src', 'picturemaker[i]')
                        .addClass("crystal")
                );
            }
            $('.crystal').on('click', function () {
                // this.winNumTracker.push(this.randWinNum);
                // if($('#crystal-1').)
                console.log("this is the win num: " + this.randWinNum);

            })
        }
    }
}
console.log(game.picturemaker);
game.gameStart();
