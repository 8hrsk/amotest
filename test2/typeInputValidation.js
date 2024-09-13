const inputs = document.querySelectorAll('input'); // Получаем все input

const select = document.querySelector('select[name="type_val"]'); // селект

const showInput = (selectValue) => { // Прячем и показываем
    inputs.forEach(input => {
        input.parentElement.style.display = 'none';
    });

    inputs.forEach(input => {
        if (input.name.split('_')[1] === selectValue) {
            input.parentElement.style.display = 'block';
        }
    });
}

showInput(select.value); // Сразу вызываем функцию, чтобы выбранный по умолчанию селект сразу работал

select.addEventListener('change', (e) => { // Вешаем слушатель и вызываем при изменении
    showInput(e.target.value);
});