// var main = document.querySelector('main')
// var title = document.querySelector('.form-title-input')
// var description = document.querySelector('.form-description-input')
var quotes = [];
var submitBtn = document.querySelector('.form-submit-btn')




checkStorage();
appendCards();
console.log('quotes', quotes)

submitBtn.addEventListener('click', createNewQuote)


// console.log(quoteInst)

function createNewQuote(e) {
    e.preventDefault();
    var quote = new Quote({
        title: document.querySelector('.form-title-input').value, 
        description: document.querySelector('.form-description-input').value 
    })
    console.log('quote', quote)
    quotes.push(quote);
    quote.saveToStorage(quotes)
    makeCard(quote);
    clearInputs();
}

function clearInputs() {
    document.querySelector('.form-title-input').value = ''
    document.querySelector('.form-description-input').value=''
}


function checkStorage() {
    if (JSON.parse(localStorage.getItem("quoteKey")).length !== 0) {
        console.log('hi hello')
        quotes = JSON.parse(localStorage.getItem("quoteKey")).map(quote => new Quote(quote))
    } else {
        console.log('goodbye')
        quotes = []
    }
}

function checkStorage() {
    if (JSON.parse(localStorage.getItem("quoteKey")).length !== 0) {
        console.log('made it')
        quotes = JSON.parse(localStorage.getItem("quoteKey")).map(function(el) {
            return new Quote(el)
        })
    } else {
        quotes = [];
    }
}

// function checkStorage() {
//     if (JSON.parse(localStorage.getItem("quoteKey")) === null) {
//         quotes=[]
//     } else {
//         quotes = JSON.parse(localStorage.getItem("quoteKey")).map(function(element) {
//             return new Quote(element)
//         })
//     }
// }

function appendCards() {
	for (var i = 0; i < quotes.length; i++) {
		makeCard(quotes[i]);
	}
}

function makeCard(quote) {
   document.querySelector('.main-content').insertAdjacentHTML('afterbegin',`<div class='quote-card' id=${quote.id}>
    <h4 class='quote-title'><span>On...</span> <br />${quote.title}</h4>
    <p>${quote.description}</p>
</div>`)
}