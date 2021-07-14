tickerURL = ('http://api.coinlayer.com/api/live');
conversionURL = ('http://api.coinlayer.com/convert');
// apiKey = ('0edd7fb6ba7a937a5e64a90ed942e65e');

const stonkRate = document.querySelector('.ticker__item')
const startType = document.querySelector('.convertFrom');
const endType = document.querySelector('.convertTo');
const startAmount = document.querySelector('.amount');
const endAmount = document.querySelector('.convertedAmt');

fetch(`${tickerURL}?access_key=${apiKey}`).then(response => response.json())
.then(json => displayInfo(json));

let name = document.createElement('h5');
let amount = document.createElement('h5');

function displayInfo(liveNumbers) {
    console.log(liveNumbers);

    for(symbol in liveNumbers.rates) {
        console.log(symbol);
        console.log(liveNumbers.rates[symbol]);
        cardCreator(symbol, liveNumbers.rates[symbol]);
    }
}

function cardCreator(symbol, rate) {
        name.innerText = name.innerText + " " + `${symbol}: ${rate}, `;
        // amount.innerText = amount.innerText + " " + rate;
        stonkRate.appendChild(name);
        stonkRate.appendChild(amount);
}

addEventListener('', convertInfoBtn());
    
function convertInfoBtn() {
    fetch(`${conversionURL}?access_key=${apiKey}&from=${startType}&to=${endType}&amount=${startAmount}`).then(response => response.json()).then(json => convertInfo(json));
    }

function convertInfo(e) {
    e.preventDefault();

    let result = document.createElement(p);

    result.innerText = (`${e}`)

    endAmount.appendChild(result);
}