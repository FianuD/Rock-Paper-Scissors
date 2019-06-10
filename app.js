const game = () => {
    // player score
    let pScore = 0;
    // computer score
    let cScore = 0;

    const startGame = () => {
        // play button
        const playBtn = document.querySelector('.intro button');
        //intro screen
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // to call all the inner functions
    startGame();
    updateScore();
};

//start game function
game();