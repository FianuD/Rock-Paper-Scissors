const game = () => {
    // player score
    let pScore = 0;
    // computer score
    let cScore = 0;

    //start game function
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

    // play game
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        // computer's options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
            // generate random number from 0, 1 and 2 for computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            // we call compare hands here
            compareHands(this.textContent, computerChoice);

            // update images to match pick
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };

    // who wins, compare hands
    const compareHands = (playerChoice, computerChoice) => {
        // update text
        const winner = document.querySelector('.winner');
        // checking for a tie game
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        // check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }
        // check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            }
        }
        // check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins';
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }
    }

    // to call all the inner functions
    startGame();
    playMatch();
};

//start game function
game();