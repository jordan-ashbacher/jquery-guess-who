$(document).ready(readyNow)

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
let secretNumber = randomNumber(0, people.length - 1);



function readyNow() {
    $('body').append(`<h1>Click On: ${people[secretNumber].name}</h1>`);
    $(document).on('click', '.image', guessWho)
    displayPhotos()
}

console.log('Here are all the available people:', people);


function displayPhotos() {
    console.log(secretNumber)

    // $('body').append(`<h1>Click On: ${people[secretNumber].name}</h1>`);

    for (let i = 0; i < people.length; i++) {
        let userName = people[i].githubUsername;
        let name = people[i].name;
        $('body').append(`<div class="image" data-index="${i}"> <img src="https://github.com/${userName}.png?size=250" alt="Profile image of ${name}"></div>`);
    }

}

function guessWho() {
    let index = $(this).data('index')
    console.log(index)
    if (index === secretNumber) {
        $(this).children().addClass('winner')
        setTimeout(function () {
            alert("VICTORY!! YOU GUESSED IT!! GET READY TO PLAY AGAIN TO PLAY AGAIN");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else {
        alert('no no no no no no no, try again')
    }


}