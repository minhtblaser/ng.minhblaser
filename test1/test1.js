let luckyNumbers = {
    numbers: [],

    playerLuckyNumber: 0,

    winner: false,

    congrantsMessage: 'YOU WIN !!!!',

    tryAgainMessage: '',

    randomNumbers: function () {
        for (let i = 0; i < 5; i++) {
            var randomNumber = Math.floor((Math.random() * 100) + 1);
            this.numbers.push(randomNumber);
        }
    },

    playerNumber: function () {
        var randomNumber = Math.floor((Math.random() * 100) + 1);
        return this.playerLuckyNumber = randomNumber;
    },

    winnerNumber: function () {
        this.numbers.forEach((number) => {
            if (number === this.playerLuckyNumber) {
                alert('Lucky number');
                this.winner = true;
            }
        })

                luckyNumbers.numbers = [];
    },



};


let handler = {

    spinButton: function () {
        view.clearLuckyNumberMessage();
        view.displayPlayerNumber();
        view.displayLuckyNumbers();
        view.displayLuckyNumberMessage();


    }
}

let view = {

    displayLuckyNumbers: function () {
        luckyNumbers.randomNumbers();
        let liElements = Array.from(document.querySelectorAll('li'));
        let i = 0;

        liElements.forEach(function (li) {
            li.textContent = luckyNumbers.numbers[i];
            i++;
        })

    },

    displayPlayerNumber: function () {
        luckyNumbers.playerNumber();
        let playerNumberPosition = document.getElementById('playerNumber');
        playerNumber.textContent = '';
        playerNumber.textContent = luckyNumbers.playerLuckyNumber;
    },

    displayLuckyNumberMessage: function () {
        luckyNumbers.winnerNumber();
        let congrantsMessagePosition = document.getElementById('congrantsMessagePosition');
        if (luckyNumbers.winner) {
            congrantsMessagePosition.textContent = luckyNumbers.congrantsMessage;

        } else {
            congrantsMessagePosition.textContent = luckyNumbers.tryAgainMessage;
        }

    },

    displayNumbersHistoryLog: function () {
        luckyNumbers.numbersLog();
        let displayNumbersPosition = document.getElementById('displayNumbersPosition');
        let ulPosition = document.getElementById('ulPosition');


        luckyNumbers.numbersHistoryLog.forEach(function (number) {
            let createLiElement = document.createElement('li');
            createLiElement.textContent = number;
            ulPosition.appendChild(createLiElement);

        });


    },

    clearLuckyNumberMessage: function () {
        let congrantsMessagePosition = document.getElementById('congrantsMessagePosition');
      
        luckyNumbers.winner = false;
        luckyNumbers.numbers = [];
        
        congrantsMessagePosition.textContent = '';


    }
}


//kt nam 

// if (year%400 ==0 || (year%4==0 && year % 100 !=0 )) {
//     alert ("nam nhuan")
// } else {
//     alert ("nam khong nhuan")
// }

//  kt motmonth co bao nhiu day
    // if (month <=7  && month !=2) {
    //     if (month%2!=0) {
    //             console.log ("thang"+ month + " co 31 day")
    //     } else if (month %2 ==0) {
    //         console.log ("thang"+ month +" co 30 day")
    //     }
    // }
    // if (month >=8) {
    //     if (month%2==0) {
    //         console.log ("thang"+ month + " co 31 day") 
    //     }
    //      else if (month%2 !=0) {
    //         console.log ("thang"+ month + " co 30 day") 
    //     }
    // }
    // if (year%400 ==0 || (year%4==0 && year % 100 !=0 && month ==2 )) {
    //     console.log ("thang"+ month + " co 29 day")
    // } else if  (year%400 !=0 && month ==2 ) {
    //     console.log ("thang"+ month + " co 28 day")
    // }
