// startgame
const initGame = () => {
    confirm("Welcome!, Shall we play Hand Cricket Game with Computer") ? getPlayerToss() : alert("Ok!, See you soon");
}

//getting input from user (head or tail)
const getPlayerToss = () => {
    let getToss = prompt("Toss Time, Please enter 'head' or 'tail'....");
    if (getToss || getToss === "") {
        let playerInputToss = getToss.trim().toLowerCase();
        if (playerInputToss == "head" || playerInputToss == "tail" || playerInputToss == "") {
            if (playerInputToss) {
                tossValue(playerInputToss);
            }
            else {
                nullInput();
                getPlayerToss();
            }
        }
        else {
            wrongInput();
            getPlayerToss();
        }

    }
    else {
        playerCancel();
        return;
    }
}

//generating random number (0,1)
const numGenrator1 = () => {
    let comGeneratedValue = Math.floor(Math.random() * 2);
    return comGeneratedValue;
}

//comparing user input and random number
const tossValue = (playerInputToss) => {
    let tossOutput = ["head", "tail"];
    let decisionToss = tossOutput[numGenrator1()];
    tossDescion(decisionToss, playerInputToss);

}

//toss declaration
const tossDescion = (decisionToss, playerInputToss) => {
    if (decisionToss === playerInputToss) {
        alert(`Toss : ${decisionToss}\nYou win the Toss!`);
        getPlayerChoice();
    }

    else {
        alert(`Toss : ${decisionToss}\nComputer win the Toss!`);
        computerChoice();
    }
}

//player click cancel button
const playerCancel = () => {
    alert("Changed your mind, will play later!");
}

//if player enters null input
const nullInput = () => {
    alert("Not Entered any Value!");
}

//if player enter wrong input
const wrongInput = () => {
    alert("Wrong Value Entered!");
}

//getting user input (bat or bowl)
const getPlayerChoice = () => {
    let getChoice = prompt("Choose 'bat' or 'bowl' ");
    if (getChoice || getChoice === "") {
        let playerInputChoice = getChoice.trim().toLowerCase();
        if (playerInputChoice == "bat" || playerInputChoice == "bowl" || playerInputChoice == "") {
            if (playerInputChoice) {
                alert(`Player has decided to ${playerInputChoice} First!`);
                firstInningPlayer(playerInputChoice);
            }
            else {
                nullInput();
                getPlayerChoice();
            }
        }
        else {
            wrongInput();
            getPlayerChoice();
        }

    }
    else {
        playerCancel();
    }
}

//if computer wins the toss, it's decision (bat or bowl)
const computerChoice = () => {
    let comChoice = ["bat", "bowl"];
    let decisionChoice = comChoice[numGenrator1()];
    alert(`Computer has decided to ${decisionChoice} First!`);
    firstInningComputer(decisionChoice);
}


//first innings by player
const firstInningPlayer = (playerInputChoice) => {
    if (playerInputChoice == "bat") {
        firstInningBatPlayer();
    }

    else {
        firstInningBowlPlayer();
    }
}

//first innings by Computer
const firstInningComputer = (decisionChoice) => {
    if (decisionChoice == "bat") {
        firstInningBowlPlayer();
    }

    else {
        firstInningBatPlayer();
    }
}

const firstInningBatPlayer = () => {
    let totalScore1 = 0;
    for (let count = 1; count < 7; count++) {
        let batScore = valueEvaluate();
        let bowlerScore = numGenrator2();
        if (batScore == bowlerScore) {
            alert(`Player Out!!!\nPlayer run : ${batScore}\nComputer run : ${bowlerScore}\nScore: ${totalScore1}\nBowled : ${count}`);
            nextInnings1(totalScore1);
            return;
        }

        else {
            totalScore1 += Number(batScore);
            alert(`Player run : ${batScore}\nComputer run : ${bowlerScore}\nScore : ${totalScore1}\nBowled : ${count}`);
        }
    }
    alert(`No more balls left, Score: ${totalScore1}`);
    nextInnings1(totalScore1);
    return;
}

const firstInningBowlPlayer = () => {
    let totalScore2 = 0;
    for (count = 1; count < 7; count++) {
        let batScore = numGenrator2();
        let bowlerScore = valueEvaluate();
        if (batScore == bowlerScore) {
            alert(`Computer Out!!!\nComputer run : ${batScore}\nPlayer run : ${bowlerScore}\nScore: ${totalScore2}\nBowled : ${count}`);
            nextInnings2(totalScore2);
            return;
        }

        else {
            totalScore2 += Number(batScore);
            alert(`Computer run : ${batScore}\nPlayer run : ${bowlerScore}\nScore : ${totalScore2}\nBowled : ${count}`);
        }
    }
    alert(`No more balls left, Score: ${totalScore2}`);
    nextInnings2(totalScore2);
    return;
}

const secondInningbowlplayer = (target1, totalScore1) => {
    let totalScore3 = 0;
    for (count = 1; count < 7; count++) {
        let batScore = numGenrator2();
        let bowlerScore = valueEvaluate();
        if (batScore == bowlerScore) {
            alert(`Computer Out!!!\nComputer run : ${batScore}\nPlayer run : ${bowlerScore}\nScore: ${totalScore3}\nBowled : ${count}`);
            endInnings1(totalScore3, totalScore1);
            return;
        }

        else {
            totalScore3 += Number(batScore);
            if (totalScore3 >= target1) {
                alert(`Computer run : ${batScore}\nPlayer run : ${bowlerScore}\nScore : ${totalScore3}\nTarget : ${target1}\nBowled : ${count}`);
                endInnings1(totalScore3, totalScore1);
                return;
            }
            alert(`Computer run : ${batScore}\nPlayer run : ${bowlerScore}\nScore : ${totalScore3}\nTarget : ${target1}\nBowled : ${count}`);
        }
    }
    alert(`No more balls left, Score: ${totalScore3}`);
    endInnings1(totalScore3, totalScore1);
    return;
}

const secondInningbatplayer = (target2, totalScore2) => {
    let totalScore4 = 0;
    for (count = 1; count < 7; count++) {
        let batScore = valueEvaluate();
        let bowlerScore = numGenrator2();
        if (batScore == bowlerScore) {
            alert(`Player Out!!!\nPlayer run : ${batScore}\nComputer run : ${bowlerScore}\nScore: ${totalScore4}\nBowled : ${count}`);
            endInnings2(totalScore4, totalScore2);
            return;
        }

        else {
            totalScore4 += Number(batScore);
            if (totalScore4 >= target2) {
                alert(`Player run : ${batScore}\nComputer run : ${bowlerScore}\nScore : ${totalScore4}\nTarget :  ${target2}\nBowled : ${count}`);
                endInnings2(totalScore4, totalScore2);
                return
            }
            alert(`Player run : ${batScore}\nComputer run : ${bowlerScore}\nScore : ${totalScore4}\nTarget :  ${target2}\nBowled : ${count}`);
        }
    }
    alert(`No more balls left, Score: ${totalScore4}`);
    endInnings2(totalScore4, totalScore2);
    return;
}


//Evaluting user input (1 to 6)
const valueEvaluate = () => {
    let inputvalue;
    do {
        inputvalue = prompt("Please enter a number between 1 to 6").trim();
        if (/^[1-6]$/.test(inputvalue)) {
            return inputvalue;
        }
        alert("Not a valid number. Please enter a number between 1 and 6.");
    } while (true);
};


//generating random number (1 to 6)
const numGenrator2 = () => {
    let comGeneratedValue2 = Math.floor(Math.random() * 6 + 1);
    console.log(comGeneratedValue2);
    return comGeneratedValue2;
}

const nextInnings1 = (totalScore1) => {
    if (totalScore1 === 0) {
        let target1 = totalScore1 + 1;
        alert(`Second Innings starts\nComputer Target : ${target1}\nPlayer have to defend!`)
        secondInningbowlplayer(target1, totalScore1);
    }

    else {
        let target1 = totalScore1 + 1;
        alert(`Second Innings starts\nComputer Target : ${target1}\nPlayer have to defend!`)
        secondInningbowlplayer(target1, totalScore1);
    }

}

const nextInnings2 = (totalScore2) => {
    if (totalScore2 === 0) {
        let target2 = totalScore2 + 1;
        alert(`Second Innings starts\nPlayer Target : ${target2}\nComputer have to defend!`)
        secondInningbatplayer(target2, totalScore2);
    }

    else {
        let target2 = totalScore2 + 1;
        alert(`Second Innings starts\nPlayer Target : ${target2}\nComputer have to defend!`)
        secondInningbatplayer(target2, totalScore2);
    }
}

const endInnings1 = (totalScore3, totalScore1) => {
    if (totalScore3 > totalScore1) {
        alert(`Computer Won !!!\nComputer run = ${totalScore3}\nPlayer run = ${totalScore1}`);
        playagain();
    }

    else if (totalScore3 < totalScore1) {
        alert(`Player Won !!!\nPlayer run = ${totalScore1}\nComputer run = ${totalScore3} `);
        playagain();
    }

    else if (totalScore1 === totalScore3) {
        alert(`Game Draw !\nPlayer run = ${totalScore1}\nComputer run = ${totalScore3}`);
        playagain();
    }
}


const endInnings2 = (totalScore4, totalScore2) => {

    if (totalScore4 > totalScore2) {
        alert(`Player Won !!!\nPlayer run = ${totalScore4}\nComputer run = ${totalScore2}`);
        playagain();
    }

    else if (totalScore4 < totalScore2) {
        alert(`Computer Won !!!\nComputer run = ${totalScore2}\nPlayer run = ${totalScore4} `);
        playagain();
    }

    else if (totalScore2 === totalScore4) {
        alert(`Game Draw ! \nPlayer run = ${totalScore4}\nComputer run = ${totalScore2}`);
        playagain();
    }
}


const playagain = () => {
    confirm("Do you want to play again?") ? initGame() : alert("Thanks for Playing!");
}
