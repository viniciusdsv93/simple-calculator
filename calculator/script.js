const result = document.querySelector('.window');

function insertWindow(value) {
   result.innerHTML += value;
}

function calculates() {
    if (result.textContent != 'Error') {
        result.innerHTML = eval(result.innerHTML);
    }
}

function clearWindow() {
    result.innerHTML = '';
}