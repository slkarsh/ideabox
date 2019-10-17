class Quote {
    constructor(obj) {
        this.title = obj.title;
        this.description = obj.description;
        this.id = obj.id || Date.now();
    }

    saveToStorage(quotes) {
        localStorage.setItem("quoteKey", JSON.stringify(quotes))
    }
}