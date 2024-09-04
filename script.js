const countries = {
    "España": "Madrid",
    "Francia": "París",
    "Alemania": "Berlín",
    "Italia": "Roma",
    "Portugal": "Lisboa",
    "Países Bajos": "Ámsterdam",
    "Bélgica": "Bruselas",
    "Austria": "Viena",
    "Suecia": "Estocolmo",
    "Noruega": "Oslo",
    "Dinamarca": "Copenhague",
    "Finlandia": "Helsinki",
    "Suiza": "Berna",
    "Grecia": "Atenas",
    "Hungría": "Budapest",
    "Polonia": "Varsovia",
    "República Checa": "Praga",
    "Rumanía": "Bucarest",
    "Bulgaria": "Sofía",
    "Irlanda": "Dublín",
    "Reino Unido": "Londres",
    "Ucrania": "Kiev",
    "Rusia": "Moscú",
    "Croacia": "Zagreb",
    "Serbia": "Belgrado",
    "Eslovenia": "Liubliana",
    "Bosnia y Herzegovina": "Sarajevo",
    "Albania": "Tirana",
    "Macedonia del Norte": "Skopie",
    "Montenegro": "Podgorica",
    "Islandia": "Reikiavik",
    "Letonia": "Riga",
    "Estonia": "Tallin",
    "Lituania": "Vilna",
    "Eslovaquia": "Bratislava",
    "Malta": "La Valeta",
    "Moldavia": "Chisináu",
    "Luxemburgo": "Luxemburgo",
    "Chipre": "Nicosia"
};

const flags = {
    "España": "https://flagcdn.com/es.svg",
    "Francia": "https://flagcdn.com/fr.svg",
    "Alemania": "https://flagcdn.com/de.svg",
    "Italia": "https://flagcdn.com/it.svg",
    "Portugal": "https://flagcdn.com/pt.svg",
    "Países Bajos": "https://flagcdn.com/nl.svg",
    "Bélgica": "https://flagcdn.com/be.svg",
    "Austria": "https://flagcdn.com/at.svg",
    "Suecia": "https://flagcdn.com/se.svg",
    "Noruega": "https://flagcdn.com/no.svg",
    "Dinamarca": "https://flagcdn.com/dk.svg",
    "Finlandia": "https://flagcdn.com/fi.svg",
    "Suiza": "https://flagcdn.com/ch.svg",
    "Grecia": "https://flagcdn.com/gr.svg",
    "Hungría": "https://flagcdn.com/hu.svg",
    "Polonia": "https://flagcdn.com/pl.svg",
    "República Checa": "https://flagcdn.com/cz.svg",
    "Rumanía": "https://flagcdn.com/ro.svg",
    "Bulgaria": "https://flagcdn.com/bg.svg",
    "Irlanda": "https://flagcdn.com/ie.svg",
    "Reino Unido": "https://flagcdn.com/gb.svg",
    "Ucrania": "https://flagcdn.com/ua.svg",
    "Rusia": "https://flagcdn.com/ru.svg",
    "Croacia": "https://flagcdn.com/hr.svg",
    "Serbia": "https://flagcdn.com/rs.svg",
    "Eslovenia": "https://flagcdn.com/si.svg",
    "Bosnia y Herzegovina": "https://flagcdn.com/ba.svg",
    "Albania": "https://flagcdn.com/al.svg",
    "Macedonia del Norte": "https://flagcdn.com/mk.svg",
    "Montenegro": "https://flagcdn.com/me.svg",
    "Islandia": "https://flagcdn.com/is.svg",
    "Letonia": "https://flagcdn.com/lv.svg",
    "Estonia": "https://flagcdn.com/ee.svg",
    "Lituania": "https://flagcdn.com/lt.svg",
    "Eslovaquia": "https://flagcdn.com/sk.svg",
    "Malta": "https://flagcdn.com/mt.svg",
    "Moldavia": "https://flagcdn.com/md.svg",
    "Luxemburgo": "https://flagcdn.com/lu.svg",
    "Chipre": "https://flagcdn.com/cy.svg"
};

let countryList = Object.keys(countries);
let currentCountry;
let score = 0;
const maxScore = 30; // Puntaje máximo para finalizar el juego

function getRandomCountry() {
    let randomIndex = Math.floor(Math.random() * countryList.length);
    return countryList[randomIndex];
}

function startGame() {
    if (score < maxScore) {
        currentCountry = getRandomCountry();
        document.getElementById('country').textContent = currentCountry;
        document.getElementById('flag').src = flags[currentCountry];
        document.getElementById('capital-input').value = '';
        document.getElementById('message').textContent = '';
    } else {
        endGame();
    }
}

function checkAnswer() {
    let userAnswer = document.getElementById('capital-input').value.trim();
    if (userAnswer.toLowerCase() === countries[currentCountry].toLowerCase()) {
        document.getElementById('message').textContent = '¡Correcto!';
        score++;
    } else {
        document.getElementById('message').textContent = `Incorrecto, la capital de ${currentCountry} es ${countries[currentCountry]}.`;
    }
    document.getElementById('score').textContent = score;

    if (score < maxScore) {
        startGame();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('country').textContent = "¡Felicidades!";
    document.getElementById('message').textContent = `Has alcanzado ${maxScore} aciertos. ¡Juego terminado!`;
    document.getElementById('capital-input').disabled = true;
    document.getElementById('submit-btn').disabled = true;
}

document.getElementById('submit-btn').addEventListener('click', checkAnswer);
startGame();
