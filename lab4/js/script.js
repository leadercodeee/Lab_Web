function changeColor(color) {
    document.body.style.backgroundColor = color;
}
/*-------------------Bài 2------------------*/
function solveQuadraticEquation() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminant = b * b - 4 * a * c;

    let result;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `Root 1: ${root1}, Root 2: ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        result = `Double root: ${root}`;
    } else {
        result = 'No real roots';
    }

    document.getElementById('result').innerText = result;
}
/*-------------------Bài 3------------------*/
const greetings = [
    "Hello!",
    "Bonjour!",
    "Ciao!",
    "Konnichiwa!",
    "Hallo!",
    "Olá!",
    "Salut!",
    "Sawasdee!",
    "안녕하세요!"
];

function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
    const greetingTextElement = document.getElementById('greeting-text');
    greetingTextElement.innerText = getRandomGreeting();
}

/*-------------------Bài 4------------------*/
function countOccurrences() {
    const textAreaInput = document.getElementById('textAreaInput').value.toLowerCase();
    const textInput = document.getElementById('textInput').value.toLowerCase();

    const regex = new RegExp('\\b' + textInput + '\\b', 'g');
    const occurrences = (textAreaInput.match(regex) || []).length;

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Number of occurrences of "${textInput}": ${occurrences}`;
}
/*-------------------Bài 5------------------*/
const rotatingImage = document.getElementById('rotating-image');

function rotateImage() {
    const currentRotation = parseInt(rotatingImage.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
    rotatingImage.style.transform = `rotate(${currentRotation + 15}deg)`;
}

setInterval(rotateImage, 2000);
/*-------------------Bài 6------------------*/
/*-------------------Bài 7------------------*/
const buttonContainer = document.getElementById('button-container');
const totalButtons = 64;
let currentButtonValue = 1;

function createButton(value) {
    const button = document.createElement('button');
    button.innerText = value;
    button.addEventListener('click', () => onButtonClick(value));
    return button;
}

function onButtonClick(value) {
    if (value === currentButtonValue) {
        if (currentButtonValue === totalButtons) {
            alert('Congratulations! You clicked all the buttons in order.');
            resetGame();
        } else {
            currentButtonValue++;
            buttonContainer.removeChild(buttonContainer.firstChild);
        }
    } else {
        alert('Wrong button! Please click in order.');
        resetGame();
    }
}

function resetGame() {
    buttonContainer.innerHTML = '';
    currentButtonValue = 1;
    for (let i = 1; i <= totalButtons; i++) {
        const button = createButton(i);
        buttonContainer.appendChild(button);
    }
}

function initializeGame() {
    for (let i = 1; i <= totalButtons; i++) {
        const button = createButton(i);
        buttonContainer.appendChild(button);
    }
}

initializeGame();