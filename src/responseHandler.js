class ResponseHandler {

    constructor(response) {
        this.StatusBar = new Status(eval(response.result));

        if (response.result === 'false') return;

        this.RegExpValid = new RegExpValid(response.content);
    }
}