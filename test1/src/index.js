const sleep = async (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

document.addEventListener('DOMContentLoaded', () => {

    const loadBtn = document.getElementById("load-btn")
    const dropContainer = document.getElementById("dropcontainer")
    const fileInput = document.getElementById("loadFile")
  
    dropContainer.addEventListener("dragover", (e) => { // разрешаем dran&drop
        e.preventDefault()
    }, false)
  
    dropContainer.addEventListener("dragenter", () => {
        dropContainer.classList.add("drag-active")
    })
  
    dropContainer.addEventListener("dragleave", () => {
        dropContainer.classList.remove("drag-active")
    })
  
    dropContainer.addEventListener("drop", (e) => {
        e.preventDefault()
        dropContainer.classList.remove("drag-active")
        fileInput.files = e.dataTransfer.files
    })

    loadBtn.addEventListener("click", () => {
        const data = new FormData();
        data.append('file', fileInput.files[0]);

        const headers = {
            'process-data': 'false',
            'Content-Type': 'multipart/form-data',
        };


        axios.post('/Controller/RequestsController.php', data, {
            headers
        })
            .then(response => {
                new ResponseHandler(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    })
})