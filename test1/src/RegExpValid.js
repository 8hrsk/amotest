class RegExpValid {
    constructor(content) {
        this.content = content;

        console.log(this.content);

        this.regExpValue = document.getElementById('regexp').value;
    }
    
    divideContent() {
        return this.content.split(this.regExpValue);
    }


}