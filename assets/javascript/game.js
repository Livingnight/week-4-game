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
                var randNum = Math.floor(Math.random()*(13-1)+1);
                $('#box').append(
                    $('<img>')
                        // .css("margin-right: 10px")
                        // var randNum = Math.floor(Math.random()*(13-1)+1)
                        .attr('src', this.pictureMaker[i])
                        .attr('value', randNum)
                        // .val(this.pictureMaker, randNum)
                        // console.log($('<img>').val());
                        .addClass("crystal")


                );
                console.log("this is the value of each img element: "+ $("<img>").val());
            }
            console.log($("<img>").val())
            $('.crystal').on('click', function () {

            })
        }
    }
}
console.log(game.pictureMaker);
game.gameStart();
