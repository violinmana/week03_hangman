//Define Variables
var wordsArr = ['arika', 'atlus', 'bandai', 'namco', 'camelot', 'capcom', 'cavia', 'chunsoft', 'clover', 'compile', 'cyberconnect', 'feelplus', 'fromsoftware', 'gamefreak', 'grezzo', 'ideafactory', 'hudsonsoft', 'intelligent', 'kairosoft', 'koeitemco', 'kojimaproductions', 'konami', 'levelfive', 'marvelous', 'mistwalker', 'monolithsoft', 'nintendo', 'nipponichi', 'omegaforce', 'platinum', 'silicon', 'squareenix', 'teamninja', 'triace', 'grindinggear', 'massive', 'machine', 'paradox', 'activision', 'arenanet', 'bethesda', 'blizzard', 'bungie', 'crystaldyn', 'demiurge', 'ensemble', 'gearbox', 'highnoon', 'infinityward', 'insomniac', 'irrational', 'lucasarts', 'microprose', 'monolith', 'netherrealm', 'midway', 'redstorm', 'respawn', 'westwood', 'obsidian', 'psyonix', 'sierra', 'stainless', 'telltale', 'visceral', 'valve', 'turbine']
var solutionArr = []
var inputArr = []
var triesCounter = 0
var wrongLetters = []
var passed = false

var buttonValue = ''

//Functions to Initialize, Update, RestartDOM

var initializePage = function () {
    var solutionWord = wordsArr[Math.floor(Math.random() * wordsArr.length)]
    solutionArr = solutionWord.split('')
    for (var i = 0; i < solutionArr.length; i++) {
        inputArr.push('_')
    }
    triesCounter = solutionArr.length

    console.log(solutionWord)
    console.log(solutionArr)
}

var updatePage = function () {
    document.getElementById('user-input').innerHTML = inputArr.join(' ')
    document.getElementById('user-input-wrong').innerHTML = wrongLetters.join(' ')
    document.getElementById('guesses-left').innerHTML = triesCounter

    if (passed === true) {
        document.getElementById('pass-or-fail').innerHTML = 'Congratulations!'
    } else if (triesCounter > 0) {
        document.getElementById('pass-or-fail').innerHTML = 'Click on another letter.'
    } else {
        document.getElementById('pass-or-fail').innerHTML = 'Wow, what a Failure.'
    }

    console.log(inputArr)
}

var restartPage = function () {
    solutionArr = []
    inputArr = []
    triesCounter = 0
    wrongLetters = []
    passed = false
    initializePage()
    updatePage()
}

// Function to Check for Win
var winCheck = function (e) {
    var numIncorrect = 0
    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === '_') {
            numIncorrect++
        }
    }
    if (numIncorrect != 0) {
        return false
    } else {
        return true
    }
}

//Initial initalization
initializePage()
updatePage()

var onBtnClick = function (e) {

    var clickedBtn = e
    var numIncorrect = 0
    console.log(clickedBtn)

    if (passed) {

    } else {
        if (triesCounter != 0) {

            for (var i = 0; i < solutionArr.length; i++) {
                if (e === solutionArr[i]) {
                    inputArr[i] = solutionArr[i]
                } else {
                    numIncorrect++
                }
            }

            if (numIncorrect === solutionArr.length) {
                triesCounter--
            }

            passed = winCheck()

        }
        updatePage()
        console.log(passed)
    }
}