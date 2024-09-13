class Status {
    constructor(status) {
        this.status = status;
        this.buttonContainer = document.getElementById('buttonContainer');
        this.StatusElement = this.statusElement();
        this.update();

        if (typeof this.status !== 'boolean') return;

        if (this.status) {
            this.success();
        } else {
            this.failure();
        }

        this.render();
    }

    success() {
        this.StatusElement.classList.add('success');
    }

    failure() {
        this.StatusElement.classList.add('failure');
    }

    statusElement() {
        const element = document.createElement('div');
        element.classList.add('status');
        element.setAttribute('id', 'status');

        return element;
    }

    render() {
        this.buttonContainer.insertAdjacentElement('afterend', this.StatusElement);
    }

    update() {
        const StatusSearch = document.getElementById('status')
        if (StatusSearch !== null) {
            StatusSearch.remove()
        }
    }
}