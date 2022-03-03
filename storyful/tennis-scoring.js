/*
Tennis scoring - Zar

Write a program that simulates a simple tennis game.

• Scores from zero to three points are described as “love”, “fifteen”, “thirty”,
and “forty” respectively.
• If at least three points have been scored by each side and a player has one
more point than his opponent, the score of the game is “advantage” for
the player in the lead.
• If at least three points have been scored by each player, and the scores are
equal, the score is “deuce”.
• A game is won by the first player to have won at least four points in total
and at least two points more than the opponent.

Examples:
• Player A scored twice, Player B scored once: Thirty - Fifteen
• Player A scored 3 times, Player B didn’t score: Forty - Love
• Player A scored 3 times, Player B scored 3: Deuce
• Player A scored 5 times, Player B scored 4: Advantage Player A
*/

let score = [0, 0];

const getScoreInText = (score) => {
    switch (score) {
        case 0:
            return 'Love';
            break;
        case 1:
            return 'Fifteen'
            break;
        case 2:
            return 'Thirty'
            break;
        case 3:
            return 'Forty'
            break;
    }
}

const getScore = () => {
    let scoreText;
    const homePlayerScore = score[0];
    const awayPlayerScore = score[1];
    const diffScore = Math.abs(homePlayerScore - awayPlayerScore);
    
    if ( homePlayerScore >= 3 &&  awayPlayerScore >= 3 && diffScore === 0 ) {
        // This is for Deuce
        scoreText = 'Deuce';
    } else if ( homePlayerScore > 3 || awayPlayerScore > 3 ) {
        // Check Advantage
        const isHomePlayerUp = homePlayerScore > awayPlayerScore;
        scoreText = getGameDecision(diffScore, isHomePlayerUp);
    }

    return scoreText ? scoreText : `${getScoreInText(score[0])} - ${getScoreInText(score[1])}`;
}

const getGameDecision = (diffScore, isHomePlayerUp) => {
    let player = isHomePlayerUp ? 'Home Player' : 'Away Player';

    if (diffScore === 1) {
        return 'Advantage ' + player;
    } else if (diffScore >= 2) {
        return 'Game Over - ' + player + ' Advantage ';
    }
}


score = [2, 1]
console.log('Test 1 ' + getScore());

score = [3, 0]
console.log('Test 2 ' + getScore());

score = [3, 3]
console.log('Test ' + getScore());

score = [4, 3] // advantage Home situation
console.log('Test ' + getScore());

score = [3, 4] // advantage Away situation
console.log('Test ' + getScore());

score = [4, 2] // game situation
console.log('Test Game ' + getScore());

score = [4, 4] // deuce
console.log('Test ' + getScore());

score = [5, 3] // game + advantage Home situation
console.log('Test ' + getScore());
