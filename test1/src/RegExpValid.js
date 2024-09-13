class RegExpValid {
    constructor(content) {
        this.content = content;

        this.regExpValue = document.getElementById('regexp').value;
        this.regExpTextArea = document.getElementById('textResult');

        this.clearTextArea();

        this.getNumbersInLine();
    }

    divideByStrig() {
        return this.content.split(this.regExpValue);
    }

    getNumbersInLine() {
        const linesArray = this.divideByStrig();

        const numbersInLine = Array();

        linesArray.forEach(line => {
            const numbers = line.match(/\d+/g);

            if (numbers === null) {
                numbersInLine.push(0);
                return;
            };

            if (numbers.length > 1) {
                numbers.push(numbers.join(''));

                numbers.splice(0, numbers.length - 1);
            }

            numbers.forEach(numberList => {
                numbersInLine.push(numberList.length);
            })
        });

        linesArray.forEach((line, index) => {
            this.regExpTextArea.innerHTML += `${line} -- ${numbersInLine[index]} цифр\n`;
        })
    }

    clearTextArea() {
        this.regExpTextArea.innerHTML = '';
    }
}