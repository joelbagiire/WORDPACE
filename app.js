window.addEventListener('load', loadGame)

const input = document.querySelector('#input')
const showTime = document.querySelector('#time')
const showScore = document.querySelector('#score')
const message = document.querySelector('#message')
const word = document.querySelector('#words')
const buttonPlay = document.querySelector('#btn')



let time = 10
let score = 0
let isPlaying



// words
const words = [
    'antifungal','inside','tomorrow','fact','lost','motto','crossection','alternate','super','human','doing',
    'fungals','government','land','range','rover','actaul','goat','prefer','now','cool','proffessional','ring',
    'bifunctional','doctor','sky','party','dance','moment','dictionary','race','catch','quote','social','never',
    'cofunction','mum','dad','cousin','peter','stick','nelson','tom','locker','underestimated','shark','sport',
    'cofunctions','rollsroyce','flower','rose','timothy','duck','manchester','mountain','chad','tibet','buddy',
    'animal','morroco','london','dubia','tesla','zulu','motorboat','seagull','mortalcombat','microsoft','teabag',
    'sea','incredeable','nobody','kevin','goalkeeper','psychology',
    'watermelon',
    'Uganda',
    'Russia',
    'Ultimate',
    'France',
    'art',
    'exist',
    'introduction',
    'but',
    'newyork',
    'station'
  ]


function loadGame(){
    loadWords(words)
    setInterval(count, 1000)
    loadScore()
    setInterval(checkStatus, 50)
}

function loadWords(words){
        const randomWord = Math.floor(Math.random() * words.length)
        word.innerHTML = words[randomWord].toUpperCase()
}
function count(){
    if(time > 0){
        time--
    }else if(time == 0){
        isPlaying = false
    }
    showTime.innerHTML = time
}
function loadScore(){
    input.addEventListener('input', function check(){
        if(input.value === word.innerHTML){
            score += 5
            time = 10
            loadWords(words)
            isPlaying = true
            showScore.innerHTML = score
            showTime.innerHTML = time
            input.value = ""
            message.innerHTML =   'LEVEL 1'
            if(score >= 100){
                message.innerHTML =   'LEVEL 2'
                score += 5
                time = 8
                loadWords(words)
                isPlaying = true
                showScore.innerHTML = score
                showTime.innerHTML = time
                input.value = ""
                if(score >= 200){
                    message.innerHTML =   'LEVEL 3'
                    score += 5
                    time = 6
                    loadWords(words)
                    isPlaying = true
                    showScore.innerHTML = score
                    showTime.innerHTML = time
                    input.value = ""
                }
                if(score >= 300){
                    message.innerHTML =   'MASTER'
                    score += 5
                    time = 5
                    loadWords(words)
                    isPlaying = true
                    showScore.innerHTML = score
                    showTime.innerHTML = time
                    input.value = ""
                }
            }
        }
    })
    showScore.innerHTML = score
}
function checkStatus(){
    if(!isPlaying && time === 0){
        message.classList.add('gameover')
        message.innerHTML = 'GAMEOVER!!'
        input.style.display = 'none'
        word.style.display = 'none'
        buttonPlay.style.display = 'block'
        localStorage.setItem('rank',score)
        buttonPlay.addEventListener('click', () =>{
            window.location.reload()
        })
    }
}