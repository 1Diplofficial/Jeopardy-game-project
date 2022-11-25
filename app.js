const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre: "WHO",

        questions: [
            {
                question: "Who  wrote Harry Potter?",
                answers: ["JK Rowling", "JRR Tolkien", "William Shakespeare", "Stephen King"],
                correct: "JK Rowling",
                level: "1"
            },
            {
                question: 'Who was born on Krypton',
                answers: ['Aquaman','Superman','Wonder Woman','Martian Manhunter'],
                correct: 'Superman',
                level: '2',
            },
            {
                question: 'Who designed the first car?',
                answers: ['Karl Benz', 'Henry Ford', 'Wilhelm Maybach','George Selden'],
                correct: 'Karl Benz',
                level: '3',
            },
            {
                question: 'Who created the laws of motion?',
                answers: ['Albert Eistien', 'Isaac Newton', 'Galileo Galilei','Stephen Hawking'],
                correct: 'Isaac Newton',
                level: '4',
            },
            {
                question: 'Who was the first person in space?',
                answers: ['Neil Armstrong', 'John Glenn', 'Buzz Aldrin','Yuri Gagarin'],
                correct: 'Yuri Gagarin',
                level: '5',
            },
        ],
    },
    {
        genre: "WHERE",

        questions: [
            {
                question: 'Where is Buckingham Palace?',
                answers: ['Richmond', 'London', 'Manchester', 'Bristol'],
                correct: 'London',
                level: '1',
            },
            {
                question: 'Where is the Colosseum?',
                answers: ['Rome', 'Milan', 'Venice', 'Florence'], 
                correct: 'Rome',
                level: '2',
            },
            {
                question: 'Where is Mount Kilamaniaro?', 
                answers: ['Zimbabwe', 'Tanzania', 'Uganda', 'Mozambique'],
                correct:'Tanzania',
                level:'3',
            },
            {
                question: 'Where is the Statue of Liberty?', 
                answers: ['California', 'New York', 'Mississippi', 'Virgina'],
                correct:'New York',
                level:'4',
            },
            {
                question: 'Where is Machu Picchu,?', 
                answers: ['Argentina', 'Chile', 'Equador', 'Peru'],
                correct:'Peru',
                level:'5',
            },
        ],
    },
    {
        genre: 'WHEN',

        questions: [
            {
                question: 'When is Christmas?',
                answers: ['30th Dec', '24th/25th Dec', '26th Dec', '23rd Dec'],
                correct: '24th/25th Dec',
                level: '1',
            },
            {
                question: 'When was WW2?',
                answers: ['1932', '1941', '1946', '1934'],
                correct: '1941',
                level: '2',
            },
            {
                question: 'When was JFK Shot?',
                answers: ['1963', '1961', '1968', '1965'],
                correct: '1963',
                level: '3',
            },
            {
                question: 'When was MLK assassinasted?',
                answers: ['1963', '1961', '1968', '1965'],
                correct: '1968',
                level: '4',
            },
            {
                question: 'When was the Holocaust?',
                answers: ['1931', '1946', '1942', '1933'],
                correct: '1933',
                level: '5',
            },
        ],
    },
    {
        genre: 'WHAT',

        questions: [
            {
                question: 'What is a kg short for?', 
                answers: ['Kilojoule', 'Kilogram', 'Kilobyte', 'Kilometer'],
                correct: 'Kilogram',
                level: '1',   
            },
            {
                question: 'What do Koalas eat?',
                answers: ['Straw', 'Eucalypt', 'Bamboo', 'Fruits'],
                correct: 'Eucalypt',
                level: '2',
            },
            {
                question: 'What is the capital of Saudi Arabia?',
                answers: ['Jeddah', 'Riyadh', 'Jeddah', 'Mecca'],
                correct: 'Riyadh', 
                level: '3',
            },
            {
                question: 'What is the largest Caribbean country?',
                answers: ['Jamaica', 'Haiti', 'Cuba', 'Trinidad And Tobago'],
                correct: 'Cuba', 
                level: '4', 
            },
            {
                question: 'What is the tallest Man-made Structure?',
                answers: ['Eiffel Tower', 'Staute of Liberty', 'Burj Khalifa', 'Kyoto Tower'],
                correct: 'Burj Khalifa', 
                level: '5', 
            },
        ],
    },
    {
        genre: 'HOW MANY',

        questions: [
            {
                question: 'How many players in a football team?',
                answers: ['15', '11', '13', '17'],
                correct: '11',
                level: '1',
            },
            {
                question: 'How many seconds in an hour?',
                answers: ['36000', '3600', '360', '360000'],
                correct: '3600',
                level: '2',

            },
            {
                question: 'How many people in China?', 
                answers: ['1.1 bil', '1.4 bil', '1.3 bil', '1.2 bil'],
                correct: '1.4 bil',
                level: '3',
            },
            {
                question: 'How many planets in the Solar System?',
                answers: ['10', '7', '8', '9'],
                correct: '8',
                level: '4',
            },
            {
                question: 'How many countries are in the world?',
                answers: ['227', '184', '146', '195'],
                correct: '195',
                level: '5',
            },
        ],

    },
]

let score = 0
scoreDisplay.innerHTML= score

function addCategory(category){
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerText = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => { 
        const card = document.createElement('div')
        card.classList.add('card') 
        column.append(card)
        
        if(question.level === '1') {
            card.innerHTML = 100
        }
        
        if (question.level === '2') {
            card.innerHTML = 200
        }

        if (question.level === '3') {
            card.innerHTML = 300
        }

        if (question.level === '4') {
            card.innerHTML = 400
        }

        if (question.level === '5') {
            card.innerHTML = 500
        }
        
        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-answer-3', question.answers[2])
        card.setAttribute('data-answer-4', question.answers[3])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

        card.addEventListener('click', flipCard)
    })
}

jeopardyCategories.forEach(category => addCategory(category))

function flipCard(){
    this.innerHTML = ""
    this.style.fontSize = "15px"
    this.style.lineHeight = "20px"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML= this.getAttribute('data-question')
    const firstButton = document.createElement('button') 
    const secondButton = document.createElement('button')
    const thirdButton = document.createElement('button')
    const fourthButton = document.createElement('button')
    firstButton.classList.add('first-button') 
    secondButton.classList.add('second-button')
    thirdButton.classList.add('third-button')
    fourthButton.classList.add('fourth-button')
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    thirdButton.innerHTML = this.getAttribute('data-answer-3') 
    fourthButton.innerHTML = this.getAttribute('data-answer-4')
    firstButton.addEventListener('click', getResult) 
    secondButton.addEventListener('click', getResult)
    thirdButton.addEventListener('click', getResult) 
    fourthButton.addEventListener('click', getResult)
    //myTimeout = setTimeout(timesUp, 5000)
    this.append(textDisplay, firstButton, secondButton, thirdButton, fourthButton, myTimeout)

    const allCards = Array.from(document.querySelectorAll('.card')) 
    allCards.forEach(card => card.removeEventListener('click', flipCard))
}

function getResult(){
    clearTimeout(myTimeout)
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))

    const cardOfButton = this.parentElement
    
    if(cardOfButton.getAttribute('data-correct') == this.innerHTML){
        score = score + parseInt(cardOfButton.getAttribute('data-value')) 
        scoreDisplay.innerHTML= score
        cardOfButton.classList.add('correct-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild) 
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
        }, 100)
    } else{
        cardOfButton.classList.add('wrong-answer')
        score = score - parseInt(cardOfButton.getAttribute('data-value')) 
        scoreDisplay.innerHTML= score
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild) 
            }
            cardOfButton.innerHTML = 0
        }, 100)
    }
    cardOfButton.removeEventListener('click', flipCard)
}


function timesUp(){
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))

    const cardOfButton = this.parentElement
    console.dir(cardOfButton)
    
    var ans

    window.alert("Time's Up!")
    ans = window.prompt("Do you want to see the answer?")

    if(ans === "Yes" || ans === "yes"){
        cardOfButton.innerHTML = cardOfButton.getAttribute('data-correct')
    }

    cardOfButton.removeEventListener('click', flipCard)
}