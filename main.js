var main = document.querySelector('main')
var title = document.querySelector('.form-title-input')
var description = document.querySelector('.form-description-input')
var quotes = [];
var submitBtn = document.querySelector('.form-submit-btn')


submitBtn.addEventListener('click', createNewQuote)

function createNewQuote(e) {
    e.preventDefault();
    var quote = new Quote({
        title: document.querySelector('.form-title-input').value, 
        description: document.querySelector('.form-description-input').value 
    })
    quotes.push(quote);
    quote.saveToStorage(quotes)
    makeCard(quote);
    clearInputs();
}

function clearInputs() {
    document.querySelector('.form-title-input').value = ''
    document.querySelector('.form-description-input').value=''
}

function makeCard(quote) {
   document.querySelector('.main-content').insertAdjacentHTML('afterbegin',`<div class='idea-card' id=${quote.id}>
    <h4>${quote.title}</h4>
    <p>${quote.description}</p>
</div>`)
}