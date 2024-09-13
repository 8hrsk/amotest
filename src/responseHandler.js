class ResponseHandler {

    constructor(response) {
        this.StatusBar = new Status(eval(response.result));
        this.StatusBar.render();
    }
}