tickerURL = ('http://api.coinlayer.com/api/live');
conversionURL = ('http://api.coinlayer.com/convert');
// apiKey = ('0edd7fb6ba7a937a5e64a90ed942e65e');
// apiKey = ('APIKEY')

const stonkRate = document.querySelector('.ticker__item')
const startType = document.getElementsByClassName('convertFrom');
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
        // console.log(liveNumbers.rates[symbol]);
        cardCreator(symbol, liveNumbers.rates[symbol]);
    }
}

function cardCreator(symbol, rate) {
        name.innerText = name.innerText + " " + `${symbol}: ${rate.toFixed(3)}, `;
        amount.innerText = amount.innerText + " " + rate;
        stonkRate.appendChild(name);
        // stonkRate.appendChild(amount);
}
    
// need to only give answer to 5 decimals.
// need to input answer in .convertedAmt (endAmount)

function convertInfoBtn() {
    let startingType = startType[0].value;
    let startingAmt = startAmount.value;
    let endingType = endType.value;

    fetch(`${conversionURL}?access_key=${apiKey}&from=${startingType}&to=${endingType}&amount=${startingAmt}`).then(response => response.json()).then(json => convertInfo(json));
    }

    // endAmount.addEventListener('input', convertInfo)

function convertInfo(newAmt) {
    // e.preventDefault();
    console.log(newAmt.result);
    
    let newAmount = document.createElement('p');

    endAmount.value = (newAmt.result)
    
    // endAmount.appendChild(newAmount);
}