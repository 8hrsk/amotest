<body>
    <div class="container" id="container">
        <label class="drop-container" id="dropcontainer">
            <span class="drop-title">Перетащите .txt</span>
            или
            <input type="file" id="loadFile">
        </label>

        <div class="buttonContainer" id="buttonContainer">
            <button class="load-btn" id="load-btn">Отправить</button>

            <input type="text" id="regexp" placeholder="Введите символ деления" class="regExp">
        </div>

        <textarea name="regexpres" id="textResult" cols="30" rows="10" class="textResult" disabled></textarea>
    </div>
</body>
</html>