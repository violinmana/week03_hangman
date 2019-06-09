//Define Variables
var wordsArr = ['blizzard', 'diablo', 'warcraft', 'starcraft', 'overwatch']
var solutionArr = []
var inputArr = []
var triesCounter = 0
var wrongLetters = []
var passed = false

//Functions to Restart, Initialize, Update DOM
var restartPage = function () {
    solutionArr = []
    inputArr = []
    triesCounter = 0
    wrongLetters = []
    passed = false
}

var initializePage = function () {
    solutionArr = str.split(wordsArr[Math.ceil(Math.random() * wordsArr.length)])
    for (var i = 0; i < solutionArr.length; i++){
        inputArr.push('_')
    }
}

var updatePage = function () {
    document.getElementById('user-input').innerHTML = inputArr.join('_')
    document.getElementById('user-input-wrong').innerHTML = wrongletters.join('_')
    document.getElementById('guesses-left').innerHTML = triesCounter

    if (triesCounter === 0 && passed === false) {
        document.getElementById('pass-or-fail').innerHTML = 'Wow, what a Failure.'
    } else if (triesCounter > 0) {
        document.getElementById('pass-or-fail').innerHTML = 'Click on another letter.'
    } else {
        document.getElementById('pass-or-fail').innerHTML = 'Congratulations!'
    }
}