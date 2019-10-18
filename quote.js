class Quote {
    constructor(obj) {
        this.title = obj.title;
        this.description = obj.description;
        this.id = obj.id || Date.now();
    }

    saveToStorage(quotes) {
        localStorage.setItem("quoteKey", JSON.stringify(quotes))
    }

    deleteFromStorage(index, quotes) {
        quotes.splice(index, 1)
        this.saveToStorage(quotes)
    }
}